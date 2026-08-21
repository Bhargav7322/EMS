import LoginLeftSide from "../components/LoginLeftSide";
import { ShieldIcon, UserIcon, ArrowRight } from "lucide-react";

const LoginLanding = () => {
  const portalOptions = [
    {
      to: "/login/admin",
      title: "Admin Portal",
      description:
        "Manage employees, departments, and system settings with full administrative control.",
      icon: ShieldIcon,
    },
    {
      to: "/login/employee",
      title: "Employee Portal",
      description:
        "View your payslips, submit leave requests, and access personal information securely.",
      icon: UserIcon,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50">
      <LoginLeftSide />

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto min-h-screen">
        <div className="w-full max-w-md animate-fade-in relative z-10">
          {/* Header */}
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-3">
              Welcome Back
            </h2>

            <p className="text-slate-500">
              Select your portal to securely access the system.
            </p>
          </div>

          {/* Portal Options */}
          <div className="space-y-4">
            {portalOptions.map((option) => {
              const Icon = option.icon;

              return (
                <a
                  key={option.to}
                  href={option.to}
                  className="group block bg-white border border-slate-200 rounded-xl p-5 hover:border-indigo-300 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-center">
                    {/* Left Icon */}
                    <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-indigo-50 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-indigo-600" />
                    </div>

                    {/* Content */}
                    <div className="ml-4 flex-1">
                      <h3 className="font-medium text-slate-900">
                        {option.title}
                      </h3>

                      <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                        {option.description}
                      </p>
                    </div>

                    {/* Right Arrow */}
                    <ArrowRight
                      className="w-5 h-5 ml-4 text-slate-400
                      group-hover:text-indigo-600
                      group-hover:translate-x-1
                      transition-all duration-200"
                    />
                  </div>
                </a>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-10 text-center text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Employee Management System.
            <br />
            All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLanding;
