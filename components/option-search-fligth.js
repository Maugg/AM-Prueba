import { Pressable, StyleSheet, Text, View } from "react-native";

export default function OptionSearchFligth({ selected, setSelected }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={selected === 0 ? styles.boxContainer : styles.boxContainerDisabled}
        onPress={() => setSelected(0)}
      >
        <Text style={ selected === 0 ? styles.enabledBtn : styles.disabledBtn }>Flight Number</Text>
      </Pressable>
      <Pressable
        style={selected === 1 ? styles.boxContainer : styles.boxContainerDisabled}
        onPress={() => setSelected(1)}
        >
        <Text style={ selected === 1 ? styles.enabledBtn : styles.disabledBtn }>Destination</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 50,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    position: 'relative',
    top: -25,
    zIndex: 1000,
    padding: 3,
  },
  boxContainer: {
    width: '50%',
    height: '100%',
    backgroundColor: 'black',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',

  },
  boxContainerDisabled: {
    width: '50%',
    height: '100%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  enabledBtn: {
    fontWeight: 'bold',
    color: '#fff',
  },
  disabledBtn: {
    fontWeight: 'bold',
    color: '#000',
  }
});