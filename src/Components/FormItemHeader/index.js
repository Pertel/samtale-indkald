import React from 'react';
import { Tooltip, Icon } from 'antd';

const FormItemHeader = (props) => {
  let {tooltip, label} = props;

  return (
    <div style={{fontWeight: 'bold'}}>
      {label}&nbsp;
      {tooltip && <Tooltip title={tooltip}>
        <Icon type="info-circle-o" style={{color: '#1890FF', paddingLeft: 10}} />
      </Tooltip>}
    </div>
  );
};

export default FormItemHeader;
