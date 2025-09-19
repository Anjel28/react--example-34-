import { useState } from 'react';

function DropdownMenu() {
  // `isOpen` is a boolean state to track if the menu is visible.
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggles the boolean value
  };

  return (
    <div>
      <button onClick={toggleMenu}>
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>
      {/* Conditionally render the menu based on the `isOpen` state. */}
      {isOpen && (
        <div className="dropdown-content">
          <a href="#">Link 1 </a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;