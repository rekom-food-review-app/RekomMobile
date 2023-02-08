import {Image, StyleSheet, View, Text} from 'react-native'
import { Colors } from '../../assets/colors'
import { Button, CsText, NavigateBar } from '../../components'
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from "axios"
import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { RestaurantNewsletter } from './RestaurantNewsletter'
import { RestaurantMenu } from './RestaurantMenu'
import { RestaurantGallery } from './RestaurantGallery'
import { RestaurantInfo } from './Restaurant.Info'

const RestaurantLayout = () => {
  const tab = useSelector()
  return(
    <View style={{width: '100%', height: '100%', backgroundColor: Colors.B}}>
      <Image source={require('../../assets/image/res-cover.png')}
      style={styles.cover}/>
      <View style={styles.content}>
        <Text style={styles.resName}>Dong Phuong Restaurant</Text>
        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing.</Text>
        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15}}>
          <Text style={{alignSelf: 'center', fontWeight: '600'}}>Awwward</Text>
          <Button wrapperStyle={{height: 35}} type={'primary'} size={'sm'} label={'new review'}/>
        </View>
        <View style={styles.rating}>
          <View style={{width: '40%', alignItems: 'center'}}>
            <Text style={{fontSize: 40, fontWeight: '700'}}>4.9</Text>
            <View style={{flexDirection: 'row', gap: 5}}>
              <Icon name="star" size={20} color={Colors.A} />
              <Icon name="star" size={20} color={Colors.A} />
              <Icon name="star" size={20} color={Colors.A} />
              <Icon name="star" size={20} color={Colors.A} />
              <Icon name="star" size={20} color={Colors.A} /> 
            </View>
            <Text>2611 ratings</Text>
          </View>
          <View style={{width:'55%'}}>
            <View style={styles.containStarLine}>
              <Text style={{width:'10%'}}>5</Text>
              <View style={styles.starLine}></View>
            </View>
            <View style={styles.containStarLine}>
              <Text style={{width:'10%'}}>4</Text>
              <View style={styles.starLine}></View>
            </View>
            <View style={styles.containStarLine}>
              <Text style={{width:'10%'}}>3</Text>
              <View style={styles.starLine}></View>
            </View>
            <View style={styles.containStarLine}>
              <Text style={{width:'10%'}}>2</Text>
              <View style={styles.starLine}></View>
            </View>
            <View style={styles.containStarLine}>
              <Text style={{width:'10%'}}>1</Text>
              <View style={styles.starLine}></View>
            </View>
          </View>
        </View>
      </View>
      <NavigateBar tab={tab}/>
      {
        tab == 1 ? <RestaurantNewsletter /> : null
      }
      {
        tab == 2 ? <RestaurantMenu /> : null
      }
      {
        tab == 3 ? <RestaurantGallery /> : null
      }
      {
        tab == 4 ? <RestaurantInfo /> : null
      }
    </View>
  )
}
const styles = StyleSheet.create({
  cover: {
    width: '100%',
    height: '25%',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  content: {
    paddingHorizontal: 20,
  },
  resName: {
    fontWeight: 'bold',
    fontSize: 21,
    color: Colors.F,
    paddingVertical: 10,
    alignItems: 'center'
  },
  containStarLine:{
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center',
  },
  starLine: {
    width: '90%', 
    height: 7, 
    backgroundColor: Colors.A, 
    borderRadius: 20,
  },
  rating: {
    borderColor: Colors.C, 
    borderWidth: 1, 
    borderRadius: 20, 
    padding: 20,
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  
})
export {RestaurantLayout}