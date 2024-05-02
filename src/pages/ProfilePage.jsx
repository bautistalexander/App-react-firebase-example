import { useNavigate } from 'react-router-dom';
import { AuthProvider } from '../components/AuthProvider'
import { DashboardWrapper } from '../components/DashboardWrapper'
import { useRef, useState } from 'react';
import { getProfilePhotoUrl, setUserProfilePhoto, updateUser } from '../firebase/firebase';

export const ProfilePage = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [state, setState] = useState(0);
  const [profileUrl, setProfileUrl] = useState(null);
  const fileRef = useRef();

  const handleUserLoggedIn = async (user) => {
    setCurrentUser(user);
    const url = await getProfilePhotoUrl(user.profilePicture);
    setProfileUrl(url);
    setState(2);
  };
  const handleUserNotRegistered = (user) => {
    navigate('/login');
  };
  const handleUserNotLoggedIn = () => {
    navigate('/login');
  };

  const handleOpenFilePicker = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const handleChangeFile = (e) => {
    const files = e.target.files;
    const fileReader = new FileReader();

    if (fileReader && files && files.length > 0) {
      fileReader.readAsArrayBuffer(files[0]);
      fileReader.onload = async () => {
        const imageData = fileReader.result;

        const res = await setUserProfilePhoto(currentUser.uid, imageData);
        if (res) {
          const tmpUser = {...currentUser};
          tmpUser.profilePicture = res.metadata.fullPath;
          await updateUser(tmpUser);
          setCurrentUser({...tmpUser});
          const url = await getProfilePhotoUrl(currentUser.profilePicture);
          setProfileUrl(url);
        }
      };
    }
  };


  if (state !== 2) {
    return (
      <AuthProvider onUserLoggedIn={handleUserLoggedIn} onUserNotLoggedIn={handleUserNotLoggedIn} onUserNotRegistered={handleUserNotRegistered}>
      </AuthProvider>
    )
  }
  return (

    <DashboardWrapper>
      <div>
        <h2>Edit Profile Info</h2>
        <div>
          <img src={profileUrl} alt='' width={100} />
        </div>
        <div>
          <button onClick={handleOpenFilePicker}>Choose new profile picture</button>
          <input ref={fileRef} type='file' style={{ display: 'none' }} onChange={handleChangeFile} />
        </div>
      </div>
    </DashboardWrapper>

  )
}
