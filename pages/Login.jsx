import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Spinner } from '../components/Spinner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const { setToken, saveUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://linked-posts.routemisr.com/users/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error(`Server Error: The login service is unavailable.`);
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Incorrect email or password');
      }

      if (data.message === 'success') {
        setToken(data.token);
        saveUser(data.user);
        navigate('/');
      } else {
        throw new Error('Login failed unexpectedly');
      }

    } catch (err) {
      console.error(err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full font-sans bg-gray-50 overflow-hidden">
      
     <div className="hidden lg:flex w-1/2 relative bg-blue-600 text-white flex-col justify-between p-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1d4ed8] via-[#1e40af] to-[#172554] z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
             <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl"></div>
             <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
              <span className="font-bold text-xl">S</span>
            </div>
            <span className="text-xl font-bold tracking-wide">SocialHub</span>
          </div>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Connect with<br />
            <span className="text-blue-200">amazing people</span>
          </h1>
          <p className="text-blue-100 text-lg mb-12 opacity-90 leading-relaxed max-w-lg">
            Join millions of users sharing moments, ideas, and building meaningful connections every day
          </p>

          <div className="grid grid-cols-2 gap-4 max-w-lg mb-12">
            
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl hover:bg-white/15 transition-colors cursor-default">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-3 text-emerald-300">
<img src="https://cdn-icons-png.flaticon.com/512/2462/2462719.png" className="w-5 h-5" alt="" />               </div>
              <h3 className="font-semibold text-sm">Real-time Chat</h3>
              <p className="text-xs text-blue-200 opacity-70 mt-1">Instant messaging</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl hover:bg-white/15 transition-colors cursor-default">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-3 text-blue-300">
<img src="https://cdn-icons-png.flaticon.com/512/1827/1827541.png" className="w-5 h-5" alt="" />               </div>
              <h3 className="font-semibold text-sm">Share Media</h3>
              <p className="text-xs text-blue-200 opacity-70 mt-1">Photos & videos</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl hover:bg-white/15 transition-colors cursor-default">
              <div className="w-10 h-10 rounded-lg bg-rose-500/20 flex items-center justify-center mb-3 text-rose-300">
<img src="https://cdn-icons-png.flaticon.com/512/1827/1827349.png" className="w-5 h-5" alt="" />               </div>
              <h3 className="font-semibold text-sm">Smart Alerts</h3>
              <p className="text-xs text-blue-200 opacity-70 mt-1">Stay updated</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl hover:bg-white/15 transition-colors cursor-default">
              <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center mb-3 text-teal-300">
<img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className="w-5 h-5" style={{ filter: "invert(100%)" }} alt="" />               </div>
              <h3 className="font-semibold text-sm">Communities</h3>
              <p className="text-xs text-blue-200 opacity-70 mt-1">Find your tribe</p>
            </div>
          </div>

          <div className="flex gap-10">
              <div>
                <div className="flex items-center gap-2 font-bold text-2xl">
<img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" className="w-5 h-5" alt="" />                   2M+
                </div>
                <div className="text-sm text-blue-200 mt-1">Active Users</div>
              </div>
              <div>
                <div className="flex items-center gap-2 font-bold text-2xl">
<img src="https://pngimg.com/uploads/heart/heart_PNG51335.png" className="w-5 h-5" alt="" />                   10M+
                </div>
                <div className="text-sm text-blue-200 mt-1">Posts Shared</div>
              </div>
              <div>
                <div className="flex items-center gap-2 font-bold text-2xl">
<img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" className="w-5 h-5" alt="" />                   50M+
                </div>
                <div className="text-sm text-blue-200 mt-1">Messages Sent</div>
              </div>
          </div>
        </div>

        <div className="relative z-10 mt-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl max-w-xl">
             <div className="flex text-yellow-400 mb-3 text-sm">★★★★★</div>
             <p className="text-base leading-relaxed mb-4 font-light italic opacity-95">"SocialHub has completely changed how I connect with friends and discover new communities. The experience is seamless!"</p>
             <div className="flex items-center gap-3">
               <img src="https://www.w3schools.com/howto/img_avatar.png" alt="User" className="w-10 h-10 rounded-full border-2 border-white/30" />
               <div>
                  <div className="font-semibold text-sm">Alex Johnson</div>
                  <div className="text-xs text-blue-200">Product Designer</div>
               </div>
             </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 overflow-y-auto bg-gray-50/50">
        <div className="max-w-[420px] w-full bg-white p-10 rounded-3xl shadow-xl shadow-gray-100 border border-gray-100">
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800">Login</h2>
            <p className="mt-2 text-sm text-gray-500">
              Don't have an account? <Link to="/signup" className="text-blue-500 hover:text-blue-600 font-medium transition-colors">Sign up</Link>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <button type="button" className="flex items-center justify-center px-4 py-2.5 border border-gray-200 rounded-lg bg-white text-sm font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all">
              <img src="../Images/image (6).svg" className="w-8 h-8 pr-1" style={{
  filter:
    "invert(65%) sepia(6%) saturate(347%) hue-rotate(180deg) brightness(92%) contrast(88%)"
}}
 alt="" /> 
              Google
            </button>
            <button type="button" className="flex items-center justify-center px-4 py-2.5 rounded-lg bg-[#1976d2] text-sm font-medium text-white hover:bg-[#166fe5] transition-colors shadow-sm">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" className="w-5 h-5" alt="" /> 
              Facebook
            </button>
          </div>
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-wide">
              <span className="px-3 bg-white text-gray-400 font-medium">or continue with email</span>
            </div>
          </div>

          {error && (
            <div className="mb-6 p-3 rounded-lg bg-red-50 border border-red-100 text-red-600 text-sm flex items-center">
              <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path></svg>
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">Email Address</label>
              <div className="relative">
                
                 <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all text-sm font-medium placeholder-gray-400 hover:bg-gray-100 focus:hover:bg-white"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">Password</label>
              <div className="relative">
                
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all text-sm font-medium placeholder-gray-400 hover:bg-gray-100 focus:hover:bg-white"
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center items-center py-3.5 px-4 rounded-xl shadow-lg shadow-slate-300/50 text-sm font-bold text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all mt-6 transform hover:-translate-y-0.5"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <Spinner />
                  Processing...
                </span>
              ) : (
                
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
