import { useState } from "react"
import { Keyboard, View } from "react-native"
import { InputStateType } from "../../@types/InputStateType"
import RekomAxios from "../../api/axios"
import { Button, TextField } from "../../components"
import { inputInitState } from "../../constant/inputInitState"

interface CommentFormProps
{
  reviewId: string
}

function CommentForm(props: CommentFormProps)
{
  const [addComment, setAddComment] = useState<InputStateType>(inputInitState)

  const post = () => {
     Keyboard.dismiss()
     let data = {
        "content": addComment.value
     }
     RekomAxios({
        method: 'post',
        url: `reviews/${props.reviewId}/comments`,
        data
     })
     .then((res) => {
        console.log(res)
     })
     .catch((e) => {
        console.log(e)
     })
  }

  return (
    <View style={{paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', bottom: 0, right: 0, left: 0,paddingVertical: 10}}>
      <TextField 
          onChangeText={(text: string) => {setAddComment({error: "", value: text})}}
          placeholder={'Reply to this review'} 
          size={'md'} />
      <Button label={'Send'} type={'secondary'} size={'xs'} onPress={post} wrapperStyle={{alignSelf: 'center', height: "100%"}}/>
    </View>
  )
}

export {CommentForm}