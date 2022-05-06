
import useProducts from "../../../hooks/useProducts/useProducts";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import "./AllItems.css";
import SingleItem from "./SingleItem";

const AllItems = () => {
  const [products] = useProducts();

  return (
    <div className="container">
      <PageTitle title={"AllItems"} />

      <h2 className="text-center my-5 text-info">All Items</h2>
      <div className="services-container">
        {products.map((product) => (
          <SingleItem key={product._id} product={product}></SingleItem>
        ))}
      </div>
    </div>
  );
};

export default AllItems;
