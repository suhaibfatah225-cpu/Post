import React from 'react';

const timeAgo = (dateString) => {


  

};

export const PostItem = ({ post }) => {
return (
    <div className="max-w-[500px] mx-auto bg-white border border-gray-300 rounded-lg shadow-sm font-sans my-4">
      <div className="flex items-center p-3">
        <img 
          src={post.userAvatar || "https://via.placeholder.com/40"} 
          alt="avatar" 
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="ml-3">
          <h4 className="font-bold text-[15px] text-gray-900 leading-tight">{post.userName}</h4>
          <p className="text-[13px] text-gray-500">{timeAgo(post.createdAt)}</p>
        </div>
      </div>

      <div className="px-3 pb-2 text-[15px] text-gray-800">
        {post.content}
      </div>

      {post.image && (
        <div className="w-full bg-gray-100">
          <img 
            src={post.image} 
            alt="Post content" 
            className="w-full h-auto max-h-[600px] object-cover"
          />
        </div>
      )}
      <div className="flex justify-between items-center px-3 py-2 border-b border-gray-100">
        <div className="flex items-center">
          <div className="flex -space-x-1">
            <span className="bg-blue-500 rounded-full p-1 ring-1 ring-white">
              <svg fill="white" viewBox="0 0 24 24" width="10" height="10"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </span>
          </div>
          <span className="ml-2 text-[13px] text-gray-500">{post.likesCount || 0} likes</span>
        </div>
        <div className="text-[13px] text-gray-500">{post.comments?.length || 0} comments</div>
      </div>

      <div className="flex justify-around py-1 text-gray-600 font-semibold border-b border-gray-100">
        <button className="flex-1 flex items-center justify-center py-2 hover:bg-gray-100 transition rounded-md text-[14px]">Like</button>
        <button className="flex-1 flex items-center justify-center py-2 hover:bg-gray-100 transition rounded-md text-[14px]">Comment</button>
        <button className="flex-1 flex items-center justify-center py-2 hover:bg-gray-100 transition rounded-md text-[14px]">Share</button>
      </div>
      <div className="p-3 pt-0 flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full bg-gray-200" />
        <div className="relative flex-grow">
          <input 
            type="text" 
            placeholder="Write a comment..." 
            className="w-full bg-[#f0f2f5] rounded-full py-2 px-4 text-[14px] outline-none"
          />
        </div>
      </div>
    </div>
  );
};