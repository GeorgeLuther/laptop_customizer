import React from 'react'

export default class Total extends React.Component {
    total = Object.keys(this.props.selected).reduce(
        (acc, curr) => acc + this.props.selected[curr].cost, 0);

    render() {
        return (
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {this.total}
              </div>
            </div>
        )
    }
}