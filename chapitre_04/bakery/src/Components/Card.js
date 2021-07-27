import React from 'react';

class Card extends React.Component {
    constructor() {
        super();

        this.state = {
            image: "../public/images/item.png",
        }
    }
    render() {
        return (
            <div>
                {this.props.onClick} 
                {this.props.productName}
                {this.props.price}

                <Button>
                    <img src={this.image} alt="" />
                </Button>
            </div>
        )
    }

}

export default Card;