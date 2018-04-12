import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { Layout } from 'antd';
const { Header, Content, Footer, Sider } = Layout;


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, ...restProps } = this.props;

    return (
      <Layout>
        <Header className="header">header</Header>
        <Layout>
          <Sider>left sidebar</Sider>
          <Content>main content</Content>
          <Sider>right sidebar</Sider>
        </Layout>
        <Footer>footer</Footer>
      </Layout>
    );
  }
}

export default App;
