import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Loader } from 'components';
import { getMovieCredits } from 'service/service';
import { CastInfoBox, Img, Item } from './Cast.styled';

const urlStart = 'https://image.tmdb.org/t/p/w500';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!movieId) return;
    const getCast = async () => {
      setLoader(true);
      try {
        const data = await getMovieCredits(movieId);
        setMovieCast(data.cast);
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    movieId && getCast();
  }, [movieId]);

  return (
    <Container>
      {loader && <Loader />}
      {!loader && (
        <CastInfoBox>
          {error && <h2>{error}</h2>}
          {movieCast &&
            movieCast.map(({ character, name, profile_path, id }) => (
              <Item key={id}>
                <Img
                  src={profile_path ? urlStart + profile_path : defaultImg}
                  alt={name}
                  width="150"
                />
                <p>{name}</p>
                <p>{character}</p>
              </Item>
            ))}
        </CastInfoBox>
      )}
    </Container>
  );
};

export default Cast;
