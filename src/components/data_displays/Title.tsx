import {TouchableOpacity, View} from 'react-native'
import { Colors } from '../../assets/colors'
import { CsText } from './CsText'

interface TitleProps
{
  wrapperStyle?: any
  titleName: string
  onPress?: () => void
}

const Title = (props: TitleProps) => {
  return(
    <View style={[{flexDirection: 'row', justifyContent: 'space-between'}, props.wrapperStyle]}>
      <CsText weight={800} size={'md'} style={{marginBottom: 10}}>{props.titleName}</CsText>
      <TouchableOpacity onPress={props.onPress}>
        <CsText size={"xs"} style={{color: Colors.A}}>see more</CsText>
      </TouchableOpacity>
    </View>
  )
}

export {Title}