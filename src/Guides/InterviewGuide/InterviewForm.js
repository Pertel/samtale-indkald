import React, { Component } from 'react';
import RadioButtonGroup from '../../Components/RadioButtonGroup';

class InterviewForm extends Component {
  render() {
    const options = [
      {id: 1, name: 'Personlig'},
      {id: 2, name: 'Telefonisk'},
      {id: 3, name: 'Per email'},
    ];
    return (
      <RadioButtonGroup options={options} />
    );
  }
}

export default InterviewForm;
