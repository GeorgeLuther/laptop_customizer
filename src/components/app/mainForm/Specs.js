import React from "react";
import Parts from "./Parts";

export default class Specs extends React.Component {
    render() {
          const options = this.props.features[this.props.feature].map(item => {
            return (
              <Parts
                item={item}
                feature={this.props.feature}
                selected={this.props.selected}
                USCurrencyFormat={this.props.USCurrencyFormat}
                handleItemChange={this.props.handleItemChange}
              />);
          });
    
          return (
            <fieldset className="feature" key={this.props.featureHash}>
              <legend className="feature__name">
                <h3>{this.props.feature}</h3>
              </legend>
              {options}
            </fieldset>
          );
    }
}