const _0xbe894f = _0x3c70;
(function (_0x4f185d, _0x565c71) {
    const _0x6d5325 = _0x3c70, _0x19abd7 = _0x4f185d();
    while (!![]) {
        try {
            const _0x1a5f4e = -parseInt(_0x6d5325(0x19d)) / (0x1d89 + -0x9d2 + 0x2 * -0x9db) + -parseInt(_0x6d5325(0x178)) / (0x23b8 + 0x104f + -0x3405) + -parseInt(_0x6d5325(0x189)) / (-0x11a3 + 0x4 * 0x13a + 0x2 * 0x65f) * (-parseInt(_0x6d5325(0x181)) / (-0x1e * -0xc9 + 0x190d + -0x3097)) + parseInt(_0x6d5325(0x1a6)) / (-0x1f32 + 0xec8 + 0x106f) * (parseInt(_0x6d5325(0x174)) / (-0x13a2 + -0x58f * 0x7 + 0x3a91)) + -parseInt(_0x6d5325(0x187)) / (-0x7ff + -0x1c0b + 0x2411) * (-parseInt(_0x6d5325(0x182)) / (0x37 * -0x89 + 0x1b * -0xc1 + 0x38f * 0xe)) + parseInt(_0x6d5325(0x1a9)) / (-0x1 * -0x1f8f + 0x1 * 0x204f + -0x3fd5) * (-parseInt(_0x6d5325(0x18e)) / (0x83 * -0x43 + 0x13ea + -0x20f * -0x7)) + -parseInt(_0x6d5325(0x186)) / (0x2554 + -0x1ffe + -0x54b) * (parseInt(_0x6d5325(0x180)) / (-0x1396 + -0x16d5 + 0x1 * 0x2a77));
            if (_0x1a5f4e === _0x565c71)
                break;
            else
                _0x19abd7['push'](_0x19abd7['shift']());
        } catch (_0xf025d3) {
            _0x19abd7['push'](_0x19abd7['shift']());
        }
    }
}(_0x4ec0, 0x91f * 0x10 + -0x2ce57 + 0x42066));
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import {
    getAuth,
    signInWithEmailAndPassword
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
const firebaseConfig = {
        'apiKey': _0xbe894f(0x196) + _0xbe894f(0x172) + _0xbe894f(0x195) + _0xbe894f(0x19a),
        'authDomain': _0xbe894f(0x16f) + _0xbe894f(0x191) + _0xbe894f(0x19b),
        'projectId': _0xbe894f(0x16f) + 'y',
        'storageBucket': _0xbe894f(0x16f) + _0xbe894f(0x19f) + _0xbe894f(0x1a4),
        'messagingSenderId': _0xbe894f(0x175) + '47',
        'appId': _0xbe894f(0x19c) + _0xbe894f(0x197) + _0xbe894f(0x16e) + _0xbe894f(0x1a1) + 'e',
        'measurementId': _0xbe894f(0x188) + 'B3'
    }, app = initializeApp(firebaseConfig), auth = getAuth(app), loginForm = document[_0xbe894f(0x16c) + _0xbe894f(0x173)](_0xbe894f(0x18f));
function _0x3c70(_0x3698b6, _0x43b418) {
    const _0x13e957 = _0x4ec0();
    return _0x3c70 = function (_0x2679db, _0x9b4dd7) {
        _0x2679db = _0x2679db - (0x3 * 0x7bf + 0x270f * -0x1 + 0x113d * 0x1);
        let _0x20961a = _0x13e957[_0x2679db];
        return _0x20961a;
    }, _0x3c70(_0x3698b6, _0x43b418);
}
loginForm[_0xbe894f(0x179) + _0xbe894f(0x190)](_0xbe894f(0x17a), function (_0x4bf6da) {
    const _0x4edd22 = _0xbe894f, _0x2203e8 = {
            'wkVPl': _0x4edd22(0x16d) + _0x4edd22(0x194),
            'OvpMM': _0x4edd22(0x19e) + _0x4edd22(0x18b),
            'VMSSm': _0x4edd22(0x18d) + _0x4edd22(0x17f),
            'GYIfN': function (_0xb9fc48, _0x47f24d) {
                return _0xb9fc48(_0x47f24d);
            },
            'ceXuQ': _0x4edd22(0x18d) + _0x4edd22(0x17d) + _0x4edd22(0x170) + _0x4edd22(0x177) + _0x4edd22(0x17b),
            'moKYq': _0x4edd22(0x1aa),
            'DHwxg': _0x4edd22(0x199),
            'jrLmJ': function (_0x58f853, _0x400646, _0x2afc16, _0x2bb8cf) {
                return _0x58f853(_0x400646, _0x2afc16, _0x2bb8cf);
            }
        };
    _0x4bf6da[_0x4edd22(0x1a8) + _0x4edd22(0x183)]();
    const _0x5786fc = loginForm[_0x2203e8[_0x4edd22(0x17e)]][_0x4edd22(0x1a2)], _0x3807a9 = loginForm[_0x2203e8[_0x4edd22(0x184)]][_0x4edd22(0x1a2)];
    _0x2203e8[_0x4edd22(0x185)](signInWithEmailAndPassword, auth, _0x5786fc, _0x3807a9)[_0x4edd22(0x18c)](_0x1f051b => {
        const _0x2776c1 = _0x4edd22;
        loginForm[_0x2776c1(0x192)](), console[_0x2776c1(0x18a)](_0x2203e8[_0x2776c1(0x1a7)], _0x1f051b[_0x2776c1(0x1a0)]), window[_0x2776c1(0x176)][_0x2776c1(0x1a5)] = _0x2203e8[_0x2776c1(0x171)];
    })[_0x4edd22(0x193)](_0x57bfa7 => {
        const _0x461e2b = _0x4edd22;
        console[_0x461e2b(0x16b)](_0x2203e8[_0x461e2b(0x1ab)], _0x57bfa7[_0x461e2b(0x198)]), _0x2203e8[_0x461e2b(0x1a3)](alert, _0x2203e8[_0x461e2b(0x17c)]);
    });
});
function _0x4ec0() {
    const _0x558a37 = [
        'Erro\x20ao\x20fa',
        '1370DjGtyZ',
        '#loginForm',
        'stener',
        'y.firebase',
        'reset',
        'catch',
        'sucedido:',
        'XBg_faa5SA',
        'AIzaSyBJHN',
        '3947:web:2',
        'message',
        'password',
        'TqIxG6EbU',
        'app.com',
        '1:18947329',
        '104365pySmtr',
        '/pages/pai',
        'y.appspot.',
        'user',
        'e859e4144d',
        'value',
        'GYIfN',
        'com',
        'href',
        '878325MXhEiI',
        'wkVPl',
        'preventDef',
        '6147eVrJra',
        'email',
        'VMSSm',
        'error',
        'querySelec',
        'Login\x20bem-',
        '02c32e2e05',
        'admzapmone',
        '\x20Verifique',
        'OvpMM',
        'biSqtO5Wqv',
        'tor',
        '6BHSRyS',
        '1894732939',
        'location',
        '\x20seu\x20e-mai',
        '177106QbtuRo',
        'addEventLi',
        'submit',
        'l\x20e\x20senha.',
        'ceXuQ',
        'zer\x20login.',
        'moKYq',
        'zer\x20login:',
        '60aCXPOG',
        '8UNAIrJ',
        '40zKyJam',
        'ault',
        'DHwxg',
        'jrLmJ',
        '7513CSEjXh',
        '244370CMosYW',
        'G-DEEFHK82',
        '95388VzLnCU',
        'log',
        'nel.html',
        'then'
    ];
    _0x4ec0 = function () {
        return _0x558a37;
    };
    return _0x4ec0();
}