import {ADD_NOTE, REMOVE_NOTE, UPDATE_NOTE} from '../actions';

export const noteReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_NOTE: {
      let notes = [...state];
      notes.push(action.note);
      return notes;
    }
    case UPDATE_NOTE: {
      const {id, title, content} = action;

      let notes = [...state];

      return notes.map(item => {
        if (item.id === id) {
          return {
            ...item,
            title,
            content,
          };
        }
        return item;
      });
    }
    case REMOVE_NOTE: {
      const {id} = action;
      let notes = [...state];
      return notes.filter(item => item.id !== id);
    }
    default:
      return state;
  }
};
