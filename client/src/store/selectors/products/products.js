export const selectProducts = (state) => state.products.products;
export const selectProductsWithFilter = (state) => {
    const Filter = [(item) => item.price < 100, (item) => item.supplier === "Terminal X", (item) => {
        return item.color.map(color => {
            console.log(color.size.includes("S"))
            if(color.size.includes("S")) {
                return item
            }
        })
    }]
    if(Filter.length > 0) {
        let p = [...state.products.products]
        Filter.map(filterBy =>{
            console.log(filterBy);
            p = p.filter(filterBy)
        });
        console.log(p)
        return p;
    } else {
        return state.products.products;
    }
};
export const isLoading = (state) => state.products.loading;
