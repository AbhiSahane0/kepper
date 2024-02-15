import './List.style.css';
import Button from './Button';

function List(props) {
  function handleDelete() {
    props.onDelete(props.id);
  }

  return (
    <ul>
      <li className="title-list" id={props.id}>
        {props.title}
      </li>
      <li className="note-list">{props.info}</li>
      <Button customClass="delete-button" name="Del" onClick={handleDelete} />
    </ul>
  );
}

export default List;
