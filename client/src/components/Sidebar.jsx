import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { dummyProfileData } from "../assets/assets";

import { MenuIcon } from "lucide-react";

const Sidebar = () => {
  const { pathname } = useLocation();
  const [userName, setUserName] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setUserName(dummyProfileData.firstName + " " + dummyProfileData.lastName);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const sidebarContent = (<>
  
  {/* {Brand header} */}

  <div>

  </div>

{/* {User profile card} */}


{/* {Sections label} */}

{/* {Navigation List} */}

{/* {Logout}  */}

  </>);

  return (
    <>
      {/* {Mobile hamburger button} */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <MenuIcon size={24} />
      </button>

      {/* {Mobile overlay} */}

      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}

      {/* sidebar content */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200 fixed inset-y-0 left-0 z-50 overflow-y-auto">
        {sidebarContent}
      </aside>

      {/* {Sidebar - mobile} */}
      <aside className="lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 overflow-y-auto">
        {sidebarContent}
      </aside>

    </>
  );
};

export default Sidebar;
