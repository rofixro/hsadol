var _ = (function (exports) {
  'use strict';

  /**
   * 两数相加
   * @param num1 第一个数字
   * @param num2 第二个数字
   * @typeParam Number
   * @return(s) 返回两个数字相加之和
   */
  function sum(num1, num2) {
      const a = 1;
      if (!Array.isArray(a)) {
          return num1 + num2 + a;
      }
      else {
          return num1 + num2 + a;
      }
  }

  exports.sum = sum;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
