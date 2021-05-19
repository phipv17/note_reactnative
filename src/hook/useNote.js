import {useContext} from 'react';
import {NoteContext} from '../contexs/NoteContex';
import {ADD_NOTE, UPDATE_NOTE, REMOVE_NOTE} from '../store/actions';

const useNote = () => {
  const {notes, dispatch} = useContext(NoteContext);

  const addNote = note => {
    dispatch({
      type: ADD_NOTE,
      note: note,
    });
  };

  const upadteNote = (id, title, content) => {
    dispatch({
      type: UPDATE_NOTE,
      id,
      title,
      content,
    });
  };

  const removeNote = id => {
    dispatch({
      type: REMOVE_NOTE,
      id,
    });
  };
  return {
    notes,
    addNote,
    upadteNote,
    removeNote,
  };
};

export default useNote;
