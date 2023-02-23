import {Image, StyleSheet, Text, View} from 'react-native'
import {Colors} from '../../assets/colors'
import {ScrollView} from 'react-native-virtualized-view';
import {Button, CsText, HeaderBack, StarLine} from '../../components'
import Icon from 'react-native-vector-icons/FontAwesome'
import {useLayoutEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../app/store'
import {RestaurantNewsletter, RestaurantInfo, RestaurantGallery, RestaurantMenu, NavigateBar} from './index'
import {setResTab} from '../../global-states'
import {RestaurantApiType} from '../../@types/RestaurantApiType';
import {restaurantApiInitState} from '../../constant/restaurantApiInitState';
import RekomAxios from '../../api/axios';


const RestaurantLayout = () => {
   const tabRes = useSelector((state: RootState) => state.restaurantTab.tabRes)
   const dispatch = useDispatch()
   const [data, setData] = useState<RestaurantApiType>(restaurantApiInitState)

   useLayoutEffect(() => {

      RekomAxios({
         method: 'get',
         url: 'rekomer-side/restaurants/2',
         responseType: 'json'
      })
         .then(res => {
            let data = res.data.restaurant
            console.log(data)
            setData(data)
         })
         .catch(e => {
            console.log(e)
         })

      return () => {
         dispatch(setResTab(1))
      }
   }, [])

   return (
      <ScrollView style={{position: 'relative', width: '100%', backgroundColor: Colors.B}}>

         <HeaderBack type='primary' wrapperStyle={{position: 'absolute', padding: 20}}/>

         <Image source={{uri: data.coverImageUrl}} style={styles.cover}/>
         <View style={styles.content}>
            <Text style={styles.resName}>{data.name}</Text>
            <CsText>{data.description}</CsText>
            <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15}}>
               <CsText style={{alignSelf: 'center', fontWeight: '900', fontSize: 15}}>Awwward</CsText>
               <Button wrapperStyle={{height: 35}} type={'primary'} size={'xs'} label={'new review'}/>
            </View>
            <View style={styles.rating}>
               <View style={{width: '40%', alignItems: 'center'}}>
                  <CsText style={{
                     fontSize: 40,
                     alignSelf: "center",
                     fontWeight: '700'
                  }}>{data.average}</CsText>
                  <View style={{flexDirection: 'row', gap: 5}}>
                     <Icon name="star" size={20} color={Colors.A}/>
                     <Icon name="star" size={20} color={Colors.A}/>
                     <Icon name="star" size={20} color={Colors.A}/>
                     <Icon name="star" size={20} color={Colors.A}/>
                     <Icon name="star" size={20} color={Colors.A}/>
                  </View>
                  <Text>{data.amount} ratings</Text>
               </View>
               <View style={{width: '55%'}}>
                  <StarLine point={data.percentFive}>5</StarLine>
                  <StarLine point={data.percentFour}>4</StarLine>
                  <StarLine point={data.percentThree}>3</StarLine>
                  <StarLine point={data.percentTwo}>2</StarLine>
                  <StarLine point={data.percentOne}>1</StarLine>
               </View>
            </View>
         </View>
         <NavigateBar tab={tabRes}/>
         <View style={styles.dashedLine}></View>
         {
            tabRes == 1 ? <RestaurantNewsletter/> : null
         }
         {
            tabRes == 2 ? <RestaurantMenu/> : null
         }
         {
            tabRes == 3 ? <RestaurantGallery ImageList={[]}/> : null
         }
         {
            tabRes == 4 ? <RestaurantInfo/> : null
         }
      </ScrollView>
   )
}
const styles = StyleSheet.create({
   cover: {
      width: '100%',
      height: 160,
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20,
   },
   content: {
      paddingHorizontal: 20,
   },
   resName: {
      textTransform: 'uppercase',
      fontWeight: '900',
      fontSize: 22,
      color: Colors.E,
      marginTop: 10,
      marginBottom: 3,
      alignItems: 'center'
   },
   containStarLine: {
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
   dashedLine: {
      borderBottomColor: Colors.C,
      borderStyle: 'dashed',
      borderBottomWidth: 1,
      width: '40%',
      alignSelf: 'center',
      marginVertical: 10,
      marginBottom: 30
   }
})
export {RestaurantLayout}