import React from 'react';
import { injectIntl as inject } from 'react-intl';
import { Iterable } from 'immutable';

/**
 * Decorator to inject React Intl API
 * @param {Object} options - React Intl Options
 */
export const injectIntl = options => target => inject(target, options);

/** Decorator to convert ImmutableJS props to JavaScript props */
export const toJS = () => WrappedComponent =>
  wrappedComponentProps => {
    const KEY = 0;
    const VALUE = 1;
    const propsJS = Object.entries(wrappedComponentProps)
        .reduce((newProps, wrappedComponentProp) => {
          /* eslint no-param-reassign:0 */
          newProps[wrappedComponentProp[KEY]] =
              Iterable.isIterable(wrappedComponentProp[VALUE])
                  ? wrappedComponentProp[VALUE].toJS()
                  : wrappedComponentProp[VALUE];
          return newProps;
        }, {});

    return <WrappedComponent {...propsJS} />;
  };

/** Get default Locale from platform - TODO */
export function getLocale() {
  return 'en';
}
