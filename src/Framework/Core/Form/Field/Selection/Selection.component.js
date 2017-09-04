import React, { Component, PropTypes } from 'react';
import { List, ListItem, CheckBox, Body, Text, Radio } from 'native-base';
/*import { CheckBox } from 'react-native-elements';*/
import { injectIntl } from 'react-intl';

class SelectionComponent extends Component {
  static propType = {
    label: PropTypes.string,
    radionBoxType: PropTypes.bool,
    selectionList: PropTypes.object
  }

  static defaultProps = {
    label: null,
    radionBoxType: false,
    selectionList: null
  }

  render() {
    const { label, radionBoxType, selectionList, color, uid} = this.props;
    const childItems = selectionList.map((item) =>
      <SelectionChild key={uid} props={item} />
    );
    /*const props = {

    };*/
    return (
      <List>
        {label &&
          <ListItem itemDivider>
            <Body>
              <Text>{ label }</Text>
            </Body>
          </ListItem>
        }
        { childItems }
      </List>
    );
  }
}

/* REMOVE to ANOTHER FILE */
class SelectionChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked,
    };
    this.clickSelection = this.clickSelection.bind(this);
  }
  clickSelection() {
    this.setState({ checked: !this.state.checked });
  }

  render(){
    return (
      <ListItem key={this.props.uid}>
        <CheckBox checked={this.state.checked} onPress={this.clickSelection}>
          <Body>
            <Text>{ this.props.itemLabel }</Text>
          </Body>
        </CheckBox>
      </ListItem>
    );
  }
}

export default injectIntl(SelectionComponent);
