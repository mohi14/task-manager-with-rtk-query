import React from 'react';
import AddNewButton from './AddNewButton';
import TaskList from './TaskList';

const ProjectDetails = () => {
    return (
        <div className="lg:pl-[16rem] 2xl:pl-[23rem]">
            <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
                <AddNewButton></AddNewButton>
                <div className="lws-task-list">
                    <TaskList></TaskList>
                </div>
            </main>
        </div>
    );
};

export default ProjectDetails;