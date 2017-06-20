/**
 * Components using the react-intl module require access to the intl context.
 * This is not available when mounting single components in Enzyme.
 * These helper functions aim to address that and wrap a valid,
 * English-locale intl context around them.
 */

import React from 'react';
import { IntlProvider, intlShape } from 'react-intl';
import { mount, shallow } from 'enzyme'; // eslint-disable-line import/no-extraneous-dependencies

/** Create the IntlProvider to retrieve context for wrapping around. */
function createIntlContext(messages, locale) {
  const intlProvider = new IntlProvider({ messages, locale }, {});
  const { intl } = intlProvider.getChildContext();
  return intl;
}

/** When using React-Intl `injectIntl` on components, props.intl is required. */
function nodeWithIntlProp(node, messages = {}, locale = 'en') {
  return React.cloneElement(node, { intl: createIntlContext(messages, locale) });
}

/**
 * Create a shadow renderer that wraps a node with Intl provider context.
 * @param {ReactComponent} node - Any React Component
 * @param {Object} context
 * @param {Object} messages - A map with keys (id) and messages (value)
 * @param {string} locale - Locale string
 */
export function shallowWithIntl(node, { context } = {}, messages = {}, locale = 'en') {
  return shallow(
    nodeWithIntlProp(node),
    {
      context: Object.assign({}, context, { intl: createIntlContext(messages, locale) }),
    }
  );
}

/**
 * Mount the node with Intl provider context.
 * @param {Component} node - Any React Component
 * @param {Object} context
 * @param {Object} messages - A map with keys (id) and messages (value)
 * @param {string} locale - Locale string
 */
export function mountWithIntl(node, { context, childContextTypes } = {}, messages = {}, locale = 'en') {
  return mount(
    nodeWithIntlProp(node),
    {
      context: Object.assign({}, context, { intl: createIntlContext(messages, locale) }),
      childContextTypes: Object.assign({}, { intl: intlShape }, childContextTypes)
    }
  );
}
