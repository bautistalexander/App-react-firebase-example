import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useEffect } from 'react';
import { useState } from 'react';

export const LoginPage = () => {
  const [currentUser, setCurrentUser] = useState(null);
  /*
  0: inicializado
  1: loading
  2: login completo
  3: login pero sin registro
  4: no hay nadie logueado
  */
  const [state, setState] = useState(0);

  useEffect(() => {
    setState(1);
    onAuthStateChanged(auth, handleUserStateChange);
  }, []);

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


  const handleUserStateChange = (user) => {
    if (user) {
      setState(3);
      console.log(user.displayName);
    } else {
      setState(4);
      console.log('No nadie autenticado')
    }
  }; 

  if (state === 1) {
    return (
      <div>Loading...</div>
    );
  }
  if (state === 3) {
    return (
      <div>Estas autenticado pero no registrado</div>
    );
  }
  if (state === 4) {
    return (
      <div>
        <button onClick={handleOnClick}>Login with Google</button>
      </div>
    )
  }
}
