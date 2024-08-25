import {createBrowserRouter} from 'react-router-dom'
import { Signin } from './pages/client/Registration/Signin';
import { Signup } from './pages/client/Registration/Signup';
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
    {
        path: '/client/signin',
        element: <Signin />   
    },
    {
        path: '/client/signup',
        element: <Signup />
    },
    {
        path: '*',
        element: <NotFound />
    }
]);



export {router}