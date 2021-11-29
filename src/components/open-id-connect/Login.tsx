import '@reach/dialog/styles.css';

import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GoogleLoginButton } from 'react-social-login-buttons';
import styled from 'styled-components';

import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { Dialog } from '@reach/dialog';

import { useAuth } from '../common/useAuth';

const StyledGoogleLoginButton = styled(GoogleLoginButton).attrs({
  iconSize: "16px",
})`
  max-width: 300px;
  & > div {
    font-size: 14px;
  }
`;

const Login: React.FC = () => {
  const user = useAuth().user;
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  });
  const auth = useAuth().auth;
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const navigate = useNavigate();
  const close = () => {
    setShowDialog(false);
    if (user === null) {
      navigate("/");
    }
  };
  const location = useLocation();

  useEffect(() => {
    open();
  }, []);

  return (
    <div>
      {/* <button onClick={open}>Open Dialog</button> */}
      <Dialog isOpen={showDialog} onDismiss={close} aria-label="dialog" style={{ border: "4px solid gray", background: "gray", maxWidth: "200px" }}>
        <StyledGoogleLoginButton
          onClick={async () => {
            try {
              await signInWithPopup(auth, provider);
              // const result = await signInWithPopup(auth, provider);
              // const credential = GoogleAuthProvider.credentialFromResult(result);
              // console.log("credential", credential);
              // console.log("user", result.user);
              // console.log("accessToken", credential?.accessToken);
              close();
              navigate((location && location.state) || "/");
            } catch (error) {
              console.log(error);
              navigate("/");
            }
          }}
        ></StyledGoogleLoginButton>
      </Dialog>
    </div>
  );
};

export { Login };
