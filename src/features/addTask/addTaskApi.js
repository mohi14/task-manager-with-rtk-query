import { apiSlice } from "../api/apiSlice";

export const addTaskApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addTask: builder.mutation({
            query: (data) => ({
                url: "/tasks",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    // update  cache pessimistically start
                    const task = await queryFulfilled;
                    if (task.data) {
                        dispatch(apiSlice.util.updateQueryData(
                            "getTaskLists", undefined, (draft) => {
                                return [...draft, task.data]
                            }
                        ))
                    }

                }
                catch (err) { }
            }
        })
    })
})

export const { useAddTaskMutation } = addTaskApi