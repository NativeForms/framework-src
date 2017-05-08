import NavigationContainer from './Navigation.container';
import initialState from './Navigation.state';

export default (state = initialState, action) =>
  NavigationContainer.router.getStateForAction(action, state) || state;
