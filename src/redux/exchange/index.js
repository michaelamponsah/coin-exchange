import { createAsyncThunk } from '@reduxjs/toolkit';
// import missionsService from '../../services/missions';

const FETCH_EXCHANGES = 'FETCH_EXCHANGES';

const initialState = {
  status: 'idle',
  exchanges: [],
};

const exchangesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXCHANGES:
      return {
        ...state,
        status: 'succeeded',
        exchanges: action.payload,
      };

    default:
      return state;
  }
};

export const getExchangesAsync = createAsyncThunk(FETCH_EXCHANGES, async (arg, thunkAPI) => {
  // const payload = await missionsService.getAllMissions();
  // thunkAPI.dispatch({ type: FETCH_MISSIONS, payload });
  console.log('getExchangesAsync');
});

export default exchangesReducer;
