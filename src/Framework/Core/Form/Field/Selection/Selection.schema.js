export default {
  uid: 'selectionExample',
  type: 'section',
  category: 'group',
  attributes: {
    label: 'Selection Example',
    formComponents: [
      {
        uid: 'Selection1',
        type: 'selection',
        category: 'field',
        attributes: {
          label: 'Selection Box Title',
          selectionList: {
            label: 'Selection 1',
          }
        }
      }
    ]
  }
};
