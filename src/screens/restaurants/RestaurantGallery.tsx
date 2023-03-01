import { useEffect, useState } from "react"
import {View, FlatList} from "react-native"
import RekomAxios from "../../api/axios"
import { ImgGallery } from "../../components"

interface RestaurantGalleryProps
{
  ImageList: string[]
}

const RestaurantGallery = (props: RestaurantGalleryProps) => {
  const [gallery, setGallery] = useState<string[]>([])

  useEffect(() => {
    RekomAxios({
      method: 'get',
      url: 'restaurants/2/gallery',
      responseType: 'json'
    })
    .then(res => {
      let gallery = res.data.gallery
      console.log(gallery)
      setGallery(gallery)
    })
    .catch(e => {
      console.log(e)
    })
  }, [])
  return(
    <FlatList
      style={{width: '100%', borderTopRightRadius: 30, borderTopLeftRadius: 30,overflow: 'hidden'}}
      data={gallery}
      numColumns={3}
      columnWrapperStyle={{alignItems: 'center', flex: 0.5, justifyContent: 'space-between', paddingBottom: 2}}
      renderItem = {({item}) => <ImgGallery img={item} />}
      keyExtractor={item => item}
    />
  )
}
export {RestaurantGallery}