import { apiSlice } from "../api/apiSlice";

export const editTaskApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        editTask: builder.mutation({
            query: ({ id, editData }) => ({
                url: `tasks/${id}`,
                method: "PATCH",
                body: editData
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    // update  cache pessimistically start
                    const task = await queryFulfilled;
                    if (task.data) {
                        dispatch(apiSlice.util.updateQueryData(
                            "getTaskLists", undefined, (draft) => {
                                const newDraft = draft.map(d => {
                                    if (d.id == task.data.id) {
                                        return task.data
                                    }
                                    else {
                                        return d
                                    }
                                })
                                return [...newDraft]
                            }
                        ))
                    }

                }
                catch (err) { }
            }
        }),
    })
})

export const { useEditTaskMutation } = editTaskApi