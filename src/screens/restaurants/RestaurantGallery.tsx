import { useEffect, useState } from "react"
import {FlatList} from "react-native"
import RekomAxios from "../../api/axios"
import { ImgGallery } from "../../components"

interface RestaurantGalleryProps
{
  restaurantId: string
}

const RestaurantGallery = (props: RestaurantGalleryProps) => {
  const [gallery, setGallery] = useState<string[]>([])
  const [galleryPage, setGalleryPage] = useState(1);
  const gallerySize = 10

  useEffect(() => {
    getGallery()
  }, [])

  const getGallery = () => {
    RekomAxios({
      method: 'get',
      url: `restaurants/${props.restaurantId}/gallery?page=${galleryPage}&size=${gallerySize}`,
      responseType: 'json'
    })
    .then(res => {
      setGallery((pre) => {
        return pre.concat(res.data.gallery)
      })
    })
    .catch(e => {
      console.log(e)
    })
  }

  return(
    <FlatList
      style={{width: '100%', borderTopRightRadius: 30, borderTopLeftRadius: 30,overflow: 'hidden'}}
      data={gallery}
      numColumns={3}
      columnWrapperStyle={{alignItems: 'center', flex: 0.5, justifyContent: 'space-between', paddingBottom: 2}}
      renderItem = {({item}) => <ImgGallery img={item} />}
      keyExtractor={item => item}
      // onEndReached={handleEndReached}
      onEndReachedThreshold={2}
    />
  )
}
export {RestaurantGallery}