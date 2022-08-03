import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom';

import Login from './pages/LoginPage';
import Signup from './pages/SignupPage';
import Home from './pages/HomePage';
import MyPublications from './pages/MyPublicationsPage';
import Create from './pages/CreatePage';
import Update from './pages/UpdatePage';

function AppRoutes() {

    const Private = (props) => {
        const user = localStorage.getItem('user');

        if(user) {
            return props.children;
        } else {
            return <Navigate to="/login"/>
        }
    }

    return (
        <Router>
            <Routes>
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/signup' element={<Signup />} />
                <Route exact path='/' element={<Private><Home /></Private>} />
                <Route exact path='/mypublications' element={<Private><MyPublications /></Private>} />
                <Route exact path='/create' element={<Private><Create /></Private>} />
                <Route exact path='/update/:vehicleId' element={<Private><Update /></Private>} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;