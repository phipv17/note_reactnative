import AsyncStorage from '@react-native-async-storage/async-storage';

export const COUNT = 'COUNT';
export const NOTE_DATA = 'NOTE_DATA';

export const storeData = async (key, value) => {
  console.log('vao day');
  try {
    await AsyncStorage.setItem(`@${key}`, value);
  } catch (e) {
    // saving error
  }
};

export const storeObjData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    console.log(jsonValue);
    console.log(key);
    await AsyncStorage.setItem(`@${key}`, jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(`@${key}`);
    return value;
  } catch (e) {
    // error reading value
    return '';
  }
};

export const getObjData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(`@${key}`);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    return null;
  }
};
