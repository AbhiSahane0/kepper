import './InputNote.style.css';
import Button from './Button';
import { useState } from 'react';

function InputNote(props) {
  const [note, setNote] = useState({
    title: '',
    info: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(preValue => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  function handleClick() {
    if (!note.title) {
      alert('Please Enter Note !');
      return;
    }
    props.getNote(note);
    setNote({ title: '', info: '' });
  }
  return (
    <>
      <div className="note-input">
        <input
          name="title"
          value={note.title}
          onChange={handleChange}
          className="title-input"
          placeholder="Title."
        />
        <br />
        <input
          name="info"
          value={note.info}
          onChange={handleChange}
          className="info-input"
          placeholder="Write a Note."
        />
        <Button customClass="add-button" name="Add" onClick={handleClick} />
      </div>
    </>
  );
}

export default InputNote;
