import { Link, router } from "expo-router";
import { useContext, useState } from "react";
import { View, Text, StyleSheet, Pressable, Switch } from "react-native";
import Svg, { Path, Circle, Line } from "react-native-svg"
import { GlobalContext } from "./globalProvider";
export default function CardDetails({arrive, depart, status, codeAM }) {

  const colorBgTitle = {
    arrived: '#000000',
    onTime: '#2E9509',
    delayed: '#FECB2F',
    inAir: '#1872B3'
  }

  const { state, setState } = useContext(GlobalContext);

  const handlePress = () => {
    setState({
      ...state,
      flightDetails: {
        flightNumber: codeAM,
        arrive,
        depart,
        status
      }
    })
    router.push('/details');
  }
  return (
    <View style={ styles.container }>
      <View style={ { flexDirection: 'row', justifyContent: 'space-between' } }>
        <View style={ { width: 100 } }>
          <Text style={ { ...styles.title, backgroundColor: colorBgTitle[status] } }>{ status }</Text>
        </View>
        <View style={ { flexDirection: 'row', alignItems: 'center' } }>
          <Text style={ { fontWeight: 'bold' } }>Favorite</Text>
          <Switch
            trackColor={ { false: "#767577", true: "#000000" } }
            thumbColor={state.favorite ? "#fff" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setState( { ...state, favorite: codeAM } )}
            value={state.favorite === codeAM}
          />
        </View>
      </View>
      <View style={ styles.containerDescription }>
        <Text style={styles.time}>{depart.time}</Text>
        <Svg width="187" height="15" viewBox="0 0 187 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Circle cx="4.97974" cy="9.70764" r="4.5" fill="black"/>
          <Line x1="11.4797" y1="9.20764" x2="175.48" y2="9.20764" stroke="black" stroke-width="2" stroke-linecap="round"/>
          <Path d="M148.611 11.0971L148.798 11.5491L149.27 11.6785C150.474 12.0086 152.423 12.5036 154.368 12.9197C156.284 13.3294 158.295 13.6846 159.576 13.6961C161.916 13.717 169.207 13.7048 172.554 13.6961L172.602 13.696L172.65 13.6913C173.151 13.6417 173.931 13.5063 174.704 13.2545C175.41 13.0244 176.275 12.6462 176.852 12.0156C177.081 11.8224 177.351 11.4991 177.446 11.0492C177.58 10.417 177.314 9.82471 176.8 9.39727L176.205 10.1138L176.8 9.39727C175.929 8.67397 174.86 8.04832 172.668 7.79101L172.61 7.78418H172.551H166.914L155.695 1.82451L155.475 1.70764H155.226H152.255H149.73L151.571 3.43652L156.199 7.78418H152.873L149.941 5.03007L149.653 4.75895H149.257H147.48H145.983L146.556 6.14197L148.611 11.0971Z" fill="black" stroke="white" stroke-width="2"/>
          <Circle cx="181.98" cy="9.70764" r="4.5" fill="black"/>
        </Svg>
        <Text style={styles.time}>{arrive.time}</Text>
      </View>
      <View style={ styles.sectionIata }>
        <Text style={ styles.textIata}>{ depart.iata }</Text>
        <Text style={ styles.textIataTime }>2h 38m</Text>
        <Text style={ styles.textIata }>{ arrive.iata }</Text>
      </View>
      <View style={ styles.sectionFooter }>
        <Text style={ {...styles.fontSizeFooter, fontWeight: '900'} }>{ codeAM }</Text>
        <Pressable onPress={ handlePress }>
          <Text style={ {...styles.fontSizeFooter, textDecorationLine: 'underline'} }>Details</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderRadius: 10,
    borderWidth: 2,
    marginTop: 20,
    width: '100%',
  },
  title: {
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 8,
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    padding: 8,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  time: {
    color: '#000',
    fontSize: 28,
    fontWeight: "900",
  },
  containerDescription: {
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: "space-between",
    marginTop: 5,
    paddingHorizontal: 30,
    width: '100%',
  },
  sectionIata: {
    alignItems: "center",
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingBottom: 10,
    paddingHorizontal: 30,
    width: '100%',
  },
  sectionFooter: {
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: "space-between",
    marginTop: 6,
    paddingBottom: 7,
    paddingHorizontal: 30,
    width: '100%',
  },
  textIata: {
    fontSize: 18,
  },
  textIataTime: {
    color: '#00000066',
    fontSize: 12,
    fontWeight: "700",
  },
  fontSizeFooter: {
    fontSize: 13,
  },
});