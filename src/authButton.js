import * as React from 'react';
import {withRouter} from 'react-router-dom';
import fakeAuth from './fakeAuth'

const AuthButton = withRouter(
    ({history}) => 
    fakeAuth.isAuthenticated ?
    (<p>
        <button onClick={()=>{
                fakeAuth.signout(()=>history.push("/"));
        }}
        >
            signout
        </button>
    </p>)
    :
    (
        <p>You are not logged in.</p>
    )
);


export default AuthButton;