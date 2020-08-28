import React, {Component} from 'react';
import Header from "../../component/header/Header";

import http from "../../util/http";

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            article: '',
            clientHeight: document.body.clientHeight,
            minHeight: {minHeight: document.body.clientHeight - 66 - 120 - 130 - 48 + 'px'}
        }
    }

    componentDidMount() {
        document.title = "WIFI-商业计划书";
    }

    componentWillUnmount() {

    }

    handleLoad = () => {
        this.setState({
            isLoading: true,
        });
        http.request({
            url: '/cloud/article/website/v1/find',
            data: {
                articleId: '1229939735049408512'
            },
            success: (data) => {
                this.setState({
                    article: data
                });
            },
            complete: () => {
                this.setState({
                    isLoading: false,
                });
            }
        });
    };

    render() {
        return (
            <div>
                <Header nav="2"></Header>

                <iframe src="http://tefi.life/pdfjs/web/viewer.html?file=http://tefi.life/TEFI-About.pdf"
                        scrolling="no"
                        title="iframe"
                        frameBorder="0"
                ></iframe>
            </div>
        );
    }
}

export default Index;
