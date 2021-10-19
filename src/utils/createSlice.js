import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import createService from './createService';

export default ({name, uri}, initialState = []) => {
    const api = createService(uri);
    const createOne = createAsyncThunk(
        `${name}/createOne`,
        async (data) => {
            const res = await api.create(data);
            return res.data;
        }
    );
      
    const getAll = createAsyncThunk(
        `${name}/getAll`,
        async () => {
            const res = await api.getAll();
            return res.data;
        }
    );

    const getOne = createAsyncThunk(
        `${name}/getOne`,
        async () => {
            const res = await api.getAll();
            return res.data;
        }
    );
      
    const updateOne = createAsyncThunk(
        `${name}/updateOne`,
        async ({ id, data }) => {
            const res = await api.update(id, data);
            return res.data;
        }
    );
      
    const deleteOne = createAsyncThunk(
        `${name}/deleteOne`,
        async ({ id }) => {
            await api.remove(id);
            return { id };
        }
    );
      
    const deleteAll = createAsyncThunk(
        `${name}/deleteAll`,
        async () => {
          const res = await api.removeAll();
          return res.data;
        }
      );

    const slice = createSlice({
        name: name,
        initialState,
        extraReducers: {
            [createOne.fulfilled]: (state, action) => {
                state.push(action.payload);
            },
            [getAll.fulfilled]: (state, action) => {
                return [...action.payload];
            },
            [getOne.fulfilled]: (state, action) => {
                const index = state.findIndex(item => item.id === action.payload.id);
                return (index != -1) ? state[index]: null;
            },
            [updateOne.fulfilled]: (state, action) => {
                const index = state.findIndex(item => item.id === action.payload.id);
                state[index] = {
                    ...state[index],
                    ...action.payload,
                };
            },
            [deleteOne.fulfilled]: (state, action) => {
                let index = state.findIndex(({ id }) => id === action.payload.id);
                state.splice(index, 1);
            },
            [deleteAll.fulfilled]: (state, action) => {
                return [];
            }
        },
    });

    return { 
        reducer: slice.reducer, 
        actions: {
            getAll,
            getOne,
            createOne,
            updateOne,
            deleteOne,
            deleteAll
        }
    }
}
