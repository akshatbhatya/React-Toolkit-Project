import {configureStore} from '@reduxjs/toolkit'
import toDoSlice from '../../Features/toDoSlice'

export const Store=configureStore({
    reducer:toDoSlice

})