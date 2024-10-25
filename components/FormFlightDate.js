import { View } from "react-native";
import InputFlight from "./inputFlight";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./globalProvider";
import getFlightsByOrigin from "../api/getFlightsByOrigin";
import { router } from "expo-router";

export default function FormFlightDate() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [dateDeparture, setDateDeparture] = useState('');
  const { state, setState } = useContext(GlobalContext);

  useEffect( () => {
    if (state.submitButton) {
      if(origin && destination && dateDeparture) {
        async function getFlightsByCodePrueba() {
          const response = await getFlightsByOrigin(`${origin}-${destination}`, dateDeparture);
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
    <>
    <View style={ { marginTop: 30, flexDirection: 'row', width: '100%', paddingHorizontal: 40 } } >
      <InputFlight
        title="Origin"
        placeholder="CUN"
        styleInput={ { width: '46%', marginRight: 20 } }
        onChangeDataForm={ setOrigin }
        dataForm={ origin }
        name="origin"
      />
      <InputFlight
        title="Destination"
        placeholder="MEX"
        styleInput={ { width: '49%' } }
        onChangeDataForm={ setDestination }
        dataForm={ destination }
        name="destination"
      />
    </View>
    <View style={ { marginTop: 20, width: '100%', paddingHorizontal: 40 } } >
      <InputFlight
        title="Date of departure"
        placeholder="Tuesday, Nov 21"
        styleInput={ { width: '100%' } }
        onChangeDataForm={ setDateDeparture }
        dataForm={ dateDeparture }
        name="dateDeparture"
        icon={ true}
      />
    </View>
  </>
  );
}