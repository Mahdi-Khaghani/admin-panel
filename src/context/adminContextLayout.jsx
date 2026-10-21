import { createContext, useState } from "react";

export const adminContext = createContext({
  showSidebar: false,
  setShowSidebar: () => {},
});

const AdminContextContainer = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <adminContext.Provider value={{ showSidebar, setShowSidebar }}>
      {children}
    </adminContext.Provider>
  );
};

export default AdminContextContainer;
