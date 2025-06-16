import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

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

export default NavBar;
