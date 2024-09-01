import {createBrowserRouter} from 'react-router-dom'
import { Signin } from './pages/client/Registration/Signin';
import { Signup } from './pages/client/Registration/Signup';
import NotFound from './pages/NotFound'
import { Registration } from './pages/client/Registration';
import { Main } from './pages/client';
import { Home } from './pages/client/Home';
import { Forget } from './pages/client/Registration/Forget';
import { FEmail } from './pages/client/Registration/Forget/FEmail';
import { Verify } from './pages/client/Registration/Forget/Verify';
import { Change } from './pages/client/Registration/Forget/Change';

const router = createBrowserRouter([
    {
        path: '/client',
        element: <Main/>,
        children: [
            {
                path: 'registration',
                element: <Registration />,
                children: [
                    {
                        path: 'signin',
                        element: <Signin />   
                    },
                    {
                        path: 'signup',
                        element: <Signup />
                    },
                    {
                        path: 'forget',
                        element: <Forget />,
                        children: [
                            {
                                path: 'email',
                                element: <FEmail />
                            },
                            {
                                path: "verify",
                                element: <Verify />
                            },
                            {
                                path: 'change',
                                element: <Change />
                            }
                        ]
                    }
                ]
            },
            {
                path: 'home',
                element: <Home />,
                children: [
                    
                ]
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]);



export {router}