import { createSlice } from '@reduxjs/toolkit'

import { fetchAuth, fetchLogin } from './authThunk'

// Define a type for the slice state
interface AuthState {
  isLoading: boolean
  userLogin: any
  loginErrMsg: string
}

// Define the initial state using that type
const initialState: AuthState = {
  isLoading: true,
  userLogin: {},
  loginErrMsg: '',
}

export const counterSlice = createSlice({
  name: 'authReducer',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchLogin.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.userLogin = action.payload.data
      state.isLoading = false
    })
    builder.addCase(fetchLogin.rejected, (state) => {
      state.isLoading = false
    })

    builder.addCase(fetchAuth.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.userLogin = action.payload
      state.isLoading = false
    })
    builder.addCase(fetchAuth.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export const {} = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer
