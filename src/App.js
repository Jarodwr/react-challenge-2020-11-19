import { useState } from 'react'
import { AppBar, Dialog, FlatButton } from 'material-ui';

import './App.css';

function App() {
  const [state, setState] = useState({
    loggedIn: false,
    dialogOpen: false
  });

  const login = () => setState({
    ...state,
    loggedIn: true
  })

  const signout = () => setState({
    ...state,
    loggedIn: false,
    dialogOpen: false
  })

  const openSignoutDialog = () => setState({
    ...state,
    dialogOpen: true
  })

  const closeSignoutDialog = () => setState({
    ...state,
    dialogOpen: false
  })

  return (
    <div>
      <AppBar
        title="Title"
        iconElementRight={
          state.loggedIn
            ? <FlatButton label="Sign out" onClick={openSignoutDialog} />
            : <FlatButton label="Login" onClick={login} />}
      />
      <Dialog
        title="Are you sure you would like to sign out?"
        actions={[
          <FlatButton label="Yes" onClick={signout} />,
          <FlatButton label="No" onClick={closeSignoutDialog} />
        ]}
        model={true}
        open={state.dialogOpen}
      >
      </Dialog>
    </div>
  );
}

export default App;
