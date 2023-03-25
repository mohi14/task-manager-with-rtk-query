import { apiSlice } from "../api/apiSlice";


export const projectsAPi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProjects: builder.query({
            query: () => "/projects"
        })
    })
})

export const { useGetProjectsQuery } = projectsAPi