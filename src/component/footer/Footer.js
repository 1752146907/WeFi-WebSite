import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import './index.css';


class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    handleToAbout = () => {
        this.props.history.push("/about/index")
    };

    handleToRecruit = () => {
        this.props.history.push("/about/recruit")
    };

    handleToContact = () => {
        this.props.history.push("/about/contact")
    };

    render() {

        return (
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-left">
                        <div className="footer-left-nav">
                            <div className="footer-left-nav-item right-line" onClick={this.handleToAbout}>关于我们</div>
                            <div className="footer-left-nav-item right-line" onClick={this.handleToRecruit}>人才招聘</div>
                            <div className="footer-left-nav-item right-line">法律声明</div>
                            <div className="footer-left-nav-item right-line">隐私政策</div>
                            <div className="footer-left-nav-item" onClick={this.handleToContact}>联系我们</div>
                        </div>
                        <div className="footer-left-desc">
                            Copyright©2019-2020 广州华采云网络信息有限公司 版权所有
                        </div>
                            <div className="footer-left-record">
                            <a target="_blank" rel="noopener noreferrer" href="http://beian.miit.gov.cn/state/outPortal/loginPortal.action">
                                <span className="">粤ICP备19143540号</span>
                            </a>
                            <div className="footer-left-bei-an">
                                <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44010602007713" className="footer-left-bei-an-a" >
                                    <img src={require('../../assets/image/beian.png')} className="footer-left-bei-an-img"/>
                                    <p className="footer-left-bei-an-p">粤公网安备 44010602007713号</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-right">
                        <img className="footer-qrcode" src={require('../../assets/image/qrcode.png')} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Footer);
