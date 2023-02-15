import { Image, StyleSheet } from "react-native";

interface AvatarProps
{
  size?: keyof typeof size,
  wrapperStyle?: any
}

function Avatar(props: AvatarProps)
{
  return (
    <Image style={[defaultStyle.img, size[props.size || 'md'].img, props.wrapperStyle]} source={{uri: "https://images.unsplash.com/photo-1675416864738-373085409a19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}}/>
  )
}

const defaultStyle = StyleSheet.create({
  img: {
    borderRadius: 200
  }
})

const size = {
  xs: StyleSheet.create<any>({
    img: {
      width: 35,
      height: 35    
    }
  }),
  sm: StyleSheet.create<any>({
    img: {
      width: 40,
      height: 40
    }
  }),
  md: StyleSheet.create<any>({
    img: {
      width: 50,
      height: 50
    }
  }),
  lg: StyleSheet.create<any>({
    img: {
      width: 120,
      height: 120
    }
  }),
  xl: StyleSheet.create<any>({
    img: {
      width: 150,
      height: 150
    }
  })
}

export {Avatar}