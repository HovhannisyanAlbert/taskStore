import { createSlice, current } from "@reduxjs/toolkit";
interface IRating {
  count: number;
}

export interface IProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
  rating: IRating;
}
interface IBasket {
  id: number;
  count: number;
}
interface IFavourite {
  id: number;
  isFavourite: boolean;
}
interface IProductState {
  products: IProduct[];
  basket: IBasket[];
  beforeAdd: IBasket[];
  favourite: IFavourite[];
}

const initialState: IProductState = {
  products: [],
  basket: [],
  beforeAdd: [],
  favourite: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      action.payload.map((e: IProduct) => {
        state.beforeAdd.push({
          id: e.id,
          count: 0,
        });
        state.favourite.push({
          id: e.id,
          isFavourite: false,
        });
      });
    },
    setBasket: (state, action) => {
      const { id } = action.payload;
      const selectedProduct = state.beforeAdd.filter(
        (item) => item.id === id && item.count !== 0
      );
      state.basket.push(...selectedProduct);
    },
    setFavourite: (state, action) => {
      const { id } = action.payload;

      state.favourite = state.favourite.filter((e) => {
        if (e.id === id) {
          e.isFavourite = !e.isFavourite;
        }
        return e;
      });
    },

    increment: (state, action) => {
      const { id } = action.payload;
      state.beforeAdd = state.beforeAdd.filter((e) => {
        if (e.id === id) e.count++;
        return e;
      });
    },
    decrement: (state, action) => {
      const { id } = action.payload;
      state.beforeAdd = state.beforeAdd.filter((e) => {
        if (e.id === id && e.count > 0) e.count--;
        return e;
      });
    },
  },
});
export const { setProducts, increment, decrement, setBasket, setFavourite } =
  productSlice.actions;
export const productReducer = productSlice.reducer;
