import IconMap from '@/types/iconMap'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

interface InitialState  {
    iconMap: IconMap;
    elementId: string;
}
export const initialState : InitialState ={
    iconMap: {
        "contact": [
          {"id": "", "name": "", "icon": "", "color": ""},
        ],
        "skills": [
          {"id": "", "name": "", "icon": "", "color": ""},
        ],
        "services": [
            {"id": "", "name": "", "icon": "", "color": ""},
        ]
      },
    elementId: ''
}

export const fetchIconMap = createAsyncThunk('sectionData/fetchIcons', async()=>{
    const data = await fetch(`${API_BASE_URL}/api/portfolio?section=iconMap`)
    if(!data.ok){
        throw "Failed to fetch icons"
    }
    return await data.json()
})

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        updateScrollElementId: (state, action)=>{
            state.elementId = action.payload.elementId
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchIconMap.fulfilled, (state, action)=>{
            state.iconMap = action.payload
        })
    }

})

export const {
    updateScrollElementId,
    
} = portfolioSlice.actions

export default portfolioSlice.reducer