import { View , Text, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
export default function HeaderFlightDetailsModal({ title, airport, icon }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle} >
        { icon === "departure" &&
            <Svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M8.64931 9.14287L6.07615 10.4598C5.20312 10.909 4.623 10.6231 1.83732 10.0872L1.3147 10.3526L3.57767 11.7359L3.1239 11.9707C3.00902 12.0268 3.07221 12.18 3.19857 12.1646C6.55862 11.7716 8.14961 11.2101 8.14961 11.2101L15.5417 7.41761C15.5417 7.41761 18.0919 6.11092 17.0753 5.77914C15.9495 5.41163 13.6233 6.58049 13.6233 6.58049L10.7745 8.04038L6.05898 6.57034L5.77179 6.71832L9.149 9.48488" fill="black"/>
              <Path d="M8.64931 9.14287L6.07615 10.4598C5.20312 10.909 4.623 10.6231 1.83732 10.0872L1.3147 10.3526L3.57767 11.7359L3.1239 11.9707C3.00902 12.0268 3.07221 12.18 3.19857 12.1646C6.55862 11.7716 8.14961 11.2101 8.14961 11.2101L15.5417 7.41761C15.5417 7.41761 18.0919 6.11092 17.0753 5.77914C15.9495 5.41163 13.6233 6.58049 13.6233 6.58049L10.7745 8.04038L6.05898 6.57034L5.77179 6.71832L9.149 9.48488" stroke="black" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <Path d="M11.9722 9.18402L11.7883 10.649L11.3518 10.9501L10.295 10.0671" fill="black"/>
              <Path d="M11.9722 9.18402L11.7883 10.649L11.3518 10.9501L10.295 10.0671" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <Path d="M1.64786 16.7076H10.7631" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>
        }
        { icon === "arrival" &&
          <Svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M8.7272 17.2077H17.3147" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M9.10278 8.62632L6.27394 8.37598C5.37873 8.29653 5.19492 7.90324 3.17622 5.72156L2.60313 5.67346L3.52138 8.13878L3.01659 8.09473C2.8904 8.08373 2.84602 8.25253 2.95588 8.30712C5.83332 9.80494 7.42529 10.1851 7.42529 10.1851L15.5648 10.8947C15.5648 10.8947 18.3699 11.1402 17.7795 10.2957C17.1245 9.35636 14.5751 9.10397 14.5751 9.10397L11.4426 8.82852L11.361 8.81673L8.64983 4.94956L8.33431 4.92202L9.27291 9.21937" fill="black"/>
            <Path d="M9.10278 8.62632L6.27394 8.37598C5.37873 8.29653 5.19492 7.90324 3.17622 5.72156L2.60313 5.67346L3.52138 8.13878L3.01659 8.09473C2.8904 8.08373 2.84602 8.25253 2.95588 8.30712C5.83332 9.80494 7.42529 10.1851 7.42529 10.1851L15.5648 10.8947C15.5648 10.8947 18.3699 11.1402 17.7795 10.2957C17.1245 9.35636 14.5751 9.10397 14.5751 9.10397L11.4426 8.82852L11.361 8.81673L8.64983 4.94956L8.33431 4.92202L9.27291 9.21937" stroke="black" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </Svg>

        }
          <Text style={ { marginLeft: 10, ...styles.text } }>{ title }</Text>
      </View>
      <View>
        <Text style={ styles.textAirport }>{ airport }</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "900",
  },
  textAirport: {
    fontSize: 13,
    fontWeight: "700",
    color: "#00000080",
  }
});