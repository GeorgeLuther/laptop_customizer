import React from 'react'
import slugify from "slugify";

export default class Parts extends React.Component {
    render(){
        return (
            <div className="feature__item">
                <input
                    type="radio"
                    id={this.props.id}
                    className="feature__option"
                    name={slugify(this.props.feature)}
                    checked={this.props.item.name === this.props.selected[this.props.feature].name}

                    onChange={e => {
                        console.log('its changing')
                        this.props.handleItemChange(this.props.feature, this.props.item)
                    }}
                />
                <label htmlFor={this.props.itemHash} className="feature__label">
                    {this.props.item.name} ({this.props.USCurrencyFormat.format(this.props.item.cost)})
                </label>
            </div>
        )
    }
}