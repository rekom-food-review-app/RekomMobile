import { useEffect, useState } from 'react';
import {ScrollView} from 'react-native-virtualized-view'
import {Colors} from '../../assets/colors'
import {OtherProfileHeader} from "./OtherProfileHeader";
import { useRoute } from '@react-navigation/native';
import { OtherReviewList } from './OtherReviewList';

const OtherProfile = () => {
   const route = useRoute()
   const [id, _] = useState<string>((route.params as any).rekomerId)

   useEffect(() => {
      console.log(id)
   }, [id])

   return (
      <ScrollView style={{backgroundColor: Colors.B}}>
         <OtherProfileHeader rekomerId={id}/>
         <OtherReviewList rekomerId={id}/>
      </ScrollView>
   )
}

export {OtherProfile}