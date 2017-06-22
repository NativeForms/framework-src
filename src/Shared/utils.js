import React from 'react';
import { injectIntl as inject } from 'react-intl';
import syntaxHighlighter from 'react-native-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/styles';
import { Iterable } from 'immutable';

export const SchemaViewer = (props) => syntaxHighlighter(
  Object.assign({}, syntaxHighlighter.defaultProps, {
    language: 'javascript',
    style: github,
    codeTagProps: {
      alwaysBounceVertical: false
    }
  }, props));

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
