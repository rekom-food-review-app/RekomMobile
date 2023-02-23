import { OtherProfileApiType } from "../@types/OtherProfileApiType";

const otherProfileApiInitState: OtherProfileApiType =
{
  id: '',
  username: '',
  avatarUrl: '',
  fullName: '',
  description: '',
  isFollowed: false,
  totalFollowers: 0,
  totalFollowings: 0,
  totalReviews: 0
}
export {otherProfileApiInitState}