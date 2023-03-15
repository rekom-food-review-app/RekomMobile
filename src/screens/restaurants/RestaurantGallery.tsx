import { useEffect, useState } from "react"
import {View, FlatList} from "react-native"
import RekomAxios from "../../api/axios"
import { ImgGallery } from "../../components"

interface RestaurantGalleryProps
{
  ImageList: string[]
}

const RestaurantGallery = (props: RestaurantGalleryProps) => {
  // const [gallery, setGallery] = useState<string[]>([])
  // const [page, setPage] = useState(1);
  // const size = 10

  // useEffect(() => {
  //   RekomAxios({
  //     method: 'get',
  //     url: `restaurants/2/gallery?page=${page}&size=${size}`,
  //     responseType: 'json'
  //   })
  //   .then(res => {
  //     let gallery = res.data.gallery
  //     setGallery((pre) => {
  //       return pre.concat(gallery)
  //     })
  //   })
  //   .catch(e => {
  //     console.log(e)
  //   })
  // }, [page])

  // const handleEndReached = () => {
  //   setPage((prevPage) => prevPage + 1);
  // };
  
  return(
    <FlatList
      style={{width: '100%', borderTopRightRadius: 30, borderTopLeftRadius: 30,overflow: 'hidden'}}
      data={props.ImageList}
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