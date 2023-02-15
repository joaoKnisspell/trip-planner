//Router
import { Routes, Route } from 'react-router-dom';

//Pages
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import NewDestination from '../pages/NewDestination';
import NewTopic from '../pages/NewTopic';
import Destinations from '../pages/Destinations';
import Topic from '../pages/Topic';

//Rotas
import Private from './Private';

const RoutesApp = () => {
  return (
    <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />

        <Route path="/dashboard" element={<Private> <Dashboard/> </Private>} />

        <Route path="/destinations" element={<Private> <Destinations/> </Private> } />
        <Route path="/destinations/new" element={<Private> <NewDestination/> </Private> } />

        <Route path="/topics/new" element={<Private> <NewTopic/> </Private>} />
        <Route path="/topics/:id" element={<Private> <Topic/> </Private>} />
        <Route path="/topics/edit/:id" element={<Private> <NewTopic/> </Private>} />

        <Route path="/profile" element={<Private> <Profile/> </Private> } />
    </Routes>
  )
}

export default RoutesApp;