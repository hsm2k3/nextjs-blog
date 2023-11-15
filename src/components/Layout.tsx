import React from 'react'
import {Navbar} from "@/components/bars/Navbar";


type LayoutProps = {
    children: React.ReactNode;
};


const Layout: React.FC<LayoutProps> = ({ children }) => {
    return(

            <div className={"flex min-h-screen flex-col items-center justify-between p-24"}>
                <div className="navbar-container">
                    <Navbar />
                    {/*{componentToRender}*/}
                </div>
                {children}
            </div>
    )
}

export default Layout;