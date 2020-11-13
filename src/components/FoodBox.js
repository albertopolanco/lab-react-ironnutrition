import React, { Component } from "react";

class FoodBox extends Component {
    state = {
        quantity: 0
    }

    handleChange = event => {

        return this.setState({ quantity: event.target.value })
    }

    render() {
        const { name, image, calories, quantity } = this.props;
        return (
            <div>

                <div className="box">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={image} />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>{name}</strong> <br />
                                    <small>{calories} cal</small>
                                </p>
                            </div>
                        </div>
                        <div className="media-right">
                            <div className="field has-addons">
                                <div className="control">
                                    <input className="input" type="number" value={this.state.quantity} onChange={(event) => this.handleChange(event)} />
                                </div>
                                <div className="control">
                                    <button className="button is-info">+</button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}
export default FoodBox;