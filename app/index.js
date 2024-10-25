import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HeaderHome from '../components/headerHome';
import OptionSearchFligth from '../components/option-search-fligth';
import ButtonSubmit from '../components/ButtonSubmit';
import { useContext, useState } from 'react';
import FormCode from '../components/FormCode';
import FormFlightDate from '../components/FormFlightDate';
import { GlobalContext } from '../components/globalProvider';

export default function Home() {
  const [selected, setSelected] = useState(0);
  const { state, setState } = useContext(GlobalContext)
  return (
    <View style={styles.container}>
      <HeaderHome />
      <OptionSearchFligth setSelected={setSelected} selected={selected} />
      {
        selected === 0 && <FormCode />
      }
      {
        selected === 1 && <FormFlightDate />
      }

      <View style={{ marginTop: 30, width: '100%', paddingHorizontal: 40 }} >
        <ButtonSubmit text="Search Flight" redirect='/flights' submitButton={ setState } data={state} />
      </View>
      <Text style={{ marginTop: 40, color: '#000000bf', width: 200 }}>Can not find your flight number? </Text>
      <Text style={{ marginTop: 7, color: '#000000bf', width: 200 }}>Try searching by destination </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});