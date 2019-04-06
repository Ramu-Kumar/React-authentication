import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { createStore } from 'redux';
import usersData from './Users.json';
import { Provider } from 'react-redux';
import setUsersReducer from './Store/Reducers/Reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connect } from 'react-redux';
import * as actions from './Store/Actions/Index';


const store = createStore(setUsersReducer, composeWithDevTools());

const currentUserData = localStorage.getItem("usersdata");

class RootApp extends React.Component {
    componentDidMount() {
        this.props.setUsersData(usersData);
        this.setCurrentUsersData(currentUserData)
    }
    setCurrentUsersData = (data) => {
        const userData = JSON.parse(data);
        if (userData) {
            this.props.setCurrentuser(userData)
        }
    }
    render() {
        return <App />
    }
};
const mapDispatchToProps = dispatch => ({
    setUsersData: (data) => dispatch(actions.setUsersData(data)),
    setCurrentuser: (data) => dispatch(actions.setCurrentUser(data))
});

const StoreRoot = withRouter(connect(null, mapDispatchToProps)(RootApp));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <StoreRoot />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
