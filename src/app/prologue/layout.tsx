import {Navbar} from "@/components/bars/Navbar";
import React from "react";
import {styles} from "@/app/styles/styles";

// this function is responsible for rendering the layout of the prologue page.
// it takes a single argument, children, which is a ReactNode.
// the children are the components that are passed to the PrologueLayout.
// the PrologueLayout is a wrapper for the Navbar and the children.
// the Navbar is a component that is imported from the @/componenets/bars directory.
export default function PrologueLayout({ children }: { children: React.ReactNode }) {
  return (
      <div className={styles.prologue}>
          <div className="navbar-container">
              <Navbar />
          </div>
          {children}
      </div>
  )
}