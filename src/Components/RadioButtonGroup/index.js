import React from 'react';
import { Row, Col, Radio } from 'antd';
import PropTypes from 'prop-types';
const RadioGroup = Radio.Group;

const RadioButtonGroup = (props) => {
  let {options, noCols=3} = props;

  if(!options) {
    return null;
  }
  let optionsBuffer = options.slice();

  const radioRow = (item, id) =>      <Row key={id}>
                                        {optionsBuffer.splice( id, noCols, {} ).map( radioColumn )}
                                      </Row>;

  const radioColumn = (option, id) => <Col span={Math.floor(24/noCols)}
                                           key={option.id}>
                                        <Radio value={option.id} key={option.id}>
                                          {option.name}
                                        </Radio>
                                      </Col>;

  const optionRows = optionsBuffer.map( radioRow );

  return (
    <RadioGroup defaultValue={1} style={{display: 'block'}}>
      {optionRows}
    </RadioGroup>
  );
};

RadioButtonGroup.PropTypes = {
  options: PropTypes.arrayOf( PropTypes.element ).isRequired,
  noCols: PropTypes.number
};

export default RadioButtonGroup;
