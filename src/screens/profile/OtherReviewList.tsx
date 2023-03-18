import { useEffect, useState } from "react";
import { FlatList } from "react-native"
import { ReviewCardType } from "../../@types/ReviewCardType";
import RekomAxios from "../../api/axios";
import { ReviewCard } from "../../components";

interface OtherReviewListProps
{
  rekomerId: string
}

function OtherReviewList(props: OtherReviewListProps)
{
  const [reviews, setReviews] = useState<ReviewCardType[]>([])

  const [page, setPage] = useState(1);
  const size = 5
  
  useEffect(() => {
     RekomAxios({
        method: 'get',
        url: `rekomers/${props.rekomerId}/reviews?page=${page}&size=${size}`
     })
     .then(res => {
        setReviews(res.data.reviews)
     })
     .catch(e => {
        console.log(e)
     })
  }, [size])

  const handleEndReach = () => {
    setPage(pre => pre + 1)
  }

  return (
    <FlatList 
      data={reviews}
      windowSize={5}
      style={{marginBottom: 50}}
      renderItem = {({item}) => <ReviewCard key={item.id} {...item}/>}
      onEndReached={handleEndReach}
      onEndReachedThreshold={3}
      keyExtractor={(item, index) => index.toString()}
    />
  )
}

export {OtherReviewList}