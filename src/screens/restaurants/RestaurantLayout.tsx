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
import {deleteFavorite, setResTab, setRestaurantInfoToInit} from '../../global-states'
import {RestaurantApiType} from '../../@types/RestaurantApiType';
import {restaurantApiInitState} from '../../constant/restaurantApiInitState';
import RekomAxios from '../../api/axios';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ReviewCardType } from '../../@types/ReviewCardType';
import { addFavorite, setRestaurantInfo, addReviewList, setReviewList } from '../../global-states';

const RestaurantLayout = () => {
   const tabRes = useSelector((state: RootState) => state.restaurantTab.tabRes)
   const dispatch = useDispatch()
 
   const nav = useNavigation<any>();

   const restaurant = useSelector((state: RootState) => state.selectedRestaurant)

   const route = useRoute()
   const [id, setId] = useState((route.params as any).id)   
   const [reactFavourite, setReactFavourite] = useState('')
   const [isFav, setIsFav] = useState<boolean>()

   const [reviews, setReviews] = useState<ReviewCardType[]>([])
   const [reviewPage, setReviewPage] = useState(1);
   const reviewSize = 4

   const [gallery, setGallery] = useState<string[]>([])
   const [galleryPage, setGalleryPage] = useState(1);
   const gallerySize = 4

   const changeFavStatus = () => {
      setIsFav(!isFav)
      
      let method = "post"
      if(isFav) { method = "delete" }
      
      RekomAxios({
         method: method,
         url: `favourite-restaurants`,
         data: {restaurantId: id}
      })
      .then(() => {
         if(method == 'post')
         {
            dispatch(addFavorite({
               id: restaurant.info.id,
               restaurantId: restaurant.info.id,
               restaurantName: restaurant.info.name,
               restaurantCoverImageUrl: restaurant.info.coverImageUrl,
               restaurantRatingAverage: restaurant.info.ratingResult.average 
            }))
         } else {
            dispatch(deleteFavorite(restaurant.info!.id))
         }
      })
      .catch(e =>{
         setIsFav(!isFav)
         console.log(e)
      })
   }
   
   useEffect(() => {
      getRestaurantInfo()

      return () => {
         dispatch(setReviewList([]))
         dispatch(setRestaurantInfoToInit())
      }
   }, [])

   const getGallery = () => {
      RekomAxios({
         method: 'get',
         url: `restaurants/${id}/gallery?page=${galleryPage}&size=${gallerySize}`,
         responseType: 'json'
       })
       .then(res => {
         setGallery((pre) => {
           return pre.concat(res.data.gallery)
         })
       })
       .catch(e => {
         console.log(e)
       })
   }

   useEffect(()=> {
      setIsFav(restaurant.info.isMyFav)
   },[restaurant.info.isMyFav])

   useEffect(() => {
      if(tabRes == 1)
      {
         getReviews()
      }
      else if (tabRes == 2)
      {
      }
      else if (tabRes == 3)
      {
         getGallery()
      }
   }, [tabRes, reviewPage])

   const getRestaurantInfo = () => {
      RekomAxios({
         method: 'get',
         url: `restaurants/${id}`,
         responseType: 'json'
      })
      .then(res => {
         dispatch(setRestaurantInfo(res.data.restaurant))
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
         url: `restaurants/${id}/reviews?page=${reviewPage}&size=${reviewSize}`,
         responseType: 'json'
      })
      .then(res => {
         dispatch(addReviewList(res.data.reviews))
         setReviews((pre) => {
            return pre.concat(res.data.reviews)
         })
      })
      .catch(e => {
         console.log(e)
      })
   }

   const handleEndReachedReviews = () => {
      setReviewPage((prevPage) => prevPage + 1);
   };

   if(!restaurant.info)
   {
      return (
         <View><CsText>loading...</CsText></View>
      )
   }

   return (
      <ScrollView style={{position: 'relative', width: '100%', backgroundColor: Colors.B}}>

         <HeaderBack type='primary' wrapperStyle={{position: 'absolute', padding: 20}}/>

         <Image source={{uri: restaurant.info.coverImageUrl}} style={styles.cover}/>
         <View style={styles.content}>
            <Text style={styles.resName}>{restaurant.info.name}</Text>
            <CsText>{restaurant.info.description}</CsText>
            <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15}}>
               <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10}}>
                  <CsText style={{alignSelf: 'center', fontWeight: '900', fontSize: 15}}>Awwward</CsText>
                  <Image source={require('../../assets/image/golden.png')} style={{width: 25, height: 25}}/>
               </View>
               <View style={{flexDirection: 'row', justifyContent: 'center', gap: 10, alignItems: 'center'}}>
                  <Button type={'primary'} size={'xs'} label={'new review'} onPress={() => nav.navigate('ReviewForm', {id: restaurant.info.id, name: restaurant.info.name, description: restaurant.info.description})}/>
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
                  }}>{restaurant.info.ratingResult.average}</CsText>
                  <View style={{flexDirection: 'row', gap: 5}}>
                     <Icon name="star" size={20} color={Colors.A}/>
                     <Icon name="star" size={20} color={Colors.A}/>
                     <Icon name="star" size={20} color={Colors.A}/>
                     <Icon name="star" size={20} color={Colors.A}/>
                     <Icon name="star" size={20} color={Colors.A}/>
                  </View>
                  <Text>{restaurant.info.ratingResult.amount} ratings</Text>
               </View>
               <View style={{width: '55%'}}>
                  <StarLine point={restaurant.info.ratingResult.percentFive}>5</StarLine>
                  <StarLine point={restaurant.info.ratingResult.percentFour}>4</StarLine>
                  <StarLine point={restaurant.info.ratingResult.percentThree}>3</StarLine>
                  <StarLine point={restaurant.info.ratingResult.percentTwo}>2</StarLine>
                  <StarLine point={restaurant.info.ratingResult.percentOne}>1</StarLine>
               </View>
            </View>
         </View>
         <NavigateBar tab={tabRes}/>
         <View style={styles.dashedLine}></View>
         {
            tabRes == 1 ? <RestaurantNewsletter onEndReached={handleEndReachedReviews} reviews={restaurant.reviewList}/> : null
         }
         {
            tabRes == 2 ? <RestaurantMenu restaurantId={id}/> : null
         }
         {
            tabRes == 3 ? <RestaurantGallery ImageList={gallery}/> : null
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