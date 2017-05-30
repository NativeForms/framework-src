export default {
  uid: 'textInputExample',
  type: 'section',
  category: 'group',
  attributes: {
    label: 'Text Input Examples',
    formComponents: [
      {
        uid: 'fixedLabelExample',
        type: 'text',
        category: 'field',
        attributes: {
          label: 'Key',
        }
      },
      {
        uid: 'secretExample',
        type: 'text',
        category: 'field',
        attributes: {
          label: 'Secret',
          hiddenText: true,
        }
      },
      {
        uid: 'clearExample',
        type: 'text',
        category: 'field',
        attributes: {
          label: 'Value 1',
          clearButton: true,
          value: 'Delete Me'
        }
      },
      {
        uid: 'placeHolderExample',
        type: 'text',
        category: 'field',
        attributes: {
          label: 'Value 2',
          defaultText: 'Replace Me'
        }
      },
    ]
  }
};
