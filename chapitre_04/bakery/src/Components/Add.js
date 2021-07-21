import React from 'react';

class Add extends React.Component {
    constructor() {
        super();

        this.state = {
            productName: '',
            price: 1,
        };
    }

	updateProductName = (e) => {
		this.setState((prevState) => {
			return this.productName({
				...prevState,
				items: e.target.value,
			});
		});
	};

    updatePrice = (e) => {
		this.setState((prevState) => {
			return this.price({
				...prevState,
				items: e.target.value,
			});
		});
	};

    render() {
        return (
            <div>
                <input
					type="text"
					onChange={this.props.updateProductName}
					value={this.props.value}
				/>

                <input
					type="range"
					min="1"
					max="10"
					value={this.props.value}
                    onchange={this.props.updatePrice}
				/>

                <button
                    onclick={this}
                >
                    Add
                </button>
            </div>
            
        );
    }

}

export default Add;