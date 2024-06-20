import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        console.log("inside if statement!");
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
  }, [dropdown]);

  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li ref={ref} style={{ background: "peru" }}>
          <button onClick={() => setDropdown((prev) => !prev)}>
            Services <span>&#8595;</span>
          </button>
          {dropdown && (
            <ul>
              <li>Design</li>
              <li>Development</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
