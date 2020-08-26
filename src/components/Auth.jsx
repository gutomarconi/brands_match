import { useOktaAuth } from '@okta/okta-react';
import React from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Auth = () => {
  const { authState, authService } = useOktaAuth();
  const login = () => authService.login('/profile');

  if (authState.isPending) {
    return (
      <div>Loading authentication...</div>
    );
  } else if (!authState.isAuthenticated) {
    return (
      <div>
        <h1>Hello there!</h1>
        <Button
          style={{ backgroundColor: "green", color: "white", padding: "10px", borderRadius: "20%", width: "100px" }}
          onClick={login}
        >
          Login
        </Button>
      </div>
    );
  } else {
    return <Redirect to="/main"/>
  }
};
export default Auth;
