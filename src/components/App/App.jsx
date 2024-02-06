import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader } from 'components';
import Layout from 'Layout/Layout';

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const MovieDetail = lazy(() => import('../../pages/MovieDetail'));
const Cast = lazy(() => import('../../components/Cast/Cast'));
const Revievs = lazy(() => import('../../components/Reviews/Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetail />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Revievs />} />
          </Route>
          <Route></Route>
        </Route>
        <Route path="*" element={<h1>404</h1>} />
        {/* <Route path="movies/movies/:movieId" element={<MovieDetail />} /> */}
      </Routes>
    </Suspense>
  );
};
