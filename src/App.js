import './App.css';
import './component/Header';
import Header from './component/Header';
import InputNote from './component/InputNote';
import Footer from './component/Footer';
import List from './component/List';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(preValue => {
      return [...preValue, newNote];
    });
  }

  function handleDelete(id) {
    setNotes(preValue => {
      return preValue.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <Header />
      <InputNote getNote={addNote} />

      {notes.map((note, id) => {
        return (
          <List
            title={note.title}
            info={note.info}
            id={id}
            onDelete={handleDelete}
          />
        );
      })}

      <Footer />
    </>
  );
}

export default App;
