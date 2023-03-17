import {Colors} from '../../assets/colors'
import {ScrollView} from 'react-native-virtualized-view';
import { HeaderBack } from '../../components'
import { useRoute } from '@react-navigation/native';
import { RestaurantDetail } from './RestaurantDetail';
import { RestaurantTabs } from './RestaurantTabs';
import { useDispatch } from 'react-redux';
import { setResTab, setRestaurantInfoToInit, setReviewList } from "../../global-states";
import { useEffect } from 'react';

const RestaurantLayout = () => {
   const id = (useRoute().params as any).id
   const dispatch = useDispatch()

   useEffect(() => {
      return () => {
         dispatch(setResTab(1))
         dispatch(setRestaurantInfoToInit())
         dispatch(setReviewList([]))
      }
   }, [])

   return (
      <ScrollView style={{position: 'relative', width: '100%', backgroundColor: Colors.B}}>
         <HeaderBack type='primary' wrapperStyle={{position: 'absolute', padding: 20}}/>
         <RestaurantDetail id={id}/>
         <RestaurantTabs id={id}/>
      </ScrollView>
   )
}

export {RestaurantLayout}