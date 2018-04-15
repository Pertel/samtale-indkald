import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import Step from './Step';
import { Timeline } from 'antd';

class Guide extends Component {
  constructor() {
    super();
    this.state = {
      currentStep: 0
    };
  }

  setCurrentStep( id ) {
    this.setState({
      currentStep: id
    });
  }

  renderTimeline() {
    let {steps} = this.props;
    let {currentStep} = this.state;

    const timelineItems = steps.map( (step, id) => {
      const linkStyle = {color: id === currentStep ? '#1890FF' : 'inherit'};

      return <Timeline.Item color={id === currentStep ? 'blue' : 'gray'} key={id}>
        <a onClick={() => this.setCurrentStep( id )} style={linkStyle}>
          {step.props.title}
        </a>
      </Timeline.Item> } );

    const timeline =
      <Timeline>
        {timelineItems}
      </Timeline>;

    return timeline;
  }

  render() {
    let {title, steps} = this.props;
    let {currentStep} = this.state;
    if( !steps || currentStep > steps.length ) {
      return;
    }
    let step = steps[currentStep];

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
            {this.renderTimeline()}
          </Col>
          {step}
        </Row>

      </div>
    );
  }
}

Guide.propTypes = {
  title: PropTypes.string.isRequired,
  steps: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Guide;
