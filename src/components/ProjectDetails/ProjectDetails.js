import React from 'react';
import { useSelector } from 'react-redux';
import { useGetTaskListsQuery } from '../../features/taskList/taskListApi';
import AddNewButton from './AddNewButton';
import TaskList from './TaskList';

const ProjectDetails = () => {
    const { data: tasks, isLoading, isError, error } = useGetTaskListsQuery()
    const { selectedProject, searchText } = useSelector(state => state.filter)
    const selectFilter = (task) => {
        if (selectedProject.length > 0) {
            return !selectedProject.includes(task.project.id)
        }
        else {
            return true
        }
    }

    const searchFilter = (task) => {
        if (searchText) {
            return task.taskName.toLowerCase().includes(searchText.toLowerCase())
        }
        else {
            return true
        }
    }
    return (
        <div className="lg:pl-[16rem] 2xl:pl-[23rem]">
            <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
                <AddNewButton></AddNewButton>
                <div className="lws-task-list">
                    {isLoading && !isError && <div>Loading....</div>}
                    {!isLoading && isError && <div>{error}</div>}
                    {!isLoading && !isError && tasks?.length === 0 && <div>No task Found</div>}
                    {!isLoading && !isError && tasks.length > 0 && tasks.filter(selectFilter).filter(searchFilter).map((task, idx) => <TaskList key={idx} task={task}></TaskList>)}

                </div>
            </main>
        </div>
    );
};

export default ProjectDetails;