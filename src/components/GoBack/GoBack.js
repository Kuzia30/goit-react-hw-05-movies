import { Link, useLocation } from "react-router-dom";

const GoBack = () => {
  const location = useLocation();
  return (
    <button>
      <Link to={location?.state?.from ?? "/"}>go back</Link>
    </button>
  );
};
export default GoBack;
