import React, {useEffect, useRef, useState} from 'react';
import {Input} from '../input/input';
import { useDebounce } from "../../hooks/useDebounce";
import { DEBOUNCE_DELAY } from "../../constants";

interface Props {}

export const SearchController: React.FC<Props> = () => {
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  const debouncedSearchTerm = useDebounce(searchTerm, DEBOUNCE_DELAY);

  useEffect(() => {
    if (debouncedSearchTerm !== null) {
      console.log(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm]);

  const handleChange = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <Input
      onChange={handleChange}
      value={searchTerm}
    />
  );
};
