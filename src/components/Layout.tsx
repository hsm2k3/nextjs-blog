import React from 'react'
import {Navbar} from "@/components/bars/Navbar";
import {styles} from "@/app/styles/styles";


type LayoutProps = {
    children: React.ReactNode;
};


const Layout: React.FC<LayoutProps> = ({ children }) => {
    return(

            <div className={styles.prologue}>
                <div className="navbar-container">
                    <Navbar />
                    {/*{componentToRender}*/}
                </div>
                {children}
            </div>
    )
}

export default Layout;