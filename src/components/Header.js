import React from "react";
import PropTypes from "prop-types";

function Header({ text, bgcolor, textColor }) {
  const style = {
    backgroundColor: bgcolor,
    color: textColor,
  };

  return (
    <div style={style}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </div>
  );
}
Header.defaultProps = {
  text: 'Feedback App',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
};
Header.propTypes = {
  text: PropTypes.string,
  bgcolor: PropTypes.string,
};

export default Header;
