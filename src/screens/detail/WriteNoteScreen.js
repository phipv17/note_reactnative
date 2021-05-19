import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import useNote from '../../hook/useNote';
import styles from '../home/styles';

const WriteNote = ({route, navigation}) => {
  const note = route.params?.note ?? {};
  const [title, setTitle] = useState(note?.title || '');
  const [content, setContent] = useState(note?.content ?? '');
  const {addNote, upadteNote, removeNote} = useNote();

  const saveNote = () => {
    if (title.length === 0) {
      return;
    }
    if (note?.id) {
      // update
      upadteNote(note.id, title, content);
      //storeData(note);
    } else {
      // add note
      addNote({
        title,
        content,
        id: Math.floor(Math.random() * 100 + 1),
      });
      //storeData()
    }

    navigation.goBack();
  };

  return (
    <View style={styles.containerWriteNote}>
      <TextInput
        placeholder="Title here"
        style={styles.inputNote}
        multiline
        returnKeyType="next"
        onChangeText={titleInput => setTitle(titleInput)}
        value={title}
        defaultValue={title}
      />
      <TextInput
        placeholder="Content here"
        style={styles.inputNote}
        // multiline
        onChangeText={contentInput => setContent(contentInput)}
        value={content}
        defaultValue={content}
        onSubmitEditing={saveNote}
        returnKeyType="done"
      />
      <TouchableOpacity
        style={styles.btnSubmit}
        activeOpacity={0.8}
        onPress={saveNote}>
        <Text style={styles.textBtnSubmit}>Submit</Text>
      </TouchableOpacity>
      {note?.id && (
        <TouchableOpacity
          style={styles.btnRemove}
          activeOpacity={0.8}
          onPress={() => {
            removeNote(note.id);
            navigation.goBack();
          }}>
          <Text style={styles.textBtnSubmit}>Remove</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default WriteNote;
