// React imports
import React from 'react';

// Custom imports
import HomePage from './HomePage';
import AboutPage from './AboutPage';

function App() {
    const route = window.location.pathname;
    if (route == '/about') {
        return <AboutPage />;
    }
    else {
        return <HomePage />;
    }
}

export default App;