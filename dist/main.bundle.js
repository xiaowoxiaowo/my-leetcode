/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./练习/practice.js":
/*!************************!*\
  !*** ./练习/practice.js ***!
  \************************/
/***/ (() => {

/**
 * leetcode 1838. 最高频元素的频数
 * 
 * 元素的 频数 是该元素在一个数组中出现的次数。
 * 给你一个整数数组 nums 和一个整数 k 。在一步操作中，你可以选择 nums 的一个下标，并将该下标对应元素的值增加 1 。
 * 执行最多 k 次操作后，返回数组中最高频元素的 最大可能频数 。
 * 
 * 输入：nums = [1,2,4], k = 5
 * 输出：3
 * 解释：对第一个元素执行 3 次递增操作，对第二个元素执 2 次递增操作，此时 nums = [4,4,4] 。
 * 4 是数组中最高频元素，频数是 3 。
 * 
 * 输入：nums = [3,9,6], k = 2
 * 输出：1
 * 
 * 输入：nums = [1,4,8,13], k = 5
 * 输出：2
 * 解释：存在多种最优解决方案：
 * - 对第一个元素执行 3 次递增操作，此时 nums = [4,4,8,13] 。4 是数组中最高频元素，频数是 2 。
 * - 对第二个元素执行 4 次递增操作，此时 nums = [1,8,8,13] 。8 是数组中最高频元素，频数是 2 。
 * - 对第三个元素执行 5 次递增操作，此时 nums = [1,4,13,13] 。13 是数组中最高频元素，频数是 2 。
 * 
 */
// 排序+滑动窗口
// 排序之后数组从小到大排列，如果要获取最大的频数，只要满足区间[i,j], sum[i, j] + k >= (j - i + 1) * j即可说明当前区间的最大频数为j。
// 根据上面的思路，我们配合使用滑动窗口，不断寻找最大的频数
var maxFrequency = function(nums, k) {
  // 对数组排序，让他从小到大排序
  nums = nums.sort((a, b) => a - b);
  const len = nums.length;
  if (len <= 1) return len;
  let left = 0, right = 0, sum = nums[0], max = 1;
  // 滑动窗口遍历，当right === len时，左指针开始右移，得到值都是比当前小的，所以可以直接返回结果
  while (right < len) {
    // 当前滑动窗口里元素的项
    const count = (right - left + 1);
    // 当前滑动窗口的值最大的项，即最右侧的元素
    const val = count * nums[right];
    // 如果满足条件，说明当前区间满足值都为一样的条件
    if (sum + k >= val) {
      // 保留较大值，滑动窗口右指针右移,计算新的元素之和
      max = Math.max(max, count);
      right++;
      sum = sum + nums[right];
    } else {
      // 滑动窗口左指针右移，计算新的元素之和
      sum = sum - nums[left];
      left++;
    }
  }
  return max;
};


console.log(maxFrequency([3,9,6], 2));
console.log(maxFrequency([1,2,4], 5));
console.log(maxFrequency([1,4,8,13], 5));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _practice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./练习/practice */ "./练习/practice.js");
/* harmony import */ var _practice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_practice__WEBPACK_IMPORTED_MODULE_0__);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1sZWV0Y29kZS8uL+e7g+S5oC9wcmFjdGljZS5qcyIsIndlYnBhY2s6Ly9teS1sZWV0Y29kZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS1sZWV0Y29kZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teS1sZWV0Y29kZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktbGVldGNvZGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS1sZWV0Y29kZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSx5Qzs7Ozs7O1VDeERBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBsZWV0Y29kZSAxODM4LiDmnIDpq5jpopHlhYPntKDnmoTpopHmlbBcclxuICogXHJcbiAqIOWFg+e0oOeahCDpopHmlbAg5piv6K+l5YWD57Sg5Zyo5LiA5Liq5pWw57uE5Lit5Ye6546w55qE5qyh5pWw44CCXHJcbiAqIOe7meS9oOS4gOS4quaVtOaVsOaVsOe7hCBudW1zIOWSjOS4gOS4quaVtOaVsCBrIOOAguWcqOS4gOatpeaTjeS9nOS4re+8jOS9oOWPr+S7pemAieaLqSBudW1zIOeahOS4gOS4quS4i+agh++8jOW5tuWwhuivpeS4i+agh+WvueW6lOWFg+e0oOeahOWAvOWinuWKoCAxIOOAglxyXG4gKiDmiafooYzmnIDlpJogayDmrKHmk43kvZzlkI7vvIzov5Tlm57mlbDnu4TkuK3mnIDpq5jpopHlhYPntKDnmoQg5pyA5aSn5Y+v6IO96aKR5pWwIOOAglxyXG4gKiBcclxuICog6L6T5YWl77yabnVtcyA9IFsxLDIsNF0sIGsgPSA1XHJcbiAqIOi+k+WHuu+8mjNcclxuICog6Kej6YeK77ya5a+556ys5LiA5Liq5YWD57Sg5omn6KGMIDMg5qyh6YCS5aKe5pON5L2c77yM5a+556ys5LqM5Liq5YWD57Sg5omnIDIg5qyh6YCS5aKe5pON5L2c77yM5q2k5pe2IG51bXMgPSBbNCw0LDRdIOOAglxyXG4gKiA0IOaYr+aVsOe7hOS4reacgOmrmOmikeWFg+e0oO+8jOmikeaVsOaYryAzIOOAglxyXG4gKiBcclxuICog6L6T5YWl77yabnVtcyA9IFszLDksNl0sIGsgPSAyXHJcbiAqIOi+k+WHuu+8mjFcclxuICogXHJcbiAqIOi+k+WFpe+8mm51bXMgPSBbMSw0LDgsMTNdLCBrID0gNVxyXG4gKiDovpPlh7rvvJoyXHJcbiAqIOino+mHiu+8muWtmOWcqOWkmuenjeacgOS8mOino+WGs+aWueahiO+8mlxyXG4gKiAtIOWvueesrOS4gOS4quWFg+e0oOaJp+ihjCAzIOasoemAkuWinuaTjeS9nO+8jOatpOaXtiBudW1zID0gWzQsNCw4LDEzXSDjgII0IOaYr+aVsOe7hOS4reacgOmrmOmikeWFg+e0oO+8jOmikeaVsOaYryAyIOOAglxyXG4gKiAtIOWvueesrOS6jOS4quWFg+e0oOaJp+ihjCA0IOasoemAkuWinuaTjeS9nO+8jOatpOaXtiBudW1zID0gWzEsOCw4LDEzXSDjgII4IOaYr+aVsOe7hOS4reacgOmrmOmikeWFg+e0oO+8jOmikeaVsOaYryAyIOOAglxyXG4gKiAtIOWvueesrOS4ieS4quWFg+e0oOaJp+ihjCA1IOasoemAkuWinuaTjeS9nO+8jOatpOaXtiBudW1zID0gWzEsNCwxMywxM10g44CCMTMg5piv5pWw57uE5Lit5pyA6auY6aKR5YWD57Sg77yM6aKR5pWw5pivIDIg44CCXHJcbiAqIFxyXG4gKi9cclxuLy8g5o6S5bqPK+a7keWKqOeql+WPo1xyXG4vLyDmjpLluo/kuYvlkI7mlbDnu4Tku47lsI/liLDlpKfmjpLliJfvvIzlpoLmnpzopoHojrflj5bmnIDlpKfnmoTpopHmlbDvvIzlj6ropoHmu6HotrPljLrpl7RbaSxqXSwgc3VtW2ksIGpdICsgayA+PSAoaiAtIGkgKyAxKSAqIGrljbPlj6/or7TmmI7lvZPliY3ljLrpl7TnmoTmnIDlpKfpopHmlbDkuLpq44CCXHJcbi8vIOagueaNruS4iumdoueahOaAnei3r++8jOaIkeS7rOmFjeWQiOS9v+eUqOa7keWKqOeql+WPo++8jOS4jeaWreWvu+aJvuacgOWkp+eahOmikeaVsFxyXG52YXIgbWF4RnJlcXVlbmN5ID0gZnVuY3Rpb24obnVtcywgaykge1xyXG4gIC8vIOWvueaVsOe7hOaOkuW6j++8jOiuqeS7luS7juWwj+WIsOWkp+aOkuW6j1xyXG4gIG51bXMgPSBudW1zLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcclxuICBjb25zdCBsZW4gPSBudW1zLmxlbmd0aDtcclxuICBpZiAobGVuIDw9IDEpIHJldHVybiBsZW47XHJcbiAgbGV0IGxlZnQgPSAwLCByaWdodCA9IDAsIHN1bSA9IG51bXNbMF0sIG1heCA9IDE7XHJcbiAgLy8g5ruR5Yqo56qX5Y+j6YGN5Y6G77yM5b2TcmlnaHQgPT09IGxlbuaXtu+8jOW3puaMh+mSiOW8gOWni+WPs+enu++8jOW+l+WIsOWAvOmDveaYr+avlOW9k+WJjeWwj+eahO+8jOaJgOS7peWPr+S7peebtOaOpei/lOWbnue7k+aenFxyXG4gIHdoaWxlIChyaWdodCA8IGxlbikge1xyXG4gICAgLy8g5b2T5YmN5ruR5Yqo56qX5Y+j6YeM5YWD57Sg55qE6aG5XHJcbiAgICBjb25zdCBjb3VudCA9IChyaWdodCAtIGxlZnQgKyAxKTtcclxuICAgIC8vIOW9k+WJjea7keWKqOeql+WPo+eahOWAvOacgOWkp+eahOmhue+8jOWNs+acgOWPs+S+p+eahOWFg+e0oFxyXG4gICAgY29uc3QgdmFsID0gY291bnQgKiBudW1zW3JpZ2h0XTtcclxuICAgIC8vIOWmguaenOa7oei2s+adoeS7tu+8jOivtOaYjuW9k+WJjeWMuumXtOa7oei2s+WAvOmDveS4uuS4gOagt+eahOadoeS7tlxyXG4gICAgaWYgKHN1bSArIGsgPj0gdmFsKSB7XHJcbiAgICAgIC8vIOS/neeVmei+g+Wkp+WAvO+8jOa7keWKqOeql+WPo+WPs+aMh+mSiOWPs+enuyzorqHnrpfmlrDnmoTlhYPntKDkuYvlkoxcclxuICAgICAgbWF4ID0gTWF0aC5tYXgobWF4LCBjb3VudCk7XHJcbiAgICAgIHJpZ2h0Kys7XHJcbiAgICAgIHN1bSA9IHN1bSArIG51bXNbcmlnaHRdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8g5ruR5Yqo56qX5Y+j5bem5oyH6ZKI5Y+z56e777yM6K6h566X5paw55qE5YWD57Sg5LmL5ZKMXHJcbiAgICAgIHN1bSA9IHN1bSAtIG51bXNbbGVmdF07XHJcbiAgICAgIGxlZnQrKztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG1heDtcclxufTtcclxuXHJcblxyXG5jb25zb2xlLmxvZyhtYXhGcmVxdWVuY3koWzMsOSw2XSwgMikpO1xyXG5jb25zb2xlLmxvZyhtYXhGcmVxdWVuY3koWzEsMiw0XSwgNSkpO1xyXG5jb25zb2xlLmxvZyhtYXhGcmVxdWVuY3koWzEsNCw4LDEzXSwgNSkpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==