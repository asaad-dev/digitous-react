import React from 'react';

class Pay extends React.Component {
    constructor() {
        super();

        this.state = {
            basket: [],
            total: 0,
            totalTVA: 0,
            totalEcoTax: 0,
            totalTTC: 0,
        }
    }

    handleSelect = (name, price) => {
        console.log(name, price);
    }
    render() {
        return (
            <div>
                <p>
                Total: {' '}
                    {this.props.items.reduce(
                        (accumulator, currentItem) => 
                            (accumulator += currentItem.price), 0
                    )}
                    €
                </p>

                <div>
                    <p>TotalTVA: {' '}
                    {this.props.items.reduce(
                        (accumulator, currentItem) => 
                            (accumulator += currentItem.price), 0
                    )}
                    €
                    </p>

                    <p>TotalEcoTax: {' '}
                    {this.props.items.reduce(
                        (accumulator, currentItem) => 
                            (accumulator += currentItem.price), 0
                    )}
                    €
                    </p>

                    <p>TotalTTC: {' '}
                    {this.props.items.reduce(
                        (accumulator, currentItem) => 
                            (accumulator += currentItem.price), 0
                    )}
                    €
                    </p>
                </div>
            </div>
        );
    }

}

export default Pay;