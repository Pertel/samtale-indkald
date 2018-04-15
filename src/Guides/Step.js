import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'antd';

const Step = props =>
  <div>
    <Col span={15} style={{paddingRight: 100}}>
      {props.content}
    </Col>

    <Col span={6} style={{paddingRight: 5}}>
      {props.sider}
    </Col>
  </div>;

  Step.propTypes = {
    content: PropTypes.element.isRequired,
    sider: PropTypes.element,
    title: PropTypes.string.isRequired,
  };

export default Step;
