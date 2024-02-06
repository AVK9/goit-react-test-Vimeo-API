import axios from 'axios';
const API_KEY = 'd57670f3119ef47981c09cbf1cb3d2d1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTc2NzBmMzExOWVmNDc5ODFjMDljYmYxY2IzZDJkMSIsInN1YiI6IjY1ODJhNGVjNTViYzM1NTcxNTE3YjQ0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FGASUnS6pTqDNKCG13-tA5RbW9nYFMwY9-2qdwNpLWo'
  }
};
export default axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  include_adult: false,
  language: 'uk',
};
//----------------------------------------------------
export const getTrending = async () => {
  const { data } = await axios.get('/trending/all/week', options)
  return data;
};
// getTrending()
//----------------------------------------------------
export const searchMovies = async (query, page) => {
  const { data } = await axios.get(`/search/movie?query=${query}&page=${page}`, options)
  return data;
};
// searchMovies('Cat', 3)
//----------------------------------------------------
export const getMovieDetails = async (movie_id) => {
  const { data } = await axios.get(`/movie/${movie_id}`, options)
  return data;
};
// getMovieDetails(695721)
//----------------------------------------------------
export const getMovieCredits = async (movie_id) => {
  const { data } = await axios.get(`/movie/${movie_id}/credits?`, options)
  return data;
};
// getMovieCredits(695721)
//----------------------------------------------------
export const getMovieReviews = async (movie_id) => {
  const { data } = await axios.get(`${axios.defaults.baseURL}/movie/${movie_id}/reviews?api_key=${API_KEY}`)
  return data;
};
