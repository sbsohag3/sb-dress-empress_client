import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import PageTitle from '../../Shared/PageTitle/PageTitle';


const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  useEffect(() => {
    const email = user.email;
    const url = `http://localhost:5000/myItems?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyItems(data));
  }, []);

  //  const [products, setProducts] = useState([]);

  //  useEffect(() => {
  //    fetch("http://localhost:5000/products")
  //      .then((res) => res.json())
  //      .then((data) => setProducts(data));
  //  }, []);
  return (
    <div className="container my-5">
      <PageTitle title={"MyItems"} />
      <h2 className="text-center text-info my-5">
        YOU MAY ALSO LIKE :{myItems.length}
      </h2>

      <div className="table-responsive">
        {/* <table className=" text-center table table-bordered table-success table-striped">
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
            {products.map((product) => (
              <tr>
                <td>{product.name}</td>
                <td>{user.email}</td>
                <td>{product.stock}</td>
                <td>{product.price}</td>
                <td>{product.seller}</td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
    </div>
  );
};

export default MyItems;