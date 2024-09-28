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
import { HomeMain } from './pages/client/Home/Main/HomeMain';
import { Admin } from './pages/admin';
import { AdminAuthLoader } from './loader/admin/auth';
import { UserMain } from './pages/admin/User';
import { MovieMain } from './pages/admin/Movies';
import { Profile } from './pages/client/Home/Profile/ProfileMain';
import { Settings } from './components/client/Profile/Settings/Settings';
import { Plans } from './components/client/Plans/Plans';
import { Billing } from './components/client/Plans/Billing/Billing';
import { VideoMain } from './pages/client/Home/Watch/VideoMain';
import { MoviesMain } from './pages/client/Home/Movies/MovieMain';
import { MoviesContainer } from './components/client/Movie/MoviesContainer/MoviesContainer';

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
                    {
                        path: 'a',
                        element: <HomeMain />
                    },
                    {
                        path: 'profile',
                        element: <Profile />,
                        children: [
                            {
                                path: 'favourite',
                                element: <h1>Favourite</h1>
                            },
                            {
                                path: 'history',
                                element: <h1>History</h1>
                            },
                            {
                                path: 'playlist',
                                element: <h1>Playlist</h1>
                            },
                            {
                                path: 'watchlist',
                                element: <h1>Watchlist</h1>
                            },
                            {
                                path: 'settings',
                                element: <Settings />
                            }
                        ]
                    },
                    {
                        path: "plans",
                        element: <Plans />
                    },
                    {
                        path: "billing",
                        element: <Billing />
                    },
                    {
                        path: 'video/:movieid',
                        element: <VideoMain />
                    },
                    {
                        path: "movies",
                        element: <MoviesMain />,
                        children: [
                          {
                            path: ":genre", 
                            element: <MoviesContainer />
                          },
                          {
                            path: ":genre/:year", 
                            element: <MoviesContainer />
                          }
                        ]
                    }
                ]
            }
        ]
    },
    {
        path: '/admin',
        element: <Admin />,
        loader: AdminAuthLoader,
        children: [
            {
                path: 'dashboard',
                element: <h1>Dashboard</h1>
            },
            {
                path: 'users',
                element: <UserMain />
            },
            {
                path: 'movies',
                element: <MovieMain />
            },
            {
                path: 'actors',
                element: <h1>Actors</h1>
            }
        ],
    },
    {
        path: '*',
        element: <NotFound />
    }
]);



export {router}