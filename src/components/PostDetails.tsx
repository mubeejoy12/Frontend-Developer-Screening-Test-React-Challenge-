import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import blogBanner from "../assets/sincerely-media-vcF5y2Edm6A-unsplash.jpg";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface Author {
  id: number;
  name: string;
}

export default function PostDetails() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [author, setAuthor] = useState<Author | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get<Post>(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        setPost(res.data);

        const user = await axios.get<Author>(
          `https://jsonplaceholder.typicode.com/users/${res.data.userId}`
        );
        setAuthor(user.data);
      } catch {
        setError("Failed to load post");
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading post...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <img
        src={blogBanner}
        alt="Blog banner"
        className="w-full h-64 object-cover rounded-2xl mb-6"
      />
      <h1 className="text-3xl font-bold mb-2 capitalize">{post?.title}</h1>
      {author && <p className="text-gray-600 mb-4 text-sm">By {author.name}</p>}
      <p className="text-gray-800 leading-relaxed mb-10">{post?.body}</p>
      <Link
        to="/"
        className="inline-block bg-teal-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-teal-700 transition"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
