import {Image, StyleSheet} from "react-native";

interface ImgGalleryProps {
   wrapperStyle?: any
   img: string
}

const ImgGallery = (props: ImgGalleryProps) => {
   return (
      <Image source={{uri: props.img}} style={defaultStyle.img}/>
   )
}

const defaultStyle = StyleSheet.create({
   img: {
      width: '33%',
      height: 170,
   }
})

export {ImgGallery}