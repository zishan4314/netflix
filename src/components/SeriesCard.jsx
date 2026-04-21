 export const SeriesCard = ({ data }) => {
  const { img_url, name, rating, summary, genre, cast, watch_url } = data;

  return (
    <li className="card">
      <div className="card-image">
        <img src={img_url} alt={name} width="100%" height="100%" />
      </div>
      <div className="card-content">
        <h2>{name}</h2>
        <h3 className="rating">Rating: <span className="rating-num">{rating}</span></h3>
        <p className="summary">{summary}</p>
        <p className="details"><b>Genre:</b> {genre}</p>
        <p className="details"><b>Cast:</b> {cast}</p>
        <a href={watch_url} target="_blank" rel="noreferrer">
          <button className="watch-button">Watch Now</button>
        </a>
      </div>
    </li>
  );
};