
import './RepositorioItem.css';

function RepositorioItem(props) {
  return (
    <div className="RepositorioItem">
      <img src={props.data.owner.avatar_url} alt='avatar'></img>
      <h1>{props.data.name}</h1>
      <h1>{props.data.description}</h1>
      <h1>{props.data.repos}</h1>
    </div>
  );
}

export default RepositorioItem;
