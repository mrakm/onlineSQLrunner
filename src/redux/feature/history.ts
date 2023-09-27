import { INNITIAL_HISTORY } from '@/constant/constant';
import { createSlice } from '@reduxjs/toolkit';

export interface IQurryProps {
  id: string;
  querryName:string;
  query: string;
}

export interface IQuerryState {
  history: IQurryProps[];
  selectedQuerry: IQurryProps | null;
}

const initialState: IQuerryState = {
  history: INNITIAL_HISTORY,
  selectedQuerry: null,
};

export const historySlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    addHistory: (state:IQuerryState, action: { payload: IQurryProps }) => {
      state.history.push(action.payload);
    },
    selectId: (state:IQuerryState, action: { payload: IQurryProps }) => {
      state.selectedQuerry = action.payload;
    },
  },
});

export const { addHistory, selectId } = historySlice.actions;

export default historySlice.reducer;