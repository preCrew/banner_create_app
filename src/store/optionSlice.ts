import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TTextShadowType =  "x" | "y" | "blur";
interface TOptionState {
    backgroundColor: string;
    foregroundColor: string;
    borderColor: string;
    borderWidth: number;
    fontSize: number;
    textShadow: {
        x?: number;
        y?: number;
        blur?: number;
    };
    heightRatio: number;
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
        blur: 0
    },
    heightRatio: 0
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
        changeTextShadow : (state: TOptionState, action: PayloadAction<{type: TTextShadowType, value: number}>) => {
            state.textShadow[action.payload.type] = action.payload.value;
        },
        changeHeightRatio: (state: TOptionState, action: PayloadAction<number>) => {
            state.heightRatio = action.payload;
        },
    },
});


export const { 
    changeBackgroundColor,  
    changeForegroundColor,
    changeBorderColor,
    changeBorderWidth,
    changeFontSize,
    changeTextShadow,
    changeHeightRatio
} = contentsSlice.actions;
export default contentsSlice.reducer;