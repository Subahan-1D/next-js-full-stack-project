import React from "react";

const postDetails = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = res.json();
  return data;
};
const DetailsPage = async ({ params }) => {
  const { userId, title, body } = await postDetails(params.id);
  return (
    <div>
      <div className="card-body border-2 mt-3 mb-3">
        <div className="flex">
          <p>
            {" "}
            userId :<mark>{userId}</mark>
          </p>
        </div>
        <h2 className="card-title">Title :{title}</h2>
        <p>Body:{body}</p>
      </div>
    </div>
  );
};

export default DetailsPage;
