import {Navbar} from "@/components/bars/Navbar";
import React from "react";
import {styles} from "@/app/styles/styles";

export default function PrologueLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {
      <div className={styles.prologue}>
          <div className="navbar-container">
              <Navbar />
          </div>
          {children}
      </div>
      }
      {children}
    </section>
  )
}