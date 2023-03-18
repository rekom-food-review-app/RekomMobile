import { Dimensions, PermissionsAndroid, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { LatLng, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from "react-native-geolocation-service";
import { Colors } from "../../assets/colors";
import { useEffect, useState } from "react";

const RestaurantInfo = () => {
  // <View style={{paddingHorizontal: 20}}>
  //   <CsText weight={'800'} size={'lg'}>Address</CsText>
  //   <View style={{flexDirection: 'row', position: 'relative', justifyContent: "space-between", gap: 5}}>
  //     <View style={{width: "60%", gap: 10}}>
  //       <CsText style={{ marginTop: 15}}>99 To Hien Thanh quan Son Tra thanh pho Da Nang</CsText>
  //       <View style={{flexDirection: 'row', gap: 10}}>
  //         <CsText>15 mins</CsText>
  //         <CsText>1.5 km</CsText>
  //       </View>
  //     </View>
  //     <View style={styles.mapWrapper}>
  //       <MapView
  //         provider={PROVIDER_GOOGLE}
  //         style={styles.map}
  //         region={{
  //           latitude: 16.059758,
  //           longitude: 108.2414633,
  //           latitudeDelta: 0.015,
  //           longitudeDelta: 0.0121,
  //         }}
  //         >
  //           <Marker
  //             coordinate={{ latitude : 16.059758 , longitude : 108.2414633 }}
  //           />
  //       </MapView>
  //     </View>
  //  </View>
  // </View>
  const GOOGLE_MAPS_APIKEY = 'AIzaSyCfppEH99aGH6Yl21gDST07VEfORkfA42Y';
  const { width, height } = Dimensions.get('window');
  const destination = {latitude: 21.025650047445836,  longitude: 105.8384142436315};
  const [currentLocation, setCurrentLocation] = useState<LatLng | undefined>(undefined);
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({latitude, longitude})
      },
      error => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  }, [])
  return(
  <View>
      <MapView style={{width: width, height: height}} initialRegion={{
      latitude: 14.521461838826223, 
      longitude: 107.88779784191499,
      latitudeDelta: 5,
      longitudeDelta: 5,  
    }} >
      <MapViewDirections
        origin={currentLocation}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor={Colors.A}
      />
      <Marker
        pinColor={Colors.A}
        coordinate={{ latitude : 10.832908058548998 , longitude : 106.61279548854179 }}
      />
    </MapView>
    </View>
)}
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