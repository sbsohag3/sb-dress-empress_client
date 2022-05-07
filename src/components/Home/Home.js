import useProducts from "../../hooks/useProducts/useProducts";
import Product from "../Products/Product/Product";
import PageTitle from "../Shared/PageTitle/PageTitle";
import './Home.css'
const Home = () => {
  const [products] = useProducts([]);

  
  return (
    <div className="container">
      <PageTitle title={"Home"} />
      <h2 className="text-center text-info my-5">YOU MAY ALSO LIKE</h2>
      <div className="services-container">
        {products.slice(0, 6).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
