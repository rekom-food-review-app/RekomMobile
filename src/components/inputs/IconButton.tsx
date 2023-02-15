import { TouchableOpacity, Image, Text, StyleSheet } from "react-native"
import { Colors } from "../../assets/colors"

interface IconButtonProps {
  wrapperStyle ?: any
  children: number
  source: string
  size: keyof typeof size
  typeBtn: keyof typeof typeBtn
  onPress ?: () => void
}

const IconButton = (props: IconButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[defaultStyle.containEmoij, props.wrapperStyle, size[props.size].contain, typeBtn[props.typeBtn].status]}>
      <Image source={{uri:(props.source)}} style={defaultStyle.emoij}/>
      <Text style={[typeBtn[props.typeBtn].status, {fontWeight: '600', backgroundColor: 'rgba(52, 52, 52, 0)'}]}>{props.children}</Text>
    </TouchableOpacity>
  )
}

const defaultStyle = StyleSheet.create({
  containEmoij: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 4,
    alignItems: 'center',
    borderRadius: 100,
  },
  emoij: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
    alignSelf: 'center',
    flexDirection: 'row'
  }
})
const size = {
  sm : StyleSheet.create<any>({
    contain: {
      height: 30,
      paddingHorizontal: 10,
    }
  }),
  md : StyleSheet.create({
    contain: {
      paddingHorizontal: 15,
      height: 30
    }
  }),
  lg : StyleSheet.create({
    contain: {
      paddingHorizontal: 15,
      height: 35
    }
  })
}
const typeBtn = {
  active : StyleSheet.create({
    status: {
      backgroundColor: Colors.A,
      color: Colors.B
    }
  }),
  inactive : StyleSheet.create({
    status: {
      backgroundColor: Colors.F,
      color: Colors.D
    }
  }),
}
export {IconButton}