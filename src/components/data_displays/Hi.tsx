import {StyleSheet, View} from 'react-native'
import {CsText} from './CsText'

interface HiProps {
   wrapperStyle?: any
   number: number
   label: string
}

const Hi = (props: HiProps) => {
   return (
      <View style={[props.wrapperStyle, defaultStyle.contain]}>
         <CsText style={{alignSelf: 'center'}} color={'A'} weight={'900'} size={'lg'}>{props.number}</CsText>
         <CsText style={{alignSelf: 'center'}} size={'xs'}>{props.label}</CsText>
      </View>
   )
}

const defaultStyle = StyleSheet.create({
   contain: {
      width: 'auto',
      paddingHorizontal: 20,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
   }
})

export {Hi}