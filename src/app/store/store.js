import {configureStore} from "@reduxjs/toolkit";
import reducer from '../../features/login/index.js'

export const store = configureStore({reducer})