import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Colors} from '../../assets/colors'
import {ScrollView} from 'react-native-virtualized-view';
import {Button, CsText, HeaderBack, StarLine} from '../../components'
import Icon from 'react-native-vector-icons/FontAwesome'
import IconI from 'react-native-vector-icons/Ionicons'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../app/store'
import {RestaurantNewsletter, RestaurantInfo, RestaurantGallery, RestaurantMenu, NavigateBar} from './index'
import {setResTab} from '../../global-states'
import {RestaurantApiType} from '../../@types/RestaurantApiType';
import {restaurantApiInitState} from '../../constant/restaurantApiInitState';
import RekomAxios from '../../api/axios';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ReviewCardType } from '../../@types/ReviewCardType';

const RestaurantLayout = () => {
   const tabRes = useSelector((state: RootState) => state.restaurantTab.tabRes)
   const dispatch = useDispatch()
   const [data, setData] = useState<RestaurantApiType>(restaurantApiInitState)
   const nav = useNavigation<any>();

   const route = useRoute()
   const [id, setId] = useState((route.params as any).id)
   // const [id, setId] = useState('7b3d65f3-7b15-4145-9ea5-537091c3aff4')
   
   const [reactFavourite, setReactFavourite] = useState('')
   const [isFav, setIsFav] = useState<boolean>(data.isMyFav)

   const [reviews, setReviews] = useState<ReviewCardType[]>([])
   const [page, setPage] = useState(1);
   const size = 4

   const changeFavStatus = () => {
      setIsFav(!isFav)
      
      let method = "post"
      if(isFav) { method = "delete" }
      
      RekomAxios({
         method: method,
         url: `favourite-restaurants`,
         data: {restaurantId: id}
      })
      .catch(e =>{
         setIsFav(!isFav)
         console.log(e)
      })
   }
   useEffect(() => {
      getRestaurantInfo()
   }, [])

   useEffect(()=> {
      setIsFav(data.isMyFav)
   },[data.isMyFav])

   useEffect(() => {
      getReviews()
   }, [page])

   const getRestaurantInfo = () => {
      RekomAxios({
         method: 'get',
         url: `restaurants/${id}`,
         responseType: 'json'
      })
      .then(res => {
         setData(res.data.restaurant)
      })
      .catch(e => {
         console.log(e)
      })

      return () => {
         dispatch(setResTab(1))
      }
   }

   const getReviews = () => {
      RekomAxios({
         method: 'get',
         url: `restaurants/${id}/reviews?page=${page}&size=${size}`,
         responseType: 'json'
      })
      .then(res => {
         setReviews((pre) => {
            return pre.concat(res.data.reviews)
         })
      })
      .catch(e => {
         console.log(e)
      })
   }

   const handleEndReachedReviews = () => {
      setPage((prevPage) => prevPage + 1);
   };

   return (
      <ScrollView style={{position: 'relative', width: '100%', backgroundColor: Colors.B}}>

         <HeaderBack type='primary' wrapperStyle={{position: 'absolute', padding: 20}}/>

         <Image source={{uri: data.coverImageUrl}} style={styles.cover}/>
         <View style={styles.content}>
            <Text style={styles.resName}>{data.name}</Text>
            <CsText>{data.description}</CsText>
            <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15}}>
               <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10}}>
                  <CsText style={{alignSelf: 'center', fontWeight: '900', fontSize: 15}}>Awwward</CsText>
                  <Image source={require('../../assets/image/golden.png')} style={{width: 25, height: 25}}/>
               </View>
               <View style={{flexDirection: 'row', justifyContent: 'center', gap: 10, alignItems: 'center'}}>
                  <Button type={'primary'} size={'xs'} label={'new review'} onPress={() => nav.navigate('ReviewForm', {id: data.id})}/>
                  <TouchableOpacity onPress={changeFavStatus}>
                     <IconI name="heart" size={32} color={isFav ? Colors.A : Colors.E} style={{margin: -5}}/> 
                  </TouchableOpacity>
               </View>
            </View>
            <View style={styles.rating}>
               <View style={{width: '40%', alignItems: 'center'}}>
                  <CsText style={{
                     fontSize: 50,
                     alignSelf: "center",
                     fontFamily: 'K2D-ExtraBold',
                     lineHeight: 55
                  }}>{data.ratingResult.average}</CsText>
                  <View style={{flexDirection: 'row', gap: 5}}>
                     <Icon name="star" size={20} color={Colors.A}/>
                     <Icon name="star" size={20} color={Colors.A}/>
                     <Icon name="star" size={20} color={Colors.A}/>
                     <Icon name="star" size={20} color={Colors.A}/>
                     <Icon name="star" size={20} color={Colors.A}/>
                  </View>
                  <Text>{data.ratingResult.amount} ratings</Text>
               </View>
               <View style={{width: '55%'}}>
                  <StarLine point={data.ratingResult.percentFive}>5</StarLine>
                  <StarLine point={data.ratingResult.percentFour}>4</StarLine>
                  <StarLine point={data.ratingResult.percentThree}>3</StarLine>
                  <StarLine point={data.ratingResult.percentTwo}>2</StarLine>
                  <StarLine point={data.ratingResult.percentOne}>1</StarLine>
               </View>
            </View>
         </View>
         <NavigateBar tab={tabRes}/>
         <View style={styles.dashedLine}></View>
         {
            tabRes == 1 ? <RestaurantNewsletter onEndReached={handleEndReachedReviews} reviews={reviews}/> : null
         }
         {
            tabRes == 2 ? <RestaurantMenu restaurantId={id}/> : null
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