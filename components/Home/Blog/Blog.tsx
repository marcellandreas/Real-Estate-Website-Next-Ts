import SectionHeading from "@/components/Helper/SectionHeading";
import { blogs } from "@/data/data";
import React from "react";
import BlogCard from "./BlogCard";

function Blog() {
  return (
    <div className=" py-16 bg-gray-100">
      <div className="w-4/5 mx-auto">
        <SectionHeading heading="Check Our Blogs" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-16 gap-6 items-center">
          {blogs.map((blog) => {
            return (
              <div key={blog.id}>
                <BlogCard blog={blog} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blog;
