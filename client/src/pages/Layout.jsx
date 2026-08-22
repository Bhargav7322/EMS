// import { Outlet } from "react-router-dom"

// const Layout = () => {
//   return (
//     <div className="flex h-screen bg-linear-to-br from-slate-50 via-white to-indigo-50/30">
      
//       <main className="flex-1 overflow-y-auto ">
//         {/* <div className="p-4 pt-16 sm:pt-6 sm:pt-6 lg:p-8 max-w-400 mx-w-400 mx-auto"> */}
//         <div className="p-4 pt-16 sm:pt-6 lg:p-8 max-w-400 mx-w-400 mx-auto">
//           <Outlet />
//         </div>
//       </main>
//     </div>
//   )
// }

// export default Layout


import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar"
const Layout = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto lg:ml-64">
        <div className="p-4 pt-16 sm:p-6 lg:p-8 max-w-[1600px] mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;