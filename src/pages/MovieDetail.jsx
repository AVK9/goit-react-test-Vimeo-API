import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMovieDetails } from 'service/service';
import { Container, Loader, Head, BtnGoback } from 'components';
import {
  InfoBox,
  TextBox,
  Links,
} from '../components/MovieDetail/MovieDetail.styled';
const baseURL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
const MovieDetail = () => {
  const { movieId } = useParams();
  const [movieArr, setMovieArr] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const linkGoBack = useRef(location.state);

  useEffect(() => {
    if (!movieId) return;
    const getMovie = async () => {
      setLoader(true);
      try {
        const data = await getMovieDetails(movieId);
        setMovieArr(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    movieId && getMovie();
  }, [movieId]);

  const handleBtn = () => {
    navigate(linkGoBack.current ?? '/');
  };

  const { poster_path, overview, title, vote_average, genres } = movieArr;
  return (
    <Container>
      {loader && <Loader />}
      {/* <Navigate to=":movieId" /> */}
      <BtnGoback onClick={handleBtn}> Go Back </BtnGoback>
      {/* <Link to={location.state ?? '/'}> GO BACK</Link> */}
      {!loader && (
        <InfoBox>
          {error && <h2>{error}</h2>}
          <div>
            <img
              src={poster_path ? baseURL + poster_path : defaultImg}
              alt="title"
            />
          </div>
          <TextBox>
            <Head>{title}</Head>
            <p>Оцінка глядача: {Math.round(vote_average * 10)}%</p>
            <h2>Огляд</h2>
            {/* <p>{overview && overview}</p> */}
            <h2>Жанри</h2>
            <p>{genres && genres.map(genre => genre.name).join(' ')}</p>
          </TextBox>
          <div>
            <Suspense fallback={<Loader />}>
              <Tabs>
                <TabList>
                  <Tab>
                    <Links>Огляд</Links>
                  </Tab>
                  <Tab>
                    <Links to="cast">Aкторський склад</Links>
                  </Tab>
                  <Tab>
                    <Links to="reviews">Відгуки</Links>
                  </Tab>
                </TabList>
                <TabPanel>
                  <p>
                    {overview
                      ? overview
                      : 'Огляд відсутній, пропонуємо передивитися фільм, та надіслати свою пропозицію'}
                  </p>
                </TabPanel>
                <TabPanel>
                  <Outlet />
                </TabPanel>
                <TabPanel>
                  <Outlet />
                </TabPanel>
              </Tabs>
            </Suspense>
          </div>
        </InfoBox>
      )}
    </Container>
  );
};
export default MovieDetail;
