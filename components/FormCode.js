import { View } from "react-native";
import InputFlight from "./inputFlight";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./globalProvider";
import getFlightsByCode from "../api/getFlightsByCode";
import { router } from "expo-router";

export default function FormCode() {
  const { state, setState } = useContext(GlobalContext)
  const [flightNumber, setFlightNumber] = useState('')
  const [dateDeparture, setDateDeparture] = useState('')
  useEffect( () => {
    if (state.submitButton) {
      if(flightNumber && dateDeparture) {
        async function getFlightsByCodePrueba() {
          const response = await getFlightsByCode(flightNumber);
          if(response) {
            setState({ ...state, dataFormGlobal: response, submitButton: false });
            router.push('/flights');
          }
        }
        getFlightsByCodePrueba();
      } else {
        setState({ ...state, submitButton: false });
      }
    }
  }, [state.submitButton])
  return (
    <View style={{ marginTop: 30, flexDirection: 'row', width: '100%', paddingHorizontal: 40 }} >
      <InputFlight
        title="Flight Number"
        placeholder="AM 500"
        styleInput={ { width: '40%', marginRight: 20 } }
        onChangeDataForm={ setFlightNumber }
        dataForm={ flightNumber }
        name="flightNumber"
      />
      <InputFlight
        title="Date of departure"
        placeholder="Tuesday, Nov 21"
        styleInput={{ width: '54%' }}
        onChangeDataForm={ setDateDeparture }
        dataForm={ dateDeparture }
        name="dateDeparture"
        icon={true}
      />
  </View>
  );
}