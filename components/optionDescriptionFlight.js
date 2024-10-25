import { View, Text, StyleSheet } from "react-native";

export default function OptionDescriptionFlight({ title, description }) {
  return (
    <View style={ { marginRight: 40 } }>
      <Text style={ styles.title }>{ title }</Text>
      <Text style={ styles.description }>{ description }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'capitalize'
  },
  description: {
    color: '#000',
    fontWeight: '900',
    fontSize: 16
  }
})