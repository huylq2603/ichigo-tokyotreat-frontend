import React, { Component } from 'react';
import styles from "./Box.module.css"

class Box extends Component {

    state = {
        bgColor: this.props.bgColor,
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.bgColor && nextProps.bgColor !== this.state.bgColor) {
            this.setState({ bgColor: nextProps.bgColor });
        }
    }

    render() {
        return (
            <div className={`${styles.container} no-select ${this.props.customClass}`} id={`box-${this.props.id}`} style={this.props.customStyle}>
                <div
                    className={`${styles.content}`}
                    style={{ backgroundColor: "#" + this.state.bgColor }}
                    onClick={this.props.shuffleColors}>
                    <span>{this.props.id}</span>
                </div>
            </div>
        )
    }
}

export default Box;