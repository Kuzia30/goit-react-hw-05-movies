import { Link, useLocation } from "react-router-dom";
import { Button } from "./GoBack.styled";

const GoBack = () => {
  const location = useLocation();
  return (
    <Button>
      <Link to={location?.state?.from ?? "/"}>go back</Link>
    </Button>
  );
};
export default GoBack;
