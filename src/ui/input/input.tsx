import React, {useCallback, useRef, useEffect} from 'react';
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
  const labelRef = useRef(null);

  useEffect(() => {
    labelRef && labelRef.current && labelRef.current.focus();
  }, []);

  const handleChange = useCallback(
    ({target}): void => {
      onChange(target.value);
    },
    [onChange],
  );

  return (
    <FormControl variant="outlined">
      <InputLabel ref={labelRef} htmlFor="component-outlined">
        {resources.Input.labelText}
      </InputLabel>
      <OutlinedInput
        id="component-outlined"
        value={value}
        onChange={handleChange}
        labelWidth={labelRef ? labelRef.offsetWidth : 0}
      />
    </FormControl>
  );
};
