import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { PostItem } from "../components/PostItem";
import { Spinner } from "../components/Spinner";
import { SidebarLeft } from "../components/SidebarLeft";
import { SidebarRight } from "../components/SidebarRight";
import { CreatePost } from "../components/CreatePost";

export default function Home() {
  const { token } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://linked-posts.routemisr.com/posts?limit=50",
          {
            headers: {
              token: token || "",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to load posts");
        }

        const data = await response.json();
        setPosts(data.posts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchPosts();
    }
  }, [token]);

  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans">
      <main className="max-w-[1440px] mx-auto pt-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-8">
              <SidebarLeft />
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <CreatePost />

            <h2 className="text-xl font-bold text-gray-700 mb-6 pl-1 border-l-4 border-[#0ea5e9]">
              Latest Posts
            </h2>

            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl text-center mb-6 border border-red-100">
                {error}
                <button
                  onClick={() => window.location.reload()}
                  className="ml-2 underline font-semibold"
                >
                  Retry
                </button>
              </div>
            )}

            {loading && (
              <div className="flex justify-center items-center h-40">
                <Spinner color="text-[#0ea5e9]" size="w-8 h-8" />
              </div>
            )}

            {!loading && !error && posts.length === 0 && (
              <div className="text-center text-gray-500 py-10 bg-white rounded-2xl border border-gray-100">
                No posts available yet.
              </div>
            )}

            <div className="space-y-6">
              {posts.map((post) => (
                <PostItem key={post.id || post._id} post={post} />
              ))}
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-8">
              <SidebarRight />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
