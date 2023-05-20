import React from "react";

const Blog = () => {
  return (
    <div className="bg-base-200 py-2 my-8">
      <h2 className="pt-8 text-center font-semibold text-3xl">
        Question And Answer
      </h2>
      <div className="w-[60%] mx-auto my-32 space-y-4">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            <span className="underline">Question 1 :</span> What is an access
            token and refresh token? How do they work and where should we store
            them on the client-side?
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-semibold">Answer : </span>Refresh tokens
              allow you to balance your users' access needs with your
              organization's security practices. A refresh token is a special
              token that is used to obtain additional access tokens. Access
              token and refresh token shouldn't be stored in the local/session
              storage, because they are not a place for any sensitive data.
              Hence I would store the access token in a httpOnly cookie and I
              need it for most of my requests to the Resource Server anyway.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            <span className="underline">Question 2 :</span> Compare SQL and
            NoSQL databases?
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-semibold">Answer : </span>SQL databases are
              vertically scalable, while NoSQL databases are horizontally
              scalable. SQL databases are table-based, while NoSQL databases are
              document, key-value, graph, or wide-column stores. SQL databases
              are better for multi-row transactions, while NoSQL is better for
              unstructured data like documents or JSON.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            <span className="underline">Question 3 :</span> What is express js?
            What is Nest JS?
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-semibold">Answer : </span>Express is a
              minimal and flexible Node.js web application framework that
              provides a robust set of features for web and mobile
              applications.Nest. js is a server-side Node. js framework that's
              great for building highly testable and maintainable backend
              applications.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            <span className="underline">Question 4 :</span> What is MongoDB
            aggregate and how does it work?
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-semibold">Answer : </span>What is
              Aggregation in MongoDB? Aggregation is a way of processing a large
              number of documents in a collection by means of passing them
              through different stages. The stages make up what is known as a
              pipeline. The stages in a pipeline can filter, sort, group,
              reshape and modify documents that pass through the pipeline.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
