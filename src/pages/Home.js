import React from 'react';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';
import Sidebar from '../components/Sidebar';

const Home = () => {
    return (
        <div className="container relative">
            <Sidebar></Sidebar>
            <ProjectDetails></ProjectDetails>
        </div>
    );
};

export default Home;