import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectFilter } from '../features/filtering/filterSlice';

const ProjectList = ({ project }) => {
    const { id, colorClass, projectName } = project || {}
    const dispatch = useDispatch()
    const [checked, setChecked] = useState("")

    const handleClick = (e, id) => {
        console.log(e.target.checked)
        console.log(id)
        dispatch(selectFilter({ checked: e.target.checked, id: id }))
    }

    return (
        <div className="checkbox-container">
            <input type="checkbox" className={`${colorClass}`} defaultChecked onClick={(e) => handleClick(e, id)} />
            <p className="label">{projectName}</p>
        </div>
    );
};

export default ProjectList;