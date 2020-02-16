import {useDebounce} from '../useDebounce';
import {renderHook, act} from '@testing-library/react-hooks';

describe('useDebounce hook', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(useDebounce).toBeDefined();
  });

  it('should return string value', () => {
    const hook = renderHook(() => useDebounce('test', 5));
    expect(hook.result.current).toBe('test');
  });

  test('should return empty string when value length is 0', () => {
    const {result} = renderHook(() => useDebounce('', 5));

    expect(result.current).toEqual('');
  });

  test('should call  setTimeout', async () => {
    const hook = renderHook(() => useDebounce('test', 500));
    await act(async () => {
      await hook;
    });

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500);
  });

  test('should return search value when update it after timeout', async () => {
    let searchValue = 'test';
    const hook = renderHook(() => useDebounce(searchValue, 500));
    const {result, rerender} = hook;

    jest.advanceTimersByTime(500);

    await act(async () => {
      await jest.advanceTimersByTime(500);
    });

    expect(result.current).toEqual(`test`);

    searchValue = 'test-test';

    rerender();

    await act(async () => {
      await jest.advanceTimersByTime(500);
    });

    expect(result.current).toEqual('test-test');
  });

  test('should return same value if delay > timeout', async () => {
    let searchValue = 'test';
    const {result, rerender} = renderHook(() => useDebounce(searchValue, 500));

    await act(async () => {
      await jest.advanceTimersByTime(300);
    });

    expect(result.current).toBe('test');

    searchValue = 'test-test';

    rerender();

    await act(async () => {
      await jest.advanceTimersByTime(300);
    });

    expect(result.current).toBe('test');
  });

  test('should call clearTimeout', () => {
    global.clearTimeout = jest.fn();
    const {unmount} = renderHook(() => useDebounce('test', 300));
    unmount();
    expect(global.clearTimeout).toBeCalled();
  });

  it('should update value after  delay passed', async () => {
    const {result, rerender} = renderHook(({value, delay}) => useDebounce(value, delay), {
      initialProps: {value: '', delay: 500},
    });
    expect(result.current).toBe('');
    await act(async () => {
      await jest.runAllTimers();
    });
    expect(result.current).toBe('');
    rerender({value: 'new value', delay: 500});
    expect(result.current).toBe('');

    await act(async () => {
      await jest.advanceTimersByTime(499);
    });
    expect(result.current).toBe('');
    await act(async () => {
      await jest.runAllTimers();
    });
    expect(result.current).toBe('new value');
  });
});
