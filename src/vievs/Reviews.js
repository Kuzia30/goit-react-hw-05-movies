import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../servises/theMovieAPI";
import ReviewsList from "../components/ReviewsList";
import Loader from "../components/Loader";

const Reviews = () => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        setStatus("pending");
        const data = await fetchMovieReviews(itemId);
        if (!data) {
          return await Promise.reject(new Error("Try another name"));
        } else {
          setData(data);
        }
        setStatus("resolved");
      } catch (error) {
        setStatus("rejected");
        setError(error.message);
      }
    }
    fetchData();
  }, [itemId]);

  if (status === "idle") {
    return <p>idle</p>;
  }
  if (status === "pending") {
    return <Loader />;
  }
  if (status === "resolved") {
    return data.total_results !== 0 ? (
      <ReviewsList data={data.results} />
    ) : (
      <p>We don't have any reviews for this movie</p>
    );
  }

  if (status === "rejected") {
    return <h2>{error}</h2>;
  }
};

export default Reviews;
