import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    selectedProject: [],
    searchText: ""
}

const filteringSlice = createSlice({
    name: "filtering",
    initialState,
    reducers: {
        selectFilter: (state, action) => {
            if (action.payload.checked === false) {
                state.selectedProject.push(action.payload.id)
            }
            else if (action.payload.checked === true) {
                const newSelect = state.selectedProject.filter(selectId => selectId !== action.payload.id)
                state.selectedProject = newSelect
            }
        },
        searchFilter: (state, action) => {
            state.searchText = action.payload
        }
    }
})

export default filteringSlice.reducer;
export const { selectFilter, searchFilter } = filteringSlice.actions