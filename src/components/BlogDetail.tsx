import React from "react";
import { useParams, useNavigate ,Link } from "react-router-dom";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";
import data from "../data/data.json";

const blogs = data.blogPosts;

const BlogDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((b) => b.id.toString() === id);

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center text-gray-700">
        <p>Blog not found.</p>
        <button
          onClick={() => navigate("/blog")}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="py-40 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <Link
          to="/blog"          
          onClick={() => {navigate(-1); console.log("inside on click in blogdetail")}}
          className="mb-6 flex items-center text-blue-600 hover:underline"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Blogs
        </Link>

        {/* Blog Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {blog.title}
        </h1>

        {/* Blog Meta Info */}
        <div className="flex items-center space-x-6 text-sm text-gray-500 mb-8">
          <div className="flex items-center space-x-1">
            <User className="h-4 w-4" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{blog.readTime}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{new Date(blog.date).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Blog Content with floating image */}
        <div className="prose dark:prose-invert leading-relaxed">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-64 h-auto rounded-xl shadow float-left mr-6 mb-4 object-cover"
          />

          {blog.fullContent?.split("\n").map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
