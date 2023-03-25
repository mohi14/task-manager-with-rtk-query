import { apiSlice } from "../api/apiSlice";


export const teamMemberApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTeamMember: builder.query({
            query: () => "/team"
        })
    })
})

export const { useGetTeamMemberQuery } = teamMemberApi;