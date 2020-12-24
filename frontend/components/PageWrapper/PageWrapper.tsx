import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

export interface PageWrapperProps {
  children: any;
}

/**
 * Primary UI component for user interaction
 */

export const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
}: PageWrapperProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
