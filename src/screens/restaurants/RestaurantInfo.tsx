import {View, StyleSheet} from "react-native"
import {enableLatestRenderer} from 'react-native-maps';
import { Marker } from 'react-native-maps';

enableLatestRenderer();

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { CsText } from "../../components";

const RestaurantInfo = () => (
  <View style={{paddingHorizontal: 20}}>
    <CsText weight={'800'} size={'lg'}>Address</CsText>
    <View style={{flexDirection: 'row', position: 'relative', justifyContent: "space-between", gap: 5}}>
      <View style={{width: "60%", gap: 10}}>
        <CsText style={{ marginTop: 15}}>99 To Hien Thanh quan Son Tra thanh pho Da Nang</CsText>
        <View style={{flexDirection: 'row', gap: 10}}>
          <CsText>15 mins</CsText>
          <CsText>1.5 km</CsText>
        </View>
      </View>
      <View style={styles.mapWrapper}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 16.059758,
            longitude: 108.2414633,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          >
            <Marker
              coordinate={{ latitude : 16.059758 , longitude : 108.2414633 }}
            />
        </MapView>
      </View>
   </View>
  </View>
);
const styles = StyleSheet.create({
  mapWrapper: {
    borderRadius: 10,
    overflow: 'hidden'
  },
  map: {
    // position: 'absolute',
    height: 120,
    width: 120,
    bottom: 0,
    right: 0,
  },
});
export {RestaurantInfo}