import {View, FlatList} from "react-native"
import { ImgGallery } from "../../components"

interface RestaurantGalleryProps
{
  ImageList: ImgData[]
}

interface ImgData {
  id: string
  img: string
}

const DATA: ImgData[] = [
  {
    id: '1',
    img: 'https://i.pinimg.com/564x/18/ab/67/18ab67787ffa205cb5fae8a57f0d7541.jpg'
  }, 
  {
    id: '2',
    img: 'https://i.pinimg.com/564x/c8/0d/f6/c80df69ac838177f347d16b02c2d07c4.jpg'
  },
  {
    id: '3',
    img: 'https://i.pinimg.com/564x/f8/cb/eb/f8cbeb9300cee6c76f6de8f8a08e623f.jpg'
  },
  {
    id: '6',
    img: 'https://i.pinimg.com/564x/f8/cb/eb/f8cbeb9300cee6c76f6de8f8a08e623f.jpg'
  },
  {
    id: '4',
    img: 'https://i.pinimg.com/564x/18/ab/67/18ab67787ffa205cb5fae8a57f0d7541.jpg'
  }, 
  {
    id: '5',
    img: 'https://i.pinimg.com/564x/c8/0d/f6/c80df69ac838177f347d16b02c2d07c4.jpg'
  },
  {
    id: '8',
    img: 'https://i.pinimg.com/564x/c8/0d/f6/c80df69ac838177f347d16b02c2d07c4.jpg'
  },
  {
    id: '9',
    img: 'https://i.pinimg.com/564x/f8/cb/eb/f8cbeb9300cee6c76f6de8f8a08e623f.jpg'
  },
  {
    id: '7',
    img: 'https://i.pinimg.com/564x/18/ab/67/18ab67787ffa205cb5fae8a57f0d7541.jpg'
  }, 
]
const RestaurantGallery = (props: RestaurantGalleryProps) => {
  return(
    <FlatList 
      style={{width: '100%'}}
      data={DATA}
      numColumns={3}
      columnWrapperStyle={{alignItems: 'center', flex: 0.5, justifyContent: 'space-between', paddingBottom: 2}}
      renderItem = {({item}) => <ImgGallery img={item.img}/>}
      keyExtractor={item => item.id}
    />
  )
}
export {RestaurantGallery}