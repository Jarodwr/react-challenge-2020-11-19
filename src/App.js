import { AppBar, Dialog, FlatButton } from 'material-ui';
import { connect } from 'react-redux'
import { login, signout, requestSignout, cancelSignoutRequest } from './redux/actions'

import './App.css';
import { getAuthState } from './redux/selectors';

const App = props => (
  <div>
    <AppBar
      title="Title"
      iconElementRight={
        props.loggedIn
          ? <FlatButton label="Sign out" onClick={props.requestSignout} />
          : <FlatButton label="Login" onClick={props.login} />}
    />
    <Dialog
      title="Are you sure you would like to sign out?"
      actions={[
        <FlatButton label="Yes" onClick={props.signout} />,
        <FlatButton label="No" onClick={props.cancelSignoutRequest} />
      ]}
      model={true}
      open={props.showSignoutConfirmationDialog}
    >
    </Dialog>
  </div>
);

// export default App;
export default connect(getAuthState, { login, signout, requestSignout, cancelSignoutRequest })(App)
