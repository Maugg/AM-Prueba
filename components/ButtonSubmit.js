// import { Link } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

export default function ButtonSubmit({ text, styleButton={}, redirect='', submitButton, data={} }) {
  return (
    // <Link href={redirect} asChild>
      <Pressable style={{ ...styles.container, ...styleButton }} onPress={ () => {
        submitButton({ ...data, submitButton: true });
      } } >
        <Text style={styles.title}>{text}</Text>
      </Pressable>
    // </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    alignItems: "center",
    justifyContent: 'center',
    height: 56,
    width: '100%',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
})