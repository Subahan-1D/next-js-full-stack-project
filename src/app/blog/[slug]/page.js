import React from "react";

const page = ({ params }) => {
  console.log(params.slug);
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

  const { title, description } = blogs.find(
    (blog) => blog.slug === params.slug
  );
  return (
    <div className="h-screen">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default page;
