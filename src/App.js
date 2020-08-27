import React, {Component} from 'react';
// import logo from './logo.svg';
// import {connect} from 'dva';
import './App.css';
import 'antd/dist/antd.css';

import Header from "./component/header/Header";
import http from "./util/http";
// import storage from "./util/storage";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            pageIndex: 1,
            pageSize: 10,
            newsList: [],
            investmentList: [],
            headerNav: 0,
            clientHeight: document.body.clientHeight
        }
    }

    componentDidMount() {
        document.title = "WEFI-关于我们";

        // this.handleNewsLoad();
        // this.handleInvestmentLoad();

    }

    componentWillUnmount() {

    }

    handleNewsLoad = () => {
        this.setState({
            isLoading: true,
        });
        http.request({
            url: '/cloud/article/website/v1/list',
            data: {
                channelId: '1229678987261906944',
                pageIndex: this.state.pageIndex,
                pageSize: this.state.pageSize
            },
            success: (data) => {
                let newsList = this.state.newsList;
                newsList = newsList.length > 0 ? newsList.concat(data.list) : data.list;
                this.setState({
                    newsList: newsList,
                    total: data.total,
                });
            },
            complete: () => {
                this.setState({
                    isLoading: false,
                });
            }
        });
    };

    handleInvestmentLoad = () => {
        this.setState({
            isLoading: true,
        });
        http.request({
            url: '/cloud/article/website/v1/list',
            data: {
                channelId: '1229678766670876672',
                pageIndex: this.state.pageIndex,
                pageSize: this.state.pageSize
            },
            success: (data) => {
                let investmentList = this.state.investmentList;
                investmentList = investmentList.length > 0 ? investmentList.concat(data.list) : data.list;
                this.setState({
                    investmentList: investmentList,
                    total: data.total,
                });
            },
            complete: () => {
                this.setState({
                    isLoading: false,
                });
            }
        });
    };

    handleToNewsDetail = (articleId, item) => {
        if (item.articleIsOuterLink) {
            window.open(item.articleOuterLink)
        } else {
            this.props.history.push({
                pathname: '/news/detail/' + articleId,
                query: {}
            })
        }
    };

    handleToInvestmentDetail = (articleId, item) => {
        if (item.articleIsOuterLink) {
            window.open(item.articleOuterLink)
        } else {
            this.props.history.push({
                pathname: '/investment/detail/' + articleId,
                query: {}
            })
        }
    };

    render() {
        return (
            <div className="App">
                <Header nav={this.headerNav}></Header>

                {/*<div className="main">*/}
                {/*    <img src={require('./assets/image/logo02.png')} alt="" className="main-img" />*/}
                {/*    <div className="main-title">WORLD INNER-TOKENIZED</div>*/}
                {/*    <div className="main-sub">FINANICAL INSTITUTION</div>*/}
                {/*</div>*/}
                <iframe src="http://tefi.life/TEFI-About.pdf"
                        scrolling="no"
                        title="iframe"
                        frameBorder="0"
                ></iframe>

            </div>
        );
    }
}

export default App;
