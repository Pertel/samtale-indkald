import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Guide from '../Guide';
import Step from '../Step';
import Details from './Step1';
import Cards from './Step1/Cards'

const InterviewGuide = props => {
    let steps = [
      <Step title='Detaljer'
            content={<Details/>}
            sider={<Cards/>} />,

      <Step title='Planlæg' />,

      <Step title='Brev' />,

      <Step title='Journal' />, ];
    return <Guide title="Indkald til samtale" steps={steps} />;
}

export default InterviewGuide;
