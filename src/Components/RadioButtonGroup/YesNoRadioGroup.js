import React from 'react';
import { Radio } from 'antd';
const RadioGroup = Radio.Group;

const style = {paddingRight: 40}

const YesNoRadioGroup = props =>
      <RadioGroup defaultValue={props.defaultNo ? 2 : 1}>
        <Radio value={1} style={style}>Ja</Radio>
        <Radio value={2}>Nej</Radio>
      </RadioGroup>;

export default YesNoRadioGroup;
