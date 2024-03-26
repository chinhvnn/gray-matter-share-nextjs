import { createSlice } from '@reduxjs/toolkit'

import { fetchAuth, fetchLogin, fetchLogout } from './authThunk'
import { API_RESULT } from '@/common/constants/constant'

// Define a type for the slice state
interface AuthState {
  isLoading: boolean
  isLoadingLogin: boolean
  loginErrMsg: string
  userLogin: any
}

// Define the initial state using that type
const initialState: AuthState = {
  isLoading: true,
  isLoadingLogin: false,
  loginErrMsg: '',
  userLogin: {},
}

export const counterSlice = createSlice({
  name: 'authReducer',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchLogin.pending, (state) => {
      state.isLoadingLogin = true
    })
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      if (action.payload.result === API_RESULT.SUCCESS) {
        state.userLogin = action.payload.data
      } else {
        state.loginErrMsg = action.payload.message || 'Error login'
      }
      state.isLoadingLogin = false
    })
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.loginErrMsg = 'Network errors'
      state.isLoadingLogin = false
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

    builder.addCase(fetchLogout.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchLogout.fulfilled, (state, action) => {
      // if (action.payload.result === API_RESULT.SUCCESS)
      state.userLogin = {}
      state.isLoading = false
    })
    builder.addCase(fetchLogout.rejected, (state) => {
      state.userLogin = {}
      state.isLoading = false
    })
  },
})

export const {} = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer
