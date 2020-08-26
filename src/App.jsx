import React from 'react';
import './App.css';
import Main from './components/Main';
import { BrowserRouter, Route } from 'react-router-dom';
import { LoginCallback, Security, SecureRoute } from '@okta/okta-react';
import { CALLBACK_PATH } from './constants';
import Auth from './components/Auth';

const config = {
  clientId: '0oas0vd8sRIQujOhv4x6',
  issuer: 'https://dev-820068.okta.com/oauth2/default',
  redirectUri: 'http://localhost:3000/implicit/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
            <Security {...config}>
              <Route path={CALLBACK_PATH} component={LoginCallback} />
              <Route path="/" component={Auth} />
              <SecureRoute path="/main" exact component={Main} />
            </Security>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
