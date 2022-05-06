import React from "react";
import useProducts from "../../../hooks/useProducts/useProducts";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const ManageItems = () => {
  const [products, setProducts] = useProducts();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter(product => product._id !== id)
          setProducts(remaining);
        });
    }
  };
  return (
    <div className="container my-5">
      <PageTitle title={"Manage"} />
      <h2 className="text-center text-info my-5">Manage your Products</h2>

      <div className="table-responsive">
        <table className=" text-center table table-bordered table-primary table-striped">
          <thead className="table table-bordered table-dark">
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Supplier</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.stock}</td>
                <td>{product.price}</td>
                <td>{product.seller}</td>
                <td>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
