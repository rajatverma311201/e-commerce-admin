import React from "react";

interface LayoutProps {
    children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex h-full items-center justify-center">
            {children}
        </div>
    );
};

export default Layout;
