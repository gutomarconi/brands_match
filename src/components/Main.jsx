import React from 'react';
import PMQTable from './table/PMQTable';
import Button from '@material-ui/core/Button';
import { useOktaAuth } from '@okta/okta-react';

const Main = () => {
  const { authService } = useOktaAuth();
  const login = () => authService.logout();

  return (
    <div style={{ marginTop: "30px", width: "100%" }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <span style={{ padding: "1rem", marginRight: '20px'}}>Product Matching Queue</span>
        <Button
          style={{ backgroundColor: "grey", color: "white", padding: "10px", borderRadius: "20%", width: "100px" }}
          onClick={login}
        >
          Logout
        </Button>
      </div>
      <PMQTable />
    </div>
  )
};

export default Main;
