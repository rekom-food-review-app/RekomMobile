import { TouchableOpacity, Image, Text, StyleSheet, ImageSourcePropType, View } from "react-native"
import { Colors } from "../../assets/colors"

interface IconButtonProps {
  wrapperStyle ?: any
  children?: any
  size: keyof typeof size
  typeBtn: keyof typeof typeBtn
  onPress ?: () => void
  source: ImageSourcePropType
  iconStyle?: any
}

const IconButton = (props: IconButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[defaultStyle.wrapper, props.wrapperStyle, size[props.size].contain, typeBtn[props.typeBtn].status]}>
      <View style={[defaultStyle.containEmoij, props.iconStyle]}>
        <Image source={props.source} style={[defaultStyle.emoij, size[props.size].emoij]}/>
        <Text style={[typeBtn[props.typeBtn].text, {fontWeight: '600', backgroundColor: 'rgba(52, 52, 52, 0)'}]}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  )
}

const defaultStyle = StyleSheet.create<any>({
  wrapper: {
    borderRadius: 100
  },
  containEmoij: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
    alignItems: 'center',
    overflow: "hidden"
  },
  emoij: {
    width: 21,
    height: 21,
    resizeMode: 'cover',
    alignSelf: 'center',
    flexDirection: 'row'
  }
})


const size = {
  sm : StyleSheet.create<any>({
    contain: {
      paddingVertical: 4,
      paddingHorizontal: 8,
    }
  }),
  md : StyleSheet.create({
    contain: {
      paddingVertical: 5,
      paddingHorizontal: 12,
    },
    emoij: {
      width: 28,
      height: 28,
    }
  }),
  lg : StyleSheet.create({
    contain: {
      paddingVertical: 7,
      paddingHorizontal: 14,
    }
  })
}
const typeBtn = {
  active : StyleSheet.create({
    status: {
      backgroundColor: Colors.A,
      borderWidth: 1,
      borderColor: Colors.B,
    },
    text: {
      color: Colors.B
    }
  }),
  inactive : StyleSheet.create({
    status: {
      backgroundColor: Colors.B,
      borderWidth: 1,
      borderColor: Colors.C,
    },
    text: {
      color: Colors.D
    }
  }),
  noBoder : StyleSheet.create({
    status: {
      backgroundColor: Colors.B,
    },
    text: {
      color: Colors.D
    }
  }),
  dot : StyleSheet.create({
    status: {
      backgroundColor: Colors.B,
    },
    text: {
      color: Colors.D
    }
  }),
}
export {IconButton}