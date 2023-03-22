import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ReviewCardType } from "../../@types/ReviewCardType";
import RekomAxios from "../../api/axios";
import { RootState } from "../../app/store";
import { ReviewCard } from "../../components";
import { pushListMyReviewList } from "../../global-states";

interface ReviewListProps
{
  
}

function MyReviewList(props: ReviewListProps) 
{
  const dispatch = useDispatch()
  const reviews = useSelector((state: RootState) => state.myReviewList.reviewList)
  // const [reviews, setReviews] = useState<ReviewCardType[]>([])
  const [page, setPage] = useState(1);
  const size = 5

  useEffect(() => {
    RekomAxios({
       method: 'get',
       url: `rekomers/me/reviews?page=${page}&size=${size}`
    })
    .then(res => {
      dispatch(pushListMyReviewList(res.data.reviews))
      //  setReviews(pre => [...pre, ...res.data.reviews])
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