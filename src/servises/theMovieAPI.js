import axios from "axios";

const KEY = "805391a715f2f14c0b32dcc45b0e2aaa";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export async function fetchTrendingMovies() {
  try {
    const response = await axios.get(`/trending/movie/week?api_key=${KEY}`);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMoviesName(name) {
  try {
    const response = await axios.get(
      `/search/movie?api_key=${KEY}&query=${name}`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovieById(id) {
  try {
    const response = await axios.get(
      `/movie/${id}?api_key=${KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovieActors(id) {
  try {
    const response = await axios.get(
      `/movie/${id}/credits?api_key=${KEY}&language=en-US`
    );
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovieReviews(id) {
  try {
    const response = await axios.get(
      `/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
