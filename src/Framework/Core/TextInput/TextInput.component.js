import React, { Component, PropTypes } from 'react';
import { TextInput } from 'react-native'

class TextInputComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
        defaultText: this.props.defaultText,
        optionalHeaderLabel: this.props.optionalHeaderLabel,
        optionalFootDescription: this.props.optionalFootDescription,
        optionalValue: this.props.optionalValue,
        optionalHiddenText: this.props.optionalHiddenText,
    }
    this.clearInput = this.clearInput.bind(this)
  }

    static propTypes = {
      defaultText: PropTypes.string.isRequired,
      optionalValue:  PropTypes.string,
      optionalHeaderLabel: PropTypes.string,
      optionalLabel: PropTypes.string,
      optionalHiddenText: PropTypes.bool,
      optionalFootDescription: PropTypes.string,
      optionalClearButton: PropTypes.bool,
      optionalError: PropTypes.string,
    }

    clearInput () {
      this._textInput.setNativeProps({text:''});
    }

    render() {
      return (
        <View>
          {renderIf(this.props.optionalHeaderLabel != '')(
            <Text> {this.state.optionalHeaderLabel} </Text>
          )}

          <TextInput ref={component => this._textInput = component}
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            placeholder = {this.state.defaultText}
            value = {this.state.optionalValue}
            secureTextEntry = {this.state.optionalHiddenText}
          />

          {renderIf(this.props.optionalFootDescription != '')(
              <Text> {this.state.optionalFootDescription} </Text>
          )}

          {renderIf(this.props.optionalClearButton)(
            <Button title="Clear" onPress={this.clearInput} />
          )}
        </View>
      );
    }

}
    /*
    EXAMPLE
    <TextInputComponent
        defaultText="Default Text"
        optionalHeaderLabel ="Optional Header here"
        optionalFootDescription ="optional foot description"
        optionalClearButton = {true}
        optionalHiddenText = {true}/>
      </View>
     */
export default TextInputComponent;