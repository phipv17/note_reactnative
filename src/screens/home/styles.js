import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../themes';

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  imgSearch: {
    width: Metrics.imgSearchWitdh,
    height: Metrics.imgSearchHeight,
    marginLeft: Metrics.smalWitdh,
    marginRight: Metrics.smalWitdh,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.lightGrey,
    margin: Metrics.smalWitdh,
    borderRadius: Metrics.bigBorderRadius,
    height: Metrics.searchHeight,
  },
  textInput: {
    flex: 1,
  },
  floatButton: {
    position: 'absolute',
    width: Metrics.floatButtonWitdh,
    height: Metrics.floatButtonHeight,
    borderRadius: 60,
    backgroundColor: Colors.lightBlue,
    bottom: 0,
    right: 0,
    margin: Metrics.largeMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgAdd: {
    width: Metrics.iconAddSize,
    height: Metrics.iconAddSize,
    tintColor: Colors.iconAddColor,
  },
  containerWriteNote: {
    flex: 1,
  },
  btnSubmit: {
    width: Metrics.submitButtonWitdh,
    height: Metrics.submitButtonHeight,
    backgroundColor: Colors.lightBlue,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnRemove: {
    width: Metrics.submitButtonWitdh,
    height: Metrics.submitButtonHeight,
    backgroundColor: 'red',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Metrics.smalWitdh,
  },
  textBtnSubmit: {
    color: Colors.iconAddColor,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputNote: {
    padding: 10,
    margin: 10,
    backgroundColor: Colors.lightGrey,
  },
  item: {
    backgroundColor: Colors.lightGrey,
    borderRadius: Metrics.smallBorderRadius,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    color: Colors.darkBlack,
  },
  iconSave: {
    width: Metrics.smallIcon,
    height: Metrics.smallIcon,
    margin: Metrics.mediumMargin,
    tintColor: Colors.iconAddColor,
  },
});

export default styles;
