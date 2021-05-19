import React, {createContext, useReducer} from 'react';
import {noteReducer} from '../store/reducers/NoteReducer';

export const NoteContext = createContext(null);

export const NoteProvider = ({children}) => {
  // khởi tạo
  const [notes, dispatch] = useReducer(noteReducer, []);

  return (
    <NoteContext.Provider value={{notes, dispatch}}>
      {children}
    </NoteContext.Provider>
  );
};
