import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button, InpuBox, Input, Form } from './SearchForm.module';

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [inputSearch, setInputSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const reset = () => {
    setInputSearch('');
  };
  if (inputSearch === null) {
    reset();
  }
  const handleChange = ({ target: { value } }) => {
    setSearchQuery(value);
    setInputSearch(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // submit(searchQuery);
    setSearchParams({ search: searchQuery });
    reset();
  };

  useEffect(() => {
    !searchQuery && setSearchQuery(searchParams.get('search'));
  }, [searchParams, searchQuery]);

  return (
    <InpuBox>
      <Form onSubmit={handleSubmit}>
        <Input
          name="search"
          type="text"
          id="exInputSearch"
          onChange={handleChange}
          value={inputSearch}
        />
        <Button type="submit">Search</Button>
      </Form>
    </InpuBox>
  );
};

export default SearchForm;
