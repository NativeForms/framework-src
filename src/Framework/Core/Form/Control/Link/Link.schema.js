export default {
  uid: 'linkExample',
  type: 'section',
  category: 'group',
  attributes: {
    label: 'Link Example',
    formComponents: [{
      uid: 'Link1',
      type: 'link',
      category: 'control',
      attributes: {
        label: {
          code: 'googleLabel'
        },
        route: 'http://www.google.com'
      }
    }]
  }
};
