import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { existsUsername, getProfilePhotoUrl, getUserPublicProfileInfo } from '../firebase/firebase';
import { PublicLink } from '../components/PublicLink';

export const PublicProfilePage = () => {
  const params = useParams();
  const [profile, setProfile] = useState(null);
  const [url, setUrl] = useState('');
  const [state, setState] = useState(0);

  useEffect(() => {
    const getProfile = async () => {
      const username = params.username;
      try {
        const userUid = await existsUsername(username);
        if (userUid) {
          const userInfo = await getUserPublicProfileInfo(userUid);
          setProfile(userInfo);
          const urlImageInfo = await getProfilePhotoUrl(userInfo.profileInfo.profilePicture);
          setUrl(urlImageInfo);
        } else {
          setState(7);
        }

      } catch (error) {
        console.log(error);
      }
    }
    getProfile();
  }, [params]);


  if (state === 7) {
    return (
      <div>El nombre de usuario no existe</div>
    );
  }

  return (
    <div>
      <div>
        <img src={url} alt='' />
      </div>
      <h2>{profile?.profileInfo.username}</h2>
      <h3>{profile?.profileInfo.displayName}</h3>
      <div>
        {
          profile?.linksInfo.map((link) => (
            <PublicLink key={link.docId} url={link.url} title={link.title} />
          ))
        }
      </div>
    </div>
  )
}
