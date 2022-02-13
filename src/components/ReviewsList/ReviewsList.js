const ReviewsList = ({ data }) => {
  return (
    <ul>
      {data.map((review) => {
        const { id, author, content } = review;
        return (
          <li key={id}>
            <h3>
              Author: <span>{author}</span>
            </h3>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewsList;
