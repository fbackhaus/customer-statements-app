import React from 'react';
import ReactDOM from 'react-dom';
import UserData from './UserData';
import UserDataStyles from './UserDataStyles';

ReactDOM.render(
  <React.StrictMode>
    <UserDataStyles>
      <UserData />
    </UserDataStyles>
  </React.StrictMode>,
  document.getElementById('root'),
);
