import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEditTaskMutation } from '../features/editTask/editTaskApi';
import { useGetProjectsQuery } from '../features/projects/projectsApi';
import { useGetTaskQuery } from '../features/taskList/taskListApi';
import { useGetTeamMemberQuery } from '../features/teamMember/teamMemberApi';

const EditTask = () => {
    const { id } = useParams()

    const { data, isLoading, isSuccess } = useGetTaskQuery(id)
    const { data: teams } = useGetTeamMemberQuery()
    const { data: projects } = useGetProjectsQuery()


    const [editTask, { error, isSuccess: editSuccess }] = useEditTaskMutation()


    const [teamMember, setTeamMember] = useState(null)
    const [project, setProject] = useState(null)
    const [taskName, setTaskName] = useState("")
    const [deadline, setDeadline] = useState("")

    const navigate = useNavigate()


    const handleTeamNameChange = (e) => {
        const tem = teams.find(t => t.name === e.target.value)
        setTeamMember(tem)
    }

    const handleProjectNameChange = (e) => {
        const proj = projects.find(p => p.projectName === e.target.value)
        setProject(proj)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const editData = {
            teamMember: teamMember ? teamMember : data?.teamMember,
            project: project ? project : data?.project,
            taskName: taskName ? taskName : data?.taskName,
            deadline: deadline ? deadline : data?.deadline
        }



        editTask({ id, editData })
    }

    if (editSuccess) {
        navigate("/")
    }


    return (
        <>
            {(isSuccess && teams?.length > 0 && projects?.length > 0) ? <div className="container relative">
                <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
                    <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
                        Edit Task for Your Team
                    </h1>

                    <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="fieldContainer">
                                <label for="lws-taskName">Task Name</label>
                                <input
                                    type="text"
                                    name="taskName"
                                    id="lws-taskName"
                                    Value={data?.taskName}
                                    required
                                    placeholder="Implement RTK Query"
                                    onChange={(e) => setTaskName(e.target.value)}
                                />
                            </div>

                            <div className="fieldContainer">
                                <label>Assign To</label>
                                <select name="teamMember" id="lws-teamMember" required onChange={handleTeamNameChange}>
                                    {teams?.map(team => <option selected={team.name === data?.teamMember.name} Value={team.name}>{team?.name}</option>)}
                                </select>
                            </div>
                            <div className="fieldContainer">
                                <label for="lws-projectName">Project Name</label>
                                <select id="lws-projectName" name="projectName" required onChange={handleProjectNameChange}>
                                    {projects?.map(pro => <option selected={pro?.projectName === data?.project.projectName} Value={pro?.projectName}>{pro?.projectName}</option>)}
                                </select>
                            </div>

                            <div className="fieldContainer">
                                <label for="lws-deadline">Deadline</label>
                                <input type="date" name="deadline" id="lws-deadline" required Value={data?.deadline} onChange={(e) => setDeadline(e.target.value)} />
                            </div>

                            <div className="text-right">
                                <button type="submit" className="lws-submit">Save</button>
                            </div>
                        </form>
                    </div>
                </main>
            </div> : <div>Loading.....</div>}
        </>
    );
};

export default EditTask;