import React from "react";
import PageTitle from "../Shared/PageTitle/PageTitle";

const Blogs = () => {
  return (
    <div className="container my-5">
      <PageTitle title={"Blogs"} />
      <div class="row">
        <div class="col-sm-6 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                Difference between javascript and nodejs
              </h5>
              <p class="card-text">
                JavaScript is a programming language. It is running in any web
                browser with a proper browser engine. <br />
                Node Js is an interpreter and environment for JavaScript with
                some specific useful libraries which JavaScript programming can
                use separately. <br />
                JavaScript is a very popular programming language which
                generally used by any web application developer. It is very easy
                to find a resource on the same for work on JavaScript and do
                some specific development. <br />
                Node Js mainly used for accessing or performing any non-blocking
                operation of any operating system, like creating or executing a
                shell script or accessing any hardware-specific information or
                running any backend job.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                When should you use nodejs and when should you use mongodb
              </h5>
              <p class="card-text">
                Nodejs is a Javascript engine that you can write any application
                you want with It runs your Javascript code. Most commonly, it is
                used to build servers that can respond to web requests, though
                it can be used for lots of other types of code too. <br />
                MongoDB offers an API library that runs within a Nodejs
                application to give you programmatic access to MongoDB so you
                can create databases and then add, query, update or delete data
                from the MongoDB database. MongoDB offers an API library that
                runs within a Nodejs application to give you programmatic access
                to MongoDB so you can create databases and then add, query,
                update or delete data from the MongoDB database.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                What is the purpose of jwt and how does it work
              </h5>
              <p class="card-text">
                JWT is an open standard used to share security information
                between two parties a client and a server. Each JWT contains
                encoded JSON objects, including a set of claims. JWTs are signed
                using a cryptographic algorithm to ensure that the claims cannot
                be altered after the token is issued. <br />
                JWT is a set of claims that are different from other web token.
                Claims are used to transmit information between two groups. What
                these claims contain depends on hand use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
