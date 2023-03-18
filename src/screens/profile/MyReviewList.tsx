import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { ReviewCardType } from "../../@types/ReviewCardType";
import RekomAxios from "../../api/axios";
import { ReviewCard } from "../../components";

interface ReviewListProps
{
  
}

function MyReviewList(props: ReviewListProps) 
{
  const [reviews, setReviews] = useState<ReviewCardType[]>([])
  const [page, setPage] = useState(1);
  const size = 5

  useEffect(() => {
    RekomAxios({
       method: 'get',
       url: `rekomers/me/reviews?page=${page}&size=${size}`
    })
    .then(res => {
       setReviews(res.data.reviews)
    })
    .catch(e => {
       console.log(e)
    })
  }, [page])

  const handleEndReached = () => {
    setPage((pre) => pre + 1)
  }

  return (
    <FlatList 
      data={reviews}
      windowSize={5}
      style={{marginBottom: 50, gap: 20}}
      renderItem = {({item}) => <ReviewCard key={item.id} {...item}/>}
      onEndReachedThreshold={3}
      keyExtractor={(item, index) => index.toString()}
      onEndReached={handleEndReached}
    />
  )
}

export {MyReviewList}