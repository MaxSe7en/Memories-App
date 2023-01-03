import * as api from "../api";
import { CREATE, UPDATE, DELETE, FETCH_ALL } from "../constants/actionTypes";

//Action Creators

export const getPosts = () => async (dispatch) => {//thunk allows this line of code to deal with asynchronous data

    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message)
    }

	// const action = { type: "FETCH_ALL", payload: [] };

    // dispatch(action);
};

export const createPost = (post) => async (dispatch) => {//thunk allows this line of code to deal with asynchronous data

    try {
        const { data } = await api.createPost(post);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message)
    }

	// const action = { type: "FETCH_ALL", payload: [] };

    // dispatch(action);
};

export const updatePost = (id, post) => async (dispatch) => {//thunk allows this line of code to deal with asynchronous data

    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error.message)
    }

	// const action = { type: "FETCH_ALL", payload: [] };

    // dispatch(action);
};

export const deletePost = (id, post) => async (dispatch) => {//thunk allows this line of code to deal with asynchronous data

    try {
        await api.deletePost(id);
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error)
    }

	// const action = { type: "FETCH_ALL", payload: [] };

    // dispatch(action);
};

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id)
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error)
    }
}
