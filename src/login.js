import * as React from 'react';
import fakeAuth from './fakeAuth';
import {Redirect} from 'react-router-dom';

class Login extends React.Component {
    state = {
        redirectToreferrer:false
    }

    login = () => {
        fakeAuth.authenticate(()=>{
            this.setState({ redirectToreferrer:true});
        });
    };

    render() {
        const { from } = this.props.location.state || {from:{pathname:"/"}};
        const {redirectToreferrer}=this.state;

        if(redirectToreferrer) {
            return <Redirect to={from} />;
        }

        return (
            <dv>
                <p>you must login to view this page</p>
                <button onClick={this.login}>Login</button>
            </dv>
        )

    }
}

export default Login;