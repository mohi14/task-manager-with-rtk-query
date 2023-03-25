import React from 'react';
import ProjectList from './ProjectList';
import TeamMember from './TeamMember';

const Sidebar = () => {
    return (
        <div className="sidebar">

            <div>
                <h3 className="text-xl font-bold">Projects</h3>
                <div className="mt-3 space-y-4">
                    <ProjectList></ProjectList>
                    <ProjectList></ProjectList>
                    <ProjectList></ProjectList>
                    <ProjectList></ProjectList>
                    <ProjectList></ProjectList>
                </div>
            </div>


            <div className="mt-8">
                <h3 className="text-xl font-bold">Team Members</h3>
                <div className="mt-3 space-y-4">
                    <TeamMember></TeamMember>
                    <TeamMember></TeamMember>
                    <TeamMember></TeamMember>
                    <TeamMember></TeamMember>
                    <TeamMember></TeamMember>
                    <TeamMember></TeamMember>
                    <TeamMember></TeamMember>
                    <TeamMember></TeamMember>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;