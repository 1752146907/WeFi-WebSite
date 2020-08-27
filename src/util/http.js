import reqwest from 'reqwest';
// import {Toast} from 'antd-mobile';

import constant from './application';
import storage from './storage';

function request(config) {
    if (!config.data.appId) {
        config.data.appId = constant.appId;
    }
    config.data.token = storage.getToken();
    config.data.platform = constant.platform;
    config.data.version = constant.version;
    config.data.timestamp = Math.round(new Date().getTime() / 1000);
    reqwest({
        url: constant.host + config.url,
        type: 'json',
        method: 'POST',
        crossOrigin: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(config.data),
        success: function (response) {
            if (response.code === 200) {
                config.success(response.data);
            } else {
                // Toast.fail(response.message, 1);
            }
        },
        error: function () {
            // Toast.fail(constant.error, 1);
        },
        complete: function () {
            config.complete();
        }
    });
}

export default {
    request: request
};
