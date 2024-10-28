import PropTypes from "prop-types";

function Link({ route }) {
  return (
    <li className="mr-7">
      <a className="bg-yellow-300 inline-block px-3 py-1 mt-1 rounded-2xl hover:bg-red-500 " href={route.path}>{route.name}</a>
    </li>
  );
}

Link.propTypes = {

};

export default Link;
