// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { dummyProfileData } from "../assets/assets";

// import { MenuIcon, User, UserIcon, X, XIcon } from "lucide-react";

// const Sidebar = () => {
//   const { pathname } = useLocation();
//   const [userName, setUserName] = useState("");
//   const [mobileOpen, setMobileOpen] = useState(false);

//   useEffect(() => {
//     setUserName(dummyProfileData.firstName + " " + dummyProfileData.lastName);
//   }, []);

//   useEffect(() => {
//     setMobileOpen(false);
//   }, [pathname]);

//   const sidebarContent = (
//     <>
//       {/* {Brand header} */}

//       <div className="flex items-center justify-center h-16 bg-indigo-600 text-white text-lg font-semibold">
//         <div className="flex items-center gap-3">
//           <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-indigo-600 font-bold">
//             <UserIcon className="text-white size-10" />
//             <div>
//               <p className="font-semibold text-[13px] text-white tracking-wide">
//                 Employee Management System
//               </p>
//               <p className="text-sm font-medium text-slate-500">
//                 Management System
//               </p>
//             </div>
//           </div>
//           {/* {Close button on mobile} */}
//           <button onClick={()=>setMobileOpen(false)} className="lg:hidden ml-auto p-2 rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-white">
//             <XIcon size={24} />
//           </button>
//         </div>
//       </div>

//       {/* {User profile card} */}

//       {/* {Sections label} */}

//       {/* {Navigation List} */}

//       {/* {Logout}  */}
//     </>
//   );

//   return (
//     <>
//       {/* {Mobile hamburger button} */}
//       <button
//         onClick={() => setMobileOpen(true)}
//         className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//       >
//         <MenuIcon size={24} />
//       </button>

//       {/* {Mobile overlay} */}

//       {mobileOpen && (
//         <div
//           className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50"
//           onClick={() => setMobileOpen(false)}
//         ></div>
//       )}

//       {/* sidebar content */}
//       <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200 fixed inset-y-0 left-0 z-50 overflow-y-auto">
//         {sidebarContent}
//       </aside>

//       {/* {Sidebar - mobile} */}
//       <aside className="lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 overflow-y-auto">
//         {sidebarContent}
//       </aside>
//     </>
//   );
// };

// export default Sidebar;

// import { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { dummyProfileData } from "../assets/assets";
// import {
//   CalendarIcon,
//   DollarSignIcon,
//   FileTextIcon,
//   LayoutGridIcon,
//   MenuIcon,
//   Settings,
//   UserIcon,
//   XIcon,
// } from "lucide-react";

// const Sidebar = () => {
//   const { pathname } = useLocation();

//   const [mobileOpen, setMobileOpen] = useState(false);

//   const [userName, setUserName] = useState("");

//   useEffect(() => {
//     setUserName(dummyProfileData.firstName + " " + dummyProfileData.lastName);
//   }, []);

//   // Close mobile sidebar whenever the route changes
//   useEffect(() => {
//     setMobileOpen(false);
//   }, [pathname]);

//   const role = "" || "EMPLOYEE"; // Replace with actual role logic

//   const navItems = [
//     {
//       name: "Dashboard",
//       href: "/dashboard",
//       icon: <LayoutGridIcon size={20} />,
//     },
//     role === "ADMIN"
//       ? {
//           name: "Employees",
//           href: "/employees",
//           icon: <UserIcon size={20} />,
//         }
//       : {
//           name: "Attendance",
//           href: "/attendance",
//           icon: <CalendarIcon size={20} />,
//         },
//     {
//       name: "Leave",
//       href: "/leave",
//       icon: <FileTextIcon size={20} />,
//     },
//     {
//       name: "Payslips",
//       href: "/payslips",
//       icon: <DollarSignIcon size={20} />,
//     },
//     {
//       name: "Settings",
//       href: "/settings",
//       icon: <Settings size={20} />,
//     },
//   ];

//   const sidebarContent = (
//     <>
//       {/* Brand Header */}
//       <div className="flex items-center h-16 px-4 bg-indigo-600 text-white">
//         <div className="flex items-center gap-3 flex-1">
//           {/* Logo */}
//           <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
//             <UserIcon className="text-indigo-600 size-5" />
//           </div>

//           {/* Brand Name */}
//           <div>
//             <p className="font-semibold text-[13px] text-white tracking-wide">
//               Employee Management
//             </p>
//             <p className="text-xs font-medium text-indigo-200">
//               Management System
//             </p>
//           </div>
//         </div>

//         {/* Close Button - Mobile */}
//         <button
//           onClick={() => setMobileOpen(false)}
//           className="lg:hidden p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-white"
//           aria-label="Close sidebar"
//         >
//           <XIcon size={22} />
//         </button>
//       </div>

//       {/* User Profile Card */}
//       {userName && (
//         <div className="flex items-center gap-3 p-4 border-b border-gray-200">
//           <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
//             <UserIcon className="text-indigo-600 size-5" />
//           </div>

//           <div className="min-w-0">
//             <p className="text-sm font-semibold text-gray-800 truncate">
//               {userName}
//             </p>
//             <p className="text-xs text-gray-500 truncate">
//               {role === "ADMIN" ? "Administrator" : "Employee"}
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Sections Label */}
//       <div className="px-4 pt-6 pb-2">
//         <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
//           Navigation
//         </p>
//       </div>

//       {/* Navigation List */}
//       <div className="flex-1 overflow-y-auto">
//         {navItems.map((item) => {
//           const isActive = pathname.startsWith(item.href);
//           return (
//             <Link key={item.name} to={item.href} className={`flex items-center px-4 py-2 relative ${isActive ? "bg-indigo-50" : "hover:bg-gray-50"} transition`} >
//               {isActive && (
//                 <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 roundend-r-full bg-indigo-500"></div>
//               )}
//               <item.icon
//                 className={`mr-3 ${isActive ? "text-indigo-600" : "text-gray-400"}`}
//               />
//               <span
//                 className={`text-sm font-medium ${isActive ? "text-indigo-600" : "text-gray-700"}`}
//               >
//                 {item.name}
//               </span>
//             </Link>
//           );
//         })}
//       </div>

//       {/* Logout */}
//       <div className="mt-auto p-4 border-t border-gray-200">
//         <button
//           className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition"
//           onClick={() => {
//             console.log("Logout");
//           }}
//         >
//           Logout
//         </button>
//       </div>
//     </>
//   );

//   return (
//     <>
//       {/* Mobile Hamburger Button */}
//       <button
//         onClick={() => setMobileOpen(true)}
//         className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         aria-label="Open sidebar"
//       >
//         <MenuIcon size={24} />
//       </button>

//       {/* Mobile Overlay */}
//       {mobileOpen && (
//         <div
//           className="lg:hidden fixed inset-0 z-40 bg-black/50"
//           onClick={() => setMobileOpen(false)}
//         />
//       )}

//       {/* Desktop Sidebar */}
//       <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200 fixed inset-y-0 left-0 z-50 overflow-y-auto">
//         {sidebarContent}
//       </aside>

//       {/* Mobile Sidebar */}
//       <aside
//         className={`lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 overflow-y-auto transform transition-transform duration-300 ${
//           mobileOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {sidebarContent}
//       </aside>
//     </>
//   );
// };

// export default Sidebar;



import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { dummyProfileData } from "../assets/assets";
import {
  CalendarIcon,
  DollarSignIcon,
  FileTextIcon,
  LayoutGridIcon,
  LogInIcon,
  MenuIcon,
  Settings,
  UserIcon,
  XIcon,
} from "lucide-react";

const Sidebar = () => {
  const { pathname } = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [userName, setUserName] = useState("");


  const role = ""  || "EMPLOYEE"; // Replace with actual role logic

  useEffect(() => {
    setUserName(
      `${dummyProfileData.firstName} ${dummyProfileData.lastName}`
    );
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navItems = [
    // Dashboard - Both Admin and Employee
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutGridIcon,
    },

    // Admin -> Employees
    // Employee -> Attendance
    role === "ADMIN"
      ? {
          name: "Employees",
          href: "/employees",
          icon: UserIcon,
        }
      : {
          name: "Attendance",
          href: "/attendance",
          icon: CalendarIcon,
        },

    // Common menu items
    {
      name: "Leave",
      href: "/leave",
      icon: FileTextIcon,
    },

    {
      name: "Payslips",
      href: "/payslips",
      icon: DollarSignIcon,
    },

    {
      name: "Settings",
      href: "/settings",
      icon: Settings,
    },
  ];


  const handleLogout = () => {
  window.location.href = "/login";   
  };

  const sidebarContent = (
    <>
      {/* ========================================
          BRAND HEADER
      ======================================== */}
      <div className="flex items-center h-16 px-4 bg-indigo-600 text-white">
        <div className="flex items-center gap-3 flex-1">
          {/* Logo - First Letter */}
          <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
            <span className="text-indigo-600 font-bold text-sm uppercase">
              {userName ? userName.charAt(0) : "U"}
            </span>
          </div>

          {/* Brand Name */}
          <div>
            <p className="font-semibold text-[13px] text-white tracking-wide">
              Employee Management
            </p>

            <p className="text-xs font-medium text-indigo-200">
              Management System
            </p>
          </div>
        </div>

        {/* Mobile Close Button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="lg:hidden p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close sidebar"
        >
          <XIcon size={22} />
        </button>
      </div>

      {/* ========================================
          USER PROFILE
      ======================================== */}
      {userName && (
        <div className="flex items-center gap-3 p-4 border-b border-gray-200">
          {/* User Avatar */}
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
            <span className="text-indigo-600 font-semibold text-sm uppercase">
              {userName.charAt(0)}
            </span>
          </div>

          {/* User Information */}
          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-800 truncate">
              {userName}
            </p>

            <p className="text-xs text-gray-500 truncate">
              {role === "ADMIN" ? "Administrator" : "Employee"}
            </p>
          </div>
        </div>
      )}

      {/* ========================================
          NAVIGATION LABEL
      ======================================== */}
      <div className="px-4 pt-6 pb-2">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Navigation
        </p>
      </div>

      {/* ========================================
          NAVIGATION LIST
      ======================================== */}
      <div className="flex-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);

          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center px-4 py-2.5 relative transition-colors ${
                isActive ? "bg-indigo-50" : "hover:bg-gray-50"
              }`}
            >
              {/* Active Indicator */}
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r-full bg-indigo-500" />
              )}

              {/* Icon */}
              <Icon
                size={20}
                className={`mr-3 ${
                  isActive ? "text-indigo-600" : "text-gray-400"
                }`}
              />

              {/* Navigation Name */}
              <span
                className={`text-sm font-medium ${
                  isActive ? "text-indigo-600" : "text-gray-700"
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>

      {/* ========================================
          LOGOUT
      ======================================== */}
      <div className="mt-auto p-4 border-t border-gray-200">
        <button
          className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition"
          onClick={handleLogout}
        >
          <LogInIcon size={16} className="inline mr-2" />
          <span>Logout</span>
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* ========================================
          MOBILE HAMBURGER BUTTON
      ======================================== */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        aria-label="Open sidebar"
      >
        <MenuIcon size={24} />
      </button>

      {/* ========================================
          MOBILE OVERLAY
      ======================================== */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ========================================
          DESKTOP SIDEBAR
      ======================================== */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200 fixed inset-y-0 left-0 z-50 overflow-y-auto">
        {sidebarContent}
      </aside>

      {/* ========================================
          MOBILE SIDEBAR
      ======================================== */}
      <aside
        className={`lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 overflow-y-auto transform transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sidebarContent}
      </aside>
    </>
  );
};

export default Sidebar;