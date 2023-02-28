import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useQueryClient,
} from "react-query";
import { fetchProduct } from "../features/product/services/product";
import { default as ProductFeat } from "../features/product";

const Product = () => {
  const { id, color } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadProduct = async() => {
        return await setData(await fetchProduct(id))
    }

    loadProduct();
  }, []);

  return data ? <ProductFeat product={data} color={color} /> : null;
};

export default Product;
