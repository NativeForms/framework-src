export default {
  uid: 'selectionExample',
  type: 'section',
  category: 'group',
  attributes: {
    label: 'Selection Example',
    formComponents: [
      {
        uid: 'noHeaderSelection',
        type: 'selection',
        category: 'field',
        attributes: {
          radionBoxType: false,
          selectionList: [
            {
              uid: 'child1',
              itemLabel: 'No-Header Selection 1',
              checked: false,
            },
            {
              uid: 'child2',
              itemLabel: 'No-Header Selection 2]',
              checked: false,
            }
          ]
        }
      },
      {
        uid: 'selectionExample',
        type: 'selection',
        category: 'field',
        attributes: {
          label: 'Selection Main Label',
          radionBoxType: false,
          selectionList: [
            {
              uid: 'child1',
              itemLabel: 'item1',
              checked: false,
            },
            {
              uid: 'child2',
              itemLabel: 'item2',
              checked: false,
            },
            {
              uid: 'child3',
              itemLabel: 'item2',
              checked: false,
            }
          ]
        }
      },
      {
        uid: 'radioSelectionExample',
        type: 'selection',
        category: 'field',
        attributes: {
          label: 'Radio Box Main Label',
          radionBoxType: false,
          color: 'red',
          selectionList: [
            {
              uid: 'child1',
              itemLabel: 'item1',
              checked: false,
            },
            {
              uid: 'child2',
              itemLabel: 'item2',
              checked: false,
            }
          ]
        }
      },
    ]
  }
};
