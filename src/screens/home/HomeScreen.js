/* eslint-disable react-hooks/exhaustive-deps */
import React, {useLayoutEffect, useEffect, useState} from 'react';
import {
  TextInput,
  View,
  Image,
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Colors, Images} from '../../themes';
import styles from './styles';
import FloatButton from '../../components/FloatButton';
import useNote from '../../hook/useNote';
import {
  COUNT,
  getData,
  getObjData,
  NOTE_DATA,
  storeData,
  storeObjData,
} from '../../commons/AsynsStorage';

const HomeScreen = ({route, navigation}) => {
  const {notes} = useNote();
  const [countData, setCountData] = useState('');

  useEffect(() => {}, []);

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.item} onPress={() => itemClick(item)}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.title}>{item.content}</Text>
    </TouchableOpacity>
  );

  const itemClick = note => {
    navigation.navigate('WriteNote', {
      note,
    });
  };

  const handleAddNewNote = () => {
    navigation.navigate('WriteNote');

    // getData(COUNT).then(result => setCountData(result));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            storeObjData(NOTE_DATA, notes);
            getObjData(NOTE_DATA).then(result => console.log('------', result));
          }}>
          <Image
            source={Images.check}
            style={styles.iconSave}
            TouchableOpacity={0.7}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.wrap}>
      <StatusBar backgroundColor={Colors.statusBarColor} />
      <View style={styles.container}>
        <Image source={Images.search} style={styles.imgSearch} />
        <TextInput style={styles.textInput} placeholder="Tìm kiếm ghi chú" />
      </View>
      {/* <Text>{countData}</Text> */}
      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
      />
      <FloatButton handleOnPress={handleAddNewNote} />
    </View>
  );
};

export default HomeScreen;
