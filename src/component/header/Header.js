import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';


import storage from '../../util/storage';
import './index.css';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav: props,
            language: '',
        }
    }

    componentDidMount() {
        this.handleGetLanguage();
        console.log(this.state.nav.nav)
    }

    componentWillUnmount() {

    }

    handleGetLanguage = () => {
        setTimeout(() => {
            // 判断是否有默认语言
            if(!storage.getLanguage() || storage.getLanguage() === '') {
                storage.setLanguage('zh');
                this.setState({
                    language: 'zh'
                });
            } else{
                this.setState({
                    language: storage.getLanguage()
                });
            }
        },100)
    };

    handleTabLanguage = () => {
        if(this.state.language === 'zh') {
            storage.setLanguage('en');
            this.setState({
                language: 'en'
            });
        }else {
            storage.setLanguage('zh');
            this.setState({
                language: 'zh'
            });
        }
    };

    handleActiveHome = () => {
        this.props.history.push("/")
    };

    handleActiveAbout = () => {
        this.props.history.push("/about")
    };

    handleActiveBook = () => {
        this.props.history.push("/book/index")
    };

    handleActiveBookWhitePaper = () => {
        this.props.history.push("/book/witePaper")
    };



    render() {

        return (
            <div className="hander">
                {/*<span className={this.state.nav.nav === "about" ? "nav-item-text active-item" : "nav-item-text"}>关于我们</span>*/}
                <img className="hander-logo" onClick={this.handleActiveHome.bind()} src={require('../../assets/image/logo.png')} alt="" />
                <div className="hander-right">
                    <div className={this.state.nav.nav === '1' ? "hander-right-item active-item" : "hander-right-item"} onClick={this.handleActiveHome.bind()}>
                      {/*  {
                            this.state.language === 'zh'
                                ?
                                '首页'
                                :
                                'Home'
                        }*/}
                        Home
                    </div>
                    <div className={this.state.nav.nav === '2' ? "hander-right-item active-item" : "hander-right-item"} onClick={this.handleActiveAbout.bind()}>
                        {/*{
                            this.state.language === 'zh'
                                ?
                                '关于我们'
                                :
                                'About'
                        }*/}
                        About
                    </div>
                    <div className={this.state.nav.nav === '3' ? "hander-right-item active-item" : "hander-right-item"} onClick={this.handleActiveBookWhitePaper.bind()}>
                        {/*{
                            this.state.language === 'zh'
                                ?
                                '白皮书'
                                :
                                'White Paper'
                        }*/}
                        White Paper
                    </div>
                    {/*<div className="hander-right-item hander-right-language">
                        {
                            this.state.language === 'zh'
                            ?
                             '简体中文'
                             :
                            'English'
                        }
                        <img className="hander-right-item-arr" src={require('../../assets/image/arr-bottom.png')} alt=""/>
                        <div className="children" onClick={this.handleTabLanguage.bind()}>
                            {
                                this.state.language === 'zh'
                                    ?
                                    'English'
                                    :
                                    '简体中文'
                            }
                        </div>
                    </div>*/}
                </div>
            </div>
        )
    }
}

export default withRouter(Header);
