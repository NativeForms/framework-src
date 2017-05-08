import NavigationContainer from './Navigation.container';

// TODO use Immutable.js
export default NavigationContainer.router.getStateForAction(NavigationContainer.router.getActionForPathAndParams('Home'));
