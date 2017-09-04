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
          radioBoxType: false,
          selectionList: [
            {
              uid: 'child1',
              itemLabel: 'No-Header Selection 1',
              checked: false,
            },
            {
              uid: 'child2',
              itemLabel: 'No-Header Selection 2',
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
          label: 'Selection Header Label',
          radioBoxType: false,
          selectionList: [
            {
              uid: 'child1',
              itemLabel: 'Selection Type Item 1',
              checked: false,
            },
            {
              uid: 'child2',
              itemLabel: 'Selection Type Item 2',
              checked: false,
            },
            {
              uid: 'child3',
              itemLabel: 'Selection Type Item 3',
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
          label: 'Radio Box Header Label',
          radioBoxType: true,
          selectionList: [
            {
              uid: 'child1',
              itemLabel: 'Radio item1',
              checked: true,
            },
            {
              uid: 'child2',
              itemLabel: 'Radio item2',
              checked: false,
            }
          ]
        }
      },
    ]
  }
};
