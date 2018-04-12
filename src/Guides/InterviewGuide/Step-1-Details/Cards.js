import React from 'react';
import {Card} from 'antd';
import CardBorder from '../../../Components/CardBorder';

const Cards = () => [<Card style={{marginBottom: 30}}>
  <CardBorder />
  <p>
    Jonjel Ruperth Vvedenskaia
    <br />
    301170&#8209;1234&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dagpengemodtagere
  </p>
  <b>Noter</b>
  <p>Der er tilknyttet en tolk</p>
  <b>Fritagelser</b>
  <p>Fritaget for CV</p>
  <b>Jobsamtaler i igangværende sagsår</b>
  <p>4</p>
</Card>,
<Card>
  <b>Seneste samtale</b>
  <p>12-01-2018</p>
  <b>Aftale fra seneste samtale</b>
  <p>Lorem ipsum dolor sit amet, purus sollicitudin, elit lectus morbi dignissim, quam rutrum, ultricies dui amet mollis luctus, a erat a orci ut. At orci odio eu eget posuere. In cras in vivamus vivamus elementum, sodales diam dapibus viverra. Dictumst interdum montes, lacus hendrerit augue,</p>
</Card>];

export default Cards;
