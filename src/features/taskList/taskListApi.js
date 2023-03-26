import { apiSlice } from "../api/apiSlice";


export const taskListApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTaskLists: builder.query({
            query: () => "/tasks",
            providesTags: ["Tasks"]
        }),
        getTask: builder.query({
            query: (id) => `/tasks/${id}`
        }),
        editTaskStatus: builder.mutation({
            query: ({ id, data }) => ({
                url: `/tasks/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ["Tasks"]
        }),
        deleteTask: (builder).mutation({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: "DELETE"
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                // optimistic cache update start
                const pathResult = dispatch(
                    apiSlice.util.updateQueryData(
                        "getTaskLists", undefined, (draft) => {
                            return draft.filter(t => t.id != arg)
                        }
                    )
                );
                try {
                    await queryFulfilled
                }
                catch {
                    pathResult.undo()
                }
            }
        }),
    })
})

export const { useGetTaskListsQuery, useEditTaskStatusMutation, useDeleteTaskMutation, useGetTaskQuery } = taskListApi