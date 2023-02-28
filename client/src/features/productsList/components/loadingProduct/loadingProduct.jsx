import {
  Card,
  CardActionArea,
  CardContent,
  Skeleton,
} from "@mui/material";
import "../product/product";

const LoadingProduct = () => {
  return (
    <Card height={400} >
      <CardActionArea>
        <Skeleton variant="rectangular" height={400} className="product-img" />
        <CardContent>
          <Skeleton variant="text" width={300} component="h1" />
          <Skeleton variant="text" width={100} component="h4" />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default LoadingProduct;
