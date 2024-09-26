import Link from "next/link";
import React from "react";

const page = () => {
  const blogs = [
    {
      slug: "introduction-to-react",
      title: "Introduction to React",
      description:
        "Learn the basics of React, a popular JavaScript library for building user interfaces.",
    },
    {
      slug: "understanding-nodejs",
      title: "Understanding Node.js",
      description:
        "A comprehensive guide to Node.js, its architecture, and how to use it for server-side development.",
    },
    {
      slug: "css-flexbox-tutorial",
      title: "CSS Flexbox Tutorial",
      description:
        "Master the art of layout with this in-depth tutorial on CSS Flexbox.",
    },
    {
      slug: "building-rest-apis-with-express",
      title: "Building REST APIs with Express",
      description:
        "Learn how to create RESTful APIs using Express.js in this detailed tutorial.",
    },
    {
      slug: "mongodb-for-beginners",
      title: "MongoDB for Beginners",
      description:
        "An introductory guide to MongoDB, covering its features and how to get started.",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-10">
      {blogs.map((blog) => (
        <div key={blog.slug} className="card-body border-2">
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <Link href={`/blog/${blog.slug}`}>View Details</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
