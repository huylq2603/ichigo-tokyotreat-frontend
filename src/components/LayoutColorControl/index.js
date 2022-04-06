import React, { Component } from 'react';

import Box from '../Box';
import styles from './LayoutColorControl.module.css'

class LayoutColorControl extends Component {
    state = {
        colorList: ["0089e0", "e53458", "8c7a5b", "b85e61", "7f00cb", "00b19f", "007a67", "6953fe", "475c6d"], //colors defined in challenge's example
    }

    shuffleColors = () => {
        let unshuffled = [...this.state.colorList]

        //add a temporary sort value and use that to shuffle a list
        let colorList = unshuffled
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)

        this.setState({ colorList });
    }

    render() {

        //a generalized box constant for easy creation
        const boxes = (boxList) => boxList.map(
            (el, index) => <Box key={index} id={el.id + 1} bgColor={this.state.colorList[el.id]} customStyle={el.customStyle} customClass={el.customClass} shuffleColors={this.shuffleColors} />
        )

        return (
            <div className="row">
                <div className={`${styles.groupAll}`}>
                    <div>
                        {boxes([{
                            id: 0,
                            customStyle: {
                                height: "50vh",
                            },
                            customClass: "col-s12 col-l6"
                        }])}
                    </div>
                    <div className={`${styles.group234}`}>
                        <div>
                            {boxes([{
                                id: 1,
                                customStyle: {
                                    height: "25vh"
                                },
                                customClass: "col-s12 col-l6"
                            }])}
                        </div>
                        <div>
                            {boxes([{
                                id: 2,
                                customStyle: {
                                    height: "25vh"
                                },
                                customClass: "col-s6 col-l3"
                            }, {
                                id: 3,
                                customStyle: {
                                    height: "25vh"
                                },
                                customClass: "col-s6 col-l3"
                            }])}
                        </div>
                    </div>
                    <div className={`${styles.group56789}`}>
                        <div className={`${styles.group56}`}>
                            {boxes([{
                                id: 4,
                                customStyle: {
                                    height: "15vh"
                                },
                                customClass: "col-s6 col-l3"
                            }, {
                                id: 5,
                                customStyle: {
                                    height: "35vh"
                                },
                                customClass: "col-s6 col-l3"
                            }])}
                        </div>
                        <div>
                            {boxes([{
                                id: 6,
                                customStyle: {
                                    height: "50vh"
                                },
                                customClass: "col-s12 col-l6"
                            }])}
                        </div>
                        <div className={`${styles.group89}`}>
                            {boxes([{
                                id: 7,
                                customStyle: {
                                    height: "35vh"
                                },
                                customClass: "col-s6 col-l3"
                            }, {
                                id: 8,
                                customStyle: {
                                    height: "15vh"
                                },
                                customClass: "col-s6 col-l3"
                            }])}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LayoutColorControl;