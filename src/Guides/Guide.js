import React, { Component } from 'react';
import { Row, Col } from 'antd';

class Guide extends Component {
  render() {
    let {content, left, right, title} = this.props;

    return (
      <div style={{margin: 5, border: '1px solid silver'}}>
        <Row style={{backgroundColor:'#F2F2F2', paddingLeft: 10}}>
          <Col span={2}><h2><b>Schultz</b>&nbsp;Fasit</h2></Col>
          <Col span={1} style={{textAlign:'right'}}><h2>|</h2></Col>
          <Col span={16} style={{paddingLeft: 20}}><h2>{title}</h2></Col>
          <Col span={5}></Col>
        </Row>

        <Row style={{paddingTop: 25, paddingLeft: 10}}>
          <Col span={3}>
            {left}
          </Col>

          <Col span={15} style={{paddingRight: 100}}>
            {content}
          </Col>

          <Col span={6} style={{paddingRight: 5}}>
            {right}
          </Col>
        </Row>

      </div>
    );
  }
}

export default Guide;
