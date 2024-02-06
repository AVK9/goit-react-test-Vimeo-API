import { Container, Grid, Loader, Trendings } from 'components';
import SearchForm from 'components/SearchForm/SearchForm';
import { Suspense, useCallback, useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
// import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'service/service';

const Movies = () => {
  const [moviesSearch, setMoviesSearch] = useState('');
  const [page] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();

  const getFindMovie = useCallback(
    async query => {
      try {
        setIsLoading(true);
        const data = await searchMovies(query, page);
        setMoviesSearch(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    },
    [page]
  );

  // const submit = query => {
  //   getFindMovie(query);
  // };

  useEffect(() => {
    const query = searchParams.get('search');
    query && getFindMovie(query);
  }, [getFindMovie, searchParams]);

  // console.log(moviesSearch);
  return (
    <Container>
      <SearchForm />
      <Suspense fallback={<Loader />}>
        <Grid>
          {error && <h2>{error}</h2>}
          {isLoading && <Loader />}
          {!isLoading &&
            moviesSearch.length !== 0 &&
            moviesSearch.map(
              ({ id, title, name, poster_path, backdrop_path }) => (
                <Trendings
                  key={id}
                  title={title}
                  name={name}
                  id={id}
                  poster_path={poster_path}
                  backdrop_path={backdrop_path}
                />
              )
            )}
        </Grid>

        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Movies;
