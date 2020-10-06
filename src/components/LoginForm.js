import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  render(){
    return (
      <Card>
        <CardSection>
          <Input 
            label="Email"
            placeholder="email@gmail.com"
          />
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm;
