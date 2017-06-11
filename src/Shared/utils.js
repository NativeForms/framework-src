import React from 'react';
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

// See http://redux.js.org/docs/recipes/UsingImmutableJS.html#use-a-higher-order-component-to-convert-your-smart-components-immutablejs-props-to-your-dumb-components-javascript-props
export const toJS = (WrappedComponent) =>
  (wrappedComponentProps) => {
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

export function getLocale() {
  return 'en';
}
