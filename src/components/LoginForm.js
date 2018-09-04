import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';


import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  onButtonPress() {
    const { email, password } = this.props;
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white ' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }
    renderButton() {
      if (this.props.loading) {
       return (
        <CardSection>
         <Spinner size="small" />
         </CardSection>
       );
      }
      return (
        <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
      );
    }

  render() {
    return (
    <View style={styles.viewStyle}>
      <Card>
        <CardSection>
           <Input
           label="Email"
           placeholder="email@gmail.com"
           onChangeText={this.onEmailChange.bind(this)}
           value={this.props.email}
           />
        </CardSection>

        <CardSection>
          <Input
          secureTextEntry
          label="Password"
          placeholder="password"
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
          />
        </CardSection>

         <CardSection>
          {this.renderError()}
          {this.renderButton()}
          </ CardSection>

        </Card>
      </View>

    );
  }
}


const styles = {
  errorTextStyle: {
    fontsize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  viewStyle: {
   alignSelf: 'center',
   alignItems:'center',
   backgroundColor: 'rgb(55,255,212)',
   width: 425,
   height:750
  }
};

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    user: state.auth.user,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps,
   { emailChanged, passwordChanged, loginUser })(LoginForm);
