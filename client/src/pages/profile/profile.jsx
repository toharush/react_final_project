import { useSelector } from "react-redux";
import ProfileCard from "../../features/profileCard/profileCard";
import { getCurrentUser } from "../../store/selectors/selectors";
import FourOFour from "../404/404";
import "./profile.css";

const Profile = () => {
  const user = useSelector(getCurrentUser);
  return user ? <ProfileCard /> : <FourOFour errorNumber="404" />;
};

export default Profile;
