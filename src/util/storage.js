import constant from './application';

const token_key = 'token_' + constant.version;

const member_type_key = 'member_type_' + constant.version;

const language_key = 'language_key_' + constant.version;

function clear() {
    localStorage.clear();
}

function getToken() {
    let token = localStorage.getItem(token_key);

    if (token == null || token === 'undefined' || typeof (token) === 'undefined') {
        return '';
    } else {
        return token;
    }
}

function setToken(token) {
    localStorage.removeItem(token);

    localStorage.setItem(token_key, token);
}


function getMemberType() {
    let memberType = localStorage.getItem(member_type_key);

    if (memberType == null || memberType === 'undefined' || typeof (memberType) === 'undefined') {
        return '';
    } else {
        return memberType;
    }
}

function setMemberType(memberType) {
    localStorage.removeItem(member_type_key);

    localStorage.setItem(member_type_key, memberType);
}

function getLanguage() {
    let id = localStorage.getItem(language_key);

    if (id == null || id === 'undefined' || typeof (id) === 'undefined') {
        return '';
    } else {
        return id;
    }
}

function setLanguage(id) {
    localStorage.removeItem(language_key);

    localStorage.setItem(language_key, id);
}

export default {
    clear: clear,
    getToken: getToken,
    setToken: setToken,
    getMemberType: getMemberType,
    setMemberType: setMemberType,
    getLanguage: getLanguage,
    setLanguage: setLanguage,
};
