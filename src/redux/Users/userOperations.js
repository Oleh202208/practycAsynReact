import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BAZURL = 'https://64352994537112453fcf0726.mockapi.io';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BAZURL}/users`);
      const { data } = response;
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const fetchUserById = createAsyncThunk(
  'users/fetchUserBuId',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BAZURL}/users/${id}`);
      const { data } = response;
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteUserById = createAsyncThunk(
  'users/deleteUserBuId',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${BAZURL}/users/${id}`);
      return id;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
