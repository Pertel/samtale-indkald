import React from 'react';
import { Tooltip, Icon } from 'antd';
import PropTypes from 'prop-types';

const FormHeader = (props) => {
  let {text} = props;

  return (
    <h3 style={{paddingBottom: 20}}>{text}</h3>
  );
};

FormHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default FormHeader;
