import React, { Component } from 'react';
import {Switch, Route} from 'react-router';
import {Link} from 'react-router-dom';
import { Timeline } from 'antd';
import Guide from '../Guide';
import Details from './Step-1-Details';
import Cards from './Step-1-Details/Cards'

class InterviewGuide extends Component {
  render() {
    const timeline = <Timeline>
      <Timeline.Item color="blue"><Link style={{ color: 'inherit' }} to='/1'>Detaljer</Link></Timeline.Item>
      <Timeline.Item color="gray"><Link style={{ color: 'inherit' }} to='/2'>Planlæg</Link></Timeline.Item>
      <Timeline.Item color="gray"><Link style={{ color: 'inherit' }} to='/2'>Brev</Link></Timeline.Item>
      <Timeline.Item color="gray"><Link style={{ color: 'inherit' }} to='/2'>Journal</Link></Timeline.Item>
    </Timeline>;


    let step1 = <Guide title='Indkald til samtale'
                       left={timeline}
                       content={<Details/>}
                       right={<Cards/>} />;

    let step2 = <Guide title='Indkald til samtale'
                       left={timeline} />;

    return (
      <Switch>
        <Route exact path='/' render={() => step1}/>
        <Route exact path='/1/' render={() => step1}/>
        <Route exact path='/2/' render={() => step2}/>
        <Route exact path='/3/' render={() => step2}/>
        <Route exact path='/4/' render={() => step2}/>
      </Switch>

    );
  }
}

export default InterviewGuide;
