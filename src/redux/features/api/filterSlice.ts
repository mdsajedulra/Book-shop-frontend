import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  title: string;
  searchTerm: string;
  category: string;
  author: string;
  inStock: boolean | null;
  sort: string;
  minPrice: number;
  maxPrice: number;
  page: number;
  limit: number;
}

const initialState: FilterState = {
  title: "",
  searchTerm: "",
  category: "",
  author: "",
  inStock: null,
  sort: "",
  minPrice: 0,
  maxPrice: 1000,
  page: 1,
  limit: 20,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setAuthor: (state, action: PayloadAction<string>) => {
      state.author = action.payload;
    },
    setInStock: (state, action: PayloadAction<boolean | null>) => {
      state.inStock = action.payload;
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    setMinPrice: (state, action: PayloadAction<number>) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action: PayloadAction<number>) => {
      state.maxPrice = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const {
  setTitle,
  setSearchTerm,
  setCategory,
  setAuthor,
  setInStock,
  setSort,
  setMinPrice,
  setMaxPrice,
  setPage,
  setLimit,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
