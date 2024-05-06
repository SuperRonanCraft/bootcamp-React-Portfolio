import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function NavItem({ title, link }) {
  console.log(title, link);
  return (
    // className={`${window.location.pathname === link ? 'active' : ''}`}

    <Link
      to={link}
      className={`flex items-center gap-2 text-lg font-semibold md:text-base ${
        window.location.pathname === link
          ? 'text-black'
          : 'text-gray-500 hover:text-red-500'
      }`}
    >
      {title ? title : link}
    </Link>
  );
}

export default NavItem;
