import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TTextShadowType =  "x" | "y" | "blur" | "color";
export interface TOptionState {
    backgroundColor: string;
    foregroundColor: string;
    borderColor: string;
    borderWidth: number;
    fontSize: number;
    textShadow: {
        x: number;
        y: number;
        blur: number;
        color: string;
    };
    heightRatio: number;
    text: string;
};
const initialContentsState: TOptionState = {
    backgroundColor: '#ffffff',
    foregroundColor: '#ffffff',
    borderColor: '#ffffff',
    borderWidth: 0,
    fontSize: 0,
    textShadow: {
        x: 0,
        y: 0,
        blur: 0,
        color: '#00000040'
    },
    heightRatio: 0,
    text: 'edit me',
};

const contentsSlice = createSlice({
    name: 'optionSlice',
    initialState: initialContentsState,
    reducers: {
        changeBackgroundColor: (state: TOptionState, action: PayloadAction<string>) => {
            state.backgroundColor = action.payload;
        },
        changeForegroundColor: (state: TOptionState, action: PayloadAction<string>) => {
            state.foregroundColor = action.payload;
        },
        changeBorderColor: (state: TOptionState, action: PayloadAction<string>) => {
            state.borderColor = action.payload;
        },
        changeBorderWidth: (state: TOptionState, action: PayloadAction<number>) => {
            state.borderWidth = action.payload;
        },
        changeFontSize: (state: TOptionState, action: PayloadAction<number>) => {
            state.fontSize = action.payload;
        },
        changeTextShadow : (state: TOptionState, action: PayloadAction<{type: TTextShadowType, value: number | string}>) => {
            state.textShadow = {
                ...state.textShadow,
                [action.payload.type]: action.payload.value,
            }
        },
        changeHeightRatio: (state: TOptionState, action: PayloadAction<number>) => {
            state.heightRatio = action.payload;
        },
        changeText: (state: TOptionState, action: PayloadAction<string>) => {
            state.text = action.payload;
        }
    },
});


export const { 
    changeBackgroundColor,  
    changeForegroundColor,
    changeBorderColor,
    changeBorderWidth,
    changeFontSize,
    changeTextShadow,
    changeHeightRatio,
    changeText,
} = contentsSlice.actions;
export default contentsSlice.reducer;