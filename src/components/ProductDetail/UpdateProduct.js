import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import PageTitle from "../Shared/PageTitle/PageTitle";

const UpdateProduct = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [update, setUpdate] = useState({});
  useEffect(() => {
    const url = `https://fathomless-meadow-24305.herokuapp.com/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUpdate(data));
  }, [id]);
  const updateProduct = (event) => {
    event.preventDefault();
    // const price = event.target.price.value;
    const stock = event.target.stock.value;

    const data = { stock };
    const url = `https://fathomless-meadow-24305.herokuapp.com/product/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("success", result);
        // alert("Update Successfully!!!");
        toast.success("Update Successfully!!!", {
          position: "top-center",
        });
        event.target.reset();
      });
  };
  return (
    <div className="col-md-4 mx-auto text-center my-5">
      <PageTitle title={"Update Product"} />

      <h2 className="text-info">Pleas Your Product : {update.name}</h2>
      <form
        className="d-flex flex-column border shadow p-5"
        onSubmit={updateProduct}
      >
        <input
          className="w-100 mb-2"
          type="email"
          value={user?.email}
          name=""
          id="email"
          placeholder="Email"
          required
          readOnly
          disabled
        />
        {/* <input
          type="number"
          className="w-100 mb-2"
          name="price"
          placeholder="Price"
          required
        /> */}

        <input
          type="number"
          className="w-100 mb-2"
          name="stock"
          placeholder="Stock"
          required
        />

        <input type="submit" value="Update" className="btn btn-primary" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateProduct;
