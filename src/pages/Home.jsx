import { getTrending } from '../service/service';
import { Grid, Container, Loader, Head } from 'components';
import { Trendings } from 'components';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [Trending, setTrending] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const dataTrending = async () => {
      setIsLoading(true);
      try {
        const data = await getTrending();
        setTrending(data.results);
      } catch (error) {
        setError(error.message);
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    dataTrending();
  }, []);
  return (
    <Container>
      {(!error && <Head>У тренді</Head>) || <Head>{error}</Head>}

      <Grid>
        {isLoading && <Loader />}
        {!isLoading &&
          Trending.length !== 0 &&
          Trending.map(({ id, title, name, poster_path, backdrop_path }) => (
            <Trendings
              key={id}
              title={title}
              name={name}
              id={id}
              poster_path={poster_path}
              backdrop_path={backdrop_path}
            />
          ))}
      </Grid>
    </Container>
  );
};

export default Home;
