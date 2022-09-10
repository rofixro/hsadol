var hsadol = (function (exports) {
    'use strict';

    function add(num1, num2) {
        var num3 = 4;
        var obj = { name: 1 };
        var name = obj.name;
        return num1 + num2 + num3 + name;
    }

    exports.add = add;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({});
