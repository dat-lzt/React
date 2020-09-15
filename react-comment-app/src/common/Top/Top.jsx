import React, { Component } from 'react'
import './Top.css';
class Top extends Component {
    constructor() {
        super()
        this.state = {
            visible: false
        }

    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let scrollTop = window.scrollY;
        if (scrollTop > 100) {
            // console.log(scrollTop);
            !this.state.visible && this.setState({ visible: true })
        }
        else {
            this.state.visible && this.setState({ visible: false })
        }
    }
    onTopClick() {
        var timer = null;
        cancelAnimationFrame(timer);
        //获取当前毫秒数
        var startTime = +new Date();
        //获取当前页面的滚动高度
        var b = document.body.scrollTop || document.documentElement.scrollTop;
        var d = 500;
        var c = b;
        timer = requestAnimationFrame(function func() {
            var t = d - Math.max(0, startTime - (+new Date()) + d);
            document.documentElement.scrollTop = document.body.scrollTop = t * (-c) / d + b;
            timer = requestAnimationFrame(func);
            if (t === d) {
                cancelAnimationFrame(timer);
            }
        });
    }
    render() {
        return (
            <div className="top"  >
                {/* href="#top" */}
                <a id="scrollUp"
                    style={{ display: this.state.visible ? 'block' : 'none' }}
                    onClick={() => this.onTopClick()}
                    href='#:'>
                    <i className="fa fa-angle-up"></i>
                </a>
            </div>
        )
    }
}
export default Top;