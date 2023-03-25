import React from 'react';
import { useGetProjectsQuery } from '../features/projects/projectsApi';
import { useGetTeamMemberQuery } from '../features/teamMember/teamMemberApi';
import ProjectList from './ProjectList';
import TeamMember from './TeamMember';

const Sidebar = () => {
    const { data: projects, isLoading, isError, error } = useGetProjectsQuery()
    console.log(projects)
    const { data: teams } = useGetTeamMemberQuery()
    console.log(teams)
    return (
        <div className="sidebar">

            <div>
                <h3 className="text-xl font-bold">Projects</h3>
                <div className="mt-3 space-y-4">
                    {isLoading && !isError && <div>Loading....</div>}
                    {!isLoading && isError && <div>{error}</div>}
                    {!isLoading && !isError && projects?.length === 0 && <div>No Project Found</div>}
                    {!isLoading && !isError && projects.length > 0 && projects.map((project, idx) => <ProjectList key={idx} project={project}></ProjectList>)}

                </div>
            </div>


            <div className="mt-8">
                <h3 className="text-xl font-bold">Team Members</h3>
                <div className="mt-3 space-y-4">
                    {teams?.length === 0 && <div>No Teams Found</div>}
                    {teams && teams.length > 0 && teams.map((team, idx) => <TeamMember key={idx} team={team}></TeamMember>)}

                </div>
            </div>
        </div >
    );
};

export default Sidebar;