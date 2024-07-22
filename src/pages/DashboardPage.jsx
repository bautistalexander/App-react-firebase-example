import { v4 as uuidv4 } from 'uuid';

import { useState } from 'react';
import { AuthProvider } from '../components/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { DashboardWrapper } from '../components/DashboardWrapper';
import { deleteLink, getLinks, insertNewLink, updateLink } from '../firebase/firebase';
import { Link } from '../components/Link';

export const DashboardPage = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [username, setUsername] = useState('');
  const [state, setState] = useState(0);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [links, setLinks] = useState([]);


  const handleUserLoggedIn = async (user) => {
    setCurrentUser(user);
    setState(2);
    const resLinks = await getLinks(user.uid);
    setLinks([...resLinks]);
  };
  const handleUserNotRegistered = (user) => {
    navigate('/login');
  };
  const handleUserNotLoggedIn = () => {
    navigate('/login');
  };

  if (state === 0) {
    return (
      <AuthProvider
        onUserLoggedIn={handleUserLoggedIn}
        onUserNotRegistered={handleUserNotRegistered}
        onUserNotLoggedIn={handleUserNotLoggedIn}
      >
        Loading
      </AuthProvider>
    )
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addLink();
  };

  const addLink = () => {
    if (title !== '' && url !== '') {
      const newLink = {
        id: uuidv4(),
        title: title,
        url: url,
        uid: currentUser.uid
      };
      const res = insertNewLink(newLink);
      newLink.docId = res.id;
      setTitle('');
      setUrl('');
      setLinks([...links, newLink]);
    }
  };

  const handleOnChange = (e) => {
    const value = e.target.value;
    if (e.target.name === 'title') {
      setTitle(value);
    }
    if (e.target.name === 'url') {
      setUrl(value);
    }
  };

  const handleDeleteLink = async (docId) => {
    await deleteLink(docId);
    const tmp = links.filter((link) => link.docId !== docId)
    setLinks([...tmp]);
  };
  const handleUpdateLink = async (docId, title, url) => {
    const link = links.find(item => item.docId === docId);
    link.title = title;
    link.url = url;
    await updateLink(docId, link);
  };
  return (
    <DashboardWrapper>
      <div>
        <h1>Dashboard</h1>
        <form onSubmit={handleOnSubmit}>
          <label htmlFor='title'>Título</label>
          <input type='text' name='title' onChange={handleOnChange} />

          <label htmlFor='url'>Url</label>
          <input type='text' name='url' onChange={handleOnChange} />

          <input type='submit' value='Crear nuevo Link' />
        </form>

        <div>
          {
            links.map((link) => (
              <Link
                key={link.id}
                docId={link.docId}
                url={link.url}
                title={link.title}
                onDelete={handleDeleteLink}
                onUpdate={handleUpdateLink} 
              />
            ))
          }
        </div>
      </div>
    </DashboardWrapper>
  );
}
