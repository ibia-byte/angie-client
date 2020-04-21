import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AdminPage } from './AdminPage';
import { LoginPage } from './LoginPage';
import { VolunteerPage } from './VolunteerPage';
import { TeamleadPage } from './TeamleadPage';


class Redirect extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null,
            isAdmin: false
        };
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({
            currentUser: x,
            isAdmin: x && x.role === Role.Admin
        }));
    }

    logout() {
        authenticationService.logout();
        history.push('/login');
    }

    render() {
        const { currentUser, isAdmin } = this.state;
        return (
            <Router history={history}>
                <div>
                    {currentUser &&
                        
                            <div className="navbar-nav">
                                <Link to="/">Home</Link>
                                {isAdmin && <Link to="/admin" >Admin</Link>}
                                <a onClick={this.logout}>Logout</a>
                            </div>
                        
                    }
                    
                                    <PrivateRoute exact path="/" component={HomePage} />
                                    <PrivateRoute path="/admin" roles={[Role.Admin]} component={AdminPage} />
                                    <PrivateRoute path="/volunteer" roles={[Role.Volunteer]} component={VolunteerPage} />
                                    <PrivateRoute path="/teamlead" roles={[Role.Teamlead]} component={TeamleadPage} />
                                    <Route path="/login" component={LoginPage} />
                                </div>
            </Router>
        );
    }
}

export { Redirect }; 