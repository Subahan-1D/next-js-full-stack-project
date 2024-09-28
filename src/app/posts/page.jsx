import { Pagination } from "@mui/material";
import Link from "next/link";
import React from "react";
const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = res.json();
  return data;
};
const PostPage = async () => {
    const singlePost = await getPosts()
    console.log(singlePost)
  return (
    <div>
      <h1 className="text-center text-4xl text-red-600">
        All Post : {singlePost.length}
      </h1>
      ,
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-2">
        {singlePost?.slice(0, 24).map(
          ({ id, userId, title, body }) => (
            (<h1>All Post : {singlePost.length}</h1>),
            (
              <div
                key={id}
                className="card bg-base-100 w-96 shadow-xl border-2 "
              >
                <div className="card-body">
                  <h2 className="card-title">Title :{title}</h2>
                  <p>Body : {body}</p>
                  <button className="btn btn-primary">
                    <Link href={`/posts/${id}`}> See Details</Link>
                  </button>
                </div>
              </div>
            )
          )
        )}
        <Pagination count={10} variant="outlined" />
      </div>
    </div>
  );
};

export default PostPage;
