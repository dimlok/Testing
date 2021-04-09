import React from "react";
import { Link } from "react-router-dom";

export default function NavItem({ to, children, marked = false }) {
  return (
    <>
      <Link to={to}>{children}</Link>
    </>
  );
}
