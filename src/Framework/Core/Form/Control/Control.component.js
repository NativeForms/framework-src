import React, { Component, PropTypes } from 'react';
import { Item } from 'native-base';

// app
import ButtonComponent from './Button/Button.component';
import LinkComponent from './Link/Link.component';

export default class ControlComponent extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    attributes: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props);

    this.CONTROL_MAP = {
      button: this.renderButton.bind(this),
      link: this.renderLink.bind(this),
    };
  }

  renderControl() {
    const func = this.CONTROL_MAP[this.props.type];
    return func();
  }

  renderButton() {
    return <ButtonComponent {...this.props.attributes} />;
  }

  renderLink() {
    return <LinkComponent {...this.props.attributes} />;
  }

  render() {
    return (
      <Item>
        {
          this.renderControl()
        }
      </Item>
    );
  }
}
