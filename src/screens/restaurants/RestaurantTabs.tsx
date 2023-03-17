import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { NavigateBar } from "./NavigateBar"
import { RestaurantGallery } from "./RestaurantGallery"
import { RestaurantInfo } from "./RestaurantInfo"
import { RestaurantMenu } from "./RestaurantMenu"
import { RestaurantNewsletter } from "./RestaurantNewsletter"

interface RestaurantTabsProps 
{
  id: string
}

function RestaurantTabs(props: RestaurantTabsProps)
{
  const tabRes = useSelector((state: RootState) => state.restaurantTab.tabRes)

  return (
    <>
      <NavigateBar tab={tabRes}/>
      {
          tabRes == 1 ? <RestaurantNewsletter restaurantId={props.id}/> : null
      }
      {
          tabRes == 2 ? <RestaurantMenu restaurantId={props.id}/> : null
      }
      {
          tabRes == 3 ? <RestaurantGallery restaurantId={props.id}/> : null
      }
      {
          tabRes == 4 ? <RestaurantInfo/> : null
      }
    </>
  )
}

export {RestaurantTabs}