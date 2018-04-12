import React, { Component } from 'react';
import RadioButtonGroup from '../../../Components/RadioButtonGroup';

class InterviewType extends Component {
  render() {
    const options = [
      {id: 1, name: 'Jobsamtale'},
      {id: 2, name: 'Jobsamtale (a-kasse)'},
      {id: 3, name: 'CV-samtale'},
      {id: 4, name: 'Flexjobsamtale'},
      {id: 5, name: 'Anden samtale'},
      {id: 6, name: 'Rehabiliteringsmøde'},
      {id: 7, name: 'Informationsmøde'},
      {id: 8, name: 'Opfølgningssamtale'},
      {id: 9, name: 'Integrationssamtale'},
    ];
    return (
      <RadioButtonGroup options={options} />
    );
  }
}

export default InterviewType;
