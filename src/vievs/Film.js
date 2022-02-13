import { useParams } from "react-router-dom";
const Film = () => {
  const params = useParams();
  console.log(params);
  return <div>hahahah</div>;
};
export default Film;
