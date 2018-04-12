import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Icon, Button, AutoComplete, Divider, Row, Col } from 'antd';
import InterviewType from './InterviewType';
import InterviewForm from './InterviewForm';
import FormItemHeader from '../../../Components/FormItemHeader'
import YesNoRadioGroup from '../../../Components/RadioButtonGroup/YesNoRadioGroup';

const FormItem = Form.Item;
const usersDataSource = ['Henrik Lehmann Thomsen', 'Jennica Falk', 'Simon Kohrtz'];

const Details = props => {
  return (
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
            <Button type="primary"><Link style={{ color: 'inherit' }} to='/2'>NÆSTE</Link></Button>
          </Col>
        </Row>
      </FormItem>
    </Form>
  );
};

export default Details;
