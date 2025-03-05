import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="page-container">
      <div className="mx-auto">
        <div className="flex flex-col items-center">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
