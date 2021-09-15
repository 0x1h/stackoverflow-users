import Badges from "./BadgesProps"

interface UserStats {
  username: string;
  location: string;
  reputation: string; 
  image: string;
  WebComponent?: JSX.Element;
  Badges?: JSX.Element
}

type UserProps =  UserStats & Badges

export default UserProps 