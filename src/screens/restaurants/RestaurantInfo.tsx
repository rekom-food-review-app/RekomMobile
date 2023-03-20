import { Dimensions, PermissionsAndroid, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Colors } from "../../assets/colors";
import { useEffect, useState } from "react";
import { CsText } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

interface RestaurantInfoProps
{
  restaurantId: string
}

const RestaurantInfo = (props: RestaurantInfoProps) => 
{
  const restaurant = useSelector((state: RootState) => state.selectedRestaurant)

  return (
  <View style={{paddingHorizontal: 20}}>
    <CsText weight={'800'} size={'lg'}>Address</CsText>
    <View style={{flexDirection: 'row', position: 'relative', justifyContent: "space-between", gap: 5}}>
      <View style={{width: "60%", gap: 10}}>
        <CsText style={{ marginTop: 15}}>{restaurant.info.address}</CsText>
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
            // 19.809268180694037, 105.79015825841091
            latitude: restaurant.info.coordinates.latitude,
            longitude: restaurant.info.coordinates.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          >
            <Marker
              pinColor={Colors.B}
              coordinate={{ 
                latitude : restaurant.info.coordinates.latitude, 
                longitude : restaurant.info.coordinates.longitude
              }}
            />
        </MapView>
      </View>
   </View>
  </View>
)}

const styles = StyleSheet.create({
  mapWrapper: {
    borderRadius: 10,
    overflow: 'hidden'
  },
  map: {
    height: 120,
    width: 120,
    bottom: 0,
    right: 0,
  },
});
export {RestaurantInfo}