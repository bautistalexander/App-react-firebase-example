import { useState } from 'react';
import { AuthProvider } from '../components/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { existsUsername, updateUser } from '../firebase/firebase';

export const ChooseUserPage = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [username, setUsername] = useState('');

  /*
  0: inicializado
  1: loading
  2: login completo
  3: login pero sin registro
  4: no hay nadie logueado
  5: ya existe username
  6: nuevo username, click para continuar
  */
  const [state, setState] = useState(0);

  const handleUserLoggedIn = (user) => {
    navigate('/dashboard');
  };
  const handleUserNotRegistered = (user) => {
    setCurrentUser(user)
    setState(3);
  };
  const handleUserNotLoggedIn = () => {
    navigate('/login');
  };

  const handleInputUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleContinue = async () => {
    if (username !== '') {
      const exists = await existsUsername(username);
      if (exists) {
        setState(5);
      } else {
        const tmp = { ...currentUser };
        tmp.username = username;
        tmp.processCompleted = true;
        await updateUser(tmp);
        setState(6);
      }
    }
  };

  if (state === 3 || state === 5) {
    return (
      <div>
        <h1>Bienvenido {currentUser.displayName}</h1>
        <p>Para terminar el proceso elige un nombre de usuario</p>
        {
          state === 5 ? (<p>El nombre de usuario ya existe, escoge otro</p>) : ''
        }
        <div>
          <input type='text' onChange={handleInputUsername} />
        </div>
        <div onClick={handleContinue}>
          <button>Continue</button>
        </div>
      </div>
    );

  }
  if (state === 6) {
    return (
      <div>
        <h1>Felicidades ya puedes ir al Dashboard a crear tus links</h1>
        <Link to='/dashboard'>Continuar</Link>
      </div>
    );
  }
  return (
    <AuthProvider
      onUserLoggedIn={handleUserLoggedIn}
      onUserNotRegistered={handleUserNotRegistered}
      onUserNotLoggedIn={handleUserNotLoggedIn}
    >
      <div>Loading...</div>
    </AuthProvider>
  );
}
