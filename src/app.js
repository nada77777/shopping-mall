import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from './components/banner';
import Header from './components/header';
import { AuthContextProvider } from './context/auth_context';


const App = (props) => {
    return (
        <>
            <AuthContextProvider>
                <Header />
                <Banner />
                <Outlet />
            </AuthContextProvider>
        </>

    );
};

export default App;

//fQ85ibuTOdSBY3uXzmNWY0NUDrv1