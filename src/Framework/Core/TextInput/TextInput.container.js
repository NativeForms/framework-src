import React, { Component } from 'react';

import TextInputComponent from './TextInput.component';

export default class TextInputContainer extends Component {

  render() {
    return (
      <TextInputComponent {...this.props}/>
    );
  }
}
