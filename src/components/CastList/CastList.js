const CastList = ({ data }) => {
  return (
    <ul>
      {data.map((actor) => {
        const { id, profile_path, name, character } = actor;
        const fullPath = `https://image.tmdb.org/t/p/w500${profile_path}`;
        return (
          <li key={id}>
            <img src={fullPath} alt={name} width="100px" loading="lazy" />
            <h3>{name}</h3>
            <p>
              Character:
              <span> {character}</span>
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default CastList;
