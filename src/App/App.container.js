import React, { Component, PropTypes } from 'react';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

// app
import NavigationContainer from './Navigation';
import { baseTheme } from './themes/base.theme';

@connect(
  state => ({
    nav: state.get('nav'),
  }),
  dispatch => ({ dispatch })
)
export default class AppContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };

  render() {
    const { dispatch, nav } = this.props;
    return (
      <Container theme={baseTheme}>
        <NavigationContainer navigation={addNavigationHelpers({ dispatch, state: nav })} />
      </Container>
    );
  }
}
