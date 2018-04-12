import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import InterviewGuide from './../Guides/InterviewGuide';
import RadioButtonGroup from './../Components/RadioButtonGroup';
import { Button, Welcome } from '@storybook/react/demo';

import { withKnobs, text, boolean, number, array } from '@storybook/addon-knobs/react';

import './../App.css';

storiesOf('InterviewGuide', module)
  .add('Default', () => <InterviewGuide />);

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
const stories = storiesOf('RadioButtonGroup', module);
stories.addDecorator(withKnobs);
stories.add('Default', () => <RadioButtonGroup options={options} noCols={number('noCols', 3)} /> );

//storiesOf('Button', module)
//  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//  .add('with some emoji', () => (
//    <Button onClick={action('clicked')}>
//      <span role="img" aria-label="so cool">
//        😀 😎 👍 💯
//      </span>
//    </Button>
//  ));
//
