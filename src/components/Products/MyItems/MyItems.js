import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
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
          const remaining = myItems.filter((product) => product._id !== id);
          setMyItems(remaining);
        });
    }
  };
  useEffect(() => {
    const email = user.email;
    const url = `http://localhost:5000/myItems?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyItems(data));
  }, [user]);

  return (
    <div className="container my-5">
      <PageTitle title={"MyItems"} />
      <h2 className="text-center text-info my-5">
        YOU ALL PRODUCTS :{myItems.length}
      </h2>

      <div className="table-responsive">
        <table className=" text-center table table-bordered table-success table-striped">
          <thead className="table table-bordered table-dark">
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Email</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Supplier</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {myItems.map((myItem) => (
              <tr>
                <td>{myItem.name}</td>
                <td>{user.email}</td>
                <td>{myItem.stock}</td>
                <td>{myItem.price}</td>
                <td>{myItem.seller}</td>
                <td>
                  <button
                    onClick={() => handleDelete(myItem._id)}
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

export default MyItems;
