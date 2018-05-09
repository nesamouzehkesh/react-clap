import React from 'react';
import './Clap.css';
import mojs from 'mo-js';

class Clap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            countTotal: this.generateRandomNumber(500, 10000),
            isClicked: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const tlDuration = 300
        const triangleBurst = new mojs.Burst({
            parent: '#clap',
            radius: { 50: 95 },
            count: 5,
            angle: 30,
            children: {
                shape: 'polygon',
                radius: { 6: 0 },
                scale: 1,
                stroke: 'rgba(211,84,0 ,0.5)',
                strokeWidth: 2,
                angle: 210,
                delay: 30,
                speed: 0.2,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
                duration: tlDuration
            }
        })
        const circleBurst = new mojs.Burst({
            parent: '#clap',
            radius: { 50: 75 },
            angle: 25,
            duration: tlDuration,
            children: {
                shape: 'circle',
                fill: 'rgba(149,165,166 ,0.5)',
                delay: 30,
                speed: 0.2,
                radius: { 3: 0 },
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
            }
        })
        const countAnimation = new mojs.Html({
            el: '#clap--count',
            isShowStart: false,
            isShowEnd: true,
            y: { 0: -30 },
            opacity: { 0: 1 },
            duration: tlDuration
        }).then({
            opacity: { 1: 0 },
            y: -80,
            delay: tlDuration / 2
        })
        const countTotalAnimation = new mojs.Html({
            el: '#clap--count-total',
            isShowStart: false,
            isShowEnd: true,
            opacity: { 0: 1 },
            delay: 3 * (tlDuration) / 2,
            duration: tlDuration,
            y: { 0: -3 }
        })
        const scaleButton = new mojs.Html({
            el: '#clap',
            duration: tlDuration,
            scale: { 1.3: 1 },
            easing: mojs.easing.out
        })
        const clap = document.getElementById('clap')
        clap.style.transform = "scale(1, 1)"
        this._animationTimeline = new mojs.Timeline()
        this._animationTimeline.add([
            countAnimation,
            countTotalAnimation,
            scaleButton,
            circleBurst,
            triangleBurst
        ])
    }
    generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }


    handleClick() {
        this._animationTimeline.replay()
        this.setState(function (prevState, nextState) {
            return {
                count: Math.min(prevState.count + 1, 50),
                countTotal: prevState.countTotal + 1,
                isClicked: true
            }
        })
    }

    render() {
        const { count, countTotal, isClicked } = this.state;
        return (
            <div className="love-container">
                <h2 className="love">I</h2>
                <div>
                    <button id="clap" className="clap" onClick={this.handleClick}>
                        <span>
                            {/*<!--  SVG Created by Luis Durazo from the Noun Project  -->*/}
                            <svg id="clap--icon" className={`${isClicked && 'checked'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" enable-background="new 0 0 50 50">
                                <path d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z" />
                            </svg>
                        </span>
                        <span
                            id="clap--count" className="clap--count">+{count}</span>

                        <span
                            id="clap--count-total" className="clap--count-total">{countTotal}</span>
                    </button>
                </div>
                <h2 className="love">THIS!</h2>
            </div>

        )
    }
}

export default Clap;


