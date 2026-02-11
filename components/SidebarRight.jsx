import React from 'react';

export const SidebarRight = () => {
  const trendingTopics = [
    { tag: '#ReactJS', posts: '12.5K posts' },
    { tag: '#WebDevelopment', posts: '8.2K posts' },
    { tag: '#JavaScript', posts: '15.3K posts' },
    { tag: '#TailwindCSS', posts: '5.1K posts' },
    { tag: '#Programming', posts: '20K posts' },
  ];

  const suggestedUsers = [
    { name: 'Sarah Wilson', handle: '@sarahw', img: 'https://www.clipartmax.com/png/middle/15-153152_male-user-icon-male-user-icon.png' },
    { name: 'Mike Chen', handle: '@mikechen', img: 'https://www.clipartmax.com/png/middle/144-1442560_person-male-icon.png' },
    { name: 'Emily Davis', handle: '@emilyd', img: 'https://i.pravatar.cc/150?img=3' },
  ];

  return (
    <div className="space-y-6">
      
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
        <div className="flex items-center gap-2 mb-5">
           <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"></path></svg>
           <h3 className="font-bold text-gray-800 text-sm">Trending Now</h3>
        </div>
        
        <div className="space-y-5">
          {trendingTopics.map((topic, index) => (
            <div key={index} className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-lg bg-[#0ea5e9] text-white flex items-center justify-center font-bold text-lg">#</div>
                 <div>
                    <div className="text-sm font-semibold text-gray-800 group-hover:text-[#0ea5e9] transition-colors">{topic.tag}</div>
                    <div className="text-xs text-gray-400">{topic.posts}</div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
         <div className="flex items-center gap-2 mb-5">
           <svg className="w-5 h-5 text-[#0ea5e9]" fill="currentColor" viewBox="0 0 20 20"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path></svg>
           <h3 className="font-bold text-gray-800 text-sm">Who to Follow</h3>
        </div>

        <div className="space-y-5">
           {suggestedUsers.map((u, i) => (
             <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                   <img src={u.img} alt={u.name} className="w-10 h-10 rounded-full object-cover" />
                   <div>
                      <div className="text-sm font-semibold text-gray-800">{u.name}</div>
                      <div className="text-xs text-gray-400">{u.handle}</div>
                   </div>
                </div>
                <button className="text-xs font-semibold text-[#0ea5e9] border border-[#0ea5e9] px-3 py-1.5 rounded-full hover:bg-blue-50 transition-colors">
                   Follow
                </button>
             </div>
           ))}
        </div>

        <button className="w-full text-center text-xs text-[#0ea5e9] font-medium mt-6 hover:underline">
            Show more
        </button>
      </div>

      <div className="text-[10px] text-gray-400 text-center px-4 leading-relaxed">
          Terms of Service • Privacy Policy • Cookies<br/>
          © 2024 SocialHub. All rights reserved.
      </div>

    </div>
  );
};
