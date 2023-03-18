import { useState } from 'react';
import {ScrollView} from 'react-native-virtualized-view'
import {Colors} from '../../assets/colors'
import {CsOtherProfile} from "./OtherProfileHeader";
import { useRoute } from '@react-navigation/native';
import { OtherReviewList } from './OtherReviewList';

const OtherProfile = () => {
   const route = useRoute()
   const [id, _] = useState<any>(route.params)

   return (
      <ScrollView style={{backgroundColor: Colors.B}}>
         <CsOtherProfile rekomerId={id}/>
         <OtherReviewList rekomerId={id}/>
      </ScrollView>
   )
}

export {OtherProfile}