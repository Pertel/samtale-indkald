import React from 'react';
import { Radio } from 'antd';
import PropTypes from 'prop-types';
const RadioGroup = Radio.Group;

const style = {paddingRight: 40}

const YesNoRadioGroup = props =>
      <RadioGroup defaultValue={props.defaultNo ? 2 : 1}>
        <Radio value={1} style={style}>Ja</Radio>
        <Radio value={2}>Nej</Radio>
      </RadioGroup>;

YesNoRadioGroup.propTypes = {
  defaultNo: PropTypes.bool,
}

export default YesNoRadioGroup;
