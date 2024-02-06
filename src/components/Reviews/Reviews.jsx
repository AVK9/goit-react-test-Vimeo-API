import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { getMovieReviews } from 'service/service';
import { Container, Loader } from 'components';
import { Item } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!movieId) return;
    const getReviews = async () => {
      setLoader(true);
      await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&api_key=d57670f3119ef47981c09cbf1cb3d2d1`
      )
        .then(response => response.json())
        .then(response => setMovieReviews(response.results))
        .catch(error => console.error(error), setError(error));
      setLoader(false);
    };
    movieId && getReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);
  return (
    <Container>
      {loader && <Loader />}
      {error && <h2>{error}</h2>}
      {movieReviews.length === 0 && <p>Sorry reviews not found</p>}
      {movieReviews.length !== 0 &&
        movieReviews.map(({ author, content, id }) => (
          <Item key={id}>
            <h4>{author}</h4>
            <p>{content}</p>
          </Item>
        ))}
    </Container>
  );
};

export default Reviews;
