import { getSectionData } from "@/lib/api";
import IconMap from "@/types/iconMap";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type FetchStatus = "idle" | "loading" | "success" | "error";

interface InitialState {
  iconMap: IconMap;
  iconMapStatus: FetchStatus;
  elementId: string;
}

export const initialState: InitialState = {
  iconMap: {
    contact: [{ id: "", name: "", icon: "", color: "" }],
    skills: [{ id: "", name: "", icon: "", color: "" }],
    services: [{ id: "", name: "", icon: "", color: "" }],
  },
  iconMapStatus: "idle",
  elementId: "",
};

export const fetchIconMap = createAsyncThunk(
  "sectionData/fetchIcons",
  async () => {
    const data = await getSectionData("iconMap");
    return data;
  }
);

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    updateScrollElementId: (state, action) => {
      state.elementId = action.payload.elementId;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIconMap.pending, (state) => {
        state.iconMapStatus = "loading";
      })
      .addCase(fetchIconMap.fulfilled, (state, action) => {
        state.iconMap = action.payload;
        state.iconMapStatus = "success";
      })
      .addCase(fetchIconMap.rejected, (state) => {
        state.iconMapStatus = "error";
      });
  },
});

export const { updateScrollElementId } = portfolioSlice.actions;
export default portfolioSlice.reducer;
