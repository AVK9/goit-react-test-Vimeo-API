import { Link, useLocation } from 'react-router-dom';
import { Title, CardItem, Card, Img } from './Trendings.styled';
const baseURL = 'https://image.tmdb.org/t/p/w500';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const Trendings = ({ title, name, poster_path, id, backdrop_path }) => {
  const location = useLocation();
  return (
    <Link to={`/movies/${id}`} state={location}>
      <CardItem>
        <Card>
          <Img
            src={poster_path ? baseURL + poster_path : defaultImg}
            alt={title}
          />
          <Title>
            {title && title}
            {name && name}
          </Title>
        </Card>
      </CardItem>
    </Link>
  );
};
