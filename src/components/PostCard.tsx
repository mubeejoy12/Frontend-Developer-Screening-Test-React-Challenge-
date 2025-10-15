import { Link } from "react-router-dom";
import blogBanner from "../assets/sincerely-media-vcF5y2Edm6A-unsplash.jpg";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <img
        src={blogBanner}
        alt="Blog banner"
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <div className="flex-grow">
        <h2 className="text-lg font-semibold mb-2 capitalize">
          {post.title.length > 40
            ? post.title.slice(0, 40) + "..."
            : post.title}
        </h2>
        <p className="text-gray-600 mb-4 text-sm">
          {post.body.slice(0, 100)}...
        </p>
      </div>
      <div className="mt-auto">
        <Link
          to={`/posts/${post.id}`}
          className="inline-block bg-teal-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-teal-700 transition"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
