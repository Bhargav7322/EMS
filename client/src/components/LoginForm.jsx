// import { Link } from "react-router-dom";
// import LoginLeftSide from "./LoginLeftSide";
// import { ArrowLeftIcon } from "lucide-react";
// import { useState } from "react";

// const LoginForm = ({ role, title, subtitle }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showpassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//   e.prventDefault();
//   }

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row">
//       <LoginLeftSide />
//       <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto min-h-screen">
//         <div className="w-full max-w-md animate-fade-in">
//           <Link>
//             <ArrowLeftIcon sixe={16} /> Back to portals
//           </Link>
//           <div>
//             <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
//             <p className="text-slate-500">{subtitle}</p>
//           </div>
//           {error && (
//             <div className="bg-red-100 text-red-700 p-2 rounded-md mb-4">
//               {error}
//             </div>
//           )}
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-slate-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="you@example.com"
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-slate-700">
//                 Password
//               </label>
//               <input
//                 type={showpassword ? "text" : "password"}
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="••••••••"
//               />
//             </div>
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
//             >
//               {loading ? "Signing in..." : "Sign in"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;

import { Link } from "react-router-dom";
import LoginLeftSide from "./LoginLeftSide";
import { ArrowLeftIcon, EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

const LoginForm = ({ role, title, subtitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      // Add your login API call here
      console.log({
        role,
        email,
        password,
      });

      // Example:
      // const response = await loginUser({ role, email, password });
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50">
      {/* Left Side */}
      <LoginLeftSide />

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto min-h-screen">
        <div className="w-full max-w-md animate-fade-in">
          {/* Back to Portals */}
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 transition-colors mb-8"
          >
            <ArrowLeftIcon size={16} />
            Back to portals
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-2">
              {title}
            </h2>

            <p className="text-slate-500">{subtitle}</p>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg mb-5 text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full border border-slate-300 rounded-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full border border-slate-300 rounded-lg px-3 py-2.5 pr-11 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  placeholder="••••••••"
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOffIcon size={18} />
                  ) : (
                    <EyeIcon size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {loading ? "Signing in..." : `Sign in as ${role}`}
            </button>
          </form>

          {/* Footer */}
          <p className="mt-8 text-center text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Employee Management System.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
