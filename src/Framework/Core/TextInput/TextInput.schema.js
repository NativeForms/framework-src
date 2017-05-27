export default  {
  uid: 'textInputExample' // an unique identifier
  type: 'section',
  category: 'group',
  attributes: {
    label: 'Text Input Examples'
    formComponents: [{
      uid: 'textInput1',
      type: 'text',
      category: 'field',
      attributes: {
        headerLabel: 'Header Label',
      }
    }, {
      uid: 'textInput2',
      type: 'text',
      category: 'field',
      attributes: {
        label: 'Label',
      }
    }, {
      uid: 'textInput3',
      type:'text',
      category: 'field',
      attributes: {
        headerText: 'Header Text',
      }
    }, {
      uid: 'textInput4',
      type:'text',
      category: 'field',
      attributes: {
        defaultText: 'Default Text',
      }
    }, {
      uid: 'textInput5',
      type:'text',
      category: 'field',
      attributes: {
        footDescription: 'Foot Description Text',
      }
    }, {
      uid: 'textInput6',
      type:'text',
      category: 'field',
      attributes: {
        clearButton: true,
      }
    },
    ]
  }
};
