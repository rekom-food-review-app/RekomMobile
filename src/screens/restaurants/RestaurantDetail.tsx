import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, CsText, StarLine } from "../../components";
import Icon from 'react-native-vector-icons/FontAwesome'
import IconI from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Colors } from "../../assets/colors";
import { useEffect, useState } from "react";
import RekomAxios from "../../api/axios";
import { addFavorite, deleteFavorite, setResTab, setRestaurantInfo, setRestaurantInfoToInit, setReviewList } from "../../global-states";
import { useNavigation } from "@react-navigation/native";

interface RestaurantDetailProps
{
  id: string
}

function RestaurantDetail(props: RestaurantDetailProps)
{
  const dispatch = useDispatch()
  const nav = useNavigation<any>();

  const restaurant = useSelector((state: RootState) => state.selectedRestaurant)
  const [isFav, setIsFav] = useState<boolean>()
//   const [canReview, setCanReview] = useState<boolean>(restaurant.info.canReview)

  useEffect(() => {
    getRestaurantInfo()

    return () => {

    }
  }, [])

  useEffect(()=> {
    setIsFav(restaurant.info.isMyFav)
  },[restaurant.info.isMyFav])

  const getRestaurantInfo = () => {
    RekomAxios({
        method: 'get',
        url: `restaurants/${props.id}`,
        responseType: 'json'
    })
    .then(res => {
        dispatch(setRestaurantInfo(res.data.restaurant))
    })
    .catch(e => {
        console.log(e)
    })
  }

  const changeFavStatus = () => {
   setIsFav(!isFav)
   
   let method = "post"
   if(isFav) { method = "delete" }
    
   RekomAxios({
      method: method,
      url: `favourite-restaurants`,
      data: {restaurantId: props.id}
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

//   if(restaurant.info.id.length == 0)
//   {
//     return (
//         <View><CsText>loading...</CsText></View>
//     )
//   }

  return (
    <View>
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
                  <Button type={restaurant.info.canReview ? 'primary' : 'disable'} size={'xs'} label={'new review'} onPress={() => nav.navigate('ReviewForm', {id: restaurant.info.id, name: restaurant.info.name, description: restaurant.info.description})}/>
                  <TouchableOpacity onPress={changeFavStatus}>
                     <IconI name="heart" size={32} color={isFav ? Colors.A : Colors.F} style={{margin: -5, borderColor: Colors.B}}/> 
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
    </View>
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

export {RestaurantDetail}