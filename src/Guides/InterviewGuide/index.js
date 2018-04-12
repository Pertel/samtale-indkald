import React, { Component } from 'react';
import { Form, Input, Icon, Button, AutoComplete, Divider, Row, Col, Card, Timeline } from 'antd';
import InterviewType from './InterviewType';
import InterviewForm from './InterviewForm';
import FormItemHeader from '../../Components/FormItemHeader'
import YesNoRadioGroup from '../../Components/RadioButtonGroup/YesNoRadioGroup';

const FormItem = Form.Item;
const usersDataSource = ['Henrik Lehmann Thomsen', 'Jennica Falk', 'Simon Kohrtz'];

class InterviewGuide extends Component {
  render() {
    return (
      <div style={{margin: 5, border: '1px solid silver'}}>
        <Row style={{backgroundColor:'#F2F2F2', paddingLeft: 10}}>
          <Col span={2}><h2><b>Schultz</b>&nbsp;Fasit</h2></Col>
          <Col span={1} style={{textAlign:'right'}}><h2>|</h2></Col>
          <Col span={16} style={{paddingLeft: 20}}><h2>Indkald til samtale</h2></Col>
          <Col span={5}></Col>
        </Row>
        <Row style={{paddingTop: 25, paddingLeft: 10}}>
          <Col span={3}>
            <Timeline>
              <Timeline.Item color="blue">Detaljer</Timeline.Item>
              <Timeline.Item color="gray">Planlæg</Timeline.Item>
              <Timeline.Item color="gray">Brev</Timeline.Item>
              <Timeline.Item color="gray">Journal</Timeline.Item>
            </Timeline>
          </Col>
          <Col span={15} style={{paddingRight: 100}}>
            <Form>

              <h3 style={{paddingBottom: 20}}>Samtaletype og form</h3>
              <FormItem>
                <FormItemHeader label='Samtaletype' tooltip='Huh??' />
                <InterviewType />
              </FormItem>

              <FormItem>
                <FormItemHeader label='Samtaleform' tooltip='Huh??' />
                <InterviewForm />
              </FormItem>

              <Divider />

              <h3 style={{paddingBottom: 20}}>Deltagere</h3>
              <FormItem>
                <FormItemHeader label='Borger' />
                Jonjel Ruperth Vvedenskaia
              </FormItem>

              <FormItem>
                <FormItemHeader label='Ansvarlig sagsbehandler' tooltip='Huh??' />
                <div className="certain-category-search-wrapper" style={{ width: 300 }}>
                  <AutoComplete
                    className="certain-category-search"
                    dropdownClassName="certain-category-search-dropdown"
                    dropdownMatchSelectWidth={false}
                    dropdownStyle={{ width: 300 }}
                    size="large"
                    style={{ width: '100%' }}
                    dataSource={usersDataSource}
                    value="Jennica Falk"
                    optionLabelProp="value">
                    <Input suffix={<Icon type="search" className="certain-category-icon" />} />
                  </AutoComplete>
                </div>
              </FormItem>

              <FormItem>
                <FormItemHeader label='Yderligere deltagere' />
                <YesNoRadioGroup defaultNo />
              </FormItem>
              <Divider />
              <FormItem>
                <Row>
                  <Col span={12}>
                    <Button>GEM KLADDE</Button>
                  </Col>
                  <Col span={12} style={{textAlign: 'right'}}>
                    <Button type="primary">NÆSTE</Button>
                  </Col>
                </Row>
              </FormItem>
            </Form>
          </Col>
          <Col span={6} style={{paddingRight: 5}}>
            <Card style={{marginBottom: 30}}>
              <div style={{borderLeft: '4px solid #1890FF', height: 35, float: 'left', marginLeft: '-26px', marginTop: 5}} />
              <p>
                Jonjel Ruperth Vvedenskaia
                <br />
                301170-1234&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dagpengemodtagere
              </p>
              <b>Noter</b>
              <p>Der er tilknyttet en tolk</p>
              <b>Fritagelser</b>
              <p>Fritaget for CV</p>
              <b>Jobsamtaler i igangværende sagsår</b>
              <p>4</p>
            </Card>
            <Card>
              <b>Seneste samtale</b>
              <p>12-01-2018</p>
              <b>Aftale fra seneste samtale</b>
              <p>Lorem ipsum dolor sit amet, purus sollicitudin, elit lectus morbi dignissim, quam rutrum, ultricies dui amet mollis luctus, a erat a orci ut. At orci odio eu eget posuere. In cras in vivamus vivamus elementum, sodales diam dapibus viverra. Dictumst interdum montes, lacus hendrerit augue,</p>
            </Card>
          </Col>
        </Row>
    </div>
    );
  }
}

export default InterviewGuide;
