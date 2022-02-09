import { Link } from "react-router-dom";

const Teaser = ({ imgUrl, title, text, link }) => (
  <Link to={link} className="teaser">
    <img src={`/img/${imgUrl}`} alt={title} />
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  </Link>
);

export default Teaser;
