import { View, Text, StyleSheet, TextInput,  } from "react-native";
import Svg, { Path, G, Defs, ClipPath, Rect } from "react-native-svg";

export default function InputFlight({title, placeholder, styleInput={}, onChangeDataForm, dataForm, icon=false }) {
  return (
    <View style={ { ...styles.container, ...styleInput } }>
      <Text style={ styles.title }>{ title }</Text>
      <View style={ { flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'flex-start' } }>
        <TextInput
          placeholder={ placeholder }
          style={ styles.input }
          onChangeText={ onChangeDataForm }
          value={ dataForm }
        />
        {
          icon &&
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <G clip-path="url(#clip0_1037_222)">
                <Path d="M6.54079 5.39999C7.16639 5.39999 7.68159 4.88479 7.68159 4.25919V1.94079C7.68159 1.31519 7.16639 0.799988 6.54079 0.799988C5.91519 0.799988 5.39999 1.31519 5.39999 1.94079V4.22239C5.39999 4.88479 5.91519 5.39999 6.54079 5.39999ZM15.7408 3.08159V4.25919C15.7408 5.54719 14.7104 6.54079 13.4592 6.54079C12.1712 6.54079 11.1776 5.51039 11.1776 4.25919V3.08159H8.89599V4.25919C8.89599 5.54719 7.86559 6.54079 6.61439 6.54079C5.32639 6.54079 4.33279 5.51039 4.33279 4.25919V3.08159H0.799988V19.2H19.2V3.08159H15.7408ZM6.54079 16.8816H4.25919V14.6H6.54079V16.8816ZM6.54079 12.3184H4.25919V9.99999H6.54079V12.3184ZM11.1408 16.8816H8.85919V14.6H11.1408V16.8816ZM11.1408 12.3184H8.85919V9.99999H11.1408V12.3184ZM15.7408 16.8816H13.4592V14.6H15.7408V16.8816ZM15.7408 12.3184H13.4592V9.99999H15.7408V12.3184ZM13.4592 5.39999C14.0848 5.39999 14.6 4.88479 14.6 4.25919V1.94079C14.6 1.31519 14.0848 0.799988 13.4592 0.799988C12.8336 0.799988 12.3184 1.31519 12.3184 1.94079V4.22239C12.2816 4.88479 12.7968 5.39999 13.4592 5.39999Z" fill="black"/>
              </G>
              <Defs>
                <ClipPath id="clip0_1037_222">
                  <Rect width="18.4" height="18.4" fill="white" transform="translate(0.799988 0.799988)"/>
                </ClipPath>
              </Defs>
            </Svg>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    backgroundColor: '#fff',
    borderColor: '#000',
    borderRadius: 15,
    borderWidth: 2,
    boxSizing: "border-box",
    height: 65,
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});