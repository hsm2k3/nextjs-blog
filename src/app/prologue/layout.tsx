import {Navbar} from "@/components/bars/Navbar";
import React from "react";

export default function PrologueLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {
      <div className={"flex min-h-screen flex-col items-center justify-between p-24"}>
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