import { ImageBackground, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import Paisaje from '../assets/paisaje.png';
import HeaderDetailsFlight from "../components/headerDetailsFlight";
import { Link } from "expo-router";
import HeaderModalFlight from "../components/headerModalFlight";
import Svg, { Path, Circle, Line } from "react-native-svg";
import HeaderFlightDetailsModal from "../components/headerFlightDetailsModal";
import OptionDescriptionFlight from "../components/optionDescriptionFlight";
import { GlobalContext } from "../components/globalProvider";
import { useContext } from "react";
export default function Details() {
  const { state, setState } = useContext(GlobalContext);

  const { flightDetails } = state;

  const { arrive, depart, status, flightNumber } = flightDetails;

  return (
    <View style={ styles.container }>
      <ImageBackground source={ Paisaje } style={ { width: '100%', height: 500 } }  >
        <HeaderDetailsFlight info={ false } />
      </ImageBackground>
      <Modal
        visible={ true }
        animationType="slide"
        transparent={ true }
      >
        <View style={ styles.modalBody }>
          <View style={ { width: '100%', height: 100 } } >
            <Link href={'/'} asChild>
              <Pressable style={ { width: 40, height: 50 } } />
            </Link>
          </View>
          <View style={ styles.modalStyle }>
            <HeaderModalFlight typeStatus={ status } codeAm={ flightNumber } />
            <View>
              <View style={ styles.containerDescription }>
                <Text style={styles.time}>{ depart.time }</Text>
                <View style={ { paddingHorizontal: 5 } }>
                  <Svg width="201" height="26" viewBox="0 0 201 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <Circle cx="4.8147" cy="20.2076" r="4.5" fill="black"/>
                      <Line x1="10.8147" y1="20.2076" x2="189.815" y2="20.2076" stroke="black" stroke-linecap="round" stroke-dasharray="4 20"/>
                      <Path d="M11.4456 21.5971L11.633 22.0491L12.1049 22.1785C13.3092 22.5086 15.2575 23.0036 17.203 23.4197C19.119 23.8294 21.1303 24.1846 22.4112 24.1961C24.7507 24.217 32.0415 24.2048 35.389 24.1961L35.437 24.196L35.4848 24.1913C35.9859 24.1417 36.7659 24.0063 37.539 23.7545C38.2454 23.5244 39.1097 23.1462 39.6871 22.5156C39.9155 22.3224 40.1855 21.9991 40.2809 21.5492C40.4149 20.917 40.1493 20.3247 39.6349 19.8973L39.0395 20.6138L39.6349 19.8973C38.7644 19.174 37.6945 18.5483 35.503 18.291L35.4449 18.2842H35.3864H29.7494L18.5302 12.3245L18.3102 12.2076H18.0611H15.0903H12.565L14.4056 13.9365L19.0342 18.2842H15.7084L12.7763 15.5301L12.4877 15.259H12.0917H10.3147H8.8175L9.39096 16.642L11.4456 21.5971Z" fill="black" stroke="white" stroke-width="2"/>
                      <Circle cx="195.815" cy="20.2076" r="4.5" fill="black"/>
                    </Svg>
                </View>
                <Text style={styles.time}>{ arrive.time }</Text>
              </View>
            </View>
            <View style={ styles.sectionIata }>
                <Text style={ styles.textIata}>{ depart.iata }</Text>
                <Text style={ styles.textIata }>{ arrive.iata }</Text>
            </View>
            <View style={ { width: '100%', height: 110, } } >
              <Text style={ { marginTop: 50, fontSize: 22, fontWeight: '900' } }>Flight details</Text>
            </View>
            <View>
              <HeaderFlightDetailsModal title="Departure" airport="Ciudad de Mexico - AICM" icon="departure"/>
            </View>
            <View style={ styles.descriptionSection }>
              <OptionDescriptionFlight title="Terminal" description="2" />
              <OptionDescriptionFlight title="Gate" description="62" />
              <OptionDescriptionFlight title="Boarding" description="06:00" />
            </View>
            <View style={ { marginTop: 40 } }>
              <HeaderFlightDetailsModal title="Arrival" airport="Cancun - Terminal 4" icon="arrival" />
            </View>
            <View style={ styles.descriptionSection }>
              <OptionDescriptionFlight title="Terminal" description="4" />
              <OptionDescriptionFlight title="Est. Landing" description="09:00" />
            </View>
          </View>
        </View>
      </Modal>
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
  modalBody: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalStyle: {
    width: '100%',
    height: 600,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  containerDescription: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    width: '100%',
  },
  time: {
    color: '#000',
    fontSize: 28,
    fontWeight: "900",
  },
  sectionIata: {
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: "space-between",
    width: '100%',
  },
  textIata: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionSection: {
    alignItems: "center",
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
  }
})