import {StyleSheet, View} from 'react-native'
import { Colors } from '../../assets/colors'
import { CsText } from '../data_displays'

interface SelectDateProps
{
  day ?: number
  month ?: number
  year ?: number
}

const SelectDate = (props: SelectDateProps) => {
  return(
    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
      <View style={styles.date}><CsText style={{alignSelf: 'center', lineHeight: 40}} color= 'C'>Day: {props.day ? props.day : 'day'}</CsText></View>
      <View style={styles.date}><CsText style={{alignSelf: 'center', lineHeight: 40}} color= 'C'>Month: {props.month ? props.month : 'month'}</CsText></View>
      <View style={styles.date}><CsText style={{alignSelf: 'center', lineHeight: 40}} color= 'C'>Year: {props.year ? props.year : 'year'}</CsText></View>
    </View>

  )
}
const styles = StyleSheet.create({
  date: {
    width: '30%',
    height: 45, 
    borderWidth: 1,
    borderColor: Colors.C,
    borderRadius: 25
  }
})
export {SelectDate}