import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const { data } = await axios.get('/posts')
    return data
})

export const fetchTags = createAsyncThunk('posts/fetchTags', async () => {
    const { data } = await axios.get('/posts/tags')
    return data
})

const initialState = {
  posts: {
    items: [],
    status: 'loading',
  },
  tags: {
    items: [],
    status: 'loading',
  },
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducer: {},
  extraReducers:{
    [fetchPosts.pending]: (state, action) => {
        state.posts.status = 'loading';
    },
    [fetchPosts.fulfilled]: (state, action) => {
        state.posts.items = action.payload;
        state.posts.status = 'loaded';
    },
    [fetchPosts.rejected]: (state, action) => {
        state.posts.status = 'error';
        state.posts.items = []
    },
    [fetchTags.pending]: (state, action) => {
        state.tags.status = 'loading';
    },
    [fetchTags.fulfilled]: (state, action) => {
        state.tags.items = action.payload;
        state.tags.status = 'loaded';
    },
    [fetchTags.rejected]: (state, action) => {
        state.tags.items = []
        state.tags.status = 'error';
    }
  }
});

export const postsReducer = postsSlice.reducer