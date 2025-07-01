import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { memo } from "react";

const NavBar = ({ navLink }) => {
  const { pathname } = useLocation();

  return (
    <>
      {navLink.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={clsx(
            "transition-colors",
            pathname === link.path
              ? "text-[rgb(var(--color-brand))]"
              : "text-[rgb(var(--color-muted))] hover:text-[rgb(var(--color-brand-hover))]"
          )}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.navLink.every(
    (link, i) =>
      link.label === nextProps.navLink[i].label &&
      link.path === nextProps.navLink[i].path
  );
};

export default memo(NavBar, areEqual);
