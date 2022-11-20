import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from './components/banner';
import Header from './components/header';

const App = (props) => {
    return (
        <>
            <Header />
            <Banner />
            <Outlet />
        </>
    );
};

export default App;