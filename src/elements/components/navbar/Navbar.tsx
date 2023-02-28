import React from "react";

interface INavbarProps {
  /**
   * Elements displayed in Navbar
   */
  elements: string[];
}

export default function Navbar({ ...props }: INavbarProps) {
  const { elements } = props;
  const navigationList = elements.map((e) => (
    <li>
      <a
        href={`/${e}`}
        className={["hover:text-orange-500", "dark:hover:text-orange-400"].join(
          " "
        )}
      >
        {e}
      </a>
    </li>
  ));

  return (
    <nav className={["Navbar"].join(" ")}>
      <ul className={["flex", "items-center", "space-x-8"].join(" ")}>
        {navigationList}
      </ul>
    </nav>
  );
}
