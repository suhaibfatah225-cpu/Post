import React from 'react';
import { useAuth } from '../context/AuthContext';

export const SidebarLeft = () => {
  const { user, logout } = useAuth();


  const handle = user ? `@${user.name.toLowerCase().replace(/\s/g, '')}` : '@guest';

  return (
    <div className="space-y-6">
      
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="h-20 bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8]"></div>
        <div className="px-6 pb-6 text-center relative">
          <div className="relative -mt-10 mb-3 inline-block">
            <img 
              src={user?.image || "https://linked-posts.routemisr.com/uploads/default-profile.png"} 
              alt={user?.name} 
              className="w-20 h-20 rounded-full border-4 border-white object-cover shadow-sm mx-auto bg-white"
            />
          </div>
          <h2 className="text-lg font-bold text-gray-800">{user?.name}</h2>
          <p className="text-xs text-gray-400 mb-4">{handle}</p>
          
          <div className="flex justify-center gap-6 border-t border-gray-100 pt-4">
            <div className="text-center">
              <div className="font-bold text-gray-800 text-sm">0</div>
              <div className="text-xs text-gray-400">Followers</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-gray-800 text-sm">0</div>
              <div className="text-xs text-gray-400">Following</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
         <ul className="space-y-1">
            <li>
               <a href="#" className="flex items-center space-x-3 px-4 py-3 bg-[#0ea5e9] text-white rounded-xl shadow-sm shadow-blue-200">
<i class="fa-solid fa-house"></i>                  <span className="font-medium text-sm">Home</span>
               </a>
            </li>
            <li>
               <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-xl transition-colors">
                  <span className="font-medium text-sm">Profile</span>
               </a>
            </li>
            <li>
               <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-xl transition-colors">
                  <span className="font-medium text-sm">Saved Posts</span>
               </a>
            </li>
             <li>
               <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-xl transition-colors">
                  <span className="font-medium text-sm">Friends</span>
               </a>
            </li>
             <li>
               <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-xl transition-colors">
                  <span className="font-medium text-sm">Events</span>
               </a>
            </li>
             <li>
               <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-xl transition-colors">
                  <span className="font-medium text-sm">Settings</span>
               </a>
            </li>
         </ul>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2">
         <button onClick={logout} className="w-full flex items-center space-x-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
            <span className="font-medium text-sm">Logout</span>
         </button>
      </div>

    </div>
  );
};
