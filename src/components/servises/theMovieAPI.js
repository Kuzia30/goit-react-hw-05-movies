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
