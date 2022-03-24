/* eslint-disable react/no-typos */
import React from 'react';
import PropTypes from 'prop-types';
import { CardButton } from './style';

const Button = ({ title, onClick, img, background, color, type }) => {
  return (
    <CardButton background={background} color={color}>
      <button type={type} onClick={onClick}>
        <img src={img} alt="" />
        {title}
      </button>
    </CardButton>
  );
};

Button.PropTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.string,
  img: PropTypes.string,
  background:  PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
