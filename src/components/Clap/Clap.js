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
            <div>
                <button id="clap" className="clap" onClick={this.handleClick}>
                    <span>
                        {/*<!--  SVG Created by Luis Durazo from the Noun Project  -->*/}
                        <svg id="clap--icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" className={`${isClicked && 'checked'}`}>
                            <path d="M12.9,153c0.8-4.8,1.3-9.7,2.6-14.5c2.2-8.1,5.2-15.7,10.6-22.1c10-11.9,22.6-15.6,37.5-11.8c9.7,2.5,17.9,7.7,25.2,14.4
                                c19.6,17.7,30.9,40.3,37.2,65.6c2.3,9.1,3.5,18.3,3.6,27.7c0.1,14.7-2.1,29.1-10,41.9c-5.8,9.4-13.9,15.7-25,17.5
		c-7.8,1.3-15.2-0.2-22.3-3.2c-10-4.2-18.1-10.8-25.4-18.6c-11.2-12-19.2-26-25.1-41.2c-4.6-11.9-7.5-24.3-8.7-37
		c0-0.4-0.2-0.7-0.3-1.1C12.9,164.6,12.9,158.8,12.9,153z"/>
	<path d="M191.4,24.4c4.4,1.1,8.8,2.3,12.8,4.5c9.4,5.3,16.4,13.1,22.1,22.1c8.7,13.9,13.5,29.2,16,45.3c1.4,9.4,1.9,18.9,1.4,28.5
                                c-0.9,17.9-4.9,35-14.2,50.6c-4.3,7.3-9.8,13.6-17,18.2c-13.2,8.3-28.3,7.5-41.4-2.1c-8.5-6.2-14.8-14.3-19.8-23.5
		c-7.5-13.7-11.7-28.3-13.6-43.7c-2.1-16.9-1.5-33.7,2.7-50.3c3-11.7,7.6-22.7,15-32.3c6.7-8.6,15-14.9,26-17c0.2,0,0.5-0.2,0.7-0.3
		C185.1,24.4,188.2,24.4,191.4,24.4z"/>
	<path d="M310.9,476.5c-7.6,0.8-16-1.8-24.6-3.3c-16.9-3-33.9-5.8-50.9-8.2c-12.3-1.7-24.6-3.2-36.9-4.4c-8.1-0.8-16.3-1.3-24.5-1.7
                                c-7.6-0.4-15.1,0-22.7-0.3c-20.8-0.8-40.7-5.2-58.7-16.3c-18.9-11.6-29.8-28.5-32.9-50.5c-0.6-4.3-1.7-8.5-1.6-12.9
		c0.3-7.5,2.1-14.7,4.2-21.8c1.6-5.5,7.3-32.5,44.2-48.6c4.8-2.1,7.3-3.4,13-6.1c7.3-3.5,14.2-7.2,20.5-12.2
		c10.9-8.7,20.4-18.7,29.7-29.1c8.3-9.3,15.8-19.2,23.8-28.6c10-11.7,22.1-20.2,37.6-23.1c11.2-2,21.7,0.3,31.5,5.8
		c8.6,4.8,23.9,22.3,27.1,28c14.8,26.2,29.5,52.4,48.1,76.1c8.7,11,34.8,37.7,37.5,42c7.4,11.8,12.9,25.5,14.8,39.4
		c3.6,26-7.1,52.5-33.3,65.9c-10.5,5.4-21.8,8.1-33.5,9.4C319.6,476.5,315.9,476.4,310.9,476.5C303.3,477.3,315.9,476.4,310.9,476.5
		z"/>
	<path d="M488,198.8c-0.2,15-3.8,29.2-9.6,42.8c-7.7,17.9-18.5,33.8-32.9,47c-11,10.1-23.3,18.1-38,21.6c-8.9,2.1-17.8,1.9-26.2-2.1
                                c-9.4-4.4-15.3-12-18.7-21.5c-3.1-8.6-4.1-17.5-3.4-26.6c2.1-29,14.2-53.8,32.8-75.6c9.4-11,20.3-20.1,33.4-26.4
		c7.9-3.8,16-6.3,24.9-6.2c15,0.1,25.8,7.1,32.4,20.4C486.3,179.7,488,188.4,488,198.8z"/>
	<path d="M268,152.1c0.1-18.1,4.4-35.3,11.7-51.8c5.3-12,12-23.1,20.7-33c9.6-10.9,20.4-20.1,34.5-24.7c11.1-3.6,21.9-3.4,32,3.1
                                c8.2,5.2,13.2,13,16.4,22c4.2,11.5,5.1,23.3,4.1,35.4c-1.9,24.3-10.2,46.4-23.8,66.5c-7.7,11.4-17.1,21.3-28.8,28.8
		c-8,5.1-16.5,8.6-26.2,8.9c-13.2,0.4-23.3-5.3-30.6-16.1c-5.3-7.8-7.9-16.7-9.2-26C268.2,160.8,267.9,156.5,268,152.1z"/>
                        </svg>
                    </span>
                    <span
                        id="clap--count" className="clap--count">+{count}</span>

                    <span
                        id="clap--count-total" className="clap--count-total">{countTotal}</span>
                </button>
            </div>

        )
    }
}

export default Clap;


