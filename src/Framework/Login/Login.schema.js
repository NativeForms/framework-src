export default {
  uid: 'loginExample',
  type: 'section',
  category: 'group',
  attributes: {
    label: '',
    formComponents: [{
      uid: 'username',
      type: 'text',
      category: 'field',
      attributes: {
        headerLabel: {
          code: 'username'
        },
      }
    }, {
      uid: 'password',
      type: 'text',
      category: 'field',
      attributes: {
        headerLabel: {
          code: 'password'
        },
        hiddenText: true
      }
    }, {
      uid: 'login',
      type: 'button',
      category: 'control',
      attributes: {
        label: {
          code: 'login'
        }
      }
    }, {
      uid: 'moreInfo',
      type: 'link',
      category: 'control',
      attributes: {
        label: {
          code: 'moreInfo'
        },
        route: 'https://nativebase.io/'
      }
    }]
  }
};
