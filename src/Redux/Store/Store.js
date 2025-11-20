import { configureStore } from "@reduxjs/toolkit";
import mobileReducer from "../MobileReducer";

export const store =configureStore({reducer:mobileReducer})