import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { auth, userExists } from '../firebase/firebase';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthProvider } from '../components/AuthProvider';

export const LoginPage = () => {
  const navigate = useNavigate();
  // const [currentUser, setCurrentUser] = useState(null);
  /*
  0: inicializado
  1: loading
  2: login completo
  3: login pero sin registro
  4: no hay nadie logueado
  5: ya existe username
  6: nuevo username, click para continuar
  7: username no existe
  */
  const [state, setState] = useState(0);

  // useEffect(() => {
  //   setState(1);
  //   onAuthStateChanged(auth, async (user) => {
  //     if (user) {
  //       const isRegistered = await userExists(user.uid);
  //       if (isRegistered) {
  //         //TODO: redirigir a Dashboard
  //         setState(2);
  //         navigate('/dashboard')
  //       } else {
  //         //TODO: redirigir a Choose user
  //         setState(3);
  //         navigate('/choose-username')
  //       }
  //     } else {
  //       setState(4);
  //     }
  //   });
  // }, [navigate]);

  const handleOnClick = async () => {
    const signInWithGoogle = async (googleProvider) => {
      try {
        const res = await signInWithPopup(auth, googleProvider);
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    };
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);
  };

  const handleUserLoggedIn = (user) => {
    navigate('/dashboard');
  };
  const handleUserNotRegistered = (user) => {
    navigate('/choose-username');
  };
  const handleUserNotLoggedIn = () => {
    setState(4);
  };

  // if (state === 2) {
  //   return (<div>Estas autenticado y registrado</div>);
  // }
  // if (state === 3) {
  //   return (<div>Estas autenticado pero no registrado</div>);
  // }
  if (state === 4) {
    return (<button onClick={handleOnClick}>Registrarse con Google</button>);
  }

  return (
    <AuthProvider
      onUserLoggedIn={handleUserLoggedIn}
      onUserNotRegistered={handleUserNotRegistered}
      onUserNotLoggedIn={handleUserNotLoggedIn}
    >
      <div>Cargando...</div>
    </AuthProvider>
  );
}
