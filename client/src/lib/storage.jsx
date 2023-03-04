import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";
import { setError, setReloadUser } from "../store/reducers/auth/auth";
import { app } from "./firebase";

export const handleUpload = (file, filename, setPercent, dispatch) => {
  try {
    if (!file) {
      dispatch(setError("Please upload an image first!"));
    } else {
      const storageRef = ref(getStorage(app), `/profile/${filename}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setPercent(percent);
        },
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref);
        }
      );
      dispatch(setReloadUser());
    }
  } catch (err) {
    console.log(err);
    dispatch(setError(err.message));
  }
};
