import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HeaderDetailsFlight from '../components/headerDetailsFlight';
import CardDetails from '../components/cardDetails';
import { GlobalContext } from '../components/globalProvider';
import { useContext } from 'react';
export default function Flights() {
  const { state} = useContext(GlobalContext);
  const { dataFormGlobal, favorite } = state
  const codeFlight = dataFormGlobal && dataFormGlobal.code;
  const textData = codeFlight && codeFlight.split('-');
  const titleHeader = textData && textData.length > 1 ? `${textData[0]} -> ${textData[1]}` : codeFlight;
  const cardDetailsData = (dataFormGlobal && dataFormGlobal.data) ? Array.isArray(dataFormGlobal.data) ? dataFormGlobal.data : [dataFormGlobal.data] : [];
  const dateFlight = dataFormGlobal && dataFormGlobal.date;
  const index = cardDetailsData.findIndex(flight => flight.codeAM === favorite);
  if (index > -1) {
    // Remover el vuelo de su posición actual
    const [flightToMove] = cardDetailsData.splice(index, 1);
    // Insertar el vuelo al principio del arreglo
    cardDetailsData.unshift(flightToMove);
  }
  return (
    <View style={ styles.container }>
     <HeaderDetailsFlight title={ titleHeader } date={ dateFlight || 'not found' } info={ true } />
     <View style={{ marginTop: 20, width: '100%', paddingHorizontal: 30 }} >
      {
       cardDetailsData.map((item, index) => {
          return <CardDetails
                  key={ index }
                  arrive={ { iata: item.arrival.iata, time:item.arrival.time} }
                  depart={ { iata: item.departure.iata, time:item.departure.time} }
                  status={ item.status || 'not found' }
                  codeAM={ item.codeAM || codeFlight }
                />
        })
      }
     </View>
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
    marginTop: 10
  },
})