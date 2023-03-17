import { Dimensions, PermissionsAndroid, Platform, Text, TouchableOpacity, View } from "react-native";
import MapView, { LatLng, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from "react-native-geolocation-service";
import { Colors } from "../../assets/colors";
import { useEffect, useState } from "react";

const Map = () => {
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
    {/* <TouchableOpacity onPress={getCurrentLocation}><Text>hihi</Text></TouchableOpacity> */}
    </View>
  )
}
export {Map}