import React, {useCallback, useRef, useEffect} from 'react';
import {IFieldInputCallback} from '../../types/types';
import {InputWrapper} from './input.styles';

interface IProps {
  onChange: IFieldInputCallback;
  value: string;
}

export const Input: React.FC<IProps> = ({onChange, value}) => {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<{name?: string; value: string}>): void => {
      onChange(event.target.value);
    },
    [onChange],
  );

  return <InputWrapper ref={inputRef} value={value} onChange={handleChange} />;
};
