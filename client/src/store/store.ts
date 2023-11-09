import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal/modalSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer, // 스토어에 모달 리듀서를 추가합니다.
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
