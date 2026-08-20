const LoginLeftSide = () => {
  return (
    <div className="hidden md:flex w-1/2 bg-indigo-950 relative overflow-hidden border-r border-slate-200">
      
      {/* Decorative circle */}
      <div className="absolute -top-30 -left-30 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center px-12 lg:px-16">
        <h1 className="text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight tracking-tight">
          Employees
          <br />
          Management System
        </h1>

        <p className="text-slate-400 text-lg max-w-md leading-relaxed">
          Streamline your workforce operations, track attendance, manage
          leaves, and generate payslips with ease. Our system empowers
          organizations to optimize their human resource processes, ensuring
          efficiency and accuracy in managing employee data.
        </p>
      </div>
    </div>
  );
};

export default LoginLeftSide;