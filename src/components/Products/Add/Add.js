import React from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import { useForm } from "react-hook-form";

const Add = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `service`;
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
      });
  };
  return (
    <div className="text-center my-5">
      <PageTitle title={"AddItems"} />

      <h2 className="text-info">Pleas Add a Service</h2>
      <form
        className="w-25 mx-auto border shadow p-3 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="mb-2"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />

        <input
          className="mb-2"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2"
          placeholder="Quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="mb-2"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <br />
        <input type="submit" value="Add Service" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default Add;
