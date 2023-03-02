import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProfileCard from "../../features/profileCard/profileCard";
import { loadUser } from "../../services/authentication";
import "./profile.css";

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);
  return <ProfileCard />;
};

export default Profile;
