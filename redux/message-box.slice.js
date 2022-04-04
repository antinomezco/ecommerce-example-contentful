import { createSlice } from '@reduxjs/toolkit'

const messageBoxSlice = createSlice({
  name: 'openModal',
  initialState: [{value: false}],
  reducers: {
    closeModal: (state) => {
      state.value = false
    },
    openModal: (state) => {
      state.value=true
    },
  },
})

export const { closeModal, openModal } = messageBoxSlice.actions

export const selectOpenModal = (state) => state.openModal.value

export const MessageBoxReducer = messageBoxSlice.reducer
