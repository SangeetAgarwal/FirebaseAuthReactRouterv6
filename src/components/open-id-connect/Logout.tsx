import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { signOut } from '@firebase/auth';

import { useAuth } from '../common/useAuth';

const Logout: React.FC = () => {
  const auth = useAuth().auth;
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        await signOut(auth);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    })();
  }, [auth, navigate]);
  return <></>;
};

export { Logout };