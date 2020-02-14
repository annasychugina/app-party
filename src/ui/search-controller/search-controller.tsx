import React, {useEffect, useState} from 'react';
import {useDebounce} from '../../hooks/useDebounce';
import {DEBOUNCE_DELAY} from '../../constants';
import {SearchView} from '../search-view/search-view';

interface Props {}

export const SearchController: React.FC<Props> = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debouncedSearchTerm = useDebounce(searchTerm, DEBOUNCE_DELAY);

  useEffect(() => {
    if (debouncedSearchTerm !== null) {
      console.log(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const handleChange = (value: string) => {
    setSearchTerm(value);
  };

  return <SearchView searchTerm={searchTerm} onChange={handleChange} />;
};
