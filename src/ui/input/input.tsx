import React, {useCallback, useRef, useEffect, useState} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import resources from './config.json';
import {IFieldInputCallback} from '../../types/types';

interface IProps {
  onChange: IFieldInputCallback;
  value?: string | null;
}

export const Input: React.FC<IProps> = ({onChange, value}) => {
  const inputRef = useRef<HTMLLabelElement>(null);
  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = useState(0);

  useEffect(() => {
    inputRef.current!.focus();
    setLabelWidth(inputLabel.current!.offsetWidth);
  }, []);

  const handleChange = useCallback(
    (event: React.ChangeEvent<{name?: string; value: string}>): void => {
      onChange(event.target.value);
    },
    [onChange],
  );

  return (
    <FormControl variant="outlined">
      <InputLabel ref={inputRef} htmlFor="component-outlined">
        {resources.Input.labelText}
      </InputLabel>
      <OutlinedInput id="component-outlined" value={value} onChange={handleChange} labelWidth={labelWidth} />
    </FormControl>
  );
};
