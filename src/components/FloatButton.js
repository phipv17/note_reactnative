import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import styles from '../screens/home/styles';
import {Images} from '../themes';
const FloatButton = props => {
  const {handleOnPress} = props;
  return (
    <TouchableOpacity
      style={styles.floatButton}
      activeOpacity={0.7}
      onPress={() => handleOnPress()}>
      <Image source={Images.add} style={styles.imgAdd} />
    </TouchableOpacity>
  );
};

export default FloatButton;
