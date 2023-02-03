import { filter, intersectionWith, isEqual } from "lodash";

export const selectProducts = (state) => state.products.products;
export const selectProductsWithFilter = (state) => {
  let data = state.products.products;
  if (state.products.search) {
    data = filter(data, state.products.search);
  }
  if (state.products.filteredProducts.length > 0) {
    state.products.filteredProducts.map((filterBy) => {
      data = filter(data, filterBy);
    });
  }
  return data;
};
export const isLoading = (state) => state.products.loading;
