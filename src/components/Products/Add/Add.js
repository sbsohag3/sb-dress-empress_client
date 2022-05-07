import React from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast, ToastContainer } from "react-toastify";

const Add = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    
    const url = `http://localhost:5000/myItems`;
    console.log(url);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("Update Successfully!!!", {
          position: "top-center",
        });
      
      });
  };
  return (
    <div className="col-md-4 mx-auto text-center my-5">
      <PageTitle title={"AddItems"} />

      <h2 className="text-info">Pleas Add a Items</h2>
      <form
        className="d-flex flex-column border shadow p-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        
        <input
          className="mb-2"
          placeholder="Email"
          value={user?.email}
          type="text"
          {...register("email")}
          
        />
        <input
          className="mb-2"
          placeholder="Category"
          {...register("category")}
        />
        <input
          className="mb-2"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input className="mb-2" placeholder="Seller" {...register("seller")} />
        <textarea
          className="mb-2"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="mb-2"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2"
          placeholder="Stock"
          type="number"
          {...register("stock")}
        />
        <input
          className="mb-2"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />

        <br />
        <input type="submit" value="Add Items" className="btn btn-primary" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default Add;
