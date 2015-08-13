'use strict';

/* Common Services */

var execServices = angular.module('execServices', []);

execServices.factory('store', function(){
  return {
    set: function(){
      console.log('set!');
    }
  };
});


execServices.factory('under100', function(){
  return {
    /*
      从给定的最大值 numEdge 中随机挑选[1, numEdge)范围内的数字
    */
    numPick: function(numEdge) {
      return Math.ceil(Math.random() * numEdge);
    },

    /* 
      在edge=100以内选择三个数
      1. x: numPick(100)
      2. y: numPick(100-x)    || numPick(x) 
      3. z: numPick(100-x-y)  || numPick(x+y)
    */
    tripleNum: function() {
      var edge = arguments[0] || 100;
      var x, y, z;
      x = this.numPick(edge);
      y = (this.numPick(2) - 1)
            ? this.numPick(edge - x) 
            : this.numPick(x) * -1;
      z = (this.numPick(2) - 1) 
            ? this.numPick(edge - x - y) 
            : this.numPick(x + y) * -1;

      return [x, y, z];
    }, 

    /* 根据传入的数组（由tripleNum生成）生成等式字符串 */
    equation: function() {
      var numArr = arguments[0] || [], mathNum, mathStr = '';
      for(var i = 0, x = numArr.length; i < x; i ++) {
        if (numArr[i] < 10 && numArr[i] >= 0) {
          mathNum = ' + 0' + numArr[i];
        } else if (numArr[i] < 0 && numArr[i] > -10) {
          mathNum = ' - 0' + (numArr[i] * -1);
        } else if (numArr[i] <= -10) {
          mathNum = ' - ' + (numArr[i] * -1);
        } else {
          mathNum = ' + ' + numArr[i];
        }
        mathStr += mathNum;
      }

      return mathStr.substring(2);
    },

    /* 根据传入的数组（由tripleNum生成）生成等式的值 */
    result: function() {
      var numArr = arguments[0] || [], answer = 0;
      for(var i = 0, x = numArr.length; i < x; i ++) {
        answer += numArr[i];
      }

      return answer;
    },

    /* 生成等式与结果（根据equation & result） */
    exercise: function() {
      var seed = arguments[0] || this.tripleNum();

      return  {
        equation: this.equation(seed),
        result:   this.result(seed)
      };
    }
  }
});
