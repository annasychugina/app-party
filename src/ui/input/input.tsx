import React, {useCallback, useRef, useEffect} from 'react';
import styled from 'styled-components';
import {IFieldInputCallback} from '../../types/types';

interface IProps {
  onChange: IFieldInputCallback;
  value: string;
}

const InputWrapper = styled.input`
  border: 1px solid #a0a0a0;
  width: 100%;
  line-height: 35px;
  padding-top: 22px;
  padding-right: 27px;
  padding-bottom: 25px;
  padding-left: 27px;
  margin-bottom: 30px;
  font-weight: 300;
  font-size: 30px;
  color: #000000;
`;

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
