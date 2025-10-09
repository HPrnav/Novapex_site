import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";
import data from "../data/data.json";

const blogs = data.blogPosts;

const BlogDetail: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          onClick={() => { navigate(-1); console.log("inside on click in blogdetail") }}
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

        {/* Novapex InfoHub Branding */}
        <div className="mb-8 p-4 bg-gradient-to-r from-[#00C08B] to-[#008C6B] rounded-lg text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">Novapex InfoHub</h3>
              <p className="text-sm opacity-90">Your trusted technology partner</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">Expert Insights</p>
              <p className="text-xs opacity-90">Quality Content</p>
            </div>
          </div>
        </div>

        {/* Blog Content with floating image */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose dark:prose-invert leading-relaxed max-w-none">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-64 h-auto rounded-xl shadow float-left mr-6 mb-4 object-cover"
            />

            {blog.fullContent?.split("\n").map((para, idx) => (
              <p key={idx} className="mb-4 text-gray-700 leading-7">
                {para}
              </p>
            ))}
          </div>

          {/* Novapex InfoHub Signature */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[#00C08B] to-[#008C6B] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">NI</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Novapex InfoHub</p>
                <p className="text-sm text-gray-600">Innovating the future, one solution at a time</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Blogs or Call to Action */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Liked this article? Explore more insights from Novapex InfoHub</p>
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-[#00C08B] text-white rounded-lg hover:bg-[#008C6B] transition-all duration-300 font-semibold"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;