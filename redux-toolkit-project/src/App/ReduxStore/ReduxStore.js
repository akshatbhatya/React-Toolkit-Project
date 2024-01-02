import {configureStore} from '@reduxjs/toolkit'
import toDoSlice from '../../Features/toDoSlice'

export const store=configureStore({
    reducer:toDoSlice

})