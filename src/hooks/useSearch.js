import { useState, useMemo } from 'react';

export const useSearch = (items, searchProperty) => {
  const [query, setQuery] = useState('');

  const filteredItems = useMemo(() => {
    if (!query) {
      return items;
    }

    return items.filter(item =>
      item[searchProperty].toLowerCase().includes(query.toLowerCase())
    );
  }, [items, query, searchProperty]);

  return { query, setQuery, filteredItems };
};

export default useSearch;
