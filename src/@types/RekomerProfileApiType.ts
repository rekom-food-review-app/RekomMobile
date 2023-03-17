interface RekomerProfileApiType 
{
  id: string,
  username: string,
  avatarUrl: string,
  fullName: string,
  description: string,
  isFollow?: boolean,
  amountFollower: number,
  amountFollowing: number,
  amountReview: number
}
export {type RekomerProfileApiType}