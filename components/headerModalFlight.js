import { View, Text , StyleSheet } from 'react-native';
export default function HeaderModalFlight({ typeStatus, codeAm }) {
  const colorBgTitle = {
    arrived: '#000000',
    onTime: '#2E9509',
    delayed: '#FECB2F',
    inAir: '#1872B3'
  }
  return (
    <View style={ styles.container }>
      <View>
        <Text style={ styles.title }>{ codeAm }</Text>
        <Text style={ styles.subtitle }>Tuesday, Jan 22</Text>
      </View>
      <View style={ { ...styles.status, backgroundColor: colorBgTitle[typeStatus] } }>
        <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold', textTransform: 'capitalize' }} >{ typeStatus }</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
  },
  status: {
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  }
});
