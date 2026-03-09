import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (_, { getState }) => {
    try {
      const { cars } = getState();
      const filters = JSON.stringify(cars.filters);
      const response = await axios.get(`/api/cars?filter=${filters}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

const InitialFilters = {
  search: "",
  price: [100000, 10000000],
  brands: [],
  bodyType: [],
  fuelType: [],
  transmission: [],
  kmsDriven: [],
  page: 1,
};

const carSlice = createSlice({
  name: "car",
  initialState: {
    cars: [],
    filters: InitialFilters,
    loading: false,
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    resetFilters: (state) => {
      state.filters = InitialFilters;
    },
    sortCars: (state, action) => {
      state.loading = true;
      state.cars = state.cars.sort((a, b) => {
        if (a[action.payload[0]] < b[action.payload[0]]) {
          return -1;
        }
        if (a[action.payload[0]] > b[action.payload[0]]) {
          return 1;
        }
        return 0;
      });
      if (action.payload[1]) {
        state.cars = state.cars.reverse();
      }
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload.cars;
      })
      .addCase(fetchCars.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default carSlice.reducer;
export const { setFilters, sortCars, resetFilters } = carSlice.actions;
