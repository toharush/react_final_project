import { filter, flatMap, isEmpty, isNull, uniq } from "lodash";

export const getProducts = (state) => state.products.products;
export const getLoadingState = (state) => state.products.loading;
export const getSearchedProducts = (state) =>
  state.products.products.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(state.products.filter.search)
  );
export const getFilters = (state) => state.products.filter;
export const getSuppliers = (state) =>
  uniq(flatMap(state.products.products, (s) => s.supplier));
export const selectProducts = (state) => state.products.products;
export const selectProductsErrors = (state) => state.products.error;
export const selectProductsWithFilter = (state) => {
  let data = state.products.products;

  if (state.products.filter.search) {
    data = data.filter((item) =>
      JSON.stringify(item).toLowerCase().includes(state.products.filter.search)
    );
  }

  if (state.products.filter.color) {
    data = filter(data, ({ color }) =>
      filter(color, ({ color }) =>
        color.name.includes(state.products.filter.color)
      ).length > 0
        ? color
        : null
    );
  }

  if (state.products.filter.price) {
    data = filter(data, ({ price }) => price < state.products.filter.price);
  }

  if (state.products.filter.size) {
    data = filter(data, ({ color }) =>
      filter(color, ({ size }) => size.includes(state.products.filter.size))
        .length > 0
        ? color
        : null
    );
  }

  return filter(data, (el) => !isNull(el) && !isEmpty(el));
};

export const isLoading = (state) => state.products.loading;

export const getAllAvilableColors = (state) => {
  let colors = [];
  let uniqueColors = [];
  if (state.products.products.length > 0) {
    state.products.products.map((product) =>
      product.color.map((c) => colors.push(c.color.name))
    );
    uniqueColors = colors.filter(
      (value, index, self) => self.indexOf(value) === index
    );
  }
  return uniqueColors;
};

export const getAllAvilableSizes = (state) => {
  let sizes = [];
  let uniqueSizes = [];
  if (state.products.products.length > 0) {
    state.products.products.map((product) =>
      product.color.map((c) => sizes.push(...c.size))
    );
    uniqueSizes = sizes.filter(
      (value, index, self) => self.indexOf(value) === index
    );
  }
  return uniqueSizes;
};
