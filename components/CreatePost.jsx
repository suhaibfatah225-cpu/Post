import React from 'react';
import { useAuth } from '../context/AuthContext';

export const CreatePost = () => {
  const { user } = useAuth();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-6">
      <div className="flex items-start space-x-3 mb-4">
        <img 
          src={user?.image || "https://linked-posts.routemisr.com/uploads/default-profile.png"} 
          alt="User" 
          className="w-10 h-10 rounded-full object-cover border border-gray-200"
        />
        <div className="flex-1">
          <h3 className="text-sm font-bold text-gray-800">Create a Post</h3>
          <p className="text-xs text-gray-400 mb-3">Share your thoughts with the world</p>
          <div className="relative">
             <div className="absolute top-3 left-3 text-gray-400">
<img src="https://www.kindpng.com/picc/m/674-6748566_lamp-icon-png-free-transparent-png.png" className="w-5 h-5" alt="" /> 
            </div>
             <textarea 
                className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none min-h-[80px]" 
                placeholder="what's on your mind ?"
             ></textarea>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
         <button className="flex items-center space-x-2 text-gray-500 hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors">
<img src="https://www.pngkey.com/png/detail/89-898482_home-icon-home-icon-transparent.png" className="w-5 h-5" 
 alt="" />             <span className="text-sm font-medium">Photo</span>
         </button>
         <button className="bg-[#0084c0] text-white px-6 py-2 rounded-lg text-sm font-medium flex items-center shadow-sm transition-colors">
            Post
         </button>
      </div>
    </div>
  );
};
