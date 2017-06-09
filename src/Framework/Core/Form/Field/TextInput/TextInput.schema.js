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
      {
        uid: 'headerExample',
        type: 'text',
        category: 'field',
        attributes: {
          headerLabel: 'Header Label'
        }
      },
      {
        uid: 'multilineExample',
        type: 'text',
        category: 'field',
        attributes: {
          headerLabel: 'Description',
          multiline: true,
          value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Itaque hic ipse iam pridem est reiectus; De ingenio eius in his disputationibus, non de moribus quaeritur. Nunc haec primum fortasse audientis servire debemus. Atqui iste locus est, Piso, tibi etiam atque etiam confirmandus, inquam;'
        }
      }
    ]
  }
};
