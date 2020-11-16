(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./templates/BriefMessage.svelte":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./templates/BriefMessage.svelte ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<script>\n  export let text = \"\";\n  export let iteration = 0; // for re-triggering before the message has disappeared\n  export let duration = 1000;\n\n  let isShowing = false;\n  let localIteration = 0;\n\n  $: onStartTimeout = debounce(() => {\n    isShowing = false;\n  }, duration);\n\n  $: onTextChange = () => {\n    if (!text) {\n      isShowing = false;\n      return;\n    }\n    localIteration++;\n    isShowing = true;\n    onStartTimeout();\n  };\n  $: text, iteration, onTextChange();\n\n  // from https://davidwalsh.name/javascript-debounce-function\n  // Returns a function, that, as long as it continues to be invoked, will not\n  // be triggered. The function will be called after it stops being called for\n  // N milliseconds. If `immediate` is passed, trigger the function on the\n  // leading edge, instead of the trailing.\n  function debounce(func, wait, immediate) {\n    var timeout;\n    return function() {\n      var context = this,\n        args = arguments;\n      var later = function() {\n        timeout = null;\n        if (!immediate) func.apply(context, args);\n      };\n      var callNow = immediate && !timeout;\n      clearTimeout(timeout);\n      timeout = setTimeout(later, wait);\n      if (callNow) func.apply(context, args);\n    };\n  }\n</script>\n\n{#if text && isShowing}\n  <div\n    class=\"c c--{localIteration % 2}\"\n    style=\"animation-duration: {duration}ms\">\n    {text}\n  </div>\n{/if}\n\n<style>\n  @keyframes fadeOut {\n    0% {\n      transform: translate(0, 1em);\n      opacity: 0;\n    }\n    10% {\n      transform: translate(0, 0);\n      opacity: 1;\n    }\n    80% {\n      transform: translate(0, 0);\n      opacity: 1;\n    }\n    100% {\n      transform: translate(0, 1em);\n      opacity: 0;\n    }\n  }\n  @keyframes fadeOut2 {\n    0% {\n      transform: translate(0, 1em);\n      opacity: 0;\n    }\n    10% {\n      transform: translate(0, 0);\n      opacity: 1;\n    }\n    80% {\n      transform: translate(0, 0);\n      opacity: 1;\n    }\n    100% {\n      transform: translate(0, 1em);\n      opacity: 0;\n    }\n  }\n  .c {\n    position: absolute;\n    padding: 0.6em 1em;\n    background: white;\n    transform: translate(0, 1em);\n    opacity: 0;\n    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);\n    border: 1px solid var(--gray-lightest);\n    border-radius: 0.6em;\n    font-weight: 600;\n    animation: fadeOut 0.6s ease-out;\n    animation-fill-mode: forwards;\n  }\n  .c--1 {\n    animation-name: fadeOut2;\n  }\n</style>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./templates/Confetti.svelte":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./templates/Confetti.svelte ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<script>\n  import { quadIn } from \"svelte/easing\";\n\n  export let numberOfElements = 50;\n  export let durationInSeconds = 2;\n  export let colors = [\n    \"#fff\",\n    \"#c7ecee\",\n    \"#778beb\",\n    \"#f7d794\",\n    \"#63cdda\",\n    \"#cf6a87\",\n    \"#e77f67\",\n    \"#786fa6\",\n    \"#FDA7DF\",\n    \"#4b7bec\",\n    \"#475c83\"\n  ];\n\n  const pickFrom = arr => arr[Math.round(Math.random() * arr.length)];\n  const randomNumber = (min, max) => Math.random() * (max - min) + min;\n\n  const elementOptions = [\n    `<circle r=\"3\" />`,\n\n    `<path d=\"M3.83733 4.73234C4.38961 4.73234 4.83733 4.28463 4.83733 3.73234C4.83733 3.18006 4.38961 2.73234 3.83733 2.73234C3.28505 2.73234 2.83733 3.18006 2.83733 3.73234C2.83733 4.28463 3.28505 4.73234 3.83733 4.73234ZM3.83733 6.73234C5.49418 6.73234 6.83733 5.38919 6.83733 3.73234C6.83733 2.07549 5.49418 0.732341 3.83733 0.732341C2.18048 0.732341 0.83733 2.07549 0.83733 3.73234C0.83733 5.38919 2.18048 6.73234 3.83733 6.73234Z\" />`,\n    `<path d=\"M4.29742 2.26041C3.86864 2.1688 3.20695 2.21855 2.13614 3.0038C1.69078 3.33041 1.06498 3.23413 0.738375 2.78876C0.411774 2.3434 0.508051 1.7176 0.953417 1.39099C2.32237 0.387097 3.55827 0.0573281 4.71534 0.304565C5.80081 0.536504 6.61625 1.24716 7.20541 1.78276C7.28295 1.85326 7.35618 1.92051 7.4263 1.9849C7.64841 2.18888 7.83929 2.36418 8.03729 2.52315C8.29108 2.72692 8.48631 2.8439 8.64952 2.90181C8.7915 2.95219 8.91895 2.96216 9.07414 2.92095C9.24752 2.8749 9.5134 2.7484 9.88467 2.42214C10.2995 2.05757 10.9314 2.09833 11.2959 2.51319C11.6605 2.92805 11.6198 3.5599 11.2049 3.92447C10.6816 4.38435 10.1478 4.70514 9.58752 4.85394C9.00909 5.00756 8.469 4.95993 7.9807 4.78667C7.51364 4.62093 7.11587 4.34823 6.78514 4.08268C6.53001 3.87783 6.27248 3.64113 6.04114 3.4285C5.97868 3.37109 5.91814 3.31544 5.86006 3.26264C5.25645 2.7139 4.79779 2.36733 4.29742 2.26041Z\" />`,\n    `<rect width=\"4\" height=\"4\" x=\"-2\" y=\"-2\" />`,\n    `<path d=\"M -5 5 L 0 -5 L 5 5 Z\" />`\n  ];\n\n  const allElements = new Array(numberOfElements)\n    .fill(0)\n    .map((_, i) => [pickFrom(elementOptions), pickFrom(colors), Math.random()]);\n</script>\n\n<svg class=\"confetti\" viewBox=\"-10 -10 10 10\">\n  {#each allElements as [element, color, scale], i}\n    <g style=\"transform: scale({scale})\">\n      <g\n        fill={color}\n        style={[`--rotation: ${Math.random() * 360}deg`, `animation-delay: ${quadIn(i / numberOfElements)}s`, `animation-duration: ${durationInSeconds * randomNumber(0.7, 1)}s`].join(';')}>\n        {@html element}\n      </g>\n    </g>\n  {/each}\n</svg>\n\n<style>\n  .confetti {\n    width: 2em;\n    position: absolute;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    fill-rule: evenodd;\n    clip-rule: evenodd;\n    pointer-events: none;\n    overflow: visible;\n    transform: translate(-50%, -50%);\n  }\n  @keyframes pop {\n    0% {\n      transform: rotate(var(--rotation)) scale(1) translate(0em, 0em);\n    }\n    100% {\n      transform: rotate(calc(var(--rotation) + 60deg)) scale(0)\n        translate(9em, 9em);\n      fill: white;\n    }\n  }\n  g {\n    transition: all 0.5s ease-out;\n    transform: rotate(var(--rotation)) scale(0) translate(0, 0);\n    animation: pop 2s ease-out;\n    animation-iteration-count: infinite;\n  }\n</style>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./templates/Icon.svelte":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./templates/Icon.svelte ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<script context=\"module\">\n  import pathsByName from \"./icon-paths\";\n  export const iconOptions = Object.keys(pathsByName);\n  export const directions = [\"n\", \"ne\", \"e\", \"se\", \"s\", \"sw\", \"w\", \"nw\"];\n</script>\n\n<script>\n  export let name = \"arrow\";\n  export let direction = \"n\";\n\n  $: paths = pathsByName[name] || [];\n  $: rotation = directions.indexOf(direction) * 45;\n</script>\n\n<style>\n  .c {\n    width: 1em;\n    height: 1em;\n    fill: currentColor;\n    transition: all 0.3s ease-out;\n    overflow: visible;\n  }\n</style>\n\n<svg\n  class=\"c\"\n  viewBox=\"0 0 25 25\"\n  fill-rule=\"evenodd\"\n  clip-rule=\"evenodd\"\n  style={`transform: rotate(${rotation}deg)`}>\n  {#each paths as path}\n    <path d={path} />\n  {/each}\n</svg>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./templates/InView.svelte":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./templates/InView.svelte ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<script>\n  import { onMount } from \"svelte\";\n\n  export let root = undefined;\n  export let isInViewProp = false;\n\n  let isInView = false;\n  let observer;\n  let element;\n\n  $: isInView, (isInViewProp = isInView);\n\n  const onChangeVisibility = (e) => {\n    isInView = e[0].isIntersecting;\n  };\n\n  onMount(() => {\n    let options = {\n      root: root,\n    };\n\n    observer = new IntersectionObserver(onChangeVisibility, options);\n    observer.observe(element);\n  });\n</script>\n\n<div class=\"c\" bind:this={element}>\n  <slot {isInView} />\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./templates/Number.svelte":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./templates/Number.svelte ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<script>\n  import { format as d3Format, interpolate, timer as d3Timer } from \"d3\"\n\n  export let number = null\n  export let format = \",.2f\"\n  export let duration = 300\n\n  let displayNumber = 0\n  $: cachedNumber = 0\n  $: formatFunction = d => {\n    try {\n      return typeof format == \"string\" ? d3Format(format)(d) : format(d)\n    } catch (e) {\n      console.log(e)\n      return \"-\"\n    }\n  }\n\n  const startInterpolate = () => {\n    const interpolationFunction = interpolate(cachedNumber, number)\n\n    const timer = d3Timer(timeElapsed => {\n      const t = timeElapsed / duration\n\n      displayNumber = interpolationFunction(t)\n\n      if (t >= 1) {\n        if (timer) timer.stop()\n        displayNumber = number\n        cachedNumber = number\n      }\n    })\n  }\n\n  $: number, startInterpolate()\n</script>\n\n<span class=\"c\">\n  {Number.isFinite(+displayNumber) ? formatFunction(displayNumber) : '-'}\n</span>\n\n<style>\n  .c {\n    font-feature-settings: \"tnum\", 1;\n  }\n</style>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./templates/ProgressDots.svelte":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./templates/ProgressDots.svelte ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<script>\n  import { range } from \"d3\";\n\n  export let numberOfItems = 0;\n  export let activeIndex = 0;\n</script>\n\n<div class=\"items\">\n  {#each new Array(+numberOfItems).fill(0) as _, i}\n    <button\n      class=\"item\"\n      class:active={activeIndex == i}\n      on:click={() => (activeIndex = i)} />\n  {/each}\n  <div class=\"items-text\">{+activeIndex + 1} of {numberOfItems}</div>\n</div>\n\n<style>\n  .items {\n    display: flex;\n    align-items: center;\n    margin-left: 1em;\n    margin-top: 1em;\n  }\n  .item {\n    display: block;\n    position: relative;\n    appearance: none;\n    background: none;\n    outline: none;\n    height: 1.3em;\n    width: 1.3em;\n    margin-right: 0.6em;\n    margin-bottom: 0;\n    padding: 0;\n    flex: 0 0 1.3em;\n    border-radius: 100%;\n    border: 1px solid var(--gray, #ddd);\n    cursor: pointer;\n  }\n  .item:before {\n    content: \"\";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    height: 0.6em;\n    width: 0.6em;\n    border-radius: 100%;\n    background: var(--accent-color);\n    transform: translate(-50%, -50%) scale(0);\n    transition: transform 0.3s ease-out;\n  }\n  .item.active:before {\n    transform: translate(-50%, -50%) scale(1);\n  }\n  .items-text {\n    font-size: 0.7em;\n    margin-left: 0.3em;\n    color: var(--gray);\n  }\n</style>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./templates/Scatterplot.svelte":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./templates/Scatterplot.svelte ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<script>\n  import { spring } from \"svelte/motion\";\n  import { cubicOut } from \"svelte/easing\";\n  import { extent, interpolateHcl, scaleSqrt, scaleLinear } from \"d3\";\n\n  // utility function for translating elements\n  const move = (x, y) => `transform: translate(${x}px, ${y}px`;\n\n  export let data = [];\n  // accessor functions to quickly pivot between data structures\n  export let xAccessor = d => d[0];\n  export let yAccessor = d => d[1];\n  export let rAccessor = d => d[2];\n  export let margins = {\n    // typical d3 margin convention\n    top: 20,\n    right: 20,\n    bottom: 20,\n    left: 20\n  };\n\n  let width = 1200;\n  $: height = width;\n  $: mainWidth = width - margins.right - margins.left;\n  $: mainHeight = height - margins.top - margins.bottom;\n\n  // the biggest constraint here:\n  // the number of dots has to remain static\n  // one workaround is to have a very long array,\n  // and give extra nodes no radius (r=0)\n  let dots = spring(\n    data.map((d, i) => ({\n      x: 0,\n      y: 0,\n      r: 0\n    })),\n    {\n      stiffness: 0.1,\n      damping: 0.9\n    }\n  );\n\n  // make me some scales!\n  $: xScale = scaleLinear()\n    .domain(extent(data, xAccessor))\n    .range([0, mainWidth]);\n  $: yScale = scaleLinear()\n    .domain(extent(data, yAccessor))\n    .range([mainHeight, 0]);\n  $: rScale = scaleSqrt()\n    .domain(extent(data, rAccessor))\n    .range([0, 20]);\n  const colorScale = scaleLinear()\n    .domain([0, 20])\n    .range([\"tomato\", \"cornflowerblue\"])\n    .interpolate(interpolateHcl);\n\n  // update $dots' x, y, and r attributes\n  // `spring` will handle the animation/interpolation\n  const updateData = () => {\n    const newDots = data.map((d, i) => ({\n      x: xScale(xAccessor(d)),\n      y: yScale(yAccessor(d)),\n      r: rScale(rAccessor(d))\n    }));\n    dots.set(newDots);\n  };\n\n  $: data, mainWidth, updateData();\n</script>\n\n<figure class=\"c\" bind:clientWidth={width}>\n  <svg {width} {height}>\n    <g style={move(margins.top, margins.left)}>\n      {#each $dots as { x, y, r }}\n        <circle style={move(x, y)} r={Math.max(0, r)} fill={colorScale(r)} />\n      {/each}\n    </g>\n  </svg>\n</figure>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./templates/Toggle.svelte":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./templates/Toggle.svelte ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<script>\n  export let options = []\n  export let value = null\n  export let onChange = () => {}\n\n  const onChangeLocal = option => {\n    onChange(option)\n    value = option.id\n  }\n</script>\n\n<div class=\"c\">\n  {#each options as option}\n    <button\n      class=\"option\"\n      class:selected=\"{option.id == value}\"\n      on:click=\"{() => onChangeLocal(option)}\">\n      {option.label}\n    </button>\n  {/each}\n</div>\n\n<style>\n  .c {\n    display: flex;\n    align-items: center;\n  }\n  button.option {\n    padding: 0.6em 1em;\n    line-height: 1.3em;\n    appearance: none;\n    background: none;\n    font-weight: 600;\n    font-size: 0.9em;\n    color: var(--accent-color);\n    border: 1px solid var(--accent-color);\n    border-radius: 0;\n    outline: none;\n    cursor: pointer;\n  }\n  .option:hover {\n    background: #ececf1;\n  }\n  .option.selected,\n  .option.selected:hover {\n    background: var(--accent-color);\n    color: white;\n  }\n\n  /* gravy */\n  .option + .option {\n    border-left-width: 0;\n  }\n  .option:first-of-type {\n    border-radius: 6px 0 0 6px;\n  }\n  .option:last-of-type {\n    border-radius: 0 6px 6px 0;\n  }\n</style>\n");

/***/ }),

/***/ "./src/components/Template.svelte":
/*!****************************************!*\
  !*** ./src/components/Template.svelte ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _templates_BriefMessage_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../templates/BriefMessage.svelte */ "./templates/BriefMessage.svelte");
/* harmony import */ var _templates_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates-code */ "./src/components/templates-code.js");
/* src/components/Template.svelte generated by Svelte v3.29.7 */


const { Error: Error_1, console: console_1 } = svelte_internal__WEBPACK_IMPORTED_MODULE_0__["globals"];


const file = "src/components/Template.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = "svelte-8fuhgs-style";
	style.textContent = "section.svelte-8fuhgs.svelte-8fuhgs{margin:5em 0}.heading.svelte-8fuhgs.svelte-8fuhgs{position:relative}.heading.svelte-8fuhgs a.svelte-8fuhgs{position:absolute;top:50%;left:-0.7em;font-size:0.8em;transform:translate(-100%, -50%)}.description.svelte-8fuhgs.svelte-8fuhgs{margin-bottom:2em}button.svelte-8fuhgs.svelte-8fuhgs{position:relative}.message.svelte-8fuhgs.svelte-8fuhgs{position:absolute;top:-0.3em;right:-1em;width:20em;transform:translate(100%, -50%)}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVtcGxhdGUuc3ZlbHRlIiwic291cmNlcyI6WyJUZW1wbGF0ZS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgaW1wb3J0IEJyaWVmTWVzc2FnZSBmcm9tIFwiLi8uLi8uLi90ZW1wbGF0ZXMvQnJpZWZNZXNzYWdlLnN2ZWx0ZVwiXG4gIGltcG9ydCB0ZW1wbGF0ZXNDb2RlIGZyb20gXCIuL3RlbXBsYXRlcy1jb2RlXCJcblxuICBleHBvcnQgbGV0IG5hbWUgPSBcIlwiXG5cbiAgJDogY29kZSA9IHRlbXBsYXRlc0NvZGVbbmFtZV0gfHwgXCJjb3VsZG4ndCBmaW5kIGNvZGVcIlxuXG4gIGxldCBzdWNjZXNzTWVzc2FnZUl0ZXJhdGlvbiA9IDBcblxuICBjb25zdCBvbkNvcHkgPSAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvZGUpLnRoZW4oXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBzdWNjZXNzTWVzc2FnZUl0ZXJhdGlvbiArPSAxXG4gICAgICAgIH0sXG4gICAgICAgIGUgPT4ge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlKVxuICAgICAgICB9LFxuICAgICAgKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3Igd2hlbiBjb3B5aW5nIGNvZGVcIiwgZSlcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c2VjdGlvbj5cbiAgPGRpdiBjbGFzcz1cImhlYWRpbmdcIj5cbiAgICA8aDI+e25hbWV9PC9oMj5cbiAgICA8YVxuICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS90aGUtcHVkZGluZy9zdmVsdGUtdGVtcGxhdGVzL2Jsb2IvbWFzdGVyL3RlbXBsYXRlcy97bmFtZX0uc3ZlbHRlXCI+XG4gICAgICBDb2RlXG4gICAgPC9hPlxuICA8L2Rpdj5cbiAgPGJ1dHRvbiBvbjpjbGljaz1cIntvbkNvcHl9XCI+XG4gICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2VcIj5cbiAgICAgIDxCcmllZk1lc3NhZ2VcbiAgICAgICAgdGV4dD1cImNvcGllZCB0byBjbGlwYm9hcmQhIPCfmLrwn5Cx4oCN8J+PjVwiXG4gICAgICAgIGl0ZXJhdGlvbj1cIntzdWNjZXNzTWVzc2FnZUl0ZXJhdGlvbn1cIiAvPlxuICAgIDwvZGl2PlxuICAgIENvcHkgY29kZVxuICA8L2J1dHRvbj5cbiAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XG4gICAgPHNsb3QgbmFtZT1cImRlc2NyaXB0aW9uXCIgLz5cbiAgPC9kaXY+XG5cbiAgPHNsb3QgLz5cbjwvc2VjdGlvbj5cblxuPHN0eWxlPlxuICBzZWN0aW9uIHtcbiAgICBtYXJnaW46IDVlbSAwO1xuICB9XG4gIC5oZWFkaW5nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLmhlYWRpbmcgYSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IC0wLjdlbTtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAtNTAlKTtcbiAgfVxuICAuZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgfVxuICBidXR0b24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAubWVzc2FnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTAuM2VtO1xuICAgIHJpZ2h0OiAtMWVtO1xuICAgIHdpZHRoOiAyMGVtO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsIC01MCUpO1xuICB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtERSxPQUFPLDRCQUFDLENBQUMsQUFDUCxNQUFNLENBQUUsR0FBRyxDQUFDLENBQUMsQUFDZixDQUFDLEFBQ0QsUUFBUSw0QkFBQyxDQUFDLEFBQ1IsUUFBUSxDQUFFLFFBQVEsQUFDcEIsQ0FBQyxBQUNELHNCQUFRLENBQUMsQ0FBQyxjQUFDLENBQUMsQUFDVixRQUFRLENBQUUsUUFBUSxDQUNsQixHQUFHLENBQUUsR0FBRyxDQUNSLElBQUksQ0FBRSxNQUFNLENBQ1osU0FBUyxDQUFFLEtBQUssQ0FDaEIsU0FBUyxDQUFFLFVBQVUsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEFBQ25DLENBQUMsQUFDRCxZQUFZLDRCQUFDLENBQUMsQUFDWixhQUFhLENBQUUsR0FBRyxBQUNwQixDQUFDLEFBQ0QsTUFBTSw0QkFBQyxDQUFDLEFBQ04sUUFBUSxDQUFFLFFBQVEsQUFDcEIsQ0FBQyxBQUNELFFBQVEsNEJBQUMsQ0FBQyxBQUNSLFFBQVEsQ0FBRSxRQUFRLENBQ2xCLEdBQUcsQ0FBRSxNQUFNLENBQ1gsS0FBSyxDQUFFLElBQUksQ0FDWCxLQUFLLENBQUUsSUFBSSxDQUNYLFNBQVMsQ0FBRSxVQUFVLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxBQUNsQyxDQUFDIn0= */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

const get_description_slot_changes = dirty => ({});
const get_description_slot_context = ctx => ({});

function create_fragment(ctx) {
	let section;
	let div0;
	let h2;
	let t0;
	let t1;
	let a;
	let t2;
	let a_href_value;
	let t3;
	let button;
	let div1;
	let briefmessage;
	let t4;
	let t5;
	let div2;
	let t6;
	let current;
	let mounted;
	let dispose;

	briefmessage = new _templates_BriefMessage_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({
			props: {
				text: "copied to clipboard! 😺🐱‍🏍",
				iteration: /*successMessageIteration*/ ctx[1]
			},
			$$inline: true
		});

	const description_slot_template = /*#slots*/ ctx[4].description;
	const description_slot = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_slot"])(description_slot_template, ctx, /*$$scope*/ ctx[3], get_description_slot_context);
	const default_slot_template = /*#slots*/ ctx[4].default;
	const default_slot = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_slot"])(default_slot_template, ctx, /*$$scope*/ ctx[3], null);

	const block = {
		c: function create() {
			section = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("section");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			h2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h2");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(/*name*/ ctx[0]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Code");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(briefmessage.$$.fragment);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("\n    Copy code");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			if (description_slot) description_slot.c();
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			section = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "SECTION", { class: true });
			var section_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(section);
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(section_nodes, "DIV", { class: true });
			var div0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div0);
			h2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "H2", {});
			var h2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h2);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h2_nodes, /*name*/ ctx[0]);
			h2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div0_nodes);
			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "A", { href: true, class: true });
			var a_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a_nodes, "Code");
			a_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(section_nodes);
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(section_nodes, "BUTTON", { class: true });
			var button_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(button);
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(button_nodes, "DIV", { class: true });
			var div1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(briefmessage.$$.fragment, div1_nodes);
			div1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(button_nodes, "\n    Copy code");
			button_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(section_nodes);
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(section_nodes, "DIV", { class: true });
			var div2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div2);
			if (description_slot) description_slot.l(div2_nodes);
			div2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(section_nodes);
			if (default_slot) default_slot.l(section_nodes);
			section_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h2, file, 28, 4, 577);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a, "href", a_href_value = "https://github.com/the-pudding/svelte-templates/blob/master/templates/" + /*name*/ ctx[0] + ".svelte");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a, "class", "svelte-8fuhgs");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a, file, 29, 4, 597);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div0, "class", "heading svelte-8fuhgs");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div0, file, 27, 2, 551);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div1, "class", "message svelte-8fuhgs");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div1, file, 35, 4, 762);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(button, "class", "svelte-8fuhgs");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button, file, 34, 2, 729);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div2, "class", "description svelte-8fuhgs");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div2, file, 42, 2, 936);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(section, "class", "svelte-8fuhgs");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(section, file, 26, 0, 539);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, section, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, h2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h2, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, a);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section, button);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(button, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(briefmessage, div1, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(button, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section, div2);

			if (description_slot) {
				description_slot.m(div2, null);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section, t6);

			if (default_slot) {
				default_slot.m(section, null);
			}

			current = true;

			if (!mounted) {
				dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen_dev"])(button, "click", /*onCopy*/ ctx[2], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (!current || dirty & /*name*/ 1) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t0, /*name*/ ctx[0]);

			if (!current || dirty & /*name*/ 1 && a_href_value !== (a_href_value = "https://github.com/the-pudding/svelte-templates/blob/master/templates/" + /*name*/ ctx[0] + ".svelte")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a, "href", a_href_value);
			}

			const briefmessage_changes = {};
			if (dirty & /*successMessageIteration*/ 2) briefmessage_changes.iteration = /*successMessageIteration*/ ctx[1];
			briefmessage.$set(briefmessage_changes);

			if (description_slot) {
				if (description_slot.p && dirty & /*$$scope*/ 8) {
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["update_slot"])(description_slot, description_slot_template, ctx, /*$$scope*/ ctx[3], dirty, get_description_slot_changes, get_description_slot_context);
				}
			}

			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 8) {
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["update_slot"])(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[3], dirty, null, null);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(briefmessage.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(description_slot, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(briefmessage.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(description_slot, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(section);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(briefmessage);
			if (description_slot) description_slot.d(detaching);
			if (default_slot) default_slot.d(detaching);
			mounted = false;
			dispose();
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("Template", slots, ['description','default']);
	let { name = "" } = $$props;
	let successMessageIteration = 0;

	const onCopy = () => {
		try {
			navigator.clipboard.writeText(code).then(
				() => {
					$$invalidate(1, successMessageIteration += 1);
				},
				e => {
					throw new Error(e);
				}
			);
		} catch(e) {
			console.log("error when copying code", e);
		}
	};

	const writable_props = ["name"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Template> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("name" in $$props) $$invalidate(0, name = $$props.name);
		if ("$$scope" in $$props) $$invalidate(3, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({
		BriefMessage: _templates_BriefMessage_svelte__WEBPACK_IMPORTED_MODULE_1__["default"],
		templatesCode: _templates_code__WEBPACK_IMPORTED_MODULE_2__["default"],
		name,
		successMessageIteration,
		onCopy,
		code
	});

	$$self.$inject_state = $$props => {
		if ("name" in $$props) $$invalidate(0, name = $$props.name);
		if ("successMessageIteration" in $$props) $$invalidate(1, successMessageIteration = $$props.successMessageIteration);
		if ("code" in $$props) code = $$props.code;
	};

	let code;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*name*/ 1) {
			$: code = _templates_code__WEBPACK_IMPORTED_MODULE_2__["default"][name] || "couldn't find code";
		}
	};

	return [name, successMessageIteration, onCopy, $$scope, slots];
}

class Template extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-8fuhgs-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { name: 0 });

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "Template",
			options,
			id: create_fragment.name
		});
	}

	get name() {
		throw new Error_1("<Template>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set name(value) {
		throw new Error_1("<Template>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Template);

/***/ }),

/***/ "./src/components/Templates.svelte":
/*!*****************************************!*\
  !*** ./src/components/Templates.svelte ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _Template_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Template.svelte */ "./src/components/Template.svelte");
/* harmony import */ var _templates_Icon_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../templates/Icon.svelte */ "./templates/Icon.svelte");
/* harmony import */ var _templates_icon_paths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../templates/icon-paths */ "./templates/icon-paths.js");
/* harmony import */ var _templates_Toggle_svelte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../templates/Toggle.svelte */ "./templates/Toggle.svelte");
/* harmony import */ var _templates_ProgressDots_svelte__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../templates/ProgressDots.svelte */ "./templates/ProgressDots.svelte");
/* harmony import */ var _templates_InView_svelte__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../templates/InView.svelte */ "./templates/InView.svelte");
/* harmony import */ var _templates_Number_svelte__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../templates/Number.svelte */ "./templates/Number.svelte");
/* harmony import */ var _templates_Scatterplot_svelte__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../templates/Scatterplot.svelte */ "./templates/Scatterplot.svelte");
/* harmony import */ var _templates_BriefMessage_svelte__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../templates/BriefMessage.svelte */ "./templates/BriefMessage.svelte");
/* src/components/Templates.svelte generated by Svelte v3.29.7 */


const { Object: Object_1 } = svelte_internal__WEBPACK_IMPORTED_MODULE_0__["globals"];










const file = "src/components/Templates.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = "svelte-1gyn23f-style";
	style.textContent = "h1.svelte-1gyn23f{margin:2em 0 0;padding-top:1em;border-top:1px solid #d5d6dd}label.svelte-1gyn23f{display:flex;justify-content:flex-start}.label.svelte-1gyn23f{width:13em}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVtcGxhdGVzLnN2ZWx0ZSIsInNvdXJjZXMiOlsiVGVtcGxhdGVzLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZVwiXG5cbiAgaW1wb3J0IFRlbXBsYXRlIGZyb20gXCIuL1RlbXBsYXRlLnN2ZWx0ZVwiXG5cbiAgaW1wb3J0IEljb24gZnJvbSBcIi4vLi4vLi4vdGVtcGxhdGVzL0ljb24uc3ZlbHRlXCJcbiAgaW1wb3J0IGljb25QYXRocyBmcm9tIFwiLi8uLi8uLi90ZW1wbGF0ZXMvaWNvbi1wYXRoc1wiXG4gIGNvbnN0IGljb25zID0gT2JqZWN0LmtleXMoaWNvblBhdGhzKVxuICBpbXBvcnQgVG9nZ2xlIGZyb20gXCIuLy4uLy4uL3RlbXBsYXRlcy9Ub2dnbGUuc3ZlbHRlXCJcbiAgaW1wb3J0IFByb2dyZXNzRG90cyBmcm9tIFwiLi8uLi8uLi90ZW1wbGF0ZXMvUHJvZ3Jlc3NEb3RzLnN2ZWx0ZVwiXG4gIGltcG9ydCBJblZpZXcgZnJvbSBcIi4vLi4vLi4vdGVtcGxhdGVzL0luVmlldy5zdmVsdGVcIlxuICBpbXBvcnQgTnVtYmVyIGZyb20gXCIuLy4uLy4uL3RlbXBsYXRlcy9OdW1iZXIuc3ZlbHRlXCJcbiAgaW1wb3J0IFNjYXR0ZXJwbG90IGZyb20gXCIuLy4uLy4uL3RlbXBsYXRlcy9TY2F0dGVycGxvdC5zdmVsdGVcIlxuICBpbXBvcnQgQnJpZWZNZXNzYWdlIGZyb20gXCIuLy4uLy4uL3RlbXBsYXRlcy9CcmllZk1lc3NhZ2Uuc3ZlbHRlXCJcblxuICBsZXQgbnVtYmVyID0gNjBcbiAgbGV0IG51bWJlckR1cmF0aW9uID0gNTAwXG4gIGxldCBudW1iZXJGb3JtYXQgPSBcIi4xZlwiXG5cbiAgY29uc3QgZ2VuZXJhdGVTY2F0dGVycGxvdERhdGEgPSAoKSA9PlxuICAgIG5ldyBBcnJheSgxMDApLmZpbGwoMCkubWFwKF8gPT4gW01hdGgucmFuZG9tKCksIE1hdGgucmFuZG9tKCksIDNdKVxuICBsZXQgc2NhdHRlcnBsb3REYXRhID0gZ2VuZXJhdGVTY2F0dGVycGxvdERhdGEoKVxuXG4gIGNvbnN0IG9uUmVnZW5lcmF0ZVNjYXR0ZXJwbG90RGF0YSA9ICgpID0+IHtcbiAgICBzY2F0dGVycGxvdERhdGEgPSBnZW5lcmF0ZVNjYXR0ZXJwbG90RGF0YSgpXG4gIH1cbiAgb25Nb3VudChvblJlZ2VuZXJhdGVTY2F0dGVycGxvdERhdGEpXG5cbiAgbGV0IG1lc3NhZ2VJdGVyYXRpb24gPSAwXG4gIGxldCBtZXNzYWdlRHVyYXRpb24gPSA1MDBcbiAgbGV0IG1lc3NhZ2UgPSBcIlRoaXMgaXMgdGhlIG1lc3NhZ2VcIlxuPC9zY3JpcHQ+XG5cbjxoMT5VSSBFbGVtZW50czwvaDE+XG5cbjxUZW1wbGF0ZSBuYW1lPVwiSWNvblwiPlxuICA8ZGl2IHNsb3Q9XCJkZXNjcmlwdGlvblwiPlxuICAgIDxwPlxuICAgICAgVGhlc2Ugd2lsbCBpbmhlcml0IHRoZSBjdXJyZW50IGNvbG9yLCBhbmQgYXJlIHNpemVkIGJhc2VkIG9uIHRoZVxuICAgICAgZm9udC1zaXplLiBDaG9vc2UgdGhlIHNwZWNpZmljIGljb24gd2l0aCB0aGUgYXR0cmlidXRlIGBuYW1lYC5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgICBNYWtlIHN1cmUgdG8gYWxzbyBncmFiIHRoZSBgaWNvbi1wYXRocy5qc2AgZmlsZSwgd2hpY2ggc3RvcmVzIHN2ZyBwYXRoIGBkYFxuICAgICAgYXR0cmlidXRlIHN0cmluZ3MuXG4gICAgPC9wPlxuICA8L2Rpdj5cblxuICB7I2VhY2ggaWNvbnMgYXMgaWNvbn1cbiAgICA8c3BhbiBzdHlsZT1cInBhZGRpbmc6IDAuNmVtXCI+XG4gICAgICA8SWNvbiBuYW1lPVwie2ljb259XCIgLz5cbiAgICA8L3NwYW4+XG4gIHsvZWFjaH1cbjwvVGVtcGxhdGU+XG5cbjxUZW1wbGF0ZSBuYW1lPVwiVG9nZ2xlXCI+XG4gIDxkaXYgc2xvdD1cImRlc2NyaXB0aW9uXCI+XG4gICAgPHA+XG4gICAgICBUaGUgY3VycmVudGx5IHNlbGVjdGVkIG9wdGlvbiBpcyByZXByZXNlbnRlZCBpbiB0aGUgYHZhbHVlYCBhdHRyaWJ1dGUuIEFkZFxuICAgICAgYW4gYG9wdGlvbnNgIGFycmF5IHdpdGggb2JqZWN0cyB0aGF0IGhhdmU6XG4gICAgPC9wPlxuICAgIDx1bD5cbiAgICAgIDxsaT5cbiAgICAgICAgPGI+aWQ8L2I+XG4gICAgICAgIDogd2hhdCBnZXRzIHNldCBhcyB0aGUgYHZhbHVlYFxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGI+bGFiZWw8L2I+XG4gICAgICAgIDogd2hhdCBnZXRzIGRpc3BsYXllZCBpbiB0aGUgdG9nZ2xlXG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gIDwvZGl2PlxuXG4gIDxUb2dnbGVcbiAgICB2YWx1ZT1cInsxfVwiXG4gICAgb3B0aW9ucz1cIntbeyBpZDogMSwgbGFiZWw6ICdPbmUnIH0sIHsgaWQ6IDIsIGxhYmVsOiAnVHdvJyB9LCB7IGlkOiAzLCBsYWJlbDogJ1RocmVlJyB9XX1cIiAvPlxuPC9UZW1wbGF0ZT5cblxuPFRlbXBsYXRlIG5hbWU9XCJQcm9ncmVzc0RvdHNcIj5cbiAgPGRpdiBzbG90PVwiZGVzY3JpcHRpb25cIj5cbiAgICA8cD48L3A+XG4gIDwvZGl2PlxuXG4gIDxQcm9ncmVzc0RvdHMgbnVtYmVyT2ZJdGVtcz1cIjZcIiBhY3RpdmVJbmRleD1cIjFcIiAvPlxuPC9UZW1wbGF0ZT5cblxuPFRlbXBsYXRlIG5hbWU9XCJOdW1iZXJcIj5cbiAgPGRpdiBzbG90PVwiZGVzY3JpcHRpb25cIj5cbiAgICA8cD5EaXNwbGF5cyBhIG51bWJlciB3aXRoIGFuIGludGVycG9sYXRlZCBhbmltYXRpb24gd2hlbiBjaGFuZ2VkLjwvcD5cbiAgICA8bGFiZWw+XG4gICAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIj52YWx1ZTwvZGl2PlxuICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9XCJ7bnVtYmVyfVwiIHR5cGU9XCJudW1iZXJcIiBzdHlsZT1cIndpZHRoOiA2ZW1cIiAvPlxuICAgIDwvbGFiZWw+XG4gICAgPGxhYmVsPlxuICAgICAgPGRpdiBjbGFzcz1cImxhYmVsXCI+ZHVyYXRpb24gKG1pbGxpc2Vjb25kcyk8L2Rpdj5cbiAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPVwie251bWJlckR1cmF0aW9ufVwiIHR5cGU9XCJudW1iZXJcIiBzdHlsZT1cIndpZHRoOiA2ZW1cIiAvPlxuICAgIDwvbGFiZWw+XG4gICAgPGxhYmVsPlxuICAgICAgPGRpdiBjbGFzcz1cImxhYmVsXCI+Zm9ybWF0PC9kaXY+XG4gICAgICA8aW5wdXQgYmluZDp2YWx1ZT1cIntudW1iZXJGb3JtYXR9XCIgc3R5bGU9XCJ3aWR0aDogNmVtXCIgLz5cbiAgICA8L2xhYmVsPlxuICA8L2Rpdj5cblxuICA8TnVtYmVyIHtudW1iZXJ9IGR1cmF0aW9uPVwie251bWJlckR1cmF0aW9ufVwiIGZvcm1hdD1cIntudW1iZXJGb3JtYXR9XCIgLz5cbjwvVGVtcGxhdGU+XG5cbjxUZW1wbGF0ZSBuYW1lPVwiQnJpZWZNZXNzYWdlXCI+XG4gIDxkaXYgc2xvdD1cImRlc2NyaXB0aW9uXCI+XG4gICAgPHA+XG4gICAgICBUaGlzIGlzIGEgbWVzc2FnZSB0aGF0IHdpbGwgcG9wIHVwIHRvIGdpdmUgcXVpY2sgdXNlciBmZWVkYmFjaywgYW5kXG4gICAgICBkaXNhcHBlYXJzIGFmdGVyIGEgc2hvcnQgYW1vdW50IG9mIHRpbWUuXG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgVGhlIG1lc3NhZ2Ugc2hvd3MgdXAgd2hlbmV2ZXIgdGhlIGB0ZXh0YCBvciBgaXRlcmF0aW9uYCBjaGFuZ2VzLiBDaGFuZ2luZ1xuICAgICAgdGhlIGBpdGVyYXRpb25gIGlzIGEgZ29vZCB3YXkgdG8gbWFrZSBzdXJlIHRoZSBtZXNzYWdlIHNob3dzIHVwIHdoZW5cbiAgICAgIG5lZWRlZCwgZXZlbiBpZiB0aGUgYHRleHRgIGRvZXNuJ3QgY2hhbmdlLlxuICAgIDwvcD5cblxuICAgIDxsYWJlbD5cbiAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbFwiPnRleHQ8L2Rpdj5cbiAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPVwie21lc3NhZ2V9XCIgc3R5bGU9XCJ3aWR0aDogMjBlbVwiIC8+XG4gICAgPC9sYWJlbD5cbiAgICA8bGFiZWw+XG4gICAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIj5kdXJhdGlvbiAobWlsbGlzZWNvbmRzKTwvZGl2PlxuICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9XCJ7bWVzc2FnZUR1cmF0aW9ufVwiIHR5cGU9XCJudW1iZXJcIiBzdHlsZT1cIndpZHRoOiA2ZW1cIiAvPlxuICAgIDwvbGFiZWw+XG4gICAgPGJ1dHRvbiBvbjpjbGljaz1cInsoKSA9PiAobWVzc2FnZUl0ZXJhdGlvbiArPSAxKX1cIj5TaG93IG1lc3NhZ2U8L2J1dHRvbj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZVwiPlxuICAgIFRoZSBtZXNzYWdlIHdpbGwgc2hvdyB1cCBuZXh0IHRvIHRoaXMgY29udGVudC5cbiAgICA8QnJpZWZNZXNzYWdlXG4gICAgICB0ZXh0PVwie21lc3NhZ2V9XCJcbiAgICAgIGl0ZXJhdGlvbj1cInttZXNzYWdlSXRlcmF0aW9ufVwiXG4gICAgICBkdXJhdGlvbj1cInttZXNzYWdlRHVyYXRpb259XCIgLz5cbiAgPC9kaXY+XG48L1RlbXBsYXRlPlxuXG48aDE+VXRpbGl0aWVzPC9oMT5cblxuPFRlbXBsYXRlIG5hbWU9XCJJblZpZXdcIj5cbiAgPGRpdiBzbG90PVwiZGVzY3JpcHRpb25cIj5cbiAgICA8cD5cbiAgICAgIFdyYXAgc29tZXRoaW5nIGluIHRoaXMgY29tcG9uZW50LCBhbmQgdXNlIHRoZSBgaXNJblZpZXdgIHZhcmlhYmxlIHRvIGtub3dcbiAgICAgIHdoZXRoZXIgb3Igbm90IGl0J3MgaW4gdmlldy5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgICBZb3UgY291bGQgYWxzbyBgYmluZGAgdG8gdGhlIGBpc0luVmlld1Byb3BgIGF0dHJpYnV0ZSwgaWYgeW91IHdhbnRlZCBhXG4gICAgICBjb21wb25lbnQtbGV2ZWwgdmFyaWFibGUgKGVnLiBpZiB5b3Ugd2FudCB0byBjaGFuZ2Ugc29tZXRoaW5nIG91dHNpZGUgb2ZcbiAgICAgIHRoZSBjb250ZW50KS5cbiAgICA8L3A+XG4gIDwvZGl2PlxuXG4gIDxJblZpZXcgbGV0OmlzSW5WaWV3PlxuICAgIDxkaXZcbiAgICAgIHN0eWxlPVwidHJhbnNmb3JtOiB0cmFuc2xhdGUoe2lzSW5WaWV3ID8gMCA6ICctM2VtJ30pOyB0cmFuc2l0aW9uOiBhbGwgMXNcbiAgICAgIGVhc2Utb3V0O1wiPlxuICAgICAgSXMge2lzSW5WaWV3ID8gJycgOiAnbm90ICd9aW4gdmlld1xuICAgIDwvZGl2PlxuICA8L0luVmlldz5cbjwvVGVtcGxhdGU+XG5cbjxoMT5DaGFydHM8L2gxPlxuXG48VGVtcGxhdGUgbmFtZT1cIlNjYXR0ZXJwbG90XCI+XG4gIDxkaXYgc2xvdD1cImRlc2NyaXB0aW9uXCI+XG4gICAgPHA+XG4gICAgICBUaGUgYmFzaWNzIGZvciBhIHNjYXR0ZXJwbG90LiBUaGlzIHVzZXMgc3ZlbHRlIGEgYHNwcmluZ2AsIHdoaWNoIGFuaW1hdGVzXG4gICAgICB0aGUgZG90cyBvbiBjaGFuZ2UsIGJ1dCByZXF1aXJlcyBhIGNvbnNpc3RlbnQgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZVxuICAgICAgYGRhdGFgIGFycmF5LlxuICAgIDwvcD5cbiAgICA8YnV0dG9uIG9uOmNsaWNrPVwie29uUmVnZW5lcmF0ZVNjYXR0ZXJwbG90RGF0YX1cIj5HZXQgbmV3IGRhdGE8L2J1dHRvbj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBzdHlsZT1cIm1heC13aWR0aDogMzBlbVwiPlxuICAgIDxTY2F0dGVycGxvdCBkYXRhPVwie3NjYXR0ZXJwbG90RGF0YX1cIiAvPlxuICA8L2Rpdj5cbjwvVGVtcGxhdGU+XG5cbjxzdHlsZT5cbiAgaDEge1xuICAgIG1hcmdpbjogMmVtIDAgMDtcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDVkNmRkO1xuICB9XG4gIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuICAubGFiZWwge1xuICAgIHdpZHRoOiAxM2VtO1xuICB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1MRSxFQUFFLGVBQUMsQ0FBQyxBQUNGLE1BQU0sQ0FBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDZixXQUFXLENBQUUsR0FBRyxDQUNoQixVQUFVLENBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEFBQy9CLENBQUMsQUFDRCxLQUFLLGVBQUMsQ0FBQyxBQUNMLE9BQU8sQ0FBRSxJQUFJLENBQ2IsZUFBZSxDQUFFLFVBQVUsQUFDN0IsQ0FBQyxBQUNELE1BQU0sZUFBQyxDQUFDLEFBQ04sS0FBSyxDQUFFLElBQUksQUFDYixDQUFDIn0= */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[17] = list[i];
	return child_ctx;
}

// (37:2) <div slot="description">
function create_description_slot_6(ctx) {
	let div;
	let p0;
	let t0;
	let t1;
	let p1;
	let t2;

	const block = {
		c: function create() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("These will inherit the current color, and are sized based on the\n      font-size. Choose the specific icon with the attribute `name`.");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Make sure to also grab the `icon-paths.js` file, which stores svg path `d`\n      attribute strings.");
			this.h();
		},
		l: function claim(nodes) {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { slot: true });
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);
			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div_nodes, "P", {});
			var p0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p0);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p0_nodes, "These will inherit the current color, and are sized based on the\n      font-size. Choose the specific icon with the attribute `name`.");
			p0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div_nodes);
			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div_nodes, "P", {});
			var p1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p1);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p1_nodes, "Make sure to also grab the `icon-paths.js` file, which stores svg path `d`\n      attribute strings.");
			p1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p0, file, 37, 4, 1152);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p1, file, 41, 4, 1309);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div, "slot", "description");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 36, 2, 1123);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div, p0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p0, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div, p1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p1, t2);
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_description_slot_6.name,
		type: "slot",
		source: "(37:2) <div slot=\\\"description\\\">",
		ctx
	});

	return block;
}

// (48:2) {#each icons as icon}
function create_each_block(ctx) {
	let span;
	let icon;
	let t;
	let current;

	icon = new _templates_Icon_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: { name: /*icon*/ ctx[17] },
			$$inline: true
		});

	const block = {
		c: function create() {
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(icon.$$.fragment);
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			this.h();
		},
		l: function claim(nodes) {
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "SPAN", { style: true });
			var span_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(icon.$$.fragment, span_nodes);
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(span_nodes);
			span_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(span, "padding", "0.6em");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span, file, 48, 4, 1466);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, span, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(icon, span, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(span, t);
			current = true;
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(icon.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(icon.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(span);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(icon);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(48:2) {#each icons as icon}",
		ctx
	});

	return block;
}

// (36:0) <Template name="Icon">
function create_default_slot_7(ctx) {
	let t;
	let each_1_anchor;
	let current;
	let each_value = /*icons*/ ctx[7];
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_each_argument"])(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},
		l: function claim(nodes) {
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*icons*/ 128) {
				each_value = /*icons*/ ctx[7];
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_each_argument"])(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(each_1_anchor);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_default_slot_7.name,
		type: "slot",
		source: "(36:0) <Template name=\\\"Icon\\\">",
		ctx
	});

	return block;
}

// (56:2) <div slot="description">
function create_description_slot_5(ctx) {
	let div;
	let p;
	let t0;
	let t1;
	let ul;
	let li0;
	let b0;
	let t2;
	let t3;
	let t4;
	let li1;
	let b1;
	let t5;
	let t6;

	const block = {
		c: function create() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("The currently selected option is represented in the `value` attribute. Add\n      an `options` array with objects that have:");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			ul = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("ul");
			li0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("li");
			b0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("b");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("id");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("\n        : what gets set as the `value`");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			li1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("li");
			b1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("b");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("label");
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("\n        : what gets displayed in the toggle");
			this.h();
		},
		l: function claim(nodes) {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { slot: true });
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div_nodes, "P", {});
			var p_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p_nodes, "The currently selected option is represented in the `value` attribute. Add\n      an `options` array with objects that have:");
			p_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div_nodes);
			ul = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div_nodes, "UL", {});
			var ul_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(ul);
			li0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(ul_nodes, "LI", {});
			var li0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(li0);
			b0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(li0_nodes, "B", {});
			var b0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(b0);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(b0_nodes, "id");
			b0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(li0_nodes, "\n        : what gets set as the `value`");
			li0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(ul_nodes);
			li1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(ul_nodes, "LI", {});
			var li1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(li1);
			b1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(li1_nodes, "B", {});
			var b1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(b1);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(b1_nodes, "label");
			b1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(li1_nodes, "\n        : what gets displayed in the toggle");
			li1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			ul_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p, file, 56, 4, 1616);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(b0, file, 62, 8, 1787);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(li0, file, 61, 6, 1774);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(b1, file, 66, 8, 1867);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(li1, file, 65, 6, 1854);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(ul, file, 60, 4, 1763);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div, "slot", "description");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 55, 2, 1587);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div, p);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div, ul);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(ul, li0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(li0, b0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(b0, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(li0, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(ul, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(ul, li1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(li1, b1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(b1, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(li1, t6);
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_description_slot_5.name,
		type: "slot",
		source: "(56:2) <div slot=\\\"description\\\">",
		ctx
	});

	return block;
}

// (55:0) <Template name="Toggle">
function create_default_slot_6(ctx) {
	let t;
	let toggle;
	let current;

	toggle = new _templates_Toggle_svelte__WEBPACK_IMPORTED_MODULE_5__["default"]({
			props: {
				value: 1,
				options: [
					{ id: 1, label: "One" },
					{ id: 2, label: "Two" },
					{ id: 3, label: "Three" }
				]
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(toggle.$$.fragment);
		},
		l: function claim(nodes) {
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(toggle.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(toggle, target, anchor);
			current = true;
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(toggle.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(toggle.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(toggle, detaching);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_default_slot_6.name,
		type: "slot",
		source: "(55:0) <Template name=\\\"Toggle\\\">",
		ctx
	});

	return block;
}

// (79:2) <div slot="description">
function create_description_slot_4(ctx) {
	let div;
	let p;

	const block = {
		c: function create() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			this.h();
		},
		l: function claim(nodes) {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { slot: true });
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div_nodes, "P", {});
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p).forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p, file, 79, 4, 2154);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div, "slot", "description");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 78, 2, 2125);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div, p);
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_description_slot_4.name,
		type: "slot",
		source: "(79:2) <div slot=\\\"description\\\">",
		ctx
	});

	return block;
}

// (78:0) <Template name="ProgressDots">
function create_default_slot_5(ctx) {
	let t;
	let progressdots;
	let current;

	progressdots = new _templates_ProgressDots_svelte__WEBPACK_IMPORTED_MODULE_6__["default"]({
			props: { numberOfItems: "6", activeIndex: "1" },
			$$inline: true
		});

	const block = {
		c: function create() {
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(progressdots.$$.fragment);
		},
		l: function claim(nodes) {
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(progressdots.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(progressdots, target, anchor);
			current = true;
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(progressdots.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(progressdots.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(progressdots, detaching);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_default_slot_5.name,
		type: "slot",
		source: "(78:0) <Template name=\\\"ProgressDots\\\">",
		ctx
	});

	return block;
}

// (87:2) <div slot="description">
function create_description_slot_3(ctx) {
	let div0;
	let p;
	let t0;
	let t1;
	let label0;
	let div1;
	let t2;
	let t3;
	let input0;
	let t4;
	let label1;
	let div2;
	let t5;
	let t6;
	let input1;
	let t7;
	let label2;
	let div3;
	let t8;
	let t9;
	let input2;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Displays a number with an interpolated animation when changed.");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			label0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("label");
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("value");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			input0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			label1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("label");
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("duration (milliseconds)");
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			input1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			label2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("label");
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("format");
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			input2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			this.h();
		},
		l: function claim(nodes) {
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { slot: true });
			var div0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div0);
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "P", {});
			var p_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p_nodes, "Displays a number with an interpolated animation when changed.");
			p_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div0_nodes);
			label0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "LABEL", { class: true });
			var label0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(label0);
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(label0_nodes, "DIV", { class: true });
			var div1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div1);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div1_nodes, "value");
			div1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(label0_nodes);
			input0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(label0_nodes, "INPUT", { type: true, style: true });
			label0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div0_nodes);
			label1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "LABEL", { class: true });
			var label1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(label1);
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(label1_nodes, "DIV", { class: true });
			var div2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div2);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div2_nodes, "duration (milliseconds)");
			div2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(label1_nodes);
			input1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(label1_nodes, "INPUT", { type: true, style: true });
			label1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div0_nodes);
			label2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "LABEL", { class: true });
			var label2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(label2);
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(label2_nodes, "DIV", { class: true });
			var div3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div3);
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div3_nodes, "format");
			div3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(label2_nodes);
			input2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(label2_nodes, "INPUT", { style: true });
			label2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p, file, 87, 4, 2294);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div1, "class", "label svelte-1gyn23f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div1, file, 89, 6, 2382);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(input0, "type", "number");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(input0, "width", "6em");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(input0, file, 90, 6, 2419);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(label0, "class", "svelte-1gyn23f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(label0, file, 88, 4, 2368);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div2, "class", "label svelte-1gyn23f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div2, file, 93, 6, 2515);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(input1, "type", "number");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(input1, "width", "6em");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(input1, file, 94, 6, 2570);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(label1, "class", "svelte-1gyn23f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(label1, file, 92, 4, 2501);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div3, "class", "label svelte-1gyn23f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div3, file, 97, 6, 2674);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(input2, "width", "6em");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(input2, file, 98, 6, 2712);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(label2, "class", "svelte-1gyn23f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(label2, file, 96, 4, 2660);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div0, "slot", "description");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div0, file, 86, 2, 2265);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, p);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, label0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(label0, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(label0, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(label0, input0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(input0, /*number*/ ctx[0]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, label1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(label1, div2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(label1, t6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(label1, input1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(input1, /*numberDuration*/ ctx[1]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, t7);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, label2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(label2, div3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, t8);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(label2, t9);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(label2, input2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(input2, /*numberFormat*/ ctx[2]);

			if (!mounted) {
				dispose = [
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen_dev"])(input0, "input", /*input0_input_handler*/ ctx[9]),
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen_dev"])(input1, "input", /*input1_input_handler*/ ctx[10]),
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen_dev"])(input2, "input", /*input2_input_handler*/ ctx[11])
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*number*/ 1 && Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["to_number"])(input0.value) !== /*number*/ ctx[0]) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(input0, /*number*/ ctx[0]);
			}

			if (dirty & /*numberDuration*/ 2 && Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["to_number"])(input1.value) !== /*numberDuration*/ ctx[1]) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(input1, /*numberDuration*/ ctx[1]);
			}

			if (dirty & /*numberFormat*/ 4 && input2.value !== /*numberFormat*/ ctx[2]) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(input2, /*numberFormat*/ ctx[2]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div0);
			mounted = false;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_description_slot_3.name,
		type: "slot",
		source: "(87:2) <div slot=\\\"description\\\">",
		ctx
	});

	return block;
}

// (86:0) <Template name="Number">
function create_default_slot_4(ctx) {
	let t;
	let number_1;
	let current;

	number_1 = new _templates_Number_svelte__WEBPACK_IMPORTED_MODULE_8__["default"]({
			props: {
				number: /*number*/ ctx[0],
				duration: /*numberDuration*/ ctx[1],
				format: /*numberFormat*/ ctx[2]
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(number_1.$$.fragment);
		},
		l: function claim(nodes) {
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(number_1.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(number_1, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const number_1_changes = {};
			if (dirty & /*number*/ 1) number_1_changes.number = /*number*/ ctx[0];
			if (dirty & /*numberDuration*/ 2) number_1_changes.duration = /*numberDuration*/ ctx[1];
			if (dirty & /*numberFormat*/ 4) number_1_changes.format = /*numberFormat*/ ctx[2];
			number_1.$set(number_1_changes);
		},
		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(number_1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(number_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(number_1, detaching);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_default_slot_4.name,
		type: "slot",
		source: "(86:0) <Template name=\\\"Number\\\">",
		ctx
	});

	return block;
}

// (107:2) <div slot="description">
function create_description_slot_2(ctx) {
	let div0;
	let p0;
	let t0;
	let t1;
	let p1;
	let t2;
	let t3;
	let label0;
	let div1;
	let t4;
	let t5;
	let input0;
	let t6;
	let label1;
	let div2;
	let t7;
	let t8;
	let input1;
	let t9;
	let button;
	let t10;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("This is a message that will pop up to give quick user feedback, and\n      disappears after a short amount of time.");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("The message shows up whenever the `text` or `iteration` changes. Changing\n      the `iteration` is a good way to make sure the message shows up when\n      needed, even if the `text` doesn't change.");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			label0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("label");
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("text");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			input0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			label1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("label");
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("duration (milliseconds)");
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			input1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			t10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Show message");
			this.h();
		},
		l: function claim(nodes) {
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { slot: true });
			var div0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div0);
			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "P", {});
			var p0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p0);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p0_nodes, "This is a message that will pop up to give quick user feedback, and\n      disappears after a short amount of time.");
			p0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div0_nodes);
			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "P", {});
			var p1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p1);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p1_nodes, "The message shows up whenever the `text` or `iteration` changes. Changing\n      the `iteration` is a good way to make sure the message shows up when\n      needed, even if the `text` doesn't change.");
			p1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div0_nodes);
			label0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "LABEL", { class: true });
			var label0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(label0);
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(label0_nodes, "DIV", { class: true });
			var div1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div1);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div1_nodes, "text");
			div1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(label0_nodes);
			input0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(label0_nodes, "INPUT", { style: true });
			label0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div0_nodes);
			label1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "LABEL", { class: true });
			var label1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(label1);
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(label1_nodes, "DIV", { class: true });
			var div2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div2);
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div2_nodes, "duration (milliseconds)");
			div2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(label1_nodes);
			input1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(label1_nodes, "INPUT", { type: true, style: true });
			label1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div0_nodes);
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "BUTTON", {});
			var button_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(button);
			t10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(button_nodes, "Show message");
			button_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p0, file, 107, 4, 2941);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p1, file, 111, 4, 3079);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div1, "class", "label svelte-1gyn23f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div1, file, 118, 6, 3315);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(input0, "width", "20em");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(input0, file, 119, 6, 3351);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(label0, "class", "svelte-1gyn23f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(label0, file, 117, 4, 3301);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div2, "class", "label svelte-1gyn23f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div2, file, 122, 6, 3435);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(input1, "type", "number");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(input1, "width", "6em");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(input1, file, 123, 6, 3490);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(label1, "class", "svelte-1gyn23f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(label1, file, 121, 4, 3421);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button, file, 125, 4, 3581);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div0, "slot", "description");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div0, file, 106, 2, 2912);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, p0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p0, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, p1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p1, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, label0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(label0, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(label0, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(label0, input0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(input0, /*message*/ ctx[6]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, t6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, label1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(label1, div2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, t7);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(label1, t8);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(label1, input1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(input1, /*messageDuration*/ ctx[5]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, t9);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, button);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(button, t10);

			if (!mounted) {
				dispose = [
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen_dev"])(input0, "input", /*input0_input_handler_1*/ ctx[12]),
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen_dev"])(input1, "input", /*input1_input_handler_1*/ ctx[13]),
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen_dev"])(button, "click", /*click_handler*/ ctx[14], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*message*/ 64 && input0.value !== /*message*/ ctx[6]) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(input0, /*message*/ ctx[6]);
			}

			if (dirty & /*messageDuration*/ 32 && Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["to_number"])(input1.value) !== /*messageDuration*/ ctx[5]) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(input1, /*messageDuration*/ ctx[5]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div0);
			mounted = false;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_description_slot_2.name,
		type: "slot",
		source: "(107:2) <div slot=\\\"description\\\">",
		ctx
	});

	return block;
}

// (106:0) <Template name="BriefMessage">
function create_default_slot_3(ctx) {
	let t0;
	let div;
	let t1;
	let briefmessage;
	let current;

	briefmessage = new _templates_BriefMessage_svelte__WEBPACK_IMPORTED_MODULE_10__["default"]({
			props: {
				text: /*message*/ ctx[6],
				iteration: /*messageIteration*/ ctx[4],
				duration: /*messageDuration*/ ctx[5]
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("The message will show up next to this content.\n    ");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(briefmessage.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { style: true });
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div_nodes, "The message will show up next to this content.\n    ");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(briefmessage.$$.fragment, div_nodes);
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div, "position", "relative");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 128, 2, 3666);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(briefmessage, div, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const briefmessage_changes = {};
			if (dirty & /*message*/ 64) briefmessage_changes.text = /*message*/ ctx[6];
			if (dirty & /*messageIteration*/ 16) briefmessage_changes.iteration = /*messageIteration*/ ctx[4];
			if (dirty & /*messageDuration*/ 32) briefmessage_changes.duration = /*messageDuration*/ ctx[5];
			briefmessage.$set(briefmessage_changes);
		},
		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(briefmessage.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(briefmessage.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t0);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(briefmessage);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3.name,
		type: "slot",
		source: "(106:0) <Template name=\\\"BriefMessage\\\">",
		ctx
	});

	return block;
}

// (141:2) <div slot="description">
function create_description_slot_1(ctx) {
	let div;
	let p0;
	let t0;
	let t1;
	let p1;
	let t2;

	const block = {
		c: function create() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Wrap something in this component, and use the `isInView` variable to know\n      whether or not it's in view.");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("You could also `bind` to the `isInViewProp` attribute, if you wanted a\n      component-level variable (eg. if you want to change something outside of\n      the content).");
			this.h();
		},
		l: function claim(nodes) {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { slot: true });
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);
			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div_nodes, "P", {});
			var p0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p0);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p0_nodes, "Wrap something in this component, and use the `isInView` variable to know\n      whether or not it's in view.");
			p0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div_nodes);
			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div_nodes, "P", {});
			var p1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p1);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p1_nodes, "You could also `bind` to the `isInViewProp` attribute, if you wanted a\n      component-level variable (eg. if you want to change something outside of\n      the content).");
			p1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p0, file, 141, 4, 3964);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p1, file, 145, 4, 4096);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div, "slot", "description");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 140, 2, 3935);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div, p0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p0, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div, p1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p1, t2);
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_description_slot_1.name,
		type: "slot",
		source: "(141:2) <div slot=\\\"description\\\">",
		ctx
	});

	return block;
}

// (153:2) <InView let:isInView>
function create_default_slot_2(ctx) {
	let div;
	let t0;
	let t1_value = (/*isInView*/ ctx[16] ? "" : "not ") + "";
	let t1;
	let t2;

	const block = {
		c: function create() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Is ");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t1_value);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("in view");
			this.h();
		},
		l: function claim(nodes) {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { style: true });
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div_nodes, "Is ");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div_nodes, t1_value);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div_nodes, "in view");
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div, "transform", "translate(" + (/*isInView*/ ctx[16] ? 0 : "-3em") + ")");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div, "transition", "all 1s\n      ease-out");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 153, 4, 4323);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div, t2);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*isInView*/ 65536 && t1_value !== (t1_value = (/*isInView*/ ctx[16] ? "" : "not ") + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t1, t1_value);

			if (dirty & /*isInView*/ 65536) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div, "transform", "translate(" + (/*isInView*/ ctx[16] ? 0 : "-3em") + ")");
			}
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2.name,
		type: "slot",
		source: "(153:2) <InView let:isInView>",
		ctx
	});

	return block;
}

// (140:0) <Template name="InView">
function create_default_slot_1(ctx) {
	let t;
	let inview;
	let current;

	inview = new _templates_InView_svelte__WEBPACK_IMPORTED_MODULE_7__["default"]({
			props: {
				$$slots: {
					default: [
						create_default_slot_2,
						({ isInView }) => ({ 16: isInView }),
						({ isInView }) => isInView ? 65536 : 0
					]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(inview.$$.fragment);
		},
		l: function claim(nodes) {
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(inview.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(inview, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const inview_changes = {};

			if (dirty & /*$$scope, isInView*/ 1114112) {
				inview_changes.$$scope = { dirty, ctx };
			}

			inview.$set(inview_changes);
		},
		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(inview.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(inview.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(inview, detaching);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1.name,
		type: "slot",
		source: "(140:0) <Template name=\\\"InView\\\">",
		ctx
	});

	return block;
}

// (165:2) <div slot="description">
function create_description_slot(ctx) {
	let div;
	let p;
	let t0;
	let t1;
	let button;
	let t2;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("The basics for a scatterplot. This uses svelte a `spring`, which animates\n      the dots on change, but requires a consistent number of items in the\n      `data` array.");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Get new data");
			this.h();
		},
		l: function claim(nodes) {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { slot: true });
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div_nodes, "P", {});
			var p_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p_nodes, "The basics for a scatterplot. This uses svelte a `spring`, which animates\n      the dots on change, but requires a consistent number of items in the\n      `data` array.");
			p_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div_nodes);
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div_nodes, "BUTTON", {});
			var button_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(button);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(button_nodes, "Get new data");
			button_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p, file, 165, 4, 4580);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button, file, 170, 4, 4772);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div, "slot", "description");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 164, 2, 4551);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div, p);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div, button);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(button, t2);

			if (!mounted) {
				dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen_dev"])(button, "click", /*onRegenerateScatterplotData*/ ctx[8], false, false, false);
				mounted = true;
			}
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div);
			mounted = false;
			dispose();
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_description_slot.name,
		type: "slot",
		source: "(165:2) <div slot=\\\"description\\\">",
		ctx
	});

	return block;
}

// (164:0) <Template name="Scatterplot">
function create_default_slot(ctx) {
	let t;
	let div;
	let scatterplot;
	let current;

	scatterplot = new _templates_Scatterplot_svelte__WEBPACK_IMPORTED_MODULE_9__["default"]({
			props: { data: /*scatterplotData*/ ctx[3] },
			$$inline: true
		});

	const block = {
		c: function create() {
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(scatterplot.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { style: true });
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(scatterplot.$$.fragment, div_nodes);
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div, "max-width", "30em");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 173, 2, 4855);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(scatterplot, div, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const scatterplot_changes = {};
			if (dirty & /*scatterplotData*/ 8) scatterplot_changes.data = /*scatterplotData*/ ctx[3];
			scatterplot.$set(scatterplot_changes);
		},
		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(scatterplot.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(scatterplot.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(scatterplot);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(164:0) <Template name=\\\"Scatterplot\\\">",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let h10;
	let t0;
	let t1;
	let template0;
	let t2;
	let template1;
	let t3;
	let template2;
	let t4;
	let template3;
	let t5;
	let template4;
	let t6;
	let h11;
	let t7;
	let t8;
	let template5;
	let t9;
	let h12;
	let t10;
	let t11;
	let template6;
	let current;

	template0 = new _Template_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: {
				name: "Icon",
				$$slots: {
					default: [create_default_slot_7],
					description: [create_description_slot_6]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	template1 = new _Template_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: {
				name: "Toggle",
				$$slots: {
					default: [create_default_slot_6],
					description: [create_description_slot_5]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	template2 = new _Template_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: {
				name: "ProgressDots",
				$$slots: {
					default: [create_default_slot_5],
					description: [create_description_slot_4]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	template3 = new _Template_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: {
				name: "Number",
				$$slots: {
					default: [create_default_slot_4],
					description: [create_description_slot_3]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	template4 = new _Template_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: {
				name: "BriefMessage",
				$$slots: {
					default: [create_default_slot_3],
					description: [create_description_slot_2]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	template5 = new _Template_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: {
				name: "InView",
				$$slots: {
					default: [create_default_slot_1],
					description: [create_description_slot_1]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	template6 = new _Template_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: {
				name: "Scatterplot",
				$$slots: {
					default: [create_default_slot],
					description: [create_description_slot]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			h10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("UI Elements");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(template0.$$.fragment);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(template1.$$.fragment);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(template2.$$.fragment);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(template3.$$.fragment);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(template4.$$.fragment);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			h11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Utilities");
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(template5.$$.fragment);
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			h12 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			t10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Charts");
			t11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(template6.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			h10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "H1", { class: true });
			var h10_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h10);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h10_nodes, "UI Elements");
			h10_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(template0.$$.fragment, nodes);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(template1.$$.fragment, nodes);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(template2.$$.fragment, nodes);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(template3.$$.fragment, nodes);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(template4.$$.fragment, nodes);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			h11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "H1", { class: true });
			var h11_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h11);
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h11_nodes, "Utilities");
			h11_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(template5.$$.fragment, nodes);
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			h12 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "H1", { class: true });
			var h12_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h12);
			t10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h12_nodes, "Charts");
			h12_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(template6.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h10, "class", "svelte-1gyn23f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h10, file, 33, 0, 1076);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h11, "class", "svelte-1gyn23f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h11, file, 137, 0, 3888);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h12, "class", "svelte-1gyn23f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h12, file, 161, 0, 4502);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, h10, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h10, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(template0, target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(template1, target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t3, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(template2, target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t4, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(template3, target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t5, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(template4, target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t6, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, h11, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h11, t7);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t8, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(template5, target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t9, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, h12, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h12, t10);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t11, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(template6, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const template0_changes = {};

			if (dirty & /*$$scope*/ 1048576) {
				template0_changes.$$scope = { dirty, ctx };
			}

			template0.$set(template0_changes);
			const template1_changes = {};

			if (dirty & /*$$scope*/ 1048576) {
				template1_changes.$$scope = { dirty, ctx };
			}

			template1.$set(template1_changes);
			const template2_changes = {};

			if (dirty & /*$$scope*/ 1048576) {
				template2_changes.$$scope = { dirty, ctx };
			}

			template2.$set(template2_changes);
			const template3_changes = {};

			if (dirty & /*$$scope, number, numberDuration, numberFormat*/ 1048583) {
				template3_changes.$$scope = { dirty, ctx };
			}

			template3.$set(template3_changes);
			const template4_changes = {};

			if (dirty & /*$$scope, message, messageIteration, messageDuration*/ 1048688) {
				template4_changes.$$scope = { dirty, ctx };
			}

			template4.$set(template4_changes);
			const template5_changes = {};

			if (dirty & /*$$scope*/ 1048576) {
				template5_changes.$$scope = { dirty, ctx };
			}

			template5.$set(template5_changes);
			const template6_changes = {};

			if (dirty & /*$$scope, scatterplotData*/ 1048584) {
				template6_changes.$$scope = { dirty, ctx };
			}

			template6.$set(template6_changes);
		},
		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(template0.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(template1.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(template2.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(template3.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(template4.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(template5.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(template6.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(template0.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(template1.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(template2.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(template3.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(template4.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(template5.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(template6.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(h10);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(template0, detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(template1, detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(template2, detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(template3, detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(template4, detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t6);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(h11);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t8);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(template5, detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t9);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(h12);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t11);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(template6, detaching);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("Templates", slots, []);
	const icons = Object.keys(_templates_icon_paths__WEBPACK_IMPORTED_MODULE_4__["default"]);
	let number = 60;
	let numberDuration = 500;
	let numberFormat = ".1f";
	const generateScatterplotData = () => new Array(100).fill(0).map(_ => [Math.random(), Math.random(), 3]);
	let scatterplotData = generateScatterplotData();

	const onRegenerateScatterplotData = () => {
		$$invalidate(3, scatterplotData = generateScatterplotData());
	};

	Object(svelte__WEBPACK_IMPORTED_MODULE_1__["onMount"])(onRegenerateScatterplotData);
	let messageIteration = 0;
	let messageDuration = 500;
	let message = "This is the message";
	const writable_props = [];

	Object_1.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Templates> was created with unknown prop '${key}'`);
	});

	function input0_input_handler() {
		number = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["to_number"])(this.value);
		$$invalidate(0, number);
	}

	function input1_input_handler() {
		numberDuration = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["to_number"])(this.value);
		$$invalidate(1, numberDuration);
	}

	function input2_input_handler() {
		numberFormat = this.value;
		$$invalidate(2, numberFormat);
	}

	function input0_input_handler_1() {
		message = this.value;
		$$invalidate(6, message);
	}

	function input1_input_handler_1() {
		messageDuration = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["to_number"])(this.value);
		$$invalidate(5, messageDuration);
	}

	const click_handler = () => $$invalidate(4, messageIteration += 1);

	$$self.$capture_state = () => ({
		onMount: svelte__WEBPACK_IMPORTED_MODULE_1__["onMount"],
		Template: _Template_svelte__WEBPACK_IMPORTED_MODULE_2__["default"],
		Icon: _templates_Icon_svelte__WEBPACK_IMPORTED_MODULE_3__["default"],
		iconPaths: _templates_icon_paths__WEBPACK_IMPORTED_MODULE_4__["default"],
		icons,
		Toggle: _templates_Toggle_svelte__WEBPACK_IMPORTED_MODULE_5__["default"],
		ProgressDots: _templates_ProgressDots_svelte__WEBPACK_IMPORTED_MODULE_6__["default"],
		InView: _templates_InView_svelte__WEBPACK_IMPORTED_MODULE_7__["default"],
		Number: _templates_Number_svelte__WEBPACK_IMPORTED_MODULE_8__["default"],
		Scatterplot: _templates_Scatterplot_svelte__WEBPACK_IMPORTED_MODULE_9__["default"],
		BriefMessage: _templates_BriefMessage_svelte__WEBPACK_IMPORTED_MODULE_10__["default"],
		number,
		numberDuration,
		numberFormat,
		generateScatterplotData,
		scatterplotData,
		onRegenerateScatterplotData,
		messageIteration,
		messageDuration,
		message
	});

	$$self.$inject_state = $$props => {
		if ("number" in $$props) $$invalidate(0, number = $$props.number);
		if ("numberDuration" in $$props) $$invalidate(1, numberDuration = $$props.numberDuration);
		if ("numberFormat" in $$props) $$invalidate(2, numberFormat = $$props.numberFormat);
		if ("scatterplotData" in $$props) $$invalidate(3, scatterplotData = $$props.scatterplotData);
		if ("messageIteration" in $$props) $$invalidate(4, messageIteration = $$props.messageIteration);
		if ("messageDuration" in $$props) $$invalidate(5, messageDuration = $$props.messageDuration);
		if ("message" in $$props) $$invalidate(6, message = $$props.message);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		number,
		numberDuration,
		numberFormat,
		scatterplotData,
		messageIteration,
		messageDuration,
		message,
		icons,
		onRegenerateScatterplotData,
		input0_input_handler,
		input1_input_handler,
		input2_input_handler,
		input0_input_handler_1,
		input1_input_handler_1,
		click_handler
	];
}

class Templates extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-1gyn23f-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {});

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "Templates",
			options,
			id: create_fragment.name
		});
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Templates);

/***/ }),

/***/ "./src/components/templates-code.js":
/*!******************************************!*\
  !*** ./src/components/templates-code.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _raw_loader_templates_BriefMessage_svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./../../templates/BriefMessage.svelte */ "./node_modules/raw-loader/dist/cjs.js!./templates/BriefMessage.svelte");
/* harmony import */ var _raw_loader_templates_Confetti_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./../../templates/Confetti.svelte */ "./node_modules/raw-loader/dist/cjs.js!./templates/Confetti.svelte");
/* harmony import */ var _raw_loader_templates_Icon_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !raw-loader!./../../templates/Icon.svelte */ "./node_modules/raw-loader/dist/cjs.js!./templates/Icon.svelte");
/* harmony import */ var _raw_loader_templates_InView_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !raw-loader!./../../templates/InView.svelte */ "./node_modules/raw-loader/dist/cjs.js!./templates/InView.svelte");
/* harmony import */ var _raw_loader_templates_Number_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !raw-loader!./../../templates/Number.svelte */ "./node_modules/raw-loader/dist/cjs.js!./templates/Number.svelte");
/* harmony import */ var _raw_loader_templates_ProgressDots_svelte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !raw-loader!./../../templates/ProgressDots.svelte */ "./node_modules/raw-loader/dist/cjs.js!./templates/ProgressDots.svelte");
/* harmony import */ var _raw_loader_templates_Scatterplot_svelte__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !raw-loader!./../../templates/Scatterplot.svelte */ "./node_modules/raw-loader/dist/cjs.js!./templates/Scatterplot.svelte");
/* harmony import */ var _raw_loader_templates_Toggle_svelte__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! !raw-loader!./../../templates/Toggle.svelte */ "./node_modules/raw-loader/dist/cjs.js!./templates/Toggle.svelte");









/* harmony default export */ __webpack_exports__["default"] = ({
  BriefMessage: _raw_loader_templates_BriefMessage_svelte__WEBPACK_IMPORTED_MODULE_0__["default"],
  Confetti: _raw_loader_templates_Confetti_svelte__WEBPACK_IMPORTED_MODULE_1__["default"],
  Icon: _raw_loader_templates_Icon_svelte__WEBPACK_IMPORTED_MODULE_2__["default"],
  InView: _raw_loader_templates_InView_svelte__WEBPACK_IMPORTED_MODULE_3__["default"],
  Number: _raw_loader_templates_Number_svelte__WEBPACK_IMPORTED_MODULE_4__["default"],
  ProgressDots: _raw_loader_templates_ProgressDots_svelte__WEBPACK_IMPORTED_MODULE_5__["default"],
  Scatterplot: _raw_loader_templates_Scatterplot_svelte__WEBPACK_IMPORTED_MODULE_6__["default"],
  Toggle: _raw_loader_templates_Toggle_svelte__WEBPACK_IMPORTED_MODULE_7__["default"],
});

/***/ }),

/***/ "./src/routes/index.svelte":
/*!*********************************!*\
  !*** ./src/routes/index.svelte ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _components_Templates_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/Templates.svelte */ "./src/components/Templates.svelte");
/* src/routes/index.svelte generated by Svelte v3.29.7 */



const file = "src/routes/index.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = "svelte-naoe03-style";
	style.textContent = "h1.svelte-naoe03{font-size:3em;font-weight:100}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3ZlbHRlIiwic291cmNlcyI6WyJpbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgaW1wb3J0IFRlbXBsYXRlcyBmcm9tIFwiLi8uLi9jb21wb25lbnRzL1RlbXBsYXRlcy5zdmVsdGVcIlxuPC9zY3JpcHQ+XG5cbjxoMT5IZXkgZnJpZW5kITwvaDE+XG48cD5UaGVzZSB0ZW1wbGF0ZXMgYXJlIHlvdXJzIHRvIGdyYWIgYW5kIG1vZGlmeSBhcyB5b3UgbmVlZCE8L3A+XG48cD5KdXN0IGNvcHkgdGhlIHNvdXJjZSBjb2RlICYgcGFzdGUgaW50byBhIG5ldyAuc3ZlbHRlIGZpbGUuPC9wPlxuPHA+XG4gIFRoZXNlIGNhbiBkbyBiYXNpYyBjb2xvciB0aGVtaW5nLCBpZiB5b3Ugc2V0IHRoZSBjc3MgdmFyaWFibGVzIGluIGEgcGFyZW50XG4gIGNvbXBvbmVudDpcbjwvcD5cbjx1bD5cbiAgPGxpPlxuICAgIDxiIHN0eWxlPVwiY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcilcIj4tLWFjY2VudC1jb2xvcjwvYj5cbiAgPC9saT5cbiAgPGxpPlxuICAgIDxiIHN0eWxlPVwiY29sb3I6IHZhcigtLWdyYXkpXCI+LS1ncmF5PC9iPlxuICA8L2xpPlxuPC91bD5cblxuPFRlbXBsYXRlcyAvPlxuXG48c3R5bGU+XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCRSxFQUFFLGNBQUMsQ0FBQyxBQUNGLFNBQVMsQ0FBRSxHQUFHLENBQ2QsV0FBVyxDQUFFLEdBQUcsQUFDbEIsQ0FBQyJ9 */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function create_fragment(ctx) {
	let h1;
	let t0;
	let t1;
	let p0;
	let t2;
	let t3;
	let p1;
	let t4;
	let t5;
	let p2;
	let t6;
	let t7;
	let ul;
	let li0;
	let b0;
	let t8;
	let t9;
	let li1;
	let b1;
	let t10;
	let t11;
	let templates;
	let current;
	templates = new _components_Templates_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({ $$inline: true });

	const block = {
		c: function create() {
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Hey friend!");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("These templates are yours to grab and modify as you need!");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Just copy the source code & paste into a new .svelte file.");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("These can do basic color theming, if you set the css variables in a parent\n  component:");
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			ul = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("ul");
			li0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("li");
			b0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("b");
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("--accent-color");
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			li1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("li");
			b1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("b");
			t10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("--gray");
			t11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(templates.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "H1", { class: true });
			var h1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h1_nodes, "Hey friend!");
			h1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "P", {});
			var p0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p0);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p0_nodes, "These templates are yours to grab and modify as you need!");
			p0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "P", {});
			var p1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p1);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p1_nodes, "Just copy the source code & paste into a new .svelte file.");
			p1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			p2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "P", {});
			var p2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p2);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p2_nodes, "These can do basic color theming, if you set the css variables in a parent\n  component:");
			p2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			ul = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "UL", {});
			var ul_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(ul);
			li0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(ul_nodes, "LI", {});
			var li0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(li0);
			b0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(li0_nodes, "B", { style: true });
			var b0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(b0);
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(b0_nodes, "--accent-color");
			b0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			li0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(ul_nodes);
			li1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(ul_nodes, "LI", {});
			var li1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(li1);
			b1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(li1_nodes, "B", { style: true });
			var b1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(b1);
			t10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(b1_nodes, "--gray");
			b1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			li1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			ul_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(templates.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h1, "class", "svelte-naoe03");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 4, 0, 79);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p0, file, 5, 0, 100);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p1, file, 6, 0, 165);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p2, file, 7, 0, 231);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(b0, "color", "var(--accent-color)");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(b0, file, 13, 4, 346);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(li0, file, 12, 2, 337);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(b1, "color", "var(--gray)");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(b1, file, 16, 4, 422);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(li1, file, 15, 2, 413);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(ul, file, 11, 0, 330);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, h1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h1, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, p0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p0, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t3, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, p1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p1, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t5, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, p2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p2, t6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t7, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, ul, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(ul, li0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(li0, b0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(b0, t8);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(ul, t9);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(ul, li1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(li1, b1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(b1, t10);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t11, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(templates, target, anchor);
			current = true;
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(templates.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(templates.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(h1);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t1);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(p0);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t3);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(p1);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t5);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(p2);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t7);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(ul);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t11);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(templates, detaching);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("Routes", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Templates: _components_Templates_svelte__WEBPACK_IMPORTED_MODULE_1__["default"] });
	return [];
}

class Routes extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-naoe03-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {});

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Routes);

/***/ }),

/***/ "./templates/BriefMessage.svelte":
/*!***************************************!*\
  !*** ./templates/BriefMessage.svelte ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* templates/BriefMessage.svelte generated by Svelte v3.29.7 */


const file = "templates/BriefMessage.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = "svelte-1tczm9n-style";
	style.textContent = "@keyframes svelte-1tczm9n-fadeOut{0%{transform:translate(0, 1em);opacity:0}10%{transform:translate(0, 0);opacity:1}80%{transform:translate(0, 0);opacity:1}100%{transform:translate(0, 1em);opacity:0}}@keyframes svelte-1tczm9n-fadeOut2{0%{transform:translate(0, 1em);opacity:0}10%{transform:translate(0, 0);opacity:1}80%{transform:translate(0, 0);opacity:1}100%{transform:translate(0, 1em);opacity:0}}.c.svelte-1tczm9n{position:absolute;padding:0.6em 1em;background:white;transform:translate(0, 1em);opacity:0;box-shadow:0px 2px 6px rgba(0, 0, 0, 0.3);border:1px solid var(--gray-lightest);border-radius:0.6em;font-weight:600;animation:svelte-1tczm9n-fadeOut 0.6s ease-out;animation-fill-mode:forwards}.c--1.svelte-1tczm9n{animation-name:svelte-1tczm9n-fadeOut2}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJpZWZNZXNzYWdlLnN2ZWx0ZSIsInNvdXJjZXMiOlsiQnJpZWZNZXNzYWdlLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBleHBvcnQgbGV0IHRleHQgPSBcIlwiO1xuICBleHBvcnQgbGV0IGl0ZXJhdGlvbiA9IDA7IC8vIGZvciByZS10cmlnZ2VyaW5nIGJlZm9yZSB0aGUgbWVzc2FnZSBoYXMgZGlzYXBwZWFyZWRcbiAgZXhwb3J0IGxldCBkdXJhdGlvbiA9IDEwMDA7XG5cbiAgbGV0IGlzU2hvd2luZyA9IGZhbHNlO1xuICBsZXQgbG9jYWxJdGVyYXRpb24gPSAwO1xuXG4gICQ6IG9uU3RhcnRUaW1lb3V0ID0gZGVib3VuY2UoKCkgPT4ge1xuICAgIGlzU2hvd2luZyA9IGZhbHNlO1xuICB9LCBkdXJhdGlvbik7XG5cbiAgJDogb25UZXh0Q2hhbmdlID0gKCkgPT4ge1xuICAgIGlmICghdGV4dCkge1xuICAgICAgaXNTaG93aW5nID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxvY2FsSXRlcmF0aW9uKys7XG4gICAgaXNTaG93aW5nID0gdHJ1ZTtcbiAgICBvblN0YXJ0VGltZW91dCgpO1xuICB9O1xuICAkOiB0ZXh0LCBpdGVyYXRpb24sIG9uVGV4dENoYW5nZSgpO1xuXG4gIC8vIGZyb20gaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvamF2YXNjcmlwdC1kZWJvdW5jZS1mdW5jdGlvblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG4gIC8vIGJlIHRyaWdnZXJlZC4gVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGl0IHN0b3BzIGJlaW5nIGNhbGxlZCBmb3JcbiAgLy8gTiBtaWxsaXNlY29uZHMuIElmIGBpbW1lZGlhdGVgIGlzIHBhc3NlZCwgdHJpZ2dlciB0aGUgZnVuY3Rpb24gb24gdGhlXG4gIC8vIGxlYWRpbmcgZWRnZSwgaW5zdGVhZCBvZiB0aGUgdHJhaWxpbmcuXG4gIGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICAgIHZhciB0aW1lb3V0O1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICB9O1xuICAgICAgdmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9O1xuICB9XG48L3NjcmlwdD5cblxueyNpZiB0ZXh0ICYmIGlzU2hvd2luZ31cbiAgPGRpdlxuICAgIGNsYXNzPVwiYyBjLS17bG9jYWxJdGVyYXRpb24gJSAyfVwiXG4gICAgc3R5bGU9XCJhbmltYXRpb24tZHVyYXRpb246IHtkdXJhdGlvbn1tc1wiPlxuICAgIHt0ZXh0fVxuICA8L2Rpdj5cbnsvaWZ9XG5cbjxzdHlsZT5cbiAgQGtleWZyYW1lcyBmYWRlT3V0IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxZW0pO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgODAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxZW0pO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBmYWRlT3V0MiB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMWVtKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDgwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMWVtKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG4gIC5jIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcGFkZGluZzogMC42ZW0gMWVtO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDFlbSk7XG4gICAgb3BhY2l0eTogMDtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheS1saWdodGVzdCk7XG4gICAgYm9yZGVyLXJhZGl1czogMC42ZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBhbmltYXRpb246IGZhZGVPdXQgMC42cyBlYXNlLW91dDtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgfVxuICAuYy0tMSB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXQyO1xuICB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNERSxXQUFXLHNCQUFRLENBQUMsQUFDbEIsRUFBRSxBQUFDLENBQUMsQUFDRixTQUFTLENBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FDNUIsT0FBTyxDQUFFLENBQUMsQUFDWixDQUFDLEFBQ0QsR0FBRyxBQUFDLENBQUMsQUFDSCxTQUFTLENBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDMUIsT0FBTyxDQUFFLENBQUMsQUFDWixDQUFDLEFBQ0QsR0FBRyxBQUFDLENBQUMsQUFDSCxTQUFTLENBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDMUIsT0FBTyxDQUFFLENBQUMsQUFDWixDQUFDLEFBQ0QsSUFBSSxBQUFDLENBQUMsQUFDSixTQUFTLENBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FDNUIsT0FBTyxDQUFFLENBQUMsQUFDWixDQUFDLEFBQ0gsQ0FBQyxBQUNELFdBQVcsdUJBQVMsQ0FBQyxBQUNuQixFQUFFLEFBQUMsQ0FBQyxBQUNGLFNBQVMsQ0FBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUM1QixPQUFPLENBQUUsQ0FBQyxBQUNaLENBQUMsQUFDRCxHQUFHLEFBQUMsQ0FBQyxBQUNILFNBQVMsQ0FBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUMxQixPQUFPLENBQUUsQ0FBQyxBQUNaLENBQUMsQUFDRCxHQUFHLEFBQUMsQ0FBQyxBQUNILFNBQVMsQ0FBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUMxQixPQUFPLENBQUUsQ0FBQyxBQUNaLENBQUMsQUFDRCxJQUFJLEFBQUMsQ0FBQyxBQUNKLFNBQVMsQ0FBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUM1QixPQUFPLENBQUUsQ0FBQyxBQUNaLENBQUMsQUFDSCxDQUFDLEFBQ0QsRUFBRSxlQUFDLENBQUMsQUFDRixRQUFRLENBQUUsUUFBUSxDQUNsQixPQUFPLENBQUUsS0FBSyxDQUFDLEdBQUcsQ0FDbEIsVUFBVSxDQUFFLEtBQUssQ0FDakIsU0FBUyxDQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQzVCLE9BQU8sQ0FBRSxDQUFDLENBQ1YsVUFBVSxDQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQzFDLE1BQU0sQ0FBRSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksZUFBZSxDQUFDLENBQ3RDLGFBQWEsQ0FBRSxLQUFLLENBQ3BCLFdBQVcsQ0FBRSxHQUFHLENBQ2hCLFNBQVMsQ0FBRSxzQkFBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQ2hDLG1CQUFtQixDQUFFLFFBQVEsQUFDL0IsQ0FBQyxBQUNELEtBQUssZUFBQyxDQUFDLEFBQ0wsY0FBYyxDQUFFLHVCQUNsQixDQUFDIn0= */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

// (46:0) {#if text && isShowing}
function create_if_block(ctx) {
	let div;
	let t;
	let div_class_value;

	const block = {
		c: function create() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(/*text*/ ctx[0]);
			this.h();
		},
		l: function claim(nodes) {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true, style: true });
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div_nodes, /*text*/ ctx[0]);
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div, "class", div_class_value = "c c--" + /*localIteration*/ ctx[3] % 2 + " svelte-1tczm9n");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div, "animation-duration", /*duration*/ ctx[1] + "ms");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 46, 2, 1279);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*text*/ 1) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t, /*text*/ ctx[0]);

			if (dirty & /*localIteration*/ 8 && div_class_value !== (div_class_value = "c c--" + /*localIteration*/ ctx[3] % 2 + " svelte-1tczm9n")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div, "class", div_class_value);
			}

			if (dirty & /*duration*/ 2) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div, "animation-duration", /*duration*/ ctx[1] + "ms");
			}
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(46:0) {#if text && isShowing}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let if_block_anchor;
	let if_block = /*text*/ ctx[0] && /*isShowing*/ ctx[2] && create_if_block(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},
		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, if_block_anchor, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (/*text*/ ctx[0] && /*isShowing*/ ctx[2]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(if_block_anchor);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function debounce(func, wait, immediate) {
	var timeout;

	return function () {
		var context = this, args = arguments;

		var later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};

		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("BriefMessage", slots, []);
	let { text = "" } = $$props;
	let { iteration = 0 } = $$props; // for re-triggering before the message has disappeared
	let { duration = 1000 } = $$props;
	let isShowing = false;
	let localIteration = 0;
	const writable_props = ["text", "iteration", "duration"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<BriefMessage> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("text" in $$props) $$invalidate(0, text = $$props.text);
		if ("iteration" in $$props) $$invalidate(4, iteration = $$props.iteration);
		if ("duration" in $$props) $$invalidate(1, duration = $$props.duration);
	};

	$$self.$capture_state = () => ({
		text,
		iteration,
		duration,
		isShowing,
		localIteration,
		debounce,
		onStartTimeout,
		onTextChange
	});

	$$self.$inject_state = $$props => {
		if ("text" in $$props) $$invalidate(0, text = $$props.text);
		if ("iteration" in $$props) $$invalidate(4, iteration = $$props.iteration);
		if ("duration" in $$props) $$invalidate(1, duration = $$props.duration);
		if ("isShowing" in $$props) $$invalidate(2, isShowing = $$props.isShowing);
		if ("localIteration" in $$props) $$invalidate(3, localIteration = $$props.localIteration);
		if ("onStartTimeout" in $$props) $$invalidate(5, onStartTimeout = $$props.onStartTimeout);
		if ("onTextChange" in $$props) $$invalidate(6, onTextChange = $$props.onTextChange);
	};

	let onStartTimeout;
	let onTextChange;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*duration*/ 2) {
			$: $$invalidate(5, onStartTimeout = debounce(
				() => {
					$$invalidate(2, isShowing = false);
				},
				duration
			));
		}

		if ($$self.$$.dirty & /*text, localIteration, onStartTimeout*/ 41) {
			$: $$invalidate(6, onTextChange = () => {
				if (!text) {
					$$invalidate(2, isShowing = false);
					return;
				}

				$$invalidate(3, localIteration++, localIteration);
				$$invalidate(2, isShowing = true);
				onStartTimeout();
			});
		}

		if ($$self.$$.dirty & /*text, iteration, onTextChange*/ 81) {
			$: (text, iteration, onTextChange());
		}
	};

	return [text, duration, isShowing, localIteration, iteration];
}

class BriefMessage extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-1tczm9n-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { text: 0, iteration: 4, duration: 1 });

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "BriefMessage",
			options,
			id: create_fragment.name
		});
	}

	get text() {
		throw new Error("<BriefMessage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set text(value) {
		throw new Error("<BriefMessage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get iteration() {
		throw new Error("<BriefMessage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set iteration(value) {
		throw new Error("<BriefMessage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get duration() {
		throw new Error("<BriefMessage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set duration(value) {
		throw new Error("<BriefMessage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (BriefMessage);

/***/ }),

/***/ "./templates/Icon.svelte":
/*!*******************************!*\
  !*** ./templates/Icon.svelte ***!
  \*******************************/
/*! exports provided: default, iconOptions, directions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconOptions", function() { return iconOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directions", function() { return directions; });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _icon_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon-paths */ "./templates/icon-paths.js");
/* templates/Icon.svelte generated by Svelte v3.29.7 */


const { Object: Object_1 } = svelte_internal__WEBPACK_IMPORTED_MODULE_0__["globals"];

const file = "templates/Icon.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = "svelte-165zxae-style";
	style.textContent = ".c.svelte-165zxae{width:1em;height:1em;fill:currentColor;transition:all 0.3s ease-out;overflow:visible}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWNvbi5zdmVsdGUiLCJzb3VyY2VzIjpbIkljb24uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICBpbXBvcnQgcGF0aHNCeU5hbWUgZnJvbSBcIi4vaWNvbi1wYXRoc1wiO1xuICBleHBvcnQgY29uc3QgaWNvbk9wdGlvbnMgPSBPYmplY3Qua2V5cyhwYXRoc0J5TmFtZSk7XG4gIGV4cG9ydCBjb25zdCBkaXJlY3Rpb25zID0gW1wiblwiLCBcIm5lXCIsIFwiZVwiLCBcInNlXCIsIFwic1wiLCBcInN3XCIsIFwid1wiLCBcIm53XCJdO1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIGV4cG9ydCBsZXQgbmFtZSA9IFwiYXJyb3dcIjtcbiAgZXhwb3J0IGxldCBkaXJlY3Rpb24gPSBcIm5cIjtcblxuICAkOiBwYXRocyA9IHBhdGhzQnlOYW1lW25hbWVdIHx8IFtdO1xuICAkOiByb3RhdGlvbiA9IGRpcmVjdGlvbnMuaW5kZXhPZihkaXJlY3Rpb24pICogNDU7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuYyB7XG4gICAgd2lkdGg6IDFlbTtcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICBmaWxsOiBjdXJyZW50Q29sb3I7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cbjwvc3R5bGU+XG5cbjxzdmdcbiAgY2xhc3M9XCJjXCJcbiAgdmlld0JveD1cIjAgMCAyNSAyNVwiXG4gIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxuICBjbGlwLXJ1bGU9XCJldmVub2RkXCJcbiAgc3R5bGU9e2B0cmFuc2Zvcm06IHJvdGF0ZSgke3JvdGF0aW9ufWRlZylgfT5cbiAgeyNlYWNoIHBhdGhzIGFzIHBhdGh9XG4gICAgPHBhdGggZD17cGF0aH0gLz5cbiAgey9lYWNofVxuPC9zdmc+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZUUsRUFBRSxlQUFDLENBQUMsQUFDRixLQUFLLENBQUUsR0FBRyxDQUNWLE1BQU0sQ0FBRSxHQUFHLENBQ1gsSUFBSSxDQUFFLFlBQVksQ0FDbEIsVUFBVSxDQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUM3QixRQUFRLENBQUUsT0FBTyxBQUNuQixDQUFDIn0= */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[4] = list[i];
	return child_ctx;
}

// (31:2) {#each paths as path}
function create_each_block(ctx) {
	let path;
	let path_d_value;

	const block = {
		c: function create() {
			path = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("path");
			this.h();
		},
		l: function claim(nodes) {
			path = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "path", { d: true }, 1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(path).forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(path, "d", path_d_value = /*path*/ ctx[4]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(path, file, 31, 4, 680);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, path, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*paths*/ 1 && path_d_value !== (path_d_value = /*path*/ ctx[4])) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(path, "d", path_d_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(path);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(31:2) {#each paths as path}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let svg;
	let svg_style_value;
	let each_value = /*paths*/ ctx[0];
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_each_argument"])(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			svg = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("svg");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			svg = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(
				nodes,
				"svg",
				{
					class: true,
					viewBox: true,
					"fill-rule": true,
					"clip-rule": true,
					style: true
				},
				1
			);

			var svg_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(svg);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(svg_nodes);
			}

			svg_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(svg, "class", "c svelte-165zxae");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(svg, "viewBox", "0 0 25 25");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(svg, "fill-rule", "evenodd");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(svg, "clip-rule", "evenodd");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(svg, "style", svg_style_value = `transform: rotate(${/*rotation*/ ctx[1]}deg)`);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(svg, file, 24, 0, 522);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, svg, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(svg, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*paths*/ 1) {
				each_value = /*paths*/ ctx[0];
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_each_argument"])(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(svg, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (dirty & /*rotation*/ 2 && svg_style_value !== (svg_style_value = `transform: rotate(${/*rotation*/ ctx[1]}deg)`)) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(svg, "style", svg_style_value);
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(svg);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

const iconOptions = Object.keys(_icon_paths__WEBPACK_IMPORTED_MODULE_1__["default"]);
const directions = ["n", "ne", "e", "se", "s", "sw", "w", "nw"];

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("Icon", slots, []);
	let { name = "arrow" } = $$props;
	let { direction = "n" } = $$props;
	const writable_props = ["name", "direction"];

	Object_1.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Icon> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("name" in $$props) $$invalidate(2, name = $$props.name);
		if ("direction" in $$props) $$invalidate(3, direction = $$props.direction);
	};

	$$self.$capture_state = () => ({
		pathsByName: _icon_paths__WEBPACK_IMPORTED_MODULE_1__["default"],
		iconOptions,
		directions,
		name,
		direction,
		paths,
		rotation
	});

	$$self.$inject_state = $$props => {
		if ("name" in $$props) $$invalidate(2, name = $$props.name);
		if ("direction" in $$props) $$invalidate(3, direction = $$props.direction);
		if ("paths" in $$props) $$invalidate(0, paths = $$props.paths);
		if ("rotation" in $$props) $$invalidate(1, rotation = $$props.rotation);
	};

	let paths;
	let rotation;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*name*/ 4) {
			$: $$invalidate(0, paths = _icon_paths__WEBPACK_IMPORTED_MODULE_1__["default"][name] || []);
		}

		if ($$self.$$.dirty & /*direction*/ 8) {
			$: $$invalidate(1, rotation = directions.indexOf(direction) * 45);
		}
	};

	return [paths, rotation, name, direction];
}

class Icon extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-165zxae-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { name: 2, direction: 3 });

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "Icon",
			options,
			id: create_fragment.name
		});
	}

	get name() {
		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set name(value) {
		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get direction() {
		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set direction(value) {
		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Icon);


/***/ }),

/***/ "./templates/InView.svelte":
/*!*********************************!*\
  !*** ./templates/InView.svelte ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* templates/InView.svelte generated by Svelte v3.29.7 */



const file = "templates/InView.svelte";
const get_default_slot_changes = dirty => ({ isInView: dirty & /*isInView*/ 1 });
const get_default_slot_context = ctx => ({ isInView: /*isInView*/ ctx[0] });

function create_fragment(ctx) {
	let div;
	let current;
	const default_slot_template = /*#slots*/ ctx[5].default;
	const default_slot = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_slot"])(default_slot_template, ctx, /*$$scope*/ ctx[4], get_default_slot_context);

	const block = {
		c: function create() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true });
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);
			if (default_slot) default_slot.l(div_nodes);
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div, "class", "c");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 26, 0, 474);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			/*div_binding*/ ctx[6](div);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope, isInView*/ 17) {
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["update_slot"])(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[4], dirty, get_default_slot_changes, get_default_slot_context);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div);
			if (default_slot) default_slot.d(detaching);
			/*div_binding*/ ctx[6](null);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("InView", slots, ['default']);
	let { root = undefined } = $$props;
	let { isInViewProp = false } = $$props;
	let isInView = false;
	let observer;
	let element;

	const onChangeVisibility = e => {
		$$invalidate(0, isInView = e[0].isIntersecting);
	};

	Object(svelte__WEBPACK_IMPORTED_MODULE_1__["onMount"])(() => {
		let options = { root };
		observer = new IntersectionObserver(onChangeVisibility, options);
		observer.observe(element);
	});

	const writable_props = ["root", "isInViewProp"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<InView> was created with unknown prop '${key}'`);
	});

	function div_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__["binding_callbacks"][$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(1, element);
		});
	}

	$$self.$$set = $$props => {
		if ("root" in $$props) $$invalidate(3, root = $$props.root);
		if ("isInViewProp" in $$props) $$invalidate(2, isInViewProp = $$props.isInViewProp);
		if ("$$scope" in $$props) $$invalidate(4, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({
		onMount: svelte__WEBPACK_IMPORTED_MODULE_1__["onMount"],
		root,
		isInViewProp,
		isInView,
		observer,
		element,
		onChangeVisibility
	});

	$$self.$inject_state = $$props => {
		if ("root" in $$props) $$invalidate(3, root = $$props.root);
		if ("isInViewProp" in $$props) $$invalidate(2, isInViewProp = $$props.isInViewProp);
		if ("isInView" in $$props) $$invalidate(0, isInView = $$props.isInView);
		if ("observer" in $$props) observer = $$props.observer;
		if ("element" in $$props) $$invalidate(1, element = $$props.element);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*isInView*/ 1) {
			$: (isInView, $$invalidate(2, isInViewProp = isInView));
		}
	};

	return [isInView, element, isInViewProp, root, $$scope, slots, div_binding];
}

class InView extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { root: 3, isInViewProp: 2 });

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "InView",
			options,
			id: create_fragment.name
		});
	}

	get root() {
		throw new Error("<InView>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set root(value) {
		throw new Error("<InView>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isInViewProp() {
		throw new Error("<InView>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isInViewProp(value) {
		throw new Error("<InView>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (InView);

/***/ }),

/***/ "./templates/Number.svelte":
/*!*********************************!*\
  !*** ./templates/Number.svelte ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* templates/Number.svelte generated by Svelte v3.29.7 */


const { console: console_1 } = svelte_internal__WEBPACK_IMPORTED_MODULE_0__["globals"];

const file = "templates/Number.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = "svelte-17u34ls-style";
	style.textContent = ".c.svelte-17u34ls{font-feature-settings:\"tnum\", 1}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTnVtYmVyLnN2ZWx0ZSIsInNvdXJjZXMiOlsiTnVtYmVyLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBpbXBvcnQgeyBmb3JtYXQgYXMgZDNGb3JtYXQsIGludGVycG9sYXRlLCB0aW1lciBhcyBkM1RpbWVyIH0gZnJvbSBcImQzXCJcblxuICBleHBvcnQgbGV0IG51bWJlciA9IG51bGxcbiAgZXhwb3J0IGxldCBmb3JtYXQgPSBcIiwuMmZcIlxuICBleHBvcnQgbGV0IGR1cmF0aW9uID0gMzAwXG5cbiAgbGV0IGRpc3BsYXlOdW1iZXIgPSAwXG4gICQ6IGNhY2hlZE51bWJlciA9IDBcbiAgJDogZm9ybWF0RnVuY3Rpb24gPSBkID0+IHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBmb3JtYXQgPT0gXCJzdHJpbmdcIiA/IGQzRm9ybWF0KGZvcm1hdCkoZCkgOiBmb3JtYXQoZClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgcmV0dXJuIFwiLVwiXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3RhcnRJbnRlcnBvbGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBpbnRlcnBvbGF0aW9uRnVuY3Rpb24gPSBpbnRlcnBvbGF0ZShjYWNoZWROdW1iZXIsIG51bWJlcilcblxuICAgIGNvbnN0IHRpbWVyID0gZDNUaW1lcih0aW1lRWxhcHNlZCA9PiB7XG4gICAgICBjb25zdCB0ID0gdGltZUVsYXBzZWQgLyBkdXJhdGlvblxuXG4gICAgICBkaXNwbGF5TnVtYmVyID0gaW50ZXJwb2xhdGlvbkZ1bmN0aW9uKHQpXG5cbiAgICAgIGlmICh0ID49IDEpIHtcbiAgICAgICAgaWYgKHRpbWVyKSB0aW1lci5zdG9wKClcbiAgICAgICAgZGlzcGxheU51bWJlciA9IG51bWJlclxuICAgICAgICBjYWNoZWROdW1iZXIgPSBudW1iZXJcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgJDogbnVtYmVyLCBzdGFydEludGVycG9sYXRlKClcbjwvc2NyaXB0PlxuXG48c3BhbiBjbGFzcz1cImNcIj5cbiAge051bWJlci5pc0Zpbml0ZSgrZGlzcGxheU51bWJlcikgPyBmb3JtYXRGdW5jdGlvbihkaXNwbGF5TnVtYmVyKSA6ICctJ31cbjwvc3Bhbj5cblxuPHN0eWxlPlxuICAuYyB7XG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcInRudW1cIiwgMTtcbiAgfVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ0UsRUFBRSxlQUFDLENBQUMsQUFDRixxQkFBcUIsQ0FBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEFBQ2xDLENBQUMifQ== */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function create_fragment(ctx) {
	let span;

	let t_value = (Number.isFinite(+/*displayNumber*/ ctx[0])
	? /*formatFunction*/ ctx[1](/*displayNumber*/ ctx[0])
	: "-") + "";

	let t;

	const block = {
		c: function create() {
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t_value);
			this.h();
		},
		l: function claim(nodes) {
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "SPAN", { class: true });
			var span_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span);
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span_nodes, t_value);
			span_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(span, "class", "c svelte-17u34ls");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span, file, 37, 0, 804);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, span, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(span, t);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*displayNumber, formatFunction*/ 3 && t_value !== (t_value = (Number.isFinite(+/*displayNumber*/ ctx[0])
			? /*formatFunction*/ ctx[1](/*displayNumber*/ ctx[0])
			: "-") + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t, t_value);
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(span);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("Number", slots, []);
	let { number = null } = $$props;
	let { format = ",.2f" } = $$props;
	let { duration = 300 } = $$props;
	let displayNumber = 0;

	const startInterpolate = () => {
		const interpolationFunction = Object(d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"])(cachedNumber, number);

		const timer = Object(d3__WEBPACK_IMPORTED_MODULE_1__["timer"])(timeElapsed => {
			const t = timeElapsed / duration;
			$$invalidate(0, displayNumber = interpolationFunction(t));

			if (t >= 1) {
				if (timer) timer.stop();
				$$invalidate(0, displayNumber = number);
				cachedNumber = number;
			}
		});
	};

	const writable_props = ["number", "format", "duration"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Number> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("number" in $$props) $$invalidate(2, number = $$props.number);
		if ("format" in $$props) $$invalidate(3, format = $$props.format);
		if ("duration" in $$props) $$invalidate(4, duration = $$props.duration);
	};

	$$self.$capture_state = () => ({
		d3Format: d3__WEBPACK_IMPORTED_MODULE_1__["format"],
		interpolate: d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"],
		d3Timer: d3__WEBPACK_IMPORTED_MODULE_1__["timer"],
		number,
		format,
		duration,
		displayNumber,
		startInterpolate,
		cachedNumber,
		formatFunction
	});

	$$self.$inject_state = $$props => {
		if ("number" in $$props) $$invalidate(2, number = $$props.number);
		if ("format" in $$props) $$invalidate(3, format = $$props.format);
		if ("duration" in $$props) $$invalidate(4, duration = $$props.duration);
		if ("displayNumber" in $$props) $$invalidate(0, displayNumber = $$props.displayNumber);
		if ("cachedNumber" in $$props) cachedNumber = $$props.cachedNumber;
		if ("formatFunction" in $$props) $$invalidate(1, formatFunction = $$props.formatFunction);
	};

	let cachedNumber;
	let formatFunction;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*format*/ 8) {
			$: $$invalidate(1, formatFunction = d => {
				try {
					return typeof format == "string"
					? Object(d3__WEBPACK_IMPORTED_MODULE_1__["format"])(format)(d)
					: format(d);
				} catch(e) {
					console.log(e);
					return "-";
				}
			});
		}

		if ($$self.$$.dirty & /*number*/ 4) {
			$: (number, startInterpolate());
		}
	};

	$: cachedNumber = 0;
	return [displayNumber, formatFunction, number, format, duration];
}

class Number_1 extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-17u34ls-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { number: 2, format: 3, duration: 4 });

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "Number_1",
			options,
			id: create_fragment.name
		});
	}

	get number() {
		throw new Error("<Number>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set number(value) {
		throw new Error("<Number>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get format() {
		throw new Error("<Number>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set format(value) {
		throw new Error("<Number>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get duration() {
		throw new Error("<Number>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set duration(value) {
		throw new Error("<Number>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Number_1);

/***/ }),

/***/ "./templates/ProgressDots.svelte":
/*!***************************************!*\
  !*** ./templates/ProgressDots.svelte ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* templates/ProgressDots.svelte generated by Svelte v3.29.7 */



const file = "templates/ProgressDots.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = "svelte-3sw07z-style";
	style.textContent = ".items.svelte-3sw07z{display:flex;align-items:center;margin-left:1em;margin-top:1em}.item.svelte-3sw07z{display:block;position:relative;appearance:none;background:none;outline:none;height:1.3em;width:1.3em;margin-right:0.6em;margin-bottom:0;padding:0;flex:0 0 1.3em;border-radius:100%;border:1px solid var(--gray, #ddd);cursor:pointer}.item.svelte-3sw07z:before{content:\"\";position:absolute;top:50%;left:50%;height:0.6em;width:0.6em;border-radius:100%;background:var(--accent-color);transform:translate(-50%, -50%) scale(0);transition:transform 0.3s ease-out}.item.active.svelte-3sw07z:before{transform:translate(-50%, -50%) scale(1)}.items-text.svelte-3sw07z{font-size:0.7em;margin-left:0.3em;color:var(--gray)}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NEb3RzLnN2ZWx0ZSIsInNvdXJjZXMiOlsiUHJvZ3Jlc3NEb3RzLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBpbXBvcnQgeyByYW5nZSB9IGZyb20gXCJkM1wiO1xuXG4gIGV4cG9ydCBsZXQgbnVtYmVyT2ZJdGVtcyA9IDA7XG4gIGV4cG9ydCBsZXQgYWN0aXZlSW5kZXggPSAwO1xuPC9zY3JpcHQ+XG5cbjxkaXYgY2xhc3M9XCJpdGVtc1wiPlxuICB7I2VhY2ggbmV3IEFycmF5KCtudW1iZXJPZkl0ZW1zKS5maWxsKDApIGFzIF8sIGl9XG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3M9XCJpdGVtXCJcbiAgICAgIGNsYXNzOmFjdGl2ZT17YWN0aXZlSW5kZXggPT0gaX1cbiAgICAgIG9uOmNsaWNrPXsoKSA9PiAoYWN0aXZlSW5kZXggPSBpKX0gLz5cbiAgey9lYWNofVxuICA8ZGl2IGNsYXNzPVwiaXRlbXMtdGV4dFwiPnsrYWN0aXZlSW5kZXggKyAxfSBvZiB7bnVtYmVyT2ZJdGVtc308L2Rpdj5cbjwvZGl2PlxuXG48c3R5bGU+XG4gIC5pdGVtcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICB9XG4gIC5pdGVtIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgaGVpZ2h0OiAxLjNlbTtcbiAgICB3aWR0aDogMS4zZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjZlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZmxleDogMCAwIDEuM2VtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheSwgI2RkZCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5pdGVtOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIGhlaWdodDogMC42ZW07XG4gICAgd2lkdGg6IDAuNmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLW91dDtcbiAgfVxuICAuaXRlbS5hY3RpdmU6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbiAgfVxuICAuaXRlbXMtdGV4dCB7XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICBtYXJnaW4tbGVmdDogMC4zZW07XG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xuICB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCRSxNQUFNLGNBQUMsQ0FBQyxBQUNOLE9BQU8sQ0FBRSxJQUFJLENBQ2IsV0FBVyxDQUFFLE1BQU0sQ0FDbkIsV0FBVyxDQUFFLEdBQUcsQ0FDaEIsVUFBVSxDQUFFLEdBQUcsQUFDakIsQ0FBQyxBQUNELEtBQUssY0FBQyxDQUFDLEFBQ0wsT0FBTyxDQUFFLEtBQUssQ0FDZCxRQUFRLENBQUUsUUFBUSxDQUNsQixVQUFVLENBQUUsSUFBSSxDQUNoQixVQUFVLENBQUUsSUFBSSxDQUNoQixPQUFPLENBQUUsSUFBSSxDQUNiLE1BQU0sQ0FBRSxLQUFLLENBQ2IsS0FBSyxDQUFFLEtBQUssQ0FDWixZQUFZLENBQUUsS0FBSyxDQUNuQixhQUFhLENBQUUsQ0FBQyxDQUNoQixPQUFPLENBQUUsQ0FBQyxDQUNWLElBQUksQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FDZixhQUFhLENBQUUsSUFBSSxDQUNuQixNQUFNLENBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FDbkMsTUFBTSxDQUFFLE9BQU8sQUFDakIsQ0FBQyxBQUNELG1CQUFLLE9BQU8sQUFBQyxDQUFDLEFBQ1osT0FBTyxDQUFFLEVBQUUsQ0FDWCxRQUFRLENBQUUsUUFBUSxDQUNsQixHQUFHLENBQUUsR0FBRyxDQUNSLElBQUksQ0FBRSxHQUFHLENBQ1QsTUFBTSxDQUFFLEtBQUssQ0FDYixLQUFLLENBQUUsS0FBSyxDQUNaLGFBQWEsQ0FBRSxJQUFJLENBQ25CLFVBQVUsQ0FBRSxJQUFJLGNBQWMsQ0FBQyxDQUMvQixTQUFTLENBQUUsVUFBVSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUN6QyxVQUFVLENBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEFBQ3JDLENBQUMsQUFDRCxLQUFLLHFCQUFPLE9BQU8sQUFBQyxDQUFDLEFBQ25CLFNBQVMsQ0FBRSxVQUFVLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEFBQzNDLENBQUMsQUFDRCxXQUFXLGNBQUMsQ0FBQyxBQUNYLFNBQVMsQ0FBRSxLQUFLLENBQ2hCLFdBQVcsQ0FBRSxLQUFLLENBQ2xCLEtBQUssQ0FBRSxJQUFJLE1BQU0sQ0FBQyxBQUNwQixDQUFDIn0= */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	child_ctx[5] = i;
	return child_ctx;
}

// (9:2) {#each new Array(+numberOfItems).fill(0) as _, i}
function create_each_block(ctx) {
	let button;
	let mounted;
	let dispose;

	function click_handler() {
		return /*click_handler*/ ctx[2](/*i*/ ctx[5]);
	}

	const block = {
		c: function create() {
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			this.h();
		},
		l: function claim(nodes) {
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "BUTTON", { class: true });
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(button).forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(button, "class", "item svelte-3sw07z");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(button, "active", /*activeIndex*/ ctx[0] == /*i*/ ctx[5]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button, file, 9, 4, 189);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, button, anchor);

			if (!mounted) {
				dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen_dev"])(button, "click", click_handler, false, false, false);
				mounted = true;
			}
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;

			if (dirty & /*activeIndex*/ 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(button, "active", /*activeIndex*/ ctx[0] == /*i*/ ctx[5]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(button);
			mounted = false;
			dispose();
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(9:2) {#each new Array(+numberOfItems).fill(0) as _, i}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div1;
	let t0;
	let div0;
	let t1_value = +/*activeIndex*/ ctx[0] + 1 + "";
	let t1;
	let t2;
	let t3;
	let each_value = new Array(+/*numberOfItems*/ ctx[1]).fill(0);
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_each_argument"])(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t1_value);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(" of ");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(/*numberOfItems*/ ctx[1]);
			this.h();
		},
		l: function claim(nodes) {
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true });
			var div1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div1_nodes);
			}

			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div1_nodes);
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div1_nodes, "DIV", { class: true });
			var div0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div0);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div0_nodes, t1_value);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div0_nodes, " of ");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div0_nodes, /*numberOfItems*/ ctx[1]);
			div0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div0, "class", "items-text svelte-3sw07z");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div0, file, 14, 2, 310);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div1, "class", "items svelte-3sw07z");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div1, file, 7, 0, 113);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div1, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div1, null);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, t3);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*activeIndex, numberOfItems*/ 3) {
				each_value = new Array(+/*numberOfItems*/ ctx[1]).fill(0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_each_argument"])(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div1, t0);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (dirty & /*activeIndex*/ 1 && t1_value !== (t1_value = +/*activeIndex*/ ctx[0] + 1 + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t1, t1_value);
			if (dirty & /*numberOfItems*/ 2) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t3, /*numberOfItems*/ ctx[1]);
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("ProgressDots", slots, []);
	let { numberOfItems = 0 } = $$props;
	let { activeIndex = 0 } = $$props;
	const writable_props = ["numberOfItems", "activeIndex"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ProgressDots> was created with unknown prop '${key}'`);
	});

	const click_handler = i => $$invalidate(0, activeIndex = i);

	$$self.$$set = $$props => {
		if ("numberOfItems" in $$props) $$invalidate(1, numberOfItems = $$props.numberOfItems);
		if ("activeIndex" in $$props) $$invalidate(0, activeIndex = $$props.activeIndex);
	};

	$$self.$capture_state = () => ({ range: d3__WEBPACK_IMPORTED_MODULE_1__["range"], numberOfItems, activeIndex });

	$$self.$inject_state = $$props => {
		if ("numberOfItems" in $$props) $$invalidate(1, numberOfItems = $$props.numberOfItems);
		if ("activeIndex" in $$props) $$invalidate(0, activeIndex = $$props.activeIndex);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [activeIndex, numberOfItems, click_handler];
}

class ProgressDots extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-3sw07z-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { numberOfItems: 1, activeIndex: 0 });

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "ProgressDots",
			options,
			id: create_fragment.name
		});
	}

	get numberOfItems() {
		throw new Error("<ProgressDots>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set numberOfItems(value) {
		throw new Error("<ProgressDots>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get activeIndex() {
		throw new Error("<ProgressDots>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set activeIndex(value) {
		throw new Error("<ProgressDots>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (ProgressDots);

/***/ }),

/***/ "./templates/Scatterplot.svelte":
/*!**************************************!*\
  !*** ./templates/Scatterplot.svelte ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/motion */ "./node_modules/svelte/motion/index.mjs");
/* harmony import */ var svelte_easing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte/easing */ "./node_modules/svelte/easing/index.mjs");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* templates/Scatterplot.svelte generated by Svelte v3.29.7 */





const file = "templates/Scatterplot.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[18] = list[i].x;
	child_ctx[19] = list[i].y;
	child_ctx[20] = list[i].r;
	return child_ctx;
}

// (75:6) {#each $dots as { x, y, r }}
function create_each_block(ctx) {
	let circle;
	let circle_style_value;
	let circle_r_value;
	let circle_fill_value;

	const block = {
		c: function create() {
			circle = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("circle");
			this.h();
		},
		l: function claim(nodes) {
			circle = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "circle", { style: true, r: true, fill: true }, 1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(circle).forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(circle, "style", circle_style_value = /*move*/ ctx[4](/*x*/ ctx[18], /*y*/ ctx[19]));
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(circle, "r", circle_r_value = Math.max(0, /*r*/ ctx[20]));
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(circle, "fill", circle_fill_value = /*colorScale*/ ctx[6](/*r*/ ctx[20]));
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(circle, file, 75, 8, 2008);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, circle, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$dots*/ 8 && circle_style_value !== (circle_style_value = /*move*/ ctx[4](/*x*/ ctx[18], /*y*/ ctx[19]))) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(circle, "style", circle_style_value);
			}

			if (dirty & /*$dots*/ 8 && circle_r_value !== (circle_r_value = Math.max(0, /*r*/ ctx[20]))) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(circle, "r", circle_r_value);
			}

			if (dirty & /*$dots*/ 8 && circle_fill_value !== (circle_fill_value = /*colorScale*/ ctx[6](/*r*/ ctx[20]))) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(circle, "fill", circle_fill_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(circle);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(75:6) {#each $dots as { x, y, r }}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let figure;
	let svg;
	let g;
	let g_style_value;
	let figure_resize_listener;
	let each_value = /*$dots*/ ctx[3];
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_each_argument"])(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			figure = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("figure");
			svg = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("svg");
			g = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("g");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			figure = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "FIGURE", { class: true });
			var figure_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(figure);
			svg = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(figure_nodes, "svg", { width: true, height: true }, 1);
			var svg_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(svg);
			g = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(svg_nodes, "g", { style: true }, 1);
			var g_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(g);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(g_nodes);
			}

			g_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			svg_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			figure_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(g, "style", g_style_value = /*move*/ ctx[4](/*margins*/ ctx[0].top, /*margins*/ ctx[0].left));
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(g, file, 73, 4, 1921);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(svg, "width", /*width*/ ctx[1]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(svg, "height", /*height*/ ctx[2]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(svg, file, 72, 2, 1894);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(figure, "class", "c");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_render_callback"])(() => /*figure_elementresize_handler*/ ctx[11].call(figure));
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(figure, file, 71, 0, 1848);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, figure, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(figure, svg);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(svg, g);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(g, null);
			}

			figure_resize_listener = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_resize_listener"])(figure, /*figure_elementresize_handler*/ ctx[11].bind(figure));
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*move, $dots, Math, colorScale*/ 88) {
				each_value = /*$dots*/ ctx[3];
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_each_argument"])(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(g, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (dirty & /*margins*/ 1 && g_style_value !== (g_style_value = /*move*/ ctx[4](/*margins*/ ctx[0].top, /*margins*/ ctx[0].left))) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(g, "style", g_style_value);
			}

			if (dirty & /*width*/ 2) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(svg, "width", /*width*/ ctx[1]);
			}

			if (dirty & /*height*/ 4) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(svg, "height", /*height*/ ctx[2]);
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(figure);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);
			figure_resize_listener();
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let $dots;
	let { $$slots: slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("Scatterplot", slots, []);
	const move = (x, y) => `transform: translate(${x}px, ${y}px`;
	let { data = [] } = $$props;
	let { xAccessor = d => d[0] } = $$props;
	let { yAccessor = d => d[1] } = $$props;
	let { rAccessor = d => d[2] } = $$props;

	let { margins = {
		// typical d3 margin convention
		top: 20,
		right: 20,
		bottom: 20,
		left: 20
	} } = $$props;

	let width = 1200;

	// the biggest constraint here:
	// the number of dots has to remain static
	// one workaround is to have a very long array,
	// and give extra nodes no radius (r=0)
	let dots = Object(svelte_motion__WEBPACK_IMPORTED_MODULE_1__["spring"])(data.map((d, i) => ({ x: 0, y: 0, r: 0 })), { stiffness: 0.1, damping: 0.9 });

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_store"])(dots, "dots");
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["component_subscribe"])($$self, dots, value => $$invalidate(3, $dots = value));
	const colorScale = Object(d3__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"])().domain([0, 20]).range(["tomato", "cornflowerblue"]).interpolate(d3__WEBPACK_IMPORTED_MODULE_3__["interpolateHcl"]);

	// update $dots' x, y, and r attributes
	// `spring` will handle the animation/interpolation
	const updateData = () => {
		const newDots = data.map((d, i) => ({
			x: xScale(xAccessor(d)),
			y: yScale(yAccessor(d)),
			r: rScale(rAccessor(d))
		}));

		dots.set(newDots);
	};

	const writable_props = ["data", "xAccessor", "yAccessor", "rAccessor", "margins"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Scatterplot> was created with unknown prop '${key}'`);
	});

	function figure_elementresize_handler() {
		width = this.clientWidth;
		$$invalidate(1, width);
	}

	$$self.$$set = $$props => {
		if ("data" in $$props) $$invalidate(7, data = $$props.data);
		if ("xAccessor" in $$props) $$invalidate(8, xAccessor = $$props.xAccessor);
		if ("yAccessor" in $$props) $$invalidate(9, yAccessor = $$props.yAccessor);
		if ("rAccessor" in $$props) $$invalidate(10, rAccessor = $$props.rAccessor);
		if ("margins" in $$props) $$invalidate(0, margins = $$props.margins);
	};

	$$self.$capture_state = () => ({
		spring: svelte_motion__WEBPACK_IMPORTED_MODULE_1__["spring"],
		cubicOut: svelte_easing__WEBPACK_IMPORTED_MODULE_2__["cubicOut"],
		extent: d3__WEBPACK_IMPORTED_MODULE_3__["extent"],
		interpolateHcl: d3__WEBPACK_IMPORTED_MODULE_3__["interpolateHcl"],
		scaleSqrt: d3__WEBPACK_IMPORTED_MODULE_3__["scaleSqrt"],
		scaleLinear: d3__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"],
		move,
		data,
		xAccessor,
		yAccessor,
		rAccessor,
		margins,
		width,
		dots,
		colorScale,
		updateData,
		height,
		mainWidth,
		mainHeight,
		xScale,
		yScale,
		rScale,
		$dots
	});

	$$self.$inject_state = $$props => {
		if ("data" in $$props) $$invalidate(7, data = $$props.data);
		if ("xAccessor" in $$props) $$invalidate(8, xAccessor = $$props.xAccessor);
		if ("yAccessor" in $$props) $$invalidate(9, yAccessor = $$props.yAccessor);
		if ("rAccessor" in $$props) $$invalidate(10, rAccessor = $$props.rAccessor);
		if ("margins" in $$props) $$invalidate(0, margins = $$props.margins);
		if ("width" in $$props) $$invalidate(1, width = $$props.width);
		if ("dots" in $$props) $$invalidate(5, dots = $$props.dots);
		if ("height" in $$props) $$invalidate(2, height = $$props.height);
		if ("mainWidth" in $$props) $$invalidate(12, mainWidth = $$props.mainWidth);
		if ("mainHeight" in $$props) $$invalidate(13, mainHeight = $$props.mainHeight);
		if ("xScale" in $$props) xScale = $$props.xScale;
		if ("yScale" in $$props) yScale = $$props.yScale;
		if ("rScale" in $$props) rScale = $$props.rScale;
	};

	let height;
	let mainWidth;
	let mainHeight;
	let xScale;
	let yScale;
	let rScale;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*width*/ 2) {
			$: $$invalidate(2, height = width);
		}

		if ($$self.$$.dirty & /*width, margins*/ 3) {
			$: $$invalidate(12, mainWidth = width - margins.right - margins.left);
		}

		if ($$self.$$.dirty & /*height, margins*/ 5) {
			$: $$invalidate(13, mainHeight = height - margins.top - margins.bottom);
		}

		if ($$self.$$.dirty & /*data, xAccessor, mainWidth*/ 4480) {
			// make me some scales!
			$: xScale = Object(d3__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"])().domain(Object(d3__WEBPACK_IMPORTED_MODULE_3__["extent"])(data, xAccessor)).range([0, mainWidth]);
		}

		if ($$self.$$.dirty & /*data, yAccessor, mainHeight*/ 8832) {
			$: yScale = Object(d3__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"])().domain(Object(d3__WEBPACK_IMPORTED_MODULE_3__["extent"])(data, yAccessor)).range([mainHeight, 0]);
		}

		if ($$self.$$.dirty & /*data, rAccessor*/ 1152) {
			$: rScale = Object(d3__WEBPACK_IMPORTED_MODULE_3__["scaleSqrt"])().domain(Object(d3__WEBPACK_IMPORTED_MODULE_3__["extent"])(data, rAccessor)).range([0, 20]);
		}

		if ($$self.$$.dirty & /*data, mainWidth*/ 4224) {
			$: (data, mainWidth, updateData());
		}
	};

	return [
		margins,
		width,
		height,
		$dots,
		move,
		dots,
		colorScale,
		data,
		xAccessor,
		yAccessor,
		rAccessor,
		figure_elementresize_handler
	];
}

class Scatterplot extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {
			data: 7,
			xAccessor: 8,
			yAccessor: 9,
			rAccessor: 10,
			margins: 0
		});

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "Scatterplot",
			options,
			id: create_fragment.name
		});
	}

	get data() {
		throw new Error("<Scatterplot>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set data(value) {
		throw new Error("<Scatterplot>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get xAccessor() {
		throw new Error("<Scatterplot>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set xAccessor(value) {
		throw new Error("<Scatterplot>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get yAccessor() {
		throw new Error("<Scatterplot>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set yAccessor(value) {
		throw new Error("<Scatterplot>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get rAccessor() {
		throw new Error("<Scatterplot>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set rAccessor(value) {
		throw new Error("<Scatterplot>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get margins() {
		throw new Error("<Scatterplot>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set margins(value) {
		throw new Error("<Scatterplot>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Scatterplot);

/***/ }),

/***/ "./templates/Toggle.svelte":
/*!*********************************!*\
  !*** ./templates/Toggle.svelte ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* templates/Toggle.svelte generated by Svelte v3.29.7 */


const file = "templates/Toggle.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = "svelte-1xd715f-style";
	style.textContent = ".c.svelte-1xd715f.svelte-1xd715f{display:flex;align-items:center}button.option.svelte-1xd715f.svelte-1xd715f{padding:0.6em 1em;line-height:1.3em;appearance:none;background:none;font-weight:600;font-size:0.9em;color:var(--accent-color);border:1px solid var(--accent-color);border-radius:0;outline:none;cursor:pointer}.option.svelte-1xd715f.svelte-1xd715f:hover{background:#ececf1}.option.selected.svelte-1xd715f.svelte-1xd715f,.option.selected.svelte-1xd715f.svelte-1xd715f:hover{background:var(--accent-color);color:white}.option.svelte-1xd715f+.option.svelte-1xd715f{border-left-width:0}.option.svelte-1xd715f.svelte-1xd715f:first-of-type{border-radius:6px 0 0 6px}.option.svelte-1xd715f.svelte-1xd715f:last-of-type{border-radius:0 6px 6px 0}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9nZ2xlLnN2ZWx0ZSIsInNvdXJjZXMiOlsiVG9nZ2xlLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBleHBvcnQgbGV0IG9wdGlvbnMgPSBbXVxuICBleHBvcnQgbGV0IHZhbHVlID0gbnVsbFxuICBleHBvcnQgbGV0IG9uQ2hhbmdlID0gKCkgPT4ge31cblxuICBjb25zdCBvbkNoYW5nZUxvY2FsID0gb3B0aW9uID0+IHtcbiAgICBvbkNoYW5nZShvcHRpb24pXG4gICAgdmFsdWUgPSBvcHRpb24uaWRcbiAgfVxuPC9zY3JpcHQ+XG5cbjxkaXYgY2xhc3M9XCJjXCI+XG4gIHsjZWFjaCBvcHRpb25zIGFzIG9wdGlvbn1cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cIm9wdGlvblwiXG4gICAgICBjbGFzczpzZWxlY3RlZD1cIntvcHRpb24uaWQgPT0gdmFsdWV9XCJcbiAgICAgIG9uOmNsaWNrPVwieygpID0+IG9uQ2hhbmdlTG9jYWwob3B0aW9uKX1cIj5cbiAgICAgIHtvcHRpb24ubGFiZWx9XG4gICAgPC9idXR0b24+XG4gIHsvZWFjaH1cbjwvZGl2PlxuXG48c3R5bGU+XG4gIC5jIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgYnV0dG9uLm9wdGlvbiB7XG4gICAgcGFkZGluZzogMC42ZW0gMWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAub3B0aW9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWNlY2YxO1xuICB9XG4gIC5vcHRpb24uc2VsZWN0ZWQsXG4gIC5vcHRpb24uc2VsZWN0ZWQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLyogZ3JhdnkgKi9cbiAgLm9wdGlvbiArIC5vcHRpb24ge1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICB9XG4gIC5vcHRpb246Zmlyc3Qtb2YtdHlwZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4IDAgMCA2cHg7XG4gIH1cbiAgLm9wdGlvbjpsYXN0LW9mLXR5cGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDAgNnB4IDZweCAwO1xuICB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCRSxFQUFFLDhCQUFDLENBQUMsQUFDRixPQUFPLENBQUUsSUFBSSxDQUNiLFdBQVcsQ0FBRSxNQUFNLEFBQ3JCLENBQUMsQUFDRCxNQUFNLE9BQU8sOEJBQUMsQ0FBQyxBQUNiLE9BQU8sQ0FBRSxLQUFLLENBQUMsR0FBRyxDQUNsQixXQUFXLENBQUUsS0FBSyxDQUNsQixVQUFVLENBQUUsSUFBSSxDQUNoQixVQUFVLENBQUUsSUFBSSxDQUNoQixXQUFXLENBQUUsR0FBRyxDQUNoQixTQUFTLENBQUUsS0FBSyxDQUNoQixLQUFLLENBQUUsSUFBSSxjQUFjLENBQUMsQ0FDMUIsTUFBTSxDQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxjQUFjLENBQUMsQ0FDckMsYUFBYSxDQUFFLENBQUMsQ0FDaEIsT0FBTyxDQUFFLElBQUksQ0FDYixNQUFNLENBQUUsT0FBTyxBQUNqQixDQUFDLEFBQ0QscUNBQU8sTUFBTSxBQUFDLENBQUMsQUFDYixVQUFVLENBQUUsT0FBTyxBQUNyQixDQUFDLEFBQ0QsT0FBTyx1Q0FBUyxDQUNoQixPQUFPLHVDQUFTLE1BQU0sQUFBQyxDQUFDLEFBQ3RCLFVBQVUsQ0FBRSxJQUFJLGNBQWMsQ0FBQyxDQUMvQixLQUFLLENBQUUsS0FBSyxBQUNkLENBQUMsQUFHRCxzQkFBTyxDQUFHLE9BQU8sZUFBQyxDQUFDLEFBQ2pCLGlCQUFpQixDQUFFLENBQUMsQUFDdEIsQ0FBQyxBQUNELHFDQUFPLGNBQWMsQUFBQyxDQUFDLEFBQ3JCLGFBQWEsQ0FBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEFBQzVCLENBQUMsQUFDRCxxQ0FBTyxhQUFhLEFBQUMsQ0FBQyxBQUNwQixhQUFhLENBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxBQUM1QixDQUFDIn0= */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[5] = list[i];
	return child_ctx;
}

// (13:2) {#each options as option}
function create_each_block(ctx) {
	let button;
	let t0_value = /*option*/ ctx[5].label + "";
	let t0;
	let t1;
	let mounted;
	let dispose;

	function click_handler() {
		return /*click_handler*/ ctx[4](/*option*/ ctx[5]);
	}

	const block = {
		c: function create() {
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t0_value);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			this.h();
		},
		l: function claim(nodes) {
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "BUTTON", { class: true });
			var button_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(button);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(button_nodes, t0_value);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(button_nodes);
			button_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(button, "class", "option svelte-1xd715f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(button, "selected", /*option*/ ctx[5].id == /*value*/ ctx[0]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button, file, 13, 4, 237);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, button, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(button, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(button, t1);

			if (!mounted) {
				dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen_dev"])(button, "click", click_handler, false, false, false);
				mounted = true;
			}
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*options*/ 2 && t0_value !== (t0_value = /*option*/ ctx[5].label + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t0, t0_value);

			if (dirty & /*options, value*/ 3) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(button, "selected", /*option*/ ctx[5].id == /*value*/ ctx[0]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(button);
			mounted = false;
			dispose();
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(13:2) {#each options as option}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div;
	let each_value = /*options*/ ctx[1];
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_each_argument"])(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true });
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div, "class", "c svelte-1xd715f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 11, 0, 189);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*options, value, onChangeLocal*/ 7) {
				each_value = /*options*/ ctx[1];
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_each_argument"])(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("Toggle", slots, []);
	let { options = [] } = $$props;
	let { value = null } = $$props;

	let { onChange = () => {
		
	} } = $$props;

	const onChangeLocal = option => {
		onChange(option);
		$$invalidate(0, value = option.id);
	};

	const writable_props = ["options", "value", "onChange"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Toggle> was created with unknown prop '${key}'`);
	});

	const click_handler = option => onChangeLocal(option);

	$$self.$$set = $$props => {
		if ("options" in $$props) $$invalidate(1, options = $$props.options);
		if ("value" in $$props) $$invalidate(0, value = $$props.value);
		if ("onChange" in $$props) $$invalidate(3, onChange = $$props.onChange);
	};

	$$self.$capture_state = () => ({ options, value, onChange, onChangeLocal });

	$$self.$inject_state = $$props => {
		if ("options" in $$props) $$invalidate(1, options = $$props.options);
		if ("value" in $$props) $$invalidate(0, value = $$props.value);
		if ("onChange" in $$props) $$invalidate(3, onChange = $$props.onChange);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [value, options, onChangeLocal, onChange, click_handler];
}

class Toggle extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-1xd715f-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { options: 1, value: 0, onChange: 3 });

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "Toggle",
			options,
			id: create_fragment.name
		});
	}

	get options() {
		throw new Error("<Toggle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set options(value) {
		throw new Error("<Toggle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get value() {
		throw new Error("<Toggle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set value(value) {
		throw new Error("<Toggle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get onChange() {
		throw new Error("<Toggle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set onChange(value) {
		throw new Error("<Toggle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Toggle);

/***/ }),

/***/ "./templates/icon-paths.js":
/*!*********************************!*\
  !*** ./templates/icon-paths.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  arrow: [
    "M0.200275 13.2782C0.200275 12.4153 0.89983 11.7157 1.76278 11.7157H23.6378C24.5007 11.7157 25.2003 12.4153 25.2003 13.2782C25.2003 14.1411 24.5007 14.8407 23.6378 14.8407H1.76278C0.89983 14.8407 0.200275 14.1411 0.200275 13.2782Z",
    "M11.5954 1.23584C12.2056 0.62565 13.1949 0.62565 13.8051 1.23584L24.7426 12.1733C25.3528 12.7835 25.3528 13.7729 24.7426 14.3831L13.8051 25.3206C13.1949 25.9307 12.2056 25.9307 11.5954 25.3206C10.9852 24.7104 10.9852 23.721 11.5954 23.1108L21.4281 13.2782L11.5954 3.44555C10.9852 2.83536 10.9852 1.84604 11.5954 1.23584Z",
  ],
  asterisk: [
    "M13.9518 1.05422C13.9518 0.471989 13.4798 0 12.8976 0C12.3154 0 11.8434 0.471989 11.8434 1.05422V10.5617C11.7668 10.6064 11.6947 10.6616 11.6291 10.7272C11.5923 10.764 11.5587 10.8029 11.5285 10.8434H2.05422C1.47199 10.8434 1 11.3154 1 11.8976C1 12.4798 1.47199 12.9518 2.05422 12.9518H11.4635C11.5083 13.0284 11.5634 13.1005 11.6291 13.1661C11.6947 13.2318 11.7668 13.2869 11.8434 13.3316V23.9458C11.8434 24.528 12.3154 25 12.8976 25C13.4798 25 13.9518 24.528 13.9518 23.9458V13.0721C13.9555 13.0685 13.9593 13.0648 13.963 13.0611C13.9977 13.0264 14.0295 12.9899 14.0584 12.9518H23.741C24.3232 12.9518 24.7952 12.4798 24.7952 11.8976C24.7952 11.3154 24.3232 10.8434 23.741 10.8434H13.974L13.963 10.8322L13.9518 10.8212V1.05422ZM21.9718 2.82342C22.3835 3.23512 22.3835 3.90261 21.9718 4.31431L21.5502 4.73582C21.1385 5.14752 20.4711 5.14752 20.0594 4.73582C19.6477 4.32413 19.6477 3.65663 20.0594 3.24494L20.4809 2.82342C20.8926 2.41172 21.5601 2.41172 21.9718 2.82342ZM18.1781 6.61706C18.5898 7.02876 18.5898 7.69625 18.1781 8.10795L17.3351 8.95098C16.9234 9.36267 16.2559 9.36267 15.8442 8.95098C15.4325 8.53928 15.4325 7.87179 15.8442 7.46009L16.6872 6.61706C17.0989 6.20536 17.7664 6.20536 18.1781 6.61706ZM9.74782 15.0474C10.1595 15.4591 10.1595 16.1266 9.74782 16.5383L8.90479 17.3813C8.49309 17.793 7.8256 17.793 7.4139 17.3813C7.0022 16.9696 7.0022 16.3021 7.4139 15.8904L8.25693 15.0474C8.66863 14.6357 9.33612 14.6357 9.74782 15.0474ZM5.53267 19.2625C5.94436 19.6742 5.94436 20.3417 5.53267 20.7534L5.11115 21.1749C4.69945 21.5866 4.03196 21.5866 3.62026 21.1749C3.20856 20.7632 3.20856 20.0957 3.62026 19.684L4.04178 19.2625C4.45347 18.8508 5.12097 18.8508 5.53267 19.2625ZM20.4809 21.0699C20.8926 21.4816 21.5601 21.4816 21.9718 21.0699C22.3835 20.6582 22.3835 19.9907 21.9718 19.579L21.5502 19.1575C21.1385 18.7458 20.4711 18.7458 20.0594 19.1575C19.6477 19.5692 19.6477 20.2367 20.0594 20.6484L20.4809 21.0699ZM16.6872 17.2763C17.0989 17.688 17.7664 17.688 18.1781 17.2763C18.5898 16.8646 18.5898 16.1971 18.1781 15.7854L17.3351 14.9424C16.9234 14.5307 16.2559 14.5307 15.8442 14.9424C15.4325 15.3541 15.4325 16.0216 15.8442 16.4333L16.6872 17.2763ZM8.25693 8.84599C8.66863 9.25769 9.33612 9.25769 9.74782 8.84599C10.1595 8.43429 10.1595 7.7668 9.74782 7.3551L8.90479 6.51207C8.49309 6.10037 7.8256 6.10037 7.4139 6.51207C7.0022 6.92377 7.0022 7.59126 7.4139 8.00296L8.25693 8.84599ZM4.04178 4.63084C4.45347 5.04253 5.12097 5.04253 5.53267 4.63084C5.94436 4.21914 5.94436 3.55165 5.53267 3.13995L5.11115 2.71843C4.69945 2.30674 4.03196 2.30673 3.62026 2.71843C3.20856 3.13013 3.20856 3.79762 3.62026 4.20932L4.04178 4.63084Z",
  ],
  check: [
    "M24.3522 3.64786C23.4883 2.78405 22.0878 2.78405 21.224 3.64786L8.64198 16.2299L3.77601 11.3639C2.9122 10.5001 1.51168 10.5001 0.647861 11.3639C-0.215954 12.2277 -0.215954 13.6283 0.647861 14.4921L7.07791 20.9221C7.94172 21.7859 9.34224 21.7859 10.2061 20.9221L24.3522 6.77601L23.6974 6.12128L24.3522 6.77601C25.216 5.9122 25.216 4.51168 24.3522 3.64786L23.6974 4.30259L24.3522 3.64786Z",
  ],
  coffee: [
    "M6.69069 1.96879C6.69069 1.36848 6.20405 0.881836 5.60374 0.881836C5.00343 0.881836 4.51678 1.36848 4.51678 1.96879V5.22966C4.51678 5.82997 5.00343 6.31662 5.60374 6.31662C6.20405 6.31662 6.69069 5.82997 6.69069 5.22966V1.96879ZM0.168955 9.57749C0.168955 8.97718 0.655602 8.49053 1.25591 8.49053H18.6472H19.7342C21.1756 8.49053 22.5579 9.06312 23.5771 10.0823C24.5964 11.1016 25.169 12.4839 25.169 13.9253C25.169 15.3667 24.5964 16.7491 23.5771 17.7683C22.5579 18.7875 21.1756 19.3601 19.7342 19.3601C19.7342 20.8015 19.1616 22.1838 18.1424 23.2031C17.1231 24.2223 15.7408 24.7949 14.2994 24.7949H5.60374C4.16234 24.7949 2.77998 24.2223 1.76077 23.2031C0.741547 22.1838 0.168955 20.8015 0.168955 19.3601V9.57749ZM19.7342 17.1862V10.6644C20.599 10.6644 21.4284 11.008 22.04 11.6195C22.6515 12.2311 22.995 13.0605 22.995 13.9253C22.995 14.7901 22.6515 15.6196 22.04 16.2311C21.4284 16.8426 20.599 17.1862 19.7342 17.1862ZM17.5603 10.6644V18.2731V19.3601C17.5603 20.2249 17.2167 21.0543 16.6052 21.6659C15.9936 22.2774 15.1642 22.621 14.2994 22.621H5.60374C4.7389 22.621 3.90949 22.2774 3.29795 21.6659C2.68642 21.0543 2.34287 20.2249 2.34287 19.3601V10.6644H17.5603ZM9.95156 0.881836C10.5519 0.881836 11.0385 1.36848 11.0385 1.96879V5.22966C11.0385 5.82997 10.5519 6.31662 9.95156 6.31662C9.35125 6.31662 8.86461 5.82997 8.86461 5.22966V1.96879C8.86461 1.36848 9.35125 0.881836 9.95156 0.881836ZM15.3863 1.96879C15.3863 1.36848 14.8997 0.881836 14.2994 0.881836C13.6991 0.881836 13.2124 1.36848 13.2124 1.96879V5.22966C13.2124 5.82997 13.6991 6.31662 14.2994 6.31662C14.8997 6.31662 15.3863 5.82997 15.3863 5.22966V1.96879Z",
  ],
  copy: [
    "M2.98325 3.58322C3.19636 3.37011 3.48539 3.25039 3.78678 3.25039H14.014C14.3154 3.25039 14.6045 3.37011 14.8176 3.58322C15.0307 3.79633 15.1504 4.08537 15.1504 4.38675V5.52312C15.1504 6.15071 15.6592 6.65948 16.2868 6.65948C16.9144 6.65948 17.4231 6.15071 17.4231 5.52312V4.38675C17.4231 3.4826 17.064 2.61549 16.4246 1.97616C15.7853 1.33683 14.9182 0.977661 14.014 0.977661H3.78678C2.88263 0.977661 2.01551 1.33683 1.37619 1.97616C0.736856 2.61549 0.377686 3.4826 0.377686 4.38675V14.614C0.377686 15.5182 0.736857 16.3853 1.37619 17.0246C2.01551 17.6639 2.88263 18.0231 3.78678 18.0231H4.92314C5.55074 18.0231 6.0595 17.5143 6.0595 16.8868C6.0595 16.2592 5.55074 15.7504 4.92314 15.7504H3.78678C3.48539 15.7504 3.19636 15.6307 2.98325 15.4176C2.77014 15.2044 2.65041 14.9154 2.65041 14.614V4.38675C2.65041 4.08537 2.77014 3.79633 2.98325 3.58322ZM10.605 12.3413C10.605 11.7137 11.1137 11.2049 11.7413 11.2049H21.9686C22.5962 11.2049 23.105 11.7137 23.105 12.3413V22.5686C23.105 23.1962 22.5962 23.7049 21.9686 23.7049H11.7413C11.1137 23.7049 10.605 23.1962 10.605 22.5686V12.3413ZM11.7413 8.93221C9.85853 8.93221 8.33223 10.4585 8.33223 12.3413V22.5686C8.33223 24.4514 9.85853 25.9777 11.7413 25.9777H21.9686C23.8514 25.9777 25.3777 24.4514 25.3777 22.5686V12.3413C25.3777 10.4585 23.8514 8.93221 21.9686 8.93221H11.7413Z",
  ],
  download: [
    "M2.21191 15.4277C2.90227 15.4277 3.46191 15.9874 3.46191 16.6777V21.6777C3.46191 22.0093 3.59361 22.3272 3.82803 22.5616C4.06245 22.796 4.38039 22.9277 4.71191 22.9277H22.2119C22.5434 22.9277 22.8614 22.796 23.0958 22.5616C23.3302 22.3272 23.4619 22.0093 23.4619 21.6777V16.6777C23.4619 15.9874 24.0216 15.4277 24.7119 15.4277C25.4023 15.4277 25.9619 15.9874 25.9619 16.6777V21.6777C25.9619 22.6723 25.5668 23.6261 24.8636 24.3294C24.1603 25.0326 23.2065 25.4277 22.2119 25.4277H4.71191C3.71735 25.4277 2.76352 25.0326 2.06026 24.3294C1.357 23.6261 0.961914 22.6723 0.961914 21.6777V16.6777C0.961914 15.9874 1.52156 15.4277 2.21191 15.4277Z",
    "M6.32803 9.54385C6.81619 9.0557 7.60764 9.0557 8.0958 9.54385L13.4619 14.91L18.828 9.54385C19.3162 9.0557 20.1076 9.0557 20.5958 9.54385C21.084 10.032 21.084 10.8235 20.5958 11.3116L14.3458 17.5616C13.8576 18.0498 13.0662 18.0498 12.578 17.5616L6.32803 11.3116C5.83988 10.8235 5.83988 10.032 6.32803 9.54385Z",
    "M13.4619 0.427734C14.1523 0.427734 14.7119 0.987378 14.7119 1.67773V16.6777C14.7119 17.3681 14.1523 17.9277 13.4619 17.9277C12.7716 17.9277 12.2119 17.3681 12.2119 16.6777V1.67773C12.2119 0.987378 12.7716 0.427734 13.4619 0.427734Z",
  ],
  external: [
    "M25.3673 1.28312C25.3077 1.13904 25.22 1.00384 25.1042 0.88591C25.0988 0.88042 25.0933 0.87498 25.0878 0.86959C24.8623 0.648163 24.5532 0.511597 24.2122 0.511597H24.2119H16.7122C16.0218 0.511597 15.4622 1.07124 15.4622 1.7616C15.4622 2.45195 16.0218 3.0116 16.7122 3.0116H21.1944L9.57827 14.6277C9.09012 15.1159 9.09012 15.9073 9.57827 16.3955C10.0664 16.8836 10.8579 16.8836 11.346 16.3955L22.9622 4.77936V9.2616C22.9622 9.95195 23.5218 10.5116 24.2122 10.5116C24.9025 10.5116 25.4622 9.95195 25.4622 9.2616V1.76269C25.4622 1.75848 25.4621 1.75427 25.4621 1.75006C25.4606 1.59108 25.429 1.43233 25.3673 1.28312ZM4.21216 6.7616C3.88064 6.7616 3.5627 6.89329 3.32827 7.12771C3.09385 7.36213 2.96216 7.68008 2.96216 8.0116V21.7616C2.96216 22.0931 3.09385 22.4111 3.32827 22.6455C3.5627 22.8799 3.88064 23.0116 4.21216 23.0116H17.9622C18.2937 23.0116 18.6116 22.8799 18.846 22.6455C19.0805 22.4111 19.2122 22.0931 19.2122 21.7616V14.2616C19.2122 13.5712 19.7718 13.0116 20.4622 13.0116C21.1525 13.0116 21.7122 13.5712 21.7122 14.2616V21.7616C21.7122 22.7562 21.3171 23.71 20.6138 24.4132C19.9105 25.1165 18.9567 25.5116 17.9622 25.5116H4.21216C3.2176 25.5116 2.26377 25.1165 1.56051 24.4132C0.857246 23.71 0.462158 22.7562 0.462158 21.7616V8.0116C0.462158 7.01704 0.857246 6.06321 1.56051 5.35995C2.26377 4.65668 3.2176 4.2616 4.21216 4.2616H11.7122C12.4025 4.2616 12.9622 4.82124 12.9622 5.5116C12.9622 6.20195 12.4025 6.7616 11.7122 6.7616H4.21216Z",
  ],
  file: [
    "M4.00045 1.63229C4.63978 0.99296 5.5069 0.633789 6.41104 0.633789H14.3656C14.667 0.633789 14.956 0.753513 15.1691 0.966622L23.1237 8.92117C23.3368 9.13428 23.4565 9.42332 23.4565 9.7247V22.2247C23.4565 23.1288 23.0973 23.996 22.458 24.6353C21.8187 25.2746 20.9516 25.6338 20.0474 25.6338H6.41104C5.5069 25.6338 4.63978 25.2746 4.00045 24.6353C3.36112 23.996 3.00195 23.1288 3.00195 22.2247V4.04288C3.00195 3.13873 3.36112 2.27162 4.00045 1.63229ZM6.41104 2.90652C6.10966 2.90652 5.82062 3.02624 5.60751 3.23935C5.3944 3.45246 5.27468 3.7415 5.27468 4.04288V22.2247C5.27468 22.5261 5.3944 22.8151 5.60751 23.0282C5.82062 23.2413 6.10966 23.3611 6.41104 23.3611H20.0474C20.3488 23.3611 20.6378 23.2413 20.8509 23.0282C21.064 22.8151 21.1838 22.5261 21.1838 22.2247V10.1954L13.8949 2.90652H6.41104Z",
    "M14.3656 0.633789C14.9932 0.633789 15.502 1.14256 15.502 1.77015V8.58833H22.3202C22.9478 8.58833 23.4565 9.0971 23.4565 9.7247C23.4565 10.3523 22.9478 10.8611 22.3202 10.8611H14.3656C13.738 10.8611 13.2292 10.3523 13.2292 9.7247V1.77015C13.2292 1.14256 13.738 0.633789 14.3656 0.633789Z",
  ],
  list: [
    "M0 10.25C0 9.55964 0.559644 9 1.25 9H18.75C19.4404 9 20 9.55964 20 10.25C20 10.9404 19.4404 11.5 18.75 11.5H1.25C0.559644 11.5 0 10.9404 0 10.25Z",
    "M0 5.25C0 4.55964 0.559644 4 1.25 4H23.75C24.4404 4 25 4.55964 25 5.25C25 5.94036 24.4404 6.5 23.75 6.5H1.25C0.559644 6.5 0 5.94036 0 5.25Z",
    "M0 15.25C0 14.5596 0.559644 14 1.25 14H23.75C24.4404 14 25 14.5596 25 15.25C25 15.9404 24.4404 16.5 23.75 16.5H1.25C0.559644 16.5 0 15.9404 0 15.25Z",
    "M0 20.25C0 19.5596 0.559644 19 1.25 19H18.75C19.4404 19 20 19.5596 20 20.25C20 20.9404 19.4404 21.5 18.75 21.5H1.25C0.559644 21.5 0 20.9404 0 20.25Z",
  ],
  money: [
    "M13.2917 0C13.867 0 14.3333 0.46637 14.3333 1.04167V23.9583C14.3333 24.5336 13.867 25 13.2917 25C12.7164 25 12.25 24.5336 12.25 23.9583V1.04167C12.25 0.46637 12.7164 0 13.2917 0Z",
    "M7.37294 5.53956C8.25201 4.66049 9.4443 4.16663 10.6875 4.16663H18.5C19.0753 4.16663 19.5417 4.633 19.5417 5.20829C19.5417 5.78359 19.0753 6.24996 18.5 6.24996H10.6875C9.99683 6.24996 9.33445 6.52433 8.84608 7.0127C8.3577 7.50108 8.08333 8.16346 8.08333 8.85413C8.08333 9.54479 8.3577 10.2072 8.84608 10.6955C9.33445 11.1839 9.99683 11.4583 10.6875 11.4583H15.8958C17.139 11.4583 18.3313 11.9522 19.2104 12.8312C20.0895 13.7103 20.5833 14.9026 20.5833 16.1458C20.5833 17.389 20.0895 18.5813 19.2104 19.4604C18.3313 20.3394 17.139 20.8333 15.8958 20.8333H7.04167C6.46637 20.8333 6 20.3669 6 19.7916C6 19.2163 6.46637 18.75 7.04167 18.75H15.8958C16.5865 18.75 17.2489 18.4756 17.7373 17.9872C18.2256 17.4988 18.5 16.8365 18.5 16.1458C18.5 15.4551 18.2256 14.7927 17.7373 14.3044C17.2489 13.816 16.5865 13.5416 15.8958 13.5416H10.6875C9.4443 13.5416 8.25201 13.0478 7.37294 12.1687C6.49386 11.2896 6 10.0973 6 8.85413C6 7.61092 6.49386 6.41864 7.37294 5.53956Z",
  ],
  paperclip: [
    "M17.5359 2.82806C16.6555 2.82806 15.8112 3.17779 15.1886 3.80031L5.02747 13.9615C3.99 14.999 3.40716 16.4061 3.40716 17.8733C3.40716 19.3405 3.99 20.7476 5.02747 21.785C6.06493 22.8225 7.47204 23.4053 8.93924 23.4053C10.4064 23.4053 11.8135 22.8225 12.851 21.785L23.0122 11.6239C23.444 11.1921 24.1441 11.1921 24.5759 11.6239C25.0076 12.0556 25.0076 12.7557 24.5759 13.1875L14.4147 23.3487C12.9625 24.8009 10.9929 25.6167 8.93924 25.6167C6.88555 25.6167 4.91598 24.8009 3.4638 23.3487C2.01162 21.8965 1.1958 19.9269 1.1958 17.8733C1.1958 15.8196 2.01162 13.85 3.4638 12.3978L13.625 2.23665C14.6622 1.19941 16.069 0.616699 17.5359 0.616699C19.0028 0.616699 20.4095 1.19941 21.4468 2.23665C22.484 3.27388 23.0667 4.68068 23.0667 6.14755C23.0667 7.61442 22.484 9.02121 21.4468 10.0584L11.2745 20.2196C10.6523 20.8419 9.80824 21.1915 8.92818 21.1915C8.04812 21.1915 7.20411 20.8419 6.58181 20.2196C5.95952 19.5973 5.60992 18.7533 5.60992 17.8733C5.60992 16.9932 5.95952 16.1492 6.58181 15.5269L15.9695 6.15029C16.4015 5.71875 17.1016 5.71916 17.5331 6.15121C17.9647 6.58326 17.9643 7.28333 17.5322 7.71487L8.14548 17.0906C7.93818 17.2981 7.82127 17.5799 7.82127 17.8733C7.82127 18.1668 7.93789 18.4484 8.14548 18.656C8.35306 18.8636 8.63461 18.9802 8.92818 18.9802C9.22175 18.9802 9.50329 18.8636 9.71088 18.656L19.8831 8.49479C20.5054 7.8723 20.8554 7.02773 20.8554 6.14755C20.8554 5.26716 20.5056 4.42284 19.8831 3.80031C19.2606 3.17779 18.4163 2.82806 17.5359 2.82806Z",
  ],
  person: [
    "M3.04927 16.6449C4.23321 15.4462 5.83898 14.7727 7.51333 14.7727H17.6143C19.2887 14.7727 20.8945 15.4462 22.0784 16.6449C23.2623 17.8436 23.9275 19.4695 23.9275 21.1648V23.7216C23.9275 24.4276 23.3622 25 22.6648 25C21.9675 25 21.4022 24.4276 21.4022 23.7216V21.1648C21.4022 20.1476 21.0031 19.1721 20.2928 18.4528C19.5824 17.7336 18.6189 17.3295 17.6143 17.3295H7.51333C6.50872 17.3295 5.54526 17.7336 4.83489 18.4528C4.12453 19.1721 3.72545 20.1476 3.72545 21.1648V23.7216C3.72545 24.4276 3.16015 25 2.46282 25C1.76549 25 1.2002 24.4276 1.2002 23.7216V21.1648C1.2002 19.4695 1.86533 17.8436 3.04927 16.6449Z",
    "M11.9956 2.5C9.92454 2.5 8.24561 4.17893 8.24561 6.25C8.24561 8.32107 9.92454 10 11.9956 10C14.0667 10 15.7456 8.32107 15.7456 6.25C15.7456 4.17893 14.0667 2.5 11.9956 2.5ZM5.74561 6.25C5.74561 2.79822 8.54383 0 11.9956 0C15.4474 0 18.2456 2.79822 18.2456 6.25C18.2456 9.70178 15.4474 12.5 11.9956 12.5C8.54383 12.5 5.74561 9.70178 5.74561 6.25Z",
  ],
  refresh: [
    "M6.97937 3.40529C8.70577 2.45337 10.6948 2.08834 12.6467 2.36521C14.5986 2.64207 16.4076 3.54582 17.8012 4.94028C17.8093 4.94841 17.8176 4.95642 17.8259 4.9643L21.0026 7.95574H17.048C16.4203 7.95574 15.9115 8.4646 15.9115 9.09231C15.9115 9.72002 16.4203 10.2289 17.048 10.2289H23.8643H23.8675C24.0269 10.2289 24.1787 10.196 24.3165 10.1367C24.4544 10.0775 24.5828 9.98985 24.6925 9.874C24.7014 9.86462 24.7102 9.85508 24.7187 9.8454C24.9095 9.62998 25.0041 9.36088 25.004 9.09232C25.004 9.09121 25.004 9.09009 25.004 9.08898V2.27288C25.004 1.64517 24.4952 1.13631 23.8675 1.13631C23.2397 1.13631 22.7309 1.64517 22.7309 2.27288V6.46082L19.3966 3.32095C17.6563 1.58497 15.4 0.45984 12.9659 0.11459C10.526 -0.231487 8.03977 0.224801 5.88178 1.4147C3.72379 2.60459 2.01099 4.46363 1.00148 6.71166C-0.00803095 8.9597 -0.259554 11.4749 0.284811 13.8784C0.829176 16.2818 2.13994 18.4432 4.01957 20.0368C5.89921 21.6305 8.24589 22.5701 10.706 22.714C13.1661 22.8579 15.6063 22.1984 17.6589 20.8347C19.7116 19.4711 21.2654 17.4773 22.0863 15.1538C22.2954 14.5619 21.9851 13.9126 21.3933 13.7035C20.8014 13.4944 20.1521 13.8047 19.943 14.3966C19.2863 16.2554 18.0432 17.8504 16.4011 18.9413C14.759 20.0322 12.8068 20.5599 10.8387 20.4447C8.87066 20.3296 6.99332 19.5779 5.48961 18.303C3.9859 17.0281 2.93729 15.299 2.5018 13.3762C2.06631 11.4535 2.26753 9.44129 3.07513 7.64286C3.88274 5.84443 5.25298 4.35721 6.97937 3.40529Z",
  ],
  swoop: [
    "M17.6488 0.406796C17.1064 -0.135599 16.227 -0.135599 15.6846 0.406796C15.1422 0.949191 15.1422 1.82859 15.6846 2.37098L20.258 6.94444H6.94444C5.10266 6.94444 3.33632 7.67609 2.03398 8.97843C0.731644 10.2808 0 12.0471 0 13.8889V23.6111C0 24.3782 0.621827 25 1.38889 25C2.15595 25 2.77778 24.3782 2.77778 23.6111V13.8889C2.77778 12.7838 3.21676 11.724 3.99817 10.9426C4.77957 10.1612 5.83938 9.72222 6.94444 9.72222H20.258L15.6846 14.2957C15.1422 14.8381 15.1422 15.7175 15.6846 16.2599C16.227 16.8023 17.1064 16.8023 17.6488 16.2599L24.5932 9.31543C24.8611 9.04749 24.9967 8.69732 24.9999 8.34616C25 8.34189 25 8.33761 25 8.33333C25 8.32906 25 8.32478 24.9999 8.32051C24.9983 8.13686 24.961 7.96173 24.8946 7.80169C24.8268 7.63788 24.7264 7.4844 24.5932 7.35124L17.6488 0.406796Z",
  ],
  twitter: [
    "M21.351 2.5026C20.4177 1.5026 19.0844 0.835938 17.6177 0.835938C14.8177 0.835938 12.4844 3.16927 12.4844 6.1026C12.4844 6.5026 12.551 6.9026 12.6177 7.3026C8.35104 7.1026 4.61771 4.96927 2.08438 1.83594C1.61771 2.63594 1.41771 3.5026 1.41771 4.5026C1.41771 6.3026 2.35104 7.9026 3.68437 8.9026C2.81771 8.9026 2.08437 8.63594 1.35104 8.23594V8.3026C1.35104 10.8359 3.08438 12.9693 5.48438 13.4359C5.08438 13.5693 4.61771 13.6359 4.15104 13.6359C3.81771 13.6359 3.48438 13.6359 3.21771 13.5693C3.88438 15.6359 5.75104 17.1693 8.01771 17.2359C6.28438 18.6359 4.08438 19.5026 1.68438 19.5026C1.28438 19.5026 0.884375 19.5026 0.484375 19.4359C2.75104 20.9026 5.41771 21.7693 8.35104 21.7693C17.751 21.7693 22.951 13.7693 22.951 6.83594V6.16927C23.951 5.43594 24.8177 4.5026 25.4844 3.43594C24.551 3.83594 23.551 4.16927 22.551 4.23594C23.4177 3.5026 24.2177 2.5026 24.6177 1.23594C23.6177 1.83594 22.551 2.3026 21.351 2.5026Z",
  ],
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvQnJpZWZNZXNzYWdlLnN2ZWx0ZT81Mzk3Iiwid2VicGFjazovLy8uL3RlbXBsYXRlcy9Db25mZXR0aS5zdmVsdGUiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL0ljb24uc3ZlbHRlP2M2YmUiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL0luVmlldy5zdmVsdGU/MTVlYiIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvTnVtYmVyLnN2ZWx0ZT8xNGI4Iiwid2VicGFjazovLy8uL3RlbXBsYXRlcy9Qcm9ncmVzc0RvdHMuc3ZlbHRlPzE1N2YiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL1NjYXR0ZXJwbG90LnN2ZWx0ZT8yZDEyIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy9Ub2dnbGUuc3ZlbHRlP2QzNjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGVtcGxhdGUuc3ZlbHRlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RlbXBsYXRlcy5zdmVsdGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzLWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9pbmRleC5zdmVsdGUiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL0JyaWVmTWVzc2FnZS5zdmVsdGUiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL0ljb24uc3ZlbHRlIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy9JblZpZXcuc3ZlbHRlIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy9OdW1iZXIuc3ZlbHRlIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy9Qcm9ncmVzc0RvdHMuc3ZlbHRlIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy9TY2F0dGVycGxvdC5zdmVsdGUiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL1RvZ2dsZS5zdmVsdGUiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL2ljb24tcGF0aHMuanMiXSwibmFt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Q0FBWixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFBQyxHQUFPOzs7OytCQUFaLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQVhLLE9BQU87T0FDUCxLQUFLLEdBQUcsSUFBSTs7T0FDWixRQUFROzs7O09BRWIsYUFBYSxHQUFHLE1BQU07RUFDMUIsUUFBUSxDQUFDLE1BQU07a0JBQ2YsS0FBSyxHQUFHLE1BQU0sQ0FBQyxFQUFFOzs7Ozs7Ozs7aUNBU0UsYUFBYSxDQUFDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEIzQztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDIiwiZmlsZSI6IjExY2RlOTM4OTQ4Y2MxNjMzMmExL2luZGV4LmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI8c2NyaXB0PlxcbiAgZXhwb3J0IGxldCB0ZXh0ID0gXFxcIlxcXCI7XFxuICBleHBvcnQgbGV0IGl0ZXJhdGlvbiA9IDA7IC8vIGZvciByZS10cmlnZ2VyaW5nIGJlZm9yZSB0aGUgbWVzc2FnZSBoYXMgZGlzYXBwZWFyZWRcXG4gIGV4cG9ydCBsZXQgZHVyYXRpb24gPSAxMDAwO1xcblxcbiAgbGV0IGlzU2hvd2luZyA9IGZhbHNlO1xcbiAgbGV0IGxvY2FsSXRlcmF0aW9uID0gMDtcXG5cXG4gICQ6IG9uU3RhcnRUaW1lb3V0ID0gZGVib3VuY2UoKCkgPT4ge1xcbiAgICBpc1Nob3dpbmcgPSBmYWxzZTtcXG4gIH0sIGR1cmF0aW9uKTtcXG5cXG4gICQ6IG9uVGV4dENoYW5nZSA9ICgpID0+IHtcXG4gICAgaWYgKCF0ZXh0KSB7XFxuICAgICAgaXNTaG93aW5nID0gZmFsc2U7XFxuICAgICAgcmV0dXJuO1xcbiAgICB9XFxuICAgIGxvY2FsSXRlcmF0aW9uKys7XFxuICAgIGlzU2hvd2luZyA9IHRydWU7XFxuICAgIG9uU3RhcnRUaW1lb3V0KCk7XFxuICB9O1xcbiAgJDogdGV4dCwgaXRlcmF0aW9uLCBvblRleHRDaGFuZ2UoKTtcXG5cXG4gIC8vIGZyb20gaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvamF2YXNjcmlwdC1kZWJvdW5jZS1mdW5jdGlvblxcbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCBhcyBsb25nIGFzIGl0IGNvbnRpbnVlcyB0byBiZSBpbnZva2VkLCB3aWxsIG5vdFxcbiAgLy8gYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxcbiAgLy8gTiBtaWxsaXNlY29uZHMuIElmIGBpbW1lZGlhdGVgIGlzIHBhc3NlZCwgdHJpZ2dlciB0aGUgZnVuY3Rpb24gb24gdGhlXFxuICAvLyBsZWFkaW5nIGVkZ2UsIGluc3RlYWQgb2YgdGhlIHRyYWlsaW5nLlxcbiAgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XFxuICAgIHZhciB0aW1lb3V0O1xcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XFxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLFxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcXG4gICAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcXG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xcbiAgICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XFxuICAgICAgfTtcXG4gICAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcXG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XFxuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xcbiAgICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xcbiAgICB9O1xcbiAgfVxcbjwvc2NyaXB0PlxcblxcbnsjaWYgdGV4dCAmJiBpc1Nob3dpbmd9XFxuICA8ZGl2XFxuICAgIGNsYXNzPVxcXCJjIGMtLXtsb2NhbEl0ZXJhdGlvbiAlIDJ9XFxcIlxcbiAgICBzdHlsZT1cXFwiYW5pbWF0aW9uLWR1cmF0aW9uOiB7ZHVyYXRpb259bXNcXFwiPlxcbiAgICB7dGV4dH1cXG4gIDwvZGl2PlxcbnsvaWZ9XFxuXFxuPHN0eWxlPlxcbiAgQGtleWZyYW1lcyBmYWRlT3V0IHtcXG4gICAgMCUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDFlbSk7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICAxMCUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gICAgODAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDFlbSk7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgfVxcbiAgQGtleWZyYW1lcyBmYWRlT3V0MiB7XFxuICAgIDAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxZW0pO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgMTAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICAgIDgwJSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxZW0pO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gIH1cXG4gIC5jIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwYWRkaW5nOiAwLjZlbSAxZW07XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxZW0pO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXktbGlnaHRlc3QpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjZlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYW5pbWF0aW9uOiBmYWRlT3V0IDAuNnMgZWFzZS1vdXQ7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgfVxcbiAgLmMtLTEge1xcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZU91dDI7XFxuICB9XFxuPC9zdHlsZT5cXG5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxzY3JpcHQ+XFxuICBpbXBvcnQgeyBxdWFkSW4gfSBmcm9tIFxcXCJzdmVsdGUvZWFzaW5nXFxcIjtcXG5cXG4gIGV4cG9ydCBsZXQgbnVtYmVyT2ZFbGVtZW50cyA9IDUwO1xcbiAgZXhwb3J0IGxldCBkdXJhdGlvbkluU2Vjb25kcyA9IDI7XFxuICBleHBvcnQgbGV0IGNvbG9ycyA9IFtcXG4gICAgXFxcIiNmZmZcXFwiLFxcbiAgICBcXFwiI2M3ZWNlZVxcXCIsXFxuICAgIFxcXCIjNzc4YmViXFxcIixcXG4gICAgXFxcIiNmN2Q3OTRcXFwiLFxcbiAgICBcXFwiIzYzY2RkYVxcXCIsXFxuICAgIFxcXCIjY2Y2YTg3XFxcIixcXG4gICAgXFxcIiNlNzdmNjdcXFwiLFxcbiAgICBcXFwiIzc4NmZhNlxcXCIsXFxuICAgIFxcXCIjRkRBN0RGXFxcIixcXG4gICAgXFxcIiM0YjdiZWNcXFwiLFxcbiAgICBcXFwiIzQ3NWM4M1xcXCJcXG4gIF07XFxuXFxuICBjb25zdCBwaWNrRnJvbSA9IGFyciA9PiBhcnJbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCldO1xcbiAgY29uc3QgcmFuZG9tTnVtYmVyID0gKG1pbiwgbWF4KSA9PiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XFxuXFxuICBjb25zdCBlbGVtZW50T3B0aW9ucyA9IFtcXG4gICAgYDxjaXJjbGUgcj1cXFwiM1xcXCIgLz5gLFxcblxcbiAgICBgPHBhdGggZD1cXFwiTTMuODM3MzMgNC43MzIzNEM0LjM4OTYxIDQuNzMyMzQgNC44MzczMyA0LjI4NDYzIDQuODM3MzMgMy43MzIzNEM0LjgzNzMzIDMuMTgwMDYgNC4zODk2MSAyLjczMjM0IDMuODM3MzMgMi43MzIzNEMzLjI4NTA1IDIuNzMyMzQgMi44MzczMyAzLjE4MDA2IDIuODM3MzMgMy43MzIzNEMyLjgzNzMzIDQuMjg0NjMgMy4yODUwNSA0LjczMjM0IDMuODM3MzMgNC43MzIzNFpNMy44MzczMyA2LjczMjM0QzUuNDk0MTggNi43MzIzNCA2LjgzNzMzIDUuMzg5MTkgNi44MzczMyAzLjczMjM0QzYuODM3MzMgMi4wNzU0OSA1LjQ5NDE4IDAuNzMyMzQxIDMuODM3MzMgMC43MzIzNDFDMi4xODA0OCAwLjczMjM0MSAwLjgzNzMzIDIuMDc1NDkgMC44MzczMyAzLjczMjM0QzAuODM3MzMgNS4zODkxOSAyLjE4MDQ4IDYuNzMyMzQgMy44MzczMyA2LjczMjM0WlxcXCIgLz5gLFxcbiAgICBgPHBhdGggZD1cXFwiTTQuMjk3NDIgMi4yNjA0MUMzLjg2ODY0IDIuMTY4OCAzLjIwNjk1IDIuMjE4NTUgMi4xMzYxNCAzLjAwMzhDMS42OTA3OCAzLjMzMDQxIDEuMDY0OTggMy4yMzQxMyAwLjczODM3NSAyLjc4ODc2QzAuNDExNzc0IDIuMzQzNCAwLjUwODA1MSAxLjcxNzYgMC45NTM0MTcgMS4zOTA5OUMyLjMyMjM3IDAuMzg3MDk3IDMuNTU4MjcgMC4wNTczMjgxIDQuNzE1MzQgMC4zMDQ1NjVDNS44MDA4MSAwLjUzNjUwNCA2LjYxNjI1IDEuMjQ3MTYgNy4yMDU0MSAxLjc4Mjc2QzcuMjgyOTUgMS44NTMyNiA3LjM1NjE4IDEuOTIwNTEgNy40MjYzIDEuOTg0OUM3LjY0ODQxIDIuMTg4ODggNy44MzkyOSAyLjM2NDE4IDguMDM3MjkgMi41MjMxNUM4LjI5MTA4IDIuNzI2OTIgOC40ODYzMSAyLjg0MzkgOC42NDk1MiAyLjkwMTgxQzguNzkxNSAyLjk1MjE5IDguOTE4OTUgMi45NjIxNiA5LjA3NDE0IDIuOTIwOTVDOS4yNDc1MiAyLjg3NDkgOS41MTM0IDIuNzQ4NCA5Ljg4NDY3IDIuNDIyMTRDMTAuMjk5NSAyLjA1NzU3IDEwLjkzMTQgMi4wOTgzMyAxMS4yOTU5IDIuNTEzMTlDMTEuNjYwNSAyLjkyODA1IDExLjYxOTggMy41NTk5IDExLjIwNDkgMy45MjQ0N0MxMC42ODE2IDQuMzg0MzUgMTAuMTQ3OCA0LjcwNTE0IDkuNTg3NTIgNC44NTM5NEM5LjAwOTA5IDUuMDA3NTYgOC40NjkgNC45NTk5MyA3Ljk4MDcgNC43ODY2N0M3LjUxMzY0IDQuNjIwOTMgNy4xMTU4NyA0LjM0ODIzIDYuNzg1MTQgNC4wODI2OEM2LjUzMDAxIDMuODc3ODMgNi4yNzI0OCAzLjY0MTEzIDYuMDQxMTQgMy40Mjg1QzUuOTc4NjggMy4zNzEwOSA1LjkxODE0IDMuMzE1NDQgNS44NjAwNiAzLjI2MjY0QzUuMjU2NDUgMi43MTM5IDQuNzk3NzkgMi4zNjczMyA0LjI5NzQyIDIuMjYwNDFaXFxcIiAvPmAsXFxuICAgIGA8cmVjdCB3aWR0aD1cXFwiNFxcXCIgaGVpZ2h0PVxcXCI0XFxcIiB4PVxcXCItMlxcXCIgeT1cXFwiLTJcXFwiIC8+YCxcXG4gICAgYDxwYXRoIGQ9XFxcIk0gLTUgNSBMIDAgLTUgTCA1IDUgWlxcXCIgLz5gXFxuICBdO1xcblxcbiAgY29uc3QgYWxsRWxlbWVudHMgPSBuZXcgQXJyYXkobnVtYmVyT2ZFbGVtZW50cylcXG4gICAgLmZpbGwoMClcXG4gICAgLm1hcCgoXywgaSkgPT4gW3BpY2tGcm9tKGVsZW1lbnRPcHRpb25zKSwgcGlja0Zyb20oY29sb3JzKSwgTWF0aC5yYW5kb20oKV0pO1xcbjwvc2NyaXB0PlxcblxcbjxzdmcgY2xhc3M9XFxcImNvbmZldHRpXFxcIiB2aWV3Qm94PVxcXCItMTAgLTEwIDEwIDEwXFxcIj5cXG4gIHsjZWFjaCBhbGxFbGVtZW50cyBhcyBbZWxlbWVudCwgY29sb3IsIHNjYWxlXSwgaX1cXG4gICAgPGcgc3R5bGU9XFxcInRyYW5zZm9ybTogc2NhbGUoe3NjYWxlfSlcXFwiPlxcbiAgICAgIDxnXFxuICAgICAgICBmaWxsPXtjb2xvcn1cXG4gICAgICAgIHN0eWxlPXtbYC0tcm90YXRpb246ICR7TWF0aC5yYW5kb20oKSAqIDM2MH1kZWdgLCBgYW5pbWF0aW9uLWRlbGF5OiAke3F1YWRJbihpIC8gbnVtYmVyT2ZFbGVtZW50cyl9c2AsIGBhbmltYXRpb24tZHVyYXRpb246ICR7ZHVyYXRpb25JblNlY29uZHMgKiByYW5kb21OdW1iZXIoMC43LCAxKX1zYF0uam9pbignOycpfT5cXG4gICAgICAgIHtAaHRtbCBlbGVtZW50fVxcbiAgICAgIDwvZz5cXG4gICAgPC9nPlxcbiAgey9lYWNofVxcbjwvc3ZnPlxcblxcbjxzdHlsZT5cXG4gIC5jb25mZXR0aSB7XFxuICAgIHdpZHRoOiAyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcbiAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xcbiAgICBmaWxsLXJ1bGU6IGV2ZW5vZGQ7XFxuICAgIGNsaXAtcnVsZTogZXZlbm9kZDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIH1cXG4gIEBrZXlmcmFtZXMgcG9wIHtcXG4gICAgMCUge1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKHZhcigtLXJvdGF0aW9uKSkgc2NhbGUoMSkgdHJhbnNsYXRlKDBlbSwgMGVtKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZShjYWxjKHZhcigtLXJvdGF0aW9uKSArIDYwZGVnKSkgc2NhbGUoMClcXG4gICAgICAgIHRyYW5zbGF0ZSg5ZW0sIDllbSk7XFxuICAgICAgZmlsbDogd2hpdGU7XFxuICAgIH1cXG4gIH1cXG4gIGcge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUodmFyKC0tcm90YXRpb24pKSBzY2FsZSgwKSB0cmFuc2xhdGUoMCwgMCk7XFxuICAgIGFuaW1hdGlvbjogcG9wIDJzIGVhc2Utb3V0O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIH1cXG48L3N0eWxlPlxcblwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPHNjcmlwdCBjb250ZXh0PVxcXCJtb2R1bGVcXFwiPlxcbiAgaW1wb3J0IHBhdGhzQnlOYW1lIGZyb20gXFxcIi4vaWNvbi1wYXRoc1xcXCI7XFxuICBleHBvcnQgY29uc3QgaWNvbk9wdGlvbnMgPSBPYmplY3Qua2V5cyhwYXRoc0J5TmFtZSk7XFxuICBleHBvcnQgY29uc3QgZGlyZWN0aW9ucyA9IFtcXFwiblxcXCIsIFxcXCJuZVxcXCIsIFxcXCJlXFxcIiwgXFxcInNlXFxcIiwgXFxcInNcXFwiLCBcXFwic3dcXFwiLCBcXFwid1xcXCIsIFxcXCJud1xcXCJdO1xcbjwvc2NyaXB0PlxcblxcbjxzY3JpcHQ+XFxuICBleHBvcnQgbGV0IG5hbWUgPSBcXFwiYXJyb3dcXFwiO1xcbiAgZXhwb3J0IGxldCBkaXJlY3Rpb24gPSBcXFwiblxcXCI7XFxuXFxuICAkOiBwYXRocyA9IHBhdGhzQnlOYW1lW25hbWVdIHx8IFtdO1xcbiAgJDogcm90YXRpb24gPSBkaXJlY3Rpb25zLmluZGV4T2YoZGlyZWN0aW9uKSAqIDQ1O1xcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4gIC5jIHtcXG4gICAgd2lkdGg6IDFlbTtcXG4gICAgaGVpZ2h0OiAxZW07XFxuICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgfVxcbjwvc3R5bGU+XFxuXFxuPHN2Z1xcbiAgY2xhc3M9XFxcImNcXFwiXFxuICB2aWV3Qm94PVxcXCIwIDAgMjUgMjVcXFwiXFxuICBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiXFxuICBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiXFxuICBzdHlsZT17YHRyYW5zZm9ybTogcm90YXRlKCR7cm90YXRpb259ZGVnKWB9PlxcbiAgeyNlYWNoIHBhdGhzIGFzIHBhdGh9XFxuICAgIDxwYXRoIGQ9e3BhdGh9IC8+XFxuICB7L2VhY2h9XFxuPC9zdmc+XFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8c2NyaXB0PlxcbiAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gXFxcInN2ZWx0ZVxcXCI7XFxuXFxuICBleHBvcnQgbGV0IHJvb3QgPSB1bmRlZmluZWQ7XFxuICBleHBvcnQgbGV0IGlzSW5WaWV3UHJvcCA9IGZhbHNlO1xcblxcbiAgbGV0IGlzSW5WaWV3ID0gZmFsc2U7XFxuICBsZXQgb2JzZXJ2ZXI7XFxuICBsZXQgZWxlbWVudDtcXG5cXG4gICQ6IGlzSW5WaWV3LCAoaXNJblZpZXdQcm9wID0gaXNJblZpZXcpO1xcblxcbiAgY29uc3Qgb25DaGFuZ2VWaXNpYmlsaXR5ID0gKGUpID0+IHtcXG4gICAgaXNJblZpZXcgPSBlWzBdLmlzSW50ZXJzZWN0aW5nO1xcbiAgfTtcXG5cXG4gIG9uTW91bnQoKCkgPT4ge1xcbiAgICBsZXQgb3B0aW9ucyA9IHtcXG4gICAgICByb290OiByb290LFxcbiAgICB9O1xcblxcbiAgICBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihvbkNoYW5nZVZpc2liaWxpdHksIG9wdGlvbnMpO1xcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xcbiAgfSk7XFxuPC9zY3JpcHQ+XFxuXFxuPGRpdiBjbGFzcz1cXFwiY1xcXCIgYmluZDp0aGlzPXtlbGVtZW50fT5cXG4gIDxzbG90IHtpc0luVmlld30gLz5cXG48L2Rpdj5cXG5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxzY3JpcHQ+XFxuICBpbXBvcnQgeyBmb3JtYXQgYXMgZDNGb3JtYXQsIGludGVycG9sYXRlLCB0aW1lciBhcyBkM1RpbWVyIH0gZnJvbSBcXFwiZDNcXFwiXFxuXFxuICBleHBvcnQgbGV0IG51bWJlciA9IG51bGxcXG4gIGV4cG9ydCBsZXQgZm9ybWF0ID0gXFxcIiwuMmZcXFwiXFxuICBleHBvcnQgbGV0IGR1cmF0aW9uID0gMzAwXFxuXFxuICBsZXQgZGlzcGxheU51bWJlciA9IDBcXG4gICQ6IGNhY2hlZE51bWJlciA9IDBcXG4gICQ6IGZvcm1hdEZ1bmN0aW9uID0gZCA9PiB7XFxuICAgIHRyeSB7XFxuICAgICAgcmV0dXJuIHR5cGVvZiBmb3JtYXQgPT0gXFxcInN0cmluZ1xcXCIgPyBkM0Zvcm1hdChmb3JtYXQpKGQpIDogZm9ybWF0KGQpXFxuICAgIH0gY2F0Y2ggKGUpIHtcXG4gICAgICBjb25zb2xlLmxvZyhlKVxcbiAgICAgIHJldHVybiBcXFwiLVxcXCJcXG4gICAgfVxcbiAgfVxcblxcbiAgY29uc3Qgc3RhcnRJbnRlcnBvbGF0ZSA9ICgpID0+IHtcXG4gICAgY29uc3QgaW50ZXJwb2xhdGlvbkZ1bmN0aW9uID0gaW50ZXJwb2xhdGUoY2FjaGVkTnVtYmVyLCBudW1iZXIpXFxuXFxuICAgIGNvbnN0IHRpbWVyID0gZDNUaW1lcih0aW1lRWxhcHNlZCA9PiB7XFxuICAgICAgY29uc3QgdCA9IHRpbWVFbGFwc2VkIC8gZHVyYXRpb25cXG5cXG4gICAgICBkaXNwbGF5TnVtYmVyID0gaW50ZXJwb2xhdGlvbkZ1bmN0aW9uKHQpXFxuXFxuICAgICAgaWYgKHQgPj0gMSkge1xcbiAgICAgICAgaWYgKHRpbWVyKSB0aW1lci5zdG9wKClcXG4gICAgICAgIGRpc3BsYXlOdW1iZXIgPSBudW1iZXJcXG4gICAgICAgIGNhY2hlZE51bWJlciA9IG51bWJlclxcbiAgICAgIH1cXG4gICAgfSlcXG4gIH1cXG5cXG4gICQ6IG51bWJlciwgc3RhcnRJbnRlcnBvbGF0ZSgpXFxuPC9zY3JpcHQ+XFxuXFxuPHNwYW4gY2xhc3M9XFxcImNcXFwiPlxcbiAge051bWJlci5pc0Zpbml0ZSgrZGlzcGxheU51bWJlcikgPyBmb3JtYXRGdW5jdGlvbihkaXNwbGF5TnVtYmVyKSA6ICctJ31cXG48L3NwYW4+XFxuXFxuPHN0eWxlPlxcbiAgLmMge1xcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFxcXCJ0bnVtXFxcIiwgMTtcXG4gIH1cXG48L3N0eWxlPlxcblwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPHNjcmlwdD5cXG4gIGltcG9ydCB7IHJhbmdlIH0gZnJvbSBcXFwiZDNcXFwiO1xcblxcbiAgZXhwb3J0IGxldCBudW1iZXJPZkl0ZW1zID0gMDtcXG4gIGV4cG9ydCBsZXQgYWN0aXZlSW5kZXggPSAwO1xcbjwvc2NyaXB0PlxcblxcbjxkaXYgY2xhc3M9XFxcIml0ZW1zXFxcIj5cXG4gIHsjZWFjaCBuZXcgQXJyYXkoK251bWJlck9mSXRlbXMpLmZpbGwoMCkgYXMgXywgaX1cXG4gICAgPGJ1dHRvblxcbiAgICAgIGNsYXNzPVxcXCJpdGVtXFxcIlxcbiAgICAgIGNsYXNzOmFjdGl2ZT17YWN0aXZlSW5kZXggPT0gaX1cXG4gICAgICBvbjpjbGljaz17KCkgPT4gKGFjdGl2ZUluZGV4ID0gaSl9IC8+XFxuICB7L2VhY2h9XFxuICA8ZGl2IGNsYXNzPVxcXCJpdGVtcy10ZXh0XFxcIj57K2FjdGl2ZUluZGV4ICsgMX0gb2Yge251bWJlck9mSXRlbXN9PC9kaXY+XFxuPC9kaXY+XFxuXFxuPHN0eWxlPlxcbiAgLml0ZW1zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcXG4gICAgbWFyZ2luLXRvcDogMWVtO1xcbiAgfVxcbiAgLml0ZW0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBoZWlnaHQ6IDEuM2VtO1xcbiAgICB3aWR0aDogMS4zZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC42ZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZsZXg6IDAgMCAxLjNlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheSwgI2RkZCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIC5pdGVtOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIGhlaWdodDogMC42ZW07XFxuICAgIHdpZHRoOiAwLjZlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0O1xcbiAgfVxcbiAgLml0ZW0uYWN0aXZlOmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcbiAgfVxcbiAgLml0ZW1zLXRleHQge1xcbiAgICBmb250LXNpemU6IDAuN2VtO1xcbiAgICBtYXJnaW4tbGVmdDogMC4zZW07XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gIH1cXG48L3N0eWxlPlxcblwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPHNjcmlwdD5cXG4gIGltcG9ydCB7IHNwcmluZyB9IGZyb20gXFxcInN2ZWx0ZS9tb3Rpb25cXFwiO1xcbiAgaW1wb3J0IHsgY3ViaWNPdXQgfSBmcm9tIFxcXCJzdmVsdGUvZWFzaW5nXFxcIjtcXG4gIGltcG9ydCB7IGV4dGVudCwgaW50ZXJwb2xhdGVIY2wsIHNjYWxlU3FydCwgc2NhbGVMaW5lYXIgfSBmcm9tIFxcXCJkM1xcXCI7XFxuXFxuICAvLyB1dGlsaXR5IGZ1bmN0aW9uIGZvciB0cmFuc2xhdGluZyBlbGVtZW50c1xcbiAgY29uc3QgbW92ZSA9ICh4LCB5KSA9PiBgdHJhbnNmb3JtOiB0cmFuc2xhdGUoJHt4fXB4LCAke3l9cHhgO1xcblxcbiAgZXhwb3J0IGxldCBkYXRhID0gW107XFxuICAvLyBhY2Nlc3NvciBmdW5jdGlvbnMgdG8gcXVpY2tseSBwaXZvdCBiZXR3ZWVuIGRhdGEgc3RydWN0dXJlc1xcbiAgZXhwb3J0IGxldCB4QWNjZXNzb3IgPSBkID0+IGRbMF07XFxuICBleHBvcnQgbGV0IHlBY2Nlc3NvciA9IGQgPT4gZFsxXTtcXG4gIGV4cG9ydCBsZXQgckFjY2Vzc29yID0gZCA9PiBkWzJdO1xcbiAgZXhwb3J0IGxldCBtYXJnaW5zID0ge1xcbiAgICAvLyB0eXBpY2FsIGQzIG1hcmdpbiBjb252ZW50aW9uXFxuICAgIHRvcDogMjAsXFxuICAgIHJpZ2h0OiAyMCxcXG4gICAgYm90dG9tOiAyMCxcXG4gICAgbGVmdDogMjBcXG4gIH07XFxuXFxuICBsZXQgd2lkdGggPSAxMjAwO1xcbiAgJDogaGVpZ2h0ID0gd2lkdGg7XFxuICAkOiBtYWluV2lkdGggPSB3aWR0aCAtIG1hcmdpbnMucmlnaHQgLSBtYXJnaW5zLmxlZnQ7XFxuICAkOiBtYWluSGVpZ2h0ID0gaGVpZ2h0IC0gbWFyZ2lucy50b3AgLSBtYXJnaW5zLmJvdHRvbTtcXG5cXG4gIC8vIHRoZSBiaWdnZXN0IGNvbnN0cmFpbnQgaGVyZTpcXG4gIC8vIHRoZSBudW1iZXIgb2YgZG90cyBoYXMgdG8gcmVtYWluIHN0YXRpY1xcbiAgLy8gb25lIHdvcmthcm91bmQgaXMgdG8gaGF2ZSBhIHZlcnkgbG9uZyBhcnJheSxcXG4gIC8vIGFuZCBnaXZlIGV4dHJhIG5vZGVzIG5vIHJhZGl1cyAocj0wKVxcbiAgbGV0IGRvdHMgPSBzcHJpbmcoXFxuICAgIGRhdGEubWFwKChkLCBpKSA9PiAoe1xcbiAgICAgIHg6IDAsXFxuICAgICAgeTogMCxcXG4gICAgICByOiAwXFxuICAgIH0pKSxcXG4gICAge1xcbiAgICAgIHN0aWZmbmVzczogMC4xLFxcbiAgICAgIGRhbXBpbmc6IDAuOVxcbiAgICB9XFxuICApO1xcblxcbiAgLy8gbWFrZSBtZSBzb21lIHNjYWxlcyFcXG4gICQ6IHhTY2FsZSA9IHNjYWxlTGluZWFyKClcXG4gICAgLmRvbWFpbihleHRlbnQoZGF0YSwgeEFjY2Vzc29yKSlcXG4gICAgLnJhbmdlKFswLCBtYWluV2lkdGhdKTtcXG4gICQ6IHlTY2FsZSA9IHNjYWxlTGluZWFyKClcXG4gICAgLmRvbWFpbihleHRlbnQoZGF0YSwgeUFjY2Vzc29yKSlcXG4gICAgLnJhbmdlKFttYWluSGVpZ2h0LCAwXSk7XFxuICAkOiByU2NhbGUgPSBzY2FsZVNxcnQoKVxcbiAgICAuZG9tYWluKGV4dGVudChkYXRhLCByQWNjZXNzb3IpKVxcbiAgICAucmFuZ2UoWzAsIDIwXSk7XFxuICBjb25zdCBjb2xvclNjYWxlID0gc2NhbGVMaW5lYXIoKVxcbiAgICAuZG9tYWluKFswLCAyMF0pXFxuICAgIC5yYW5nZShbXFxcInRvbWF0b1xcXCIsIFxcXCJjb3JuZmxvd2VyYmx1ZVxcXCJdKVxcbiAgICAuaW50ZXJwb2xhdGUoaW50ZXJwb2xhdGVIY2wpO1xcblxcbiAgLy8gdXBkYXRlICRkb3RzJyB4LCB5LCBhbmQgciBhdHRyaWJ1dGVzXFxuICAvLyBgc3ByaW5nYCB3aWxsIGhhbmRsZSB0aGUgYW5pbWF0aW9uL2ludGVycG9sYXRpb25cXG4gIGNvbnN0IHVwZGF0ZURhdGEgPSAoKSA9PiB7XFxuICAgIGNvbnN0IG5ld0RvdHMgPSBkYXRhLm1hcCgoZCwgaSkgPT4gKHtcXG4gICAgICB4OiB4U2NhbGUoeEFjY2Vzc29yKGQpKSxcXG4gICAgICB5OiB5U2NhbGUoeUFjY2Vzc29yKGQpKSxcXG4gICAgICByOiByU2NhbGUockFjY2Vzc29yKGQpKVxcbiAgICB9KSk7XFxuICAgIGRvdHMuc2V0KG5ld0RvdHMpO1xcbiAgfTtcXG5cXG4gICQ6IGRhdGEsIG1haW5XaWR0aCwgdXBkYXRlRGF0YSgpO1xcbjwvc2NyaXB0PlxcblxcbjxmaWd1cmUgY2xhc3M9XFxcImNcXFwiIGJpbmQ6Y2xpZW50V2lkdGg9e3dpZHRofT5cXG4gIDxzdmcge3dpZHRofSB7aGVpZ2h0fT5cXG4gICAgPGcgc3R5bGU9e21vdmUobWFyZ2lucy50b3AsIG1hcmdpbnMubGVmdCl9PlxcbiAgICAgIHsjZWFjaCAkZG90cyBhcyB7IHgsIHksIHIgfX1cXG4gICAgICAgIDxjaXJjbGUgc3R5bGU9e21vdmUoeCwgeSl9IHI9e01hdGgubWF4KDAsIHIpfSBmaWxsPXtjb2xvclNjYWxlKHIpfSAvPlxcbiAgICAgIHsvZWFjaH1cXG4gICAgPC9nPlxcbiAgPC9zdmc+XFxuPC9maWd1cmU+XFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8c2NyaXB0PlxcbiAgZXhwb3J0IGxldCBvcHRpb25zID0gW11cXG4gIGV4cG9ydCBsZXQgdmFsdWUgPSBudWxsXFxuICBleHBvcnQgbGV0IG9uQ2hhbmdlID0gKCkgPT4ge31cXG5cXG4gIGNvbnN0IG9uQ2hhbmdlTG9jYWwgPSBvcHRpb24gPT4ge1xcbiAgICBvbkNoYW5nZShvcHRpb24pXFxuICAgIHZhbHVlID0gb3B0aW9uLmlkXFxuICB9XFxuPC9zY3JpcHQ+XFxuXFxuPGRpdiBjbGFzcz1cXFwiY1xcXCI+XFxuICB7I2VhY2ggb3B0aW9ucyBhcyBvcHRpb259XFxuICAgIDxidXR0b25cXG4gICAgICBjbGFzcz1cXFwib3B0aW9uXFxcIlxcbiAgICAgIGNsYXNzOnNlbGVjdGVkPVxcXCJ7b3B0aW9uLmlkID09IHZhbHVlfVxcXCJcXG4gICAgICBvbjpjbGljaz1cXFwieygpID0+IG9uQ2hhbmdlTG9jYWwob3B0aW9uKX1cXFwiPlxcbiAgICAgIHtvcHRpb24ubGFiZWx9XFxuICAgIDwvYnV0dG9uPlxcbiAgey9lYWNofVxcbjwvZGl2PlxcblxcbjxzdHlsZT5cXG4gIC5jIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIGJ1dHRvbi5vcHRpb24ge1xcbiAgICBwYWRkaW5nOiAwLjZlbSAxZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAwLjllbTtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIC5vcHRpb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjZWNlY2YxO1xcbiAgfVxcbiAgLm9wdGlvbi5zZWxlY3RlZCxcXG4gIC5vcHRpb24uc2VsZWN0ZWQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxuXFxuICAvKiBncmF2eSAqL1xcbiAgLm9wdGlvbiArIC5vcHRpb24ge1xcbiAgICBib3JkZXItbGVmdC13aWR0aDogMDtcXG4gIH1cXG4gIC5vcHRpb246Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweCAwIDAgNnB4O1xcbiAgfVxcbiAgLm9wdGlvbjpsYXN0LW9mLXR5cGUge1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDZweCA2cHggMDtcXG4gIH1cXG48L3N0eWxlPlxcblwiOyIsIjxzY3JpcHQ+XG4gIGltcG9ydCBCcmllZk1lc3NhZ2UgZnJvbSBcIi4vLi4vLi4vdGVtcGxhdGVzL0JyaWVmTWVzc2FnZS5zdmVsdGVcIlxuICBpbXBvcnQgdGVtcGxhdGVzQ29kZSBmcm9tIFwiLi90ZW1wbGF0ZXMtY29kZVwiXG5cbiAgZXhwb3J0IGxldCBuYW1lID0gXCJcIlxuXG4gICQ6IGNvZGUgPSB0ZW1wbGF0ZXNDb2RlW25hbWVdIHx8IFwiY291bGRuJ3QgZmluZCBjb2RlXCJcblxuICBsZXQgc3VjY2Vzc01lc3NhZ2VJdGVyYXRpb24gPSAwXG5cbiAgY29uc3Qgb25Db3B5ID0gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb2RlKS50aGVuKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgc3VjY2Vzc01lc3NhZ2VJdGVyYXRpb24gKz0gMVxuICAgICAgICB9LFxuICAgICAgICBlID0+IHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZSlcbiAgICAgICAgfSxcbiAgICAgIClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yIHdoZW4gY29weWluZyBjb2RlXCIsIGUpXG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHNlY3Rpb24+XG4gIDxkaXYgY2xhc3M9XCJoZWFkaW5nXCI+XG4gICAgPGgyPntuYW1lfTwvaDI+XG4gICAgPGFcbiAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdGhlLXB1ZGRpbmcvc3ZlbHRlLXRlbXBsYXRlcy9ibG9iL21hc3Rlci90ZW1wbGF0ZXMve25hbWV9LnN2ZWx0ZVwiPlxuICAgICAgQ29kZVxuICAgIDwvYT5cbiAgPC9kaXY+XG4gIDxidXR0b24gb246Y2xpY2s9XCJ7b25Db3B5fVwiPlxuICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlXCI+XG4gICAgICA8QnJpZWZNZXNzYWdlXG4gICAgICAgIHRleHQ9XCJjb3BpZWQgdG8gY2xpcGJvYXJkISDwn5i68J+QseKAjfCfj41cIlxuICAgICAgICBpdGVyYXRpb249XCJ7c3VjY2Vzc01lc3NhZ2VJdGVyYXRpb259XCIgLz5cbiAgICA8L2Rpdj5cbiAgICBDb3B5IGNvZGVcbiAgPC9idXR0b24+XG4gIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgIDxzbG90IG5hbWU9XCJkZXNjcmlwdGlvblwiIC8+XG4gIDwvZGl2PlxuXG4gIDxzbG90IC8+XG48L3NlY3Rpb24+XG5cbjxzdHlsZT5cbiAgc2VjdGlvbiB7XG4gICAgbWFyZ2luOiA1ZW0gMDtcbiAgfVxuICAuaGVhZGluZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5oZWFkaW5nIGEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiAtMC43ZW07XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgLTUwJSk7XG4gIH1cbiAgLmRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLm1lc3NhZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0wLjNlbTtcbiAgICByaWdodDogLTFlbTtcbiAgICB3aWR0aDogMjBlbTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAtNTAlKTtcbiAgfVxuPC9zdHlsZT5cbiIsIjxzY3JpcHQ+XG4gIGltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCJcblxuICBpbXBvcnQgVGVtcGxhdGUgZnJvbSBcIi4vVGVtcGxhdGUuc3ZlbHRlXCJcblxuICBpbXBvcnQgSWNvbiBmcm9tIFwiLi8uLi8uLi90ZW1wbGF0ZXMvSWNvbi5zdmVsdGVcIlxuICBpbXBvcnQgaWNvblBhdGhzIGZyb20gXCIuLy4uLy4uL3RlbXBsYXRlcy9pY29uLXBhdGhzXCJcbiAgY29uc3QgaWNvbnMgPSBPYmplY3Qua2V5cyhpY29uUGF0aHMpXG4gIGltcG9ydCBUb2dnbGUgZnJvbSBcIi4vLi4vLi4vdGVtcGxhdGVzL1RvZ2dsZS5zdmVsdGVcIlxuICBpbXBvcnQgUHJvZ3Jlc3NEb3RzIGZyb20gXCIuLy4uLy4uL3RlbXBsYXRlcy9Qcm9ncmVzc0RvdHMuc3ZlbHRlXCJcbiAgaW1wb3J0IEluVmlldyBmcm9tIFwiLi8uLi8uLi90ZW1wbGF0ZXMvSW5WaWV3LnN2ZWx0ZVwiXG4gIGltcG9ydCBOdW1iZXIgZnJvbSBcIi4vLi4vLi4vdGVtcGxhdGVzL051bWJlci5zdmVsdGVcIlxuICBpbXBvcnQgU2NhdHRlcnBsb3QgZnJvbSBcIi4vLi4vLi4vdGVtcGxhdGVzL1NjYXR0ZXJwbG90LnN2ZWx0ZVwiXG4gIGltcG9ydCBCcmllZk1lc3NhZ2UgZnJvbSBcIi4vLi4vLi4vdGVtcGxhdGVzL0JyaWVmTWVzc2FnZS5zdmVsdGVcIlxuXG4gIGxldCBudW1iZXIgPSA2MFxuICBsZXQgbnVtYmVyRHVyYXRpb24gPSA1MDBcbiAgbGV0IG51bWJlckZvcm1hdCA9IFwiLjFmXCJcblxuICBjb25zdCBnZW5lcmF0ZVNjYXR0ZXJwbG90RGF0YSA9ICgpID0+XG4gICAgbmV3IEFycmF5KDEwMCkuZmlsbCgwKS5tYXAoXyA9PiBbTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSwgM10pXG4gIGxldCBzY2F0dGVycGxvdERhdGEgPSBnZW5lcmF0ZVNjYXR0ZXJwbG90RGF0YSgpXG5cbiAgY29uc3Qgb25SZWdlbmVyYXRlU2NhdHRlcnBsb3REYXRhID0gKCkgPT4ge1xuICAgIHNjYXR0ZXJwbG90RGF0YSA9IGdlbmVyYXRlU2NhdHRlcnBsb3REYXRhKClcbiAgfVxuICBvbk1vdW50KG9uUmVnZW5lcmF0ZVNjYXR0ZXJwbG90RGF0YSlcblxuICBsZXQgbWVzc2FnZUl0ZXJhdGlvbiA9IDBcbiAgbGV0IG1lc3NhZ2VEdXJhdGlvbiA9IDUwMFxuICBsZXQgbWVzc2FnZSA9IFwiVGhpcyBpcyB0aGUgbWVzc2FnZVwiXG48L3NjcmlwdD5cblxuPGgxPlVJIEVsZW1lbnRzPC9oMT5cblxuPFRlbXBsYXRlIG5hbWU9XCJJY29uXCI+XG4gIDxkaXYgc2xvdD1cImRlc2NyaXB0aW9uXCI+XG4gICAgPHA+XG4gICAgICBUaGVzZSB3aWxsIGluaGVyaXQgdGhlIGN1cnJlbnQgY29sb3IsIGFuZCBhcmUgc2l6ZWQgYmFzZWQgb24gdGhlXG4gICAgICBmb250LXNpemUuIENob29zZSB0aGUgc3BlY2lmaWMgaWNvbiB3aXRoIHRoZSBhdHRyaWJ1dGUgYG5hbWVgLlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIE1ha2Ugc3VyZSB0byBhbHNvIGdyYWIgdGhlIGBpY29uLXBhdGhzLmpzYCBmaWxlLCB3aGljaCBzdG9yZXMgc3ZnIHBhdGggYGRgXG4gICAgICBhdHRyaWJ1dGUgc3RyaW5ncy5cbiAgICA8L3A+XG4gIDwvZGl2PlxuXG4gIHsjZWFjaCBpY29ucyBhcyBpY29ufVxuICAgIDxzcGFuIHN0eWxlPVwicGFkZGluZzogMC42ZW1cIj5cbiAgICAgIDxJY29uIG5hbWU9XCJ7aWNvbn1cIiAvPlxuICAgIDwvc3Bhbj5cbiAgey9lYWNofVxuPC9UZW1wbGF0ZT5cblxuPFRlbXBsYXRlIG5hbWU9XCJUb2dnbGVcIj5cbiAgPGRpdiBzbG90PVwiZGVzY3JpcHRpb25cIj5cbiAgICA8cD5cbiAgICAgIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgb3B0aW9uIGlzIHJlcHJlc2VudGVkIGluIHRoZSBgdmFsdWVgIGF0dHJpYnV0ZS4gQWRkXG4gICAgICBhbiBgb3B0aW9uc2AgYXJyYXkgd2l0aCBvYmplY3RzIHRoYXQgaGF2ZTpcbiAgICA8L3A+XG4gICAgPHVsPlxuICAgICAgPGxpPlxuICAgICAgICA8Yj5pZDwvYj5cbiAgICAgICAgOiB3aGF0IGdldHMgc2V0IGFzIHRoZSBgdmFsdWVgXG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8Yj5sYWJlbDwvYj5cbiAgICAgICAgOiB3aGF0IGdldHMgZGlzcGxheWVkIGluIHRoZSB0b2dnbGVcbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgPC9kaXY+XG5cbiAgPFRvZ2dsZVxuICAgIHZhbHVlPVwiezF9XCJcbiAgICBvcHRpb25zPVwie1t7IGlkOiAxLCBsYWJlbDogJ09uZScgfSwgeyBpZDogMiwgbGFiZWw6ICdUd28nIH0sIHsgaWQ6IDMsIGxhYmVsOiAnVGhyZWUnIH1dfVwiIC8+XG48L1RlbXBsYXRlPlxuXG48VGVtcGxhdGUgbmFtZT1cIlByb2dyZXNzRG90c1wiPlxuICA8ZGl2IHNsb3Q9XCJkZXNjcmlwdGlvblwiPlxuICAgIDxwPjwvcD5cbiAgPC9kaXY+XG5cbiAgPFByb2dyZXNzRG90cyBudW1iZXJPZkl0ZW1zPVwiNlwiIGFjdGl2ZUluZGV4PVwiMVwiIC8+XG48L1RlbXBsYXRlPlxuXG48VGVtcGxhdGUgbmFtZT1cIk51bWJlclwiPlxuICA8ZGl2IHNsb3Q9XCJkZXNjcmlwdGlvblwiPlxuICAgIDxwPkRpc3BsYXlzIGEgbnVtYmVyIHdpdGggYW4gaW50ZXJwb2xhdGVkIGFuaW1hdGlvbiB3aGVuIGNoYW5nZWQuPC9wPlxuICAgIDxsYWJlbD5cbiAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbFwiPnZhbHVlPC9kaXY+XG4gICAgICA8aW5wdXQgYmluZDp2YWx1ZT1cIntudW1iZXJ9XCIgdHlwZT1cIm51bWJlclwiIHN0eWxlPVwid2lkdGg6IDZlbVwiIC8+XG4gICAgPC9sYWJlbD5cbiAgICA8bGFiZWw+XG4gICAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIj5kdXJhdGlvbiAobWlsbGlzZWNvbmRzKTwvZGl2PlxuICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9XCJ7bnVtYmVyRHVyYXRpb259XCIgdHlwZT1cIm51bWJlclwiIHN0eWxlPVwid2lkdGg6IDZlbVwiIC8+XG4gICAgPC9sYWJlbD5cbiAgICA8bGFiZWw+XG4gICAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIj5mb3JtYXQ8L2Rpdj5cbiAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPVwie251bWJlckZvcm1hdH1cIiBzdHlsZT1cIndpZHRoOiA2ZW1cIiAvPlxuICAgIDwvbGFiZWw+XG4gIDwvZGl2PlxuXG4gIDxOdW1iZXIge251bWJlcn0gZHVyYXRpb249XCJ7bnVtYmVyRHVyYXRpb259XCIgZm9ybWF0PVwie251bWJlckZvcm1hdH1cIiAvPlxuPC9UZW1wbGF0ZT5cblxuPFRlbXBsYXRlIG5hbWU9XCJCcmllZk1lc3NhZ2VcIj5cbiAgPGRpdiBzbG90PVwiZGVzY3JpcHRpb25cIj5cbiAgICA8cD5cbiAgICAgIFRoaXMgaXMgYSBtZXNzYWdlIHRoYXQgd2lsbCBwb3AgdXAgdG8gZ2l2ZSBxdWljayB1c2VyIGZlZWRiYWNrLCBhbmRcbiAgICAgIGRpc2FwcGVhcnMgYWZ0ZXIgYSBzaG9ydCBhbW91bnQgb2YgdGltZS5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgICBUaGUgbWVzc2FnZSBzaG93cyB1cCB3aGVuZXZlciB0aGUgYHRleHRgIG9yIGBpdGVyYXRpb25gIGNoYW5nZXMuIENoYW5naW5nXG4gICAgICB0aGUgYGl0ZXJhdGlvbmAgaXMgYSBnb29kIHdheSB0byBtYWtlIHN1cmUgdGhlIG1lc3NhZ2Ugc2hvd3MgdXAgd2hlblxuICAgICAgbmVlZGVkLCBldmVuIGlmIHRoZSBgdGV4dGAgZG9lc24ndCBjaGFuZ2UuXG4gICAgPC9wPlxuXG4gICAgPGxhYmVsPlxuICAgICAgPGRpdiBjbGFzcz1cImxhYmVsXCI+dGV4dDwvZGl2PlxuICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9XCJ7bWVzc2FnZX1cIiBzdHlsZT1cIndpZHRoOiAyMGVtXCIgLz5cbiAgICA8L2xhYmVsPlxuICAgIDxsYWJlbD5cbiAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbFwiPmR1cmF0aW9uIChtaWxsaXNlY29uZHMpPC9kaXY+XG4gICAgICA8aW5wdXQgYmluZDp2YWx1ZT1cInttZXNzYWdlRHVyYXRpb259XCIgdHlwZT1cIm51bWJlclwiIHN0eWxlPVwid2lkdGg6IDZlbVwiIC8+XG4gICAgPC9sYWJlbD5cbiAgICA8YnV0dG9uIG9uOmNsaWNrPVwieygpID0+IChtZXNzYWdlSXRlcmF0aW9uICs9IDEpfVwiPlNob3cgbWVzc2FnZTwvYnV0dG9uPlxuICA8L2Rpdj5cblxuICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlXCI+XG4gICAgVGhlIG1lc3NhZ2Ugd2lsbCBzaG93IHVwIG5leHQgdG8gdGhpcyBjb250ZW50LlxuICAgIDxCcmllZk1lc3NhZ2VcbiAgICAgIHRleHQ9XCJ7bWVzc2FnZX1cIlxuICAgICAgaXRlcmF0aW9uPVwie21lc3NhZ2VJdGVyYXRpb259XCJcbiAgICAgIGR1cmF0aW9uPVwie21lc3NhZ2VEdXJhdGlvbn1cIiAvPlxuICA8L2Rpdj5cbjwvVGVtcGxhdGU+XG5cbjxoMT5VdGlsaXRpZXM8L2gxPlxuXG48VGVtcGxhdGUgbmFtZT1cIkluVmlld1wiPlxuICA8ZGl2IHNsb3Q9XCJkZXNjcmlwdGlvblwiPlxuICAgIDxwPlxuICAgICAgV3JhcCBzb21ldGhpbmcgaW4gdGhpcyBjb21wb25lbnQsIGFuZCB1c2UgdGhlIGBpc0luVmlld2AgdmFyaWFibGUgdG8ga25vd1xuICAgICAgd2hldGhlciBvciBub3QgaXQncyBpbiB2aWV3LlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIFlvdSBjb3VsZCBhbHNvIGBiaW5kYCB0byB0aGUgYGlzSW5WaWV3UHJvcGAgYXR0cmlidXRlLCBpZiB5b3Ugd2FudGVkIGFcbiAgICAgIGNvbXBvbmVudC1sZXZlbCB2YXJpYWJsZSAoZWcuIGlmIHlvdSB3YW50IHRvIGNoYW5nZSBzb21ldGhpbmcgb3V0c2lkZSBvZlxuICAgICAgdGhlIGNvbnRlbnQpLlxuICAgIDwvcD5cbiAgPC9kaXY+XG5cbiAgPEluVmlldyBsZXQ6aXNJblZpZXc+XG4gICAgPGRpdlxuICAgICAgc3R5bGU9XCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZSh7aXNJblZpZXcgPyAwIDogJy0zZW0nfSk7IHRyYW5zaXRpb246IGFsbCAxc1xuICAgICAgZWFzZS1vdXQ7XCI+XG4gICAgICBJcyB7aXNJblZpZXcgPyAnJyA6ICdub3QgJ31pbiB2aWV3XG4gICAgPC9kaXY+XG4gIDwvSW5WaWV3PlxuPC9UZW1wbGF0ZT5cblxuPGgxPkNoYXJ0czwvaDE+XG5cbjxUZW1wbGF0ZSBuYW1lPVwiU2NhdHRlcnBsb3RcIj5cbiAgPGRpdiBzbG90PVwiZGVzY3JpcHRpb25cIj5cbiAgICA8cD5cbiAgICAgIFRoZSBiYXNpY3MgZm9yIGEgc2NhdHRlcnBsb3QuIFRoaXMgdXNlcyBzdmVsdGUgYSBgc3ByaW5nYCwgd2hpY2ggYW5pbWF0ZXNcbiAgICAgIHRoZSBkb3RzIG9uIGNoYW5nZSwgYnV0IHJlcXVpcmVzIGEgY29uc2lzdGVudCBudW1iZXIgb2YgaXRlbXMgaW4gdGhlXG4gICAgICBgZGF0YWAgYXJyYXkuXG4gICAgPC9wPlxuICAgIDxidXR0b24gb246Y2xpY2s9XCJ7b25SZWdlbmVyYXRlU2NhdHRlcnBsb3REYXRhfVwiPkdldCBuZXcgZGF0YTwvYnV0dG9uPlxuICA8L2Rpdj5cblxuICA8ZGl2IHN0eWxlPVwibWF4LXdpZHRoOiAzMGVtXCI+XG4gICAgPFNjYXR0ZXJwbG90IGRhdGE9XCJ7c2NhdHRlcnBsb3REYXRhfVwiIC8+XG4gIDwvZGl2PlxuPC9UZW1wbGF0ZT5cblxuPHN0eWxlPlxuICBoMSB7XG4gICAgbWFyZ2luOiAyZW0gMCAwO1xuICAgIHBhZGRpbmctdG9wOiAxZW07XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkNWQ2ZGQ7XG4gIH1cbiAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG4gIC5sYWJlbCB7XG4gICAgd2lkdGg6IDEzZW07XG4gIH1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgQnJpZWZNZXNzYWdlIGZyb20gXCIhIXJhdy1sb2FkZXIhLi8uLi8uLi90ZW1wbGF0ZXMvQnJpZWZNZXNzYWdlLnN2ZWx0ZVwiXG5pbXBvcnQgQ29uZmV0dGkgZnJvbSBcIiEhcmF3LWxvYWRlciEuLy4uLy4uL3RlbXBsYXRlcy9Db25mZXR0aS5zdmVsdGVcIlxuaW1wb3J0IEljb24gZnJvbSBcIiEhcmF3LWxvYWRlciEuLy4uLy4uL3RlbXBsYXRlcy9JY29uLnN2ZWx0ZVwiXG5pbXBvcnQgSW5WaWV3IGZyb20gXCIhIXJhdy1sb2FkZXIhLi8uLi8uLi90ZW1wbGF0ZXMvSW5WaWV3LnN2ZWx0ZVwiXG5pbXBvcnQgTnVtYmVyIGZyb20gXCIhIXJhdy1sb2FkZXIhLi8uLi8uLi90ZW1wbGF0ZXMvTnVtYmVyLnN2ZWx0ZVwiXG5pbXBvcnQgUHJvZ3Jlc3NEb3RzIGZyb20gXCIhIXJhdy1sb2FkZXIhLi8uLi8uLi90ZW1wbGF0ZXMvUHJvZ3Jlc3NEb3RzLnN2ZWx0ZVwiXG5pbXBvcnQgU2NhdHRlcnBsb3QgZnJvbSBcIiEhcmF3LWxvYWRlciEuLy4uLy4uL3RlbXBsYXRlcy9TY2F0dGVycGxvdC5zdmVsdGVcIlxuaW1wb3J0IFRvZ2dsZSBmcm9tIFwiISFyYXctbG9hZGVyIS4vLi4vLi4vdGVtcGxhdGVzL1RvZ2dsZS5zdmVsdGVcIlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEJyaWVmTWVzc2FnZSxcbiAgQ29uZmV0dGksXG4gIEljb24sXG4gIEluVmlldyxcbiAgTnVtYmVyLFxuICBQcm9ncmVzc0RvdHMsXG4gIFNjYXR0ZXJwbG90LFxuICBUb2dnbGUsXG59IiwiPHNjcmlwdD5cbiAgaW1wb3J0IFRlbXBsYXRlcyBmcm9tIFwiLi8uLi9jb21wb25lbnRzL1RlbXBsYXRlcy5zdmVsdGVcIlxuPC9zY3JpcHQ+XG5cbjxoMT5IZXkgZnJpZW5kITwvaDE+XG48cD5UaGVzZSB0ZW1wbGF0ZXMgYXJlIHlvdXJzIHRvIGdyYWIgYW5kIG1vZGlmeSBhcyB5b3UgbmVlZCE8L3A+XG48cD5KdXN0IGNvcHkgdGhlIHNvdXJjZSBjb2RlICYgcGFzdGUgaW50byBhIG5ldyAuc3ZlbHRlIGZpbGUuPC9wPlxuPHA+XG4gIFRoZXNlIGNhbiBkbyBiYXNpYyBjb2xvciB0aGVtaW5nLCBpZiB5b3Ugc2V0IHRoZSBjc3MgdmFyaWFibGVzIGluIGEgcGFyZW50XG4gIGNvbXBvbmVudDpcbjwvcD5cbjx1bD5cbiAgPGxpPlxuICAgIDxiIHN0eWxlPVwiY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcilcIj4tLWFjY2VudC1jb2xvcjwvYj5cbiAgPC9saT5cbiAgPGxpPlxuICAgIDxiIHN0eWxlPVwiY29sb3I6IHZhcigtLWdyYXkpXCI+LS1ncmF5PC9iPlxuICA8L2xpPlxuPC91bD5cblxuPFRlbXBsYXRlcyAvPlxuXG48c3R5bGU+XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICB9XG48L3N0eWxlPlxuIiwiPHNjcmlwdD5cbiAgZXhwb3J0IGxldCB0ZXh0ID0gXCJcIjtcbiAgZXhwb3J0IGxldCBpdGVyYXRpb24gPSAwOyAvLyBmb3IgcmUtdHJpZ2dlcmluZyBiZWZvcmUgdGhlIG1lc3NhZ2UgaGFzIGRpc2FwcGVhcmVkXG4gIGV4cG9ydCBsZXQgZHVyYXRpb24gPSAxMDAwO1xuXG4gIGxldCBpc1Nob3dpbmcgPSBmYWxzZTtcbiAgbGV0IGxvY2FsSXRlcmF0aW9uID0gMDtcblxuICAkOiBvblN0YXJ0VGltZW91dCA9IGRlYm91bmNlKCgpID0+IHtcbiAgICBpc1Nob3dpbmcgPSBmYWxzZTtcbiAgfSwgZHVyYXRpb24pO1xuXG4gICQ6IG9uVGV4dENoYW5nZSA9ICgpID0+IHtcbiAgICBpZiAoIXRleHQpIHtcbiAgICAgIGlzU2hvd2luZyA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsb2NhbEl0ZXJhdGlvbisrO1xuICAgIGlzU2hvd2luZyA9IHRydWU7XG4gICAgb25TdGFydFRpbWVvdXQoKTtcbiAgfTtcbiAgJDogdGV4dCwgaXRlcmF0aW9uLCBvblRleHRDaGFuZ2UoKTtcblxuICAvLyBmcm9tIGh0dHBzOi8vZGF2aWR3YWxzaC5uYW1lL2phdmFzY3JpcHQtZGVib3VuY2UtZnVuY3Rpb25cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCBhcyBsb25nIGFzIGl0IGNvbnRpbnVlcyB0byBiZSBpbnZva2VkLCB3aWxsIG5vdFxuICAvLyBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG4gIC8vIE4gbWlsbGlzZWNvbmRzLiBJZiBgaW1tZWRpYXRlYCBpcyBwYXNzZWQsIHRyaWdnZXIgdGhlIGZ1bmN0aW9uIG9uIHRoZVxuICAvLyBsZWFkaW5nIGVkZ2UsIGluc3RlYWQgb2YgdGhlIHRyYWlsaW5nLlxuICBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgICB2YXIgdGltZW91dDtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY29udGV4dCA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgfTtcbiAgICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgICAgaWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfTtcbiAgfVxuPC9zY3JpcHQ+XG5cbnsjaWYgdGV4dCAmJiBpc1Nob3dpbmd9XG4gIDxkaXZcbiAgICBjbGFzcz1cImMgYy0te2xvY2FsSXRlcmF0aW9uICUgMn1cIlxuICAgIHN0eWxlPVwiYW5pbWF0aW9uLWR1cmF0aW9uOiB7ZHVyYXRpb259bXNcIj5cbiAgICB7dGV4dH1cbiAgPC9kaXY+XG57L2lmfVxuXG48c3R5bGU+XG4gIEBrZXlmcmFtZXMgZmFkZU91dCB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMWVtKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDgwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMWVtKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgZmFkZU91dDIge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDFlbSk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAxMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICA4MCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDFlbSk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICAuYyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmc6IDAuNmVtIDFlbTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxZW0pO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXktbGlnaHRlc3QpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYW5pbWF0aW9uOiBmYWRlT3V0IDAuNnMgZWFzZS1vdXQ7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIH1cbiAgLmMtLTEge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0MjtcbiAgfVxuPC9zdHlsZT5cbiIsIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICBpbXBvcnQgcGF0aHNCeU5hbWUgZnJvbSBcIi4vaWNvbi1wYXRoc1wiO1xuICBleHBvcnQgY29uc3QgaWNvbk9wdGlvbnMgPSBPYmplY3Qua2V5cyhwYXRoc0J5TmFtZSk7XG4gIGV4cG9ydCBjb25zdCBkaXJlY3Rpb25zID0gW1wiblwiLCBcIm5lXCIsIFwiZVwiLCBcInNlXCIsIFwic1wiLCBcInN3XCIsIFwid1wiLCBcIm53XCJdO1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIGV4cG9ydCBsZXQgbmFtZSA9IFwiYXJyb3dcIjtcbiAgZXhwb3J0IGxldCBkaXJlY3Rpb24gPSBcIm5cIjtcblxuICAkOiBwYXRocyA9IHBhdGhzQnlOYW1lW25hbWVdIHx8IFtdO1xuICAkOiByb3RhdGlvbiA9IGRpcmVjdGlvbnMuaW5kZXhPZihkaXJlY3Rpb24pICogNDU7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuYyB7XG4gICAgd2lkdGg6IDFlbTtcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICBmaWxsOiBjdXJyZW50Q29sb3I7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cbjwvc3R5bGU+XG5cbjxzdmdcbiAgY2xhc3M9XCJjXCJcbiAgdmlld0JveD1cIjAgMCAyNSAyNVwiXG4gIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxuICBjbGlwLXJ1bGU9XCJldmVub2RkXCJcbiAgc3R5bGU9e2B0cmFuc2Zvcm06IHJvdGF0ZSgke3JvdGF0aW9ufWRlZylgfT5cbiAgeyNlYWNoIHBhdGhzIGFzIHBhdGh9XG4gICAgPHBhdGggZD17cGF0aH0gLz5cbiAgey9lYWNofVxuPC9zdmc+XG4iLCI8c2NyaXB0PlxuICBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZVwiO1xuXG4gIGV4cG9ydCBsZXQgcm9vdCA9IHVuZGVmaW5lZDtcbiAgZXhwb3J0IGxldCBpc0luVmlld1Byb3AgPSBmYWxzZTtcblxuICBsZXQgaXNJblZpZXcgPSBmYWxzZTtcbiAgbGV0IG9ic2VydmVyO1xuICBsZXQgZWxlbWVudDtcblxuICAkOiBpc0luVmlldywgKGlzSW5WaWV3UHJvcCA9IGlzSW5WaWV3KTtcblxuICBjb25zdCBvbkNoYW5nZVZpc2liaWxpdHkgPSAoZSkgPT4ge1xuICAgIGlzSW5WaWV3ID0gZVswXS5pc0ludGVyc2VjdGluZztcbiAgfTtcblxuICBvbk1vdW50KCgpID0+IHtcbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgIHJvb3Q6IHJvb3QsXG4gICAgfTtcblxuICAgIG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKG9uQ2hhbmdlVmlzaWJpbGl0eSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgfSk7XG48L3NjcmlwdD5cblxuPGRpdiBjbGFzcz1cImNcIiBiaW5kOnRoaXM9e2VsZW1lbnR9PlxuICA8c2xvdCB7aXNJblZpZXd9IC8+XG48L2Rpdj5cbiIsIjxzY3JpcHQ+XG4gIGltcG9ydCB7IGZvcm1hdCBhcyBkM0Zvcm1hdCwgaW50ZXJwb2xhdGUsIHRpbWVyIGFzIGQzVGltZXIgfSBmcm9tIFwiZDNcIlxuXG4gIGV4cG9ydCBsZXQgbnVtYmVyID0gbnVsbFxuICBleHBvcnQgbGV0IGZvcm1hdCA9IFwiLC4yZlwiXG4gIGV4cG9ydCBsZXQgZHVyYXRpb24gPSAzMDBcblxuICBsZXQgZGlzcGxheU51bWJlciA9IDBcbiAgJDogY2FjaGVkTnVtYmVyID0gMFxuICAkOiBmb3JtYXRGdW5jdGlvbiA9IGQgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGZvcm1hdCA9PSBcInN0cmluZ1wiID8gZDNGb3JtYXQoZm9ybWF0KShkKSA6IGZvcm1hdChkKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICByZXR1cm4gXCItXCJcbiAgICB9XG4gIH1cblxuICBjb25zdCBzdGFydEludGVycG9sYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IGludGVycG9sYXRpb25GdW5jdGlvbiA9IGludGVycG9sYXRlKGNhY2hlZE51bWJlciwgbnVtYmVyKVxuXG4gICAgY29uc3QgdGltZXIgPSBkM1RpbWVyKHRpbWVFbGFwc2VkID0+IHtcbiAgICAgIGNvbnN0IHQgPSB0aW1lRWxhcHNlZCAvIGR1cmF0aW9uXG5cbiAgICAgIGRpc3BsYXlOdW1iZXIgPSBpbnRlcnBvbGF0aW9uRnVuY3Rpb24odClcblxuICAgICAgaWYgKHQgPj0gMSkge1xuICAgICAgICBpZiAodGltZXIpIHRpbWVyLnN0b3AoKVxuICAgICAgICBkaXNwbGF5TnVtYmVyID0gbnVtYmVyXG4gICAgICAgIGNhY2hlZE51bWJlciA9IG51bWJlclxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAkOiBudW1iZXIsIHN0YXJ0SW50ZXJwb2xhdGUoKVxuPC9zY3JpcHQ+XG5cbjxzcGFuIGNsYXNzPVwiY1wiPlxuICB7TnVtYmVyLmlzRmluaXRlKCtkaXNwbGF5TnVtYmVyKSA/IGZvcm1hdEZ1bmN0aW9uKGRpc3BsYXlOdW1iZXIpIDogJy0nfVxuPC9zcGFuPlxuXG48c3R5bGU+XG4gIC5jIHtcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwidG51bVwiLCAxO1xuICB9XG48L3N0eWxlPlxuIiwiPHNjcmlwdD5cbiAgaW1wb3J0IHsgcmFuZ2UgfSBmcm9tIFwiZDNcIjtcblxuICBleHBvcnQgbGV0IG51bWJlck9mSXRlbXMgPSAwO1xuICBleHBvcnQgbGV0IGFjdGl2ZUluZGV4ID0gMDtcbjwvc2NyaXB0PlxuXG48ZGl2IGNsYXNzPVwiaXRlbXNcIj5cbiAgeyNlYWNoIG5ldyBBcnJheSgrbnVtYmVyT2ZJdGVtcykuZmlsbCgwKSBhcyBfLCBpfVxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzPVwiaXRlbVwiXG4gICAgICBjbGFzczphY3RpdmU9e2FjdGl2ZUluZGV4ID09IGl9XG4gICAgICBvbjpjbGljaz17KCkgPT4gKGFjdGl2ZUluZGV4ID0gaSl9IC8+XG4gIHsvZWFjaH1cbiAgPGRpdiBjbGFzcz1cIml0ZW1zLXRleHRcIj57K2FjdGl2ZUluZGV4ICsgMX0gb2Yge251bWJlck9mSXRlbXN9PC9kaXY+XG48L2Rpdj5cblxuPHN0eWxlPlxuICAuaXRlbXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgfVxuICAuaXRlbSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGhlaWdodDogMS4zZW07XG4gICAgd2lkdGg6IDEuM2VtO1xuICAgIG1hcmdpbi1yaWdodDogMC42ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZsZXg6IDAgMCAxLjNlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXksICNkZGQpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuaXRlbTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBoZWlnaHQ6IDAuNmVtO1xuICAgIHdpZHRoOiAwLjZlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQ7XG4gIH1cbiAgLml0ZW0uYWN0aXZlOmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG4gIH1cbiAgLml0ZW1zLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgbWFyZ2luLWxlZnQ6IDAuM2VtO1xuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcbiAgfVxuPC9zdHlsZT5cbiIsIjxzY3JpcHQ+XG4gIGltcG9ydCB7IHNwcmluZyB9IGZyb20gXCJzdmVsdGUvbW90aW9uXCI7XG4gIGltcG9ydCB7IGN1YmljT3V0IH0gZnJvbSBcInN2ZWx0ZS9lYXNpbmdcIjtcbiAgaW1wb3J0IHsgZXh0ZW50LCBpbnRlcnBvbGF0ZUhjbCwgc2NhbGVTcXJ0LCBzY2FsZUxpbmVhciB9IGZyb20gXCJkM1wiO1xuXG4gIC8vIHV0aWxpdHkgZnVuY3Rpb24gZm9yIHRyYW5zbGF0aW5nIGVsZW1lbnRzXG4gIGNvbnN0IG1vdmUgPSAoeCwgeSkgPT4gYHRyYW5zZm9ybTogdHJhbnNsYXRlKCR7eH1weCwgJHt5fXB4YDtcblxuICBleHBvcnQgbGV0IGRhdGEgPSBbXTtcbiAgLy8gYWNjZXNzb3IgZnVuY3Rpb25zIHRvIHF1aWNrbHkgcGl2b3QgYmV0d2VlbiBkYXRhIHN0cnVjdHVyZXNcbiAgZXhwb3J0IGxldCB4QWNjZXNzb3IgPSBkID0+IGRbMF07XG4gIGV4cG9ydCBsZXQgeUFjY2Vzc29yID0gZCA9PiBkWzFdO1xuICBleHBvcnQgbGV0IHJBY2Nlc3NvciA9IGQgPT4gZFsyXTtcbiAgZXhwb3J0IGxldCBtYXJnaW5zID0ge1xuICAgIC8vIHR5cGljYWwgZDMgbWFyZ2luIGNvbnZlbnRpb25cbiAgICB0b3A6IDIwLFxuICAgIHJpZ2h0OiAyMCxcbiAgICBib3R0b206IDIwLFxuICAgIGxlZnQ6IDIwXG4gIH07XG5cbiAgbGV0IHdpZHRoID0gMTIwMDtcbiAgJDogaGVpZ2h0ID0gd2lkdGg7XG4gICQ6IG1haW5XaWR0aCA9IHdpZHRoIC0gbWFyZ2lucy5yaWdodCAtIG1hcmdpbnMubGVmdDtcbiAgJDogbWFpbkhlaWdodCA9IGhlaWdodCAtIG1hcmdpbnMudG9wIC0gbWFyZ2lucy5ib3R0b207XG5cbiAgLy8gdGhlIGJpZ2dlc3QgY29uc3RyYWludCBoZXJlOlxuICAvLyB0aGUgbnVtYmVyIG9mIGRvdHMgaGFzIHRvIHJlbWFpbiBzdGF0aWNcbiAgLy8gb25lIHdvcmthcm91bmQgaXMgdG8gaGF2ZSBhIHZlcnkgbG9uZyBhcnJheSxcbiAgLy8gYW5kIGdpdmUgZXh0cmEgbm9kZXMgbm8gcmFkaXVzIChyPTApXG4gIGxldCBkb3RzID0gc3ByaW5nKFxuICAgIGRhdGEubWFwKChkLCBpKSA9PiAoe1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgICByOiAwXG4gICAgfSkpLFxuICAgIHtcbiAgICAgIHN0aWZmbmVzczogMC4xLFxuICAgICAgZGFtcGluZzogMC45XG4gICAgfVxuICApO1xuXG4gIC8vIG1ha2UgbWUgc29tZSBzY2FsZXMhXG4gICQ6IHhTY2FsZSA9IHNjYWxlTGluZWFyKClcbiAgICAuZG9tYWluKGV4dGVudChkYXRhLCB4QWNjZXNzb3IpKVxuICAgIC5yYW5nZShbMCwgbWFpbldpZHRoXSk7XG4gICQ6IHlTY2FsZSA9IHNjYWxlTGluZWFyKClcbiAgICAuZG9tYWluKGV4dGVudChkYXRhLCB5QWNjZXNzb3IpKVxuICAgIC5yYW5nZShbbWFpbkhlaWdodCwgMF0pO1xuICAkOiByU2NhbGUgPSBzY2FsZVNxcnQoKVxuICAgIC5kb21haW4oZXh0ZW50KGRhdGEsIHJBY2Nlc3NvcikpXG4gICAgLnJhbmdlKFswLCAyMF0pO1xuICBjb25zdCBjb2xvclNjYWxlID0gc2NhbGVMaW5lYXIoKVxuICAgIC5kb21haW4oWzAsIDIwXSlcbiAgICAucmFuZ2UoW1widG9tYXRvXCIsIFwiY29ybmZsb3dlcmJsdWVcIl0pXG4gICAgLmludGVycG9sYXRlKGludGVycG9sYXRlSGNsKTtcblxuICAvLyB1cGRhdGUgJGRvdHMnIHgsIHksIGFuZCByIGF0dHJpYnV0ZXNcbiAgLy8gYHNwcmluZ2Agd2lsbCBoYW5kbGUgdGhlIGFuaW1hdGlvbi9pbnRlcnBvbGF0aW9uXG4gIGNvbnN0IHVwZGF0ZURhdGEgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3RG90cyA9IGRhdGEubWFwKChkLCBpKSA9PiAoe1xuICAgICAgeDogeFNjYWxlKHhBY2Nlc3NvcihkKSksXG4gICAgICB5OiB5U2NhbGUoeUFjY2Vzc29yKGQpKSxcbiAgICAgIHI6IHJTY2FsZShyQWNjZXNzb3IoZCkpXG4gICAgfSkpO1xuICAgIGRvdHMuc2V0KG5ld0RvdHMpO1xuICB9O1xuXG4gICQ6IGRhdGEsIG1haW5XaWR0aCwgdXBkYXRlRGF0YSgpO1xuPC9zY3JpcHQ+XG5cbjxmaWd1cmUgY2xhc3M9XCJjXCIgYmluZDpjbGllbnRXaWR0aD17d2lkdGh9PlxuICA8c3ZnIHt3aWR0aH0ge2hlaWdodH0+XG4gICAgPGcgc3R5bGU9e21vdmUobWFyZ2lucy50b3AsIG1hcmdpbnMubGVmdCl9PlxuICAgICAgeyNlYWNoICRkb3RzIGFzIHsgeCwgeSwgciB9fVxuICAgICAgICA8Y2lyY2xlIHN0eWxlPXttb3ZlKHgsIHkpfSByPXtNYXRoLm1heCgwLCByKX0gZmlsbD17Y29sb3JTY2FsZShyKX0gLz5cbiAgICAgIHsvZWFjaH1cbiAgICA8L2c+XG4gIDwvc3ZnPlxuPC9maWd1cmU+XG4iLCI8c2NyaXB0PlxuICBleHBvcnQgbGV0IG9wdGlvbnMgPSBbXVxuICBleHBvcnQgbGV0IHZhbHVlID0gbnVsbFxuICBleHBvcnQgbGV0IG9uQ2hhbmdlID0gKCkgPT4ge31cblxuICBjb25zdCBvbkNoYW5nZUxvY2FsID0gb3B0aW9uID0+IHtcbiAgICBvbkNoYW5nZShvcHRpb24pXG4gICAgdmFsdWUgPSBvcHRpb24uaWRcbiAgfVxuPC9zY3JpcHQ+XG5cbjxkaXYgY2xhc3M9XCJjXCI+XG4gIHsjZWFjaCBvcHRpb25zIGFzIG9wdGlvbn1cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cIm9wdGlvblwiXG4gICAgICBjbGFzczpzZWxlY3RlZD1cIntvcHRpb24uaWQgPT0gdmFsdWV9XCJcbiAgICAgIG9uOmNsaWNrPVwieygpID0+IG9uQ2hhbmdlTG9jYWwob3B0aW9uKX1cIj5cbiAgICAgIHtvcHRpb24ubGFiZWx9XG4gICAgPC9idXR0b24+XG4gIHsvZWFjaH1cbjwvZGl2PlxuXG48c3R5bGU+XG4gIC5jIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgYnV0dG9uLm9wdGlvbiB7XG4gICAgcGFkZGluZzogMC42ZW0gMWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAub3B0aW9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWNlY2YxO1xuICB9XG4gIC5vcHRpb24uc2VsZWN0ZWQsXG4gIC5vcHRpb24uc2VsZWN0ZWQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLyogZ3JhdnkgKi9cbiAgLm9wdGlvbiArIC5vcHRpb24ge1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICB9XG4gIC5vcHRpb246Zmlyc3Qtb2YtdHlwZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4IDAgMCA2cHg7XG4gIH1cbiAgLm9wdGlvbjpsYXN0LW9mLXR5cGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDAgNnB4IDZweCAwO1xuICB9XG48L3N0eWxlPlxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBhcnJvdzogW1xuICAgIFwiTTAuMjAwMjc1IDEzLjI3ODJDMC4yMDAyNzUgMTIuNDE1MyAwLjg5OTgzIDExLjcxNTcgMS43NjI3OCAxMS43MTU3SDIzLjYzNzhDMjQuNTAwNyAxMS43MTU3IDI1LjIwMDMgMTIuNDE1MyAyNS4yMDAzIDEzLjI3ODJDMjUuMjAwMyAxNC4xNDExIDI0LjUwMDcgMTQuODQwNyAyMy42Mzc4IDE0Ljg0MDdIMS43NjI3OEMwLjg5OTgzIDE0Ljg0MDcgMC4yMDAyNzUgMTQuMTQxMSAwLjIwMDI3NSAxMy4yNzgyWlwiLFxuICAgIFwiTTExLjU5NTQgMS4yMzU4NEMxMi4yMDU2IDAuNjI1NjUgMTMuMTk0OSAwLjYyNTY1IDEzLjgwNTEgMS4yMzU4NEwyNC43NDI2IDEyLjE3MzNDMjUuMzUyOCAxMi43ODM1IDI1LjM1MjggMTMuNzcyOSAyNC43NDI2IDE0LjM4MzFMMTMuODA1MSAyNS4zMjA2QzEzLjE5NDkgMjUuOTMwNyAxMi4yMDU2IDI1LjkzMDcgMTEuNTk1NCAyNS4zMjA2QzEwLjk4NTIgMjQuNzEwNCAxMC45ODUyIDIzLjcyMSAxMS41OTU0IDIzLjExMDhMMjEuNDI4MSAxMy4yNzgyTDExLjU5NTQgMy40NDU1NUMxMC45ODUyIDIuODM1MzYgMTAuOTg1MiAxLjg0NjA0IDExLjU5NTQgMS4yMzU4NFpcIixcbiAgXSxcbiAgYXN0ZXJpc2s6IFtcbiAgICBcIk0xMy45NTE4IDEuMDU0MjJDMTMuOTUxOCAwLjQ3MTk4OSAxMy40Nzk4IDAgMTIuODk3NiAwQzEyLjMxNTQgMCAxMS44NDM0IDAuNDcxOTg5IDExLjg0MzQgMS4wNTQyMlYxMC41NjE3QzExLjc2NjggMTAuNjA2NCAxMS42OTQ3IDEwLjY2MTYgMTEuNjI5MSAxMC43MjcyQzExLjU5MjMgMTAuNzY0IDExLjU1ODcgMTAuODAyOSAxMS41Mjg1IDEwLjg0MzRIMi4wNTQyMkMxLjQ3MTk5IDEwLjg0MzQgMSAxMS4zMTU0IDEgMTEuODk3NkMxIDEyLjQ3OTggMS40NzE5OSAxMi45NTE4IDIuMDU0MjIgMTIuOTUxOEgxMS40NjM1QzExLjUwODMgMTMuMDI4NCAxMS41NjM0IDEzLjEwMDUgMTEuNjI5MSAxMy4xNjYxQzExLjY5NDcgMTMuMjMxOCAxMS43NjY4IDEzLjI4NjkgMTEuODQzNCAxMy4zMzE2VjIzLjk0NThDMTEuODQzNCAyNC41MjggMTIuMzE1NCAyNSAxMi44OTc2IDI1QzEzLjQ3OTggMjUgMTMuOTUxOCAyNC41MjggMTMuOTUxOCAyMy45NDU4VjEzLjA3MjFDMTMuOTU1NSAxMy4wNjg1IDEzLjk1OTMgMTMuMDY0OCAxMy45NjMgMTMuMDYxMUMxMy45OTc3IDEzLjAyNjQgMTQuMDI5NSAxMi45ODk5IDE0LjA1ODQgMTIuOTUxOEgyMy43NDFDMjQuMzIzMiAxMi45NTE4IDI0Ljc5NTIgMTIuNDc5OCAyNC43OTUyIDExLjg5NzZDMjQuNzk1MiAxMS4zMTU0IDI0LjMyMzIgMTAuODQzNCAyMy43NDEgMTAuODQzNEgxMy45NzRMMTMuOTYzIDEwLjgzMjJMMTMuOTUxOCAxMC44MjEyVjEuMDU0MjJaTTIxLjk3MTggMi44MjM0MkMyMi4zODM1IDMuMjM1MTIgMjIuMzgzNSAzLjkwMjYxIDIxLjk3MTggNC4zMTQzMUwyMS41NTAyIDQuNzM1ODJDMjEuMTM4NSA1LjE0NzUyIDIwLjQ3MTEgNS4xNDc1MiAyMC4wNTk0IDQuNzM1ODJDMTkuNjQ3NyA0LjMyNDEzIDE5LjY0NzcgMy42NTY2MyAyMC4wNTk0IDMuMjQ0OTRMMjAuNDgwOSAyLjgyMzQyQzIwLjg5MjYgMi40MTE3MiAyMS41NjAxIDIuNDExNzIgMjEuOTcxOCAyLjgyMzQyWk0xOC4xNzgxIDYuNjE3MDZDMTguNTg5OCA3LjAyODc2IDE4LjU4OTggNy42OTYyNSAxOC4xNzgxIDguMTA3OTVMMTcuMzM1MSA4Ljk1MDk4QzE2LjkyMzQgOS4zNjI2NyAxNi4yNTU5IDkuMzYyNjcgMTUuODQ0MiA4Ljk1MDk4QzE1LjQzMjUgOC41MzkyOCAxNS40MzI1IDcuODcxNzkgMTUuODQ0MiA3LjQ2MDA5TDE2LjY4NzIgNi42MTcwNkMxNy4wOTg5IDYuMjA1MzYgMTcuNzY2NCA2LjIwNTM2IDE4LjE3ODEgNi42MTcwNlpNOS43NDc4MiAxNS4wNDc0QzEwLjE1OTUgMTUuNDU5MSAxMC4xNTk1IDE2LjEyNjYgOS43NDc4MiAxNi41MzgzTDguOTA0NzkgMTcuMzgxM0M4LjQ5MzA5IDE3Ljc5MyA3LjgyNTYgMTcuNzkzIDcuNDEzOSAxNy4zODEzQzcuMDAyMiAxNi45Njk2IDcuMDAyMiAxNi4zMDIxIDcuNDEzOSAxNS44OTA0TDguMjU2OTMgMTUuMDQ3NEM4LjY2ODYzIDE0LjYzNTcgOS4zMzYxMiAxNC42MzU3IDkuNzQ3ODIgMTUuMDQ3NFpNNS41MzI2NyAxOS4yNjI1QzUuOTQ0MzYgMTkuNjc0MiA1Ljk0NDM2IDIwLjM0MTcgNS41MzI2NyAyMC43NTM0TDUuMTExMTUgMjEuMTc0OUM0LjY5OTQ1IDIxLjU4NjYgNC4wMzE5NiAyMS41ODY2IDMuNjIwMjYgMjEuMTc0OUMzLjIwODU2IDIwLjc2MzIgMy4yMDg1NiAyMC4wOTU3IDMuNjIwMjYgMTkuNjg0TDQuMDQxNzggMTkuMjYyNUM0LjQ1MzQ3IDE4Ljg1MDggNS4xMjA5NyAxOC44NTA4IDUuNTMyNjcgMTkuMjYyNVpNMjAuNDgwOSAyMS4wNjk5QzIwLjg5MjYgMjEuNDgxNiAyMS41NjAxIDIxLjQ4MTYgMjEuOTcxOCAyMS4wNjk5QzIyLjM4MzUgMjAuNjU4MiAyMi4zODM1IDE5Ljk5MDcgMjEuOTcxOCAxOS41NzlMMjEuNTUwMiAxOS4xNTc1QzIxLjEzODUgMTguNzQ1OCAyMC40NzExIDE4Ljc0NTggMjAuMDU5NCAxOS4xNTc1QzE5LjY0NzcgMTkuNTY5MiAxOS42NDc3IDIwLjIzNjcgMjAuMDU5NCAyMC42NDg0TDIwLjQ4MDkgMjEuMDY5OVpNMTYuNjg3MiAxNy4yNzYzQzE3LjA5ODkgMTcuNjg4IDE3Ljc2NjQgMTcuNjg4IDE4LjE3ODEgMTcuMjc2M0MxOC41ODk4IDE2Ljg2NDYgMTguNTg5OCAxNi4xOTcxIDE4LjE3ODEgMTUuNzg1NEwxNy4zMzUxIDE0Ljk0MjRDMTYuOTIzNCAxNC41MzA3IDE2LjI1NTkgMTQuNTMwNyAxNS44NDQyIDE0Ljk0MjRDMTUuNDMyNSAxNS4zNTQxIDE1LjQzMjUgMTYuMDIxNiAxNS44NDQyIDE2LjQzMzNMMTYuNjg3MiAxNy4yNzYzWk04LjI1NjkzIDguODQ1OTlDOC42Njg2MyA5LjI1NzY5IDkuMzM2MTIgOS4yNTc2OSA5Ljc0NzgyIDguODQ1OTlDMTAuMTU5NSA4LjQzNDI5IDEwLjE1OTUgNy43NjY4IDkuNzQ3ODIgNy4zNTUxTDguOTA0NzkgNi41MTIwN0M4LjQ5MzA5IDYuMTAwMzcgNy44MjU2IDYuMTAwMzcgNy40MTM5IDYuNTEyMDdDNy4wMDIyIDYuOTIzNzcgNy4wMDIyIDcuNTkxMjYgNy40MTM5IDguMDAyOTZMOC4yNTY5MyA4Ljg0NTk5Wk00LjA0MTc4IDQuNjMwODRDNC40NTM0NyA1LjA0MjUzIDUuMTIwOTcgNS4wNDI1MyA1LjUzMjY3IDQuNjMwODRDNS45NDQzNiA0LjIxOTE0IDUuOTQ0MzYgMy41NTE2NSA1LjUzMjY3IDMuMTM5OTVMNS4xMTExNSAyLjcxODQzQzQuNjk5NDUgMi4zMDY3NCA0LjAzMTk2IDIuMzA2NzMgMy42MjAyNiAyLjcxODQzQzMuMjA4NTYgMy4xMzAxMyAzLjIwODU2IDMuNzk3NjIgMy42MjAyNiA0LjIwOTMyTDQuMDQxNzggNC42MzA4NFpcIixcbiAgXSxcbiAgY2hlY2s6IFtcbiAgICBcIk0yNC4zNTIyIDMuNjQ3ODZDMjMuNDg4MyAyLjc4NDA1IDIyLjA4NzggMi43ODQwNSAyMS4yMjQgMy42NDc4Nkw4LjY0MTk4IDE2LjIyOTlMMy43NzYwMSAxMS4zNjM5QzIuOTEyMiAxMC41MDAxIDEuNTExNjggMTAuNTAwMSAwLjY0Nzg2MSAxMS4zNjM5Qy0wLjIxNTk1NCAxMi4yMjc3IC0wLjIxNTk1NCAxMy42MjgzIDAuNjQ3ODYxIDE0LjQ5MjFMNy4wNzc5MSAyMC45MjIxQzcuOTQxNzIgMjEuNzg1OSA5LjM0MjI0IDIxLjc4NTkgMTAuMjA2MSAyMC45MjIxTDI0LjM1MjIgNi43NzYwMUwyMy42OTc0IDYuMTIxMjhMMjQuMzUyMiA2Ljc3NjAxQzI1LjIxNiA1LjkxMjIgMjUuMjE2IDQuNTExNjggMjQuMzUyMiAzLjY0Nzg2TDIzLjY5NzQgNC4zMDI1OUwyNC4zNTIyIDMuNjQ3ODZaXCIsXG4gIF0sXG4gIGNvZmZlZTogW1xuICAgIFwiTTYuNjkwNjkgMS45Njg3OUM2LjY5MDY5IDEuMzY4NDggNi4yMDQwNSAwLjg4MTgzNiA1LjYwMzc0IDAuODgxODM2QzUuMDAzNDMgMC44ODE4MzYgNC41MTY3OCAxLjM2ODQ4IDQuNTE2NzggMS45Njg3OVY1LjIyOTY2QzQuNTE2NzggNS44Mjk5NyA1LjAwMzQzIDYuMzE2NjIgNS42MDM3NCA2LjMxNjYyQzYuMjA0MDUgNi4zMTY2MiA2LjY5MDY5IDUuODI5OTcgNi42OTA2OSA1LjIyOTY2VjEuOTY4NzlaTTAuMTY4OTU1IDkuNTc3NDlDMC4xNjg5NTUgOC45NzcxOCAwLjY1NTYwMiA4LjQ5MDUzIDEuMjU1OTEgOC40OTA1M0gxOC42NDcySDE5LjczNDJDMjEuMTc1NiA4LjQ5MDUzIDIyLjU1NzkgOS4wNjMxMiAyMy41NzcxIDEwLjA4MjNDMjQuNTk2NCAxMS4xMDE2IDI1LjE2OSAxMi40ODM5IDI1LjE2OSAxMy45MjUzQzI1LjE2OSAxNS4zNjY3IDI0LjU5NjQgMTYuNzQ5MSAyMy41NzcxIDE3Ljc2ODNDMjIuNTU3OSAxOC43ODc1IDIxLjE3NTYgMTkuMzYwMSAxOS43MzQyIDE5LjM2MDFDMTkuNzM0MiAyMC44MDE1IDE5LjE2MTYgMjIuMTgzOCAxOC4xNDI0IDIzLjIwMzFDMTcuMTIzMSAyNC4yMjIzIDE1Ljc0MDggMjQuNzk0OSAxNC4yOTk0IDI0Ljc5NDlINS42MDM3NEM0LjE2MjM0IDI0Ljc5NDkgMi43Nzk5OCAyNC4yMjIzIDEuNzYwNzcgMjMuMjAzMUMwLjc0MTU0NyAyMi4xODM4IDAuMTY4OTU1IDIwLjgwMTUgMC4xNjg5NTUgMTkuMzYwMVY5LjU3NzQ5Wk0xOS43MzQyIDE3LjE4NjJWMTAuNjY0NEMyMC41OTkgMTAuNjY0NCAyMS40Mjg0IDExLjAwOCAyMi4wNCAxMS42MTk1QzIyLjY1MTUgMTIuMjMxMSAyMi45OTUgMTMuMDYwNSAyMi45OTUgMTMuOTI1M0MyMi45OTUgMTQuNzkwMSAyMi42NTE1IDE1LjYxOTYgMjIuMDQgMTYuMjMxMUMyMS40Mjg0IDE2Ljg0MjYgMjAuNTk5IDE3LjE4NjIgMTkuNzM0MiAxNy4xODYyWk0xNy41NjAzIDEwLjY2NDRWMTguMjczMVYxOS4zNjAxQzE3LjU2MDMgMjAuMjI0OSAxNy4yMTY3IDIxLjA1NDMgMTYuNjA1MiAyMS42NjU5QzE1Ljk5MzYgMjIuMjc3NCAxNS4xNjQyIDIyLjYyMSAxNC4yOTk0IDIyLjYyMUg1LjYwMzc0QzQuNzM4OSAyMi42MjEgMy45MDk0OSAyMi4yNzc0IDMuMjk3OTUgMjEuNjY1OUMyLjY4NjQyIDIxLjA1NDMgMi4zNDI4NyAyMC4yMjQ5IDIuMzQyODcgMTkuMzYwMVYxMC42NjQ0SDE3LjU2MDNaTTkuOTUxNTYgMC44ODE4MzZDMTAuNTUxOSAwLjg4MTgzNiAxMS4wMzg1IDEuMzY4NDggMTEuMDM4NSAxLjk2ODc5VjUuMjI5NjZDMTEuMDM4NSA1LjgyOTk3IDEwLjU1MTkgNi4zMTY2MiA5Ljk1MTU2IDYuMzE2NjJDOS4zNTEyNSA2LjMxNjYyIDguODY0NjEgNS44Mjk5NyA4Ljg2NDYxIDUuMjI5NjZWMS45Njg3OUM4Ljg2NDYxIDEuMzY4NDggOS4zNTEyNSAwLjg4MTgzNiA5Ljk1MTU2IDAuODgxODM2Wk0xNS4zODYzIDEuOTY4NzlDMTUuMzg2MyAxLjM2ODQ4IDE0Ljg5OTcgMC44ODE4MzYgMTQuMjk5NCAwLjg4MTgzNkMxMy42OTkxIDAuODgxODM2IDEzLjIxMjQgMS4zNjg0OCAxMy4yMTI0IDEuOTY4NzlWNS4yMjk2NkMxMy4yMTI0IDUuODI5OTcgMTMuNjk5MSA2LjMxNjYyIDE0LjI5OTQgNi4zMTY2MkMxNC44OTk3IDYuMzE2NjIgMTUuMzg2MyA1LjgyOTk3IDE1LjM4NjMgNS4yMjk2NlYxLjk2ODc5WlwiLFxuICBdLFxuICBjb3B5OiBbXG4gICAgXCJNMi45ODMyNSAzLjU4MzIyQzMuMTk2MzYgMy4zNzAxMSAzLjQ4NTM5IDMuMjUwMzkgMy43ODY3OCAzLjI1MDM5SDE0LjAxNEMxNC4zMTU0IDMuMjUwMzkgMTQuNjA0NSAzLjM3MDExIDE0LjgxNzYgMy41ODMyMkMxNS4wMzA3IDMuNzk2MzMgMTUuMTUwNCA0LjA4NTM3IDE1LjE1MDQgNC4zODY3NVY1LjUyMzEyQzE1LjE1MDQgNi4xNTA3MSAxNS42NTkyIDYuNjU5NDggMTYuMjg2OCA2LjY1OTQ4QzE2LjkxNDQgNi42NTk0OCAxNy40MjMxIDYuMTUwNzEgMTcuNDIzMSA1LjUyMzEyVjQuMzg2NzVDMTcuNDIzMSAzLjQ4MjYgMTcuMDY0IDIuNjE1NDkgMTYuNDI0NiAxLjk3NjE2QzE1Ljc4NTMgMS4zMzY4MyAxNC45MTgyIDAuOTc3NjYxIDE0LjAxNCAwLjk3NzY2MUgzLjc4Njc4QzIuODgyNjMgMC45Nzc2NjEgMi4wMTU1MSAxLjMzNjgzIDEuMzc2MTkgMS45NzYxNkMwLjczNjg1NiAyLjYxNTQ5IDAuMzc3Njg2IDMuNDgyNiAwLjM3NzY4NiA0LjM4Njc1VjE0LjYxNEMwLjM3NzY4NiAxNS41MTgyIDAuNzM2ODU3IDE2LjM4NTMgMS4zNzYxOSAxNy4wMjQ2QzIuMDE1NTEgMTcuNjYzOSAyLjg4MjYzIDE4LjAyMzEgMy43ODY3OCAxOC4wMjMxSDQuOTIzMTRDNS41NTA3NCAxOC4wMjMxIDYuMDU5NSAxNy41MTQzIDYuMDU5NSAxNi44ODY4QzYuMDU5NSAxNi4yNTkyIDUuNTUwNzQgMTUuNzUwNCA0LjkyMzE0IDE1Ljc1MDRIMy43ODY3OEMzLjQ4NTM5IDE1Ljc1MDQgMy4xOTYzNiAxNS42MzA3IDIuOTgzMjUgMTUuNDE3NkMyLjc3MDE0IDE1LjIwNDQgMi42NTA0MSAxNC45MTU0IDIuNjUwNDEgMTQuNjE0VjQuMzg2NzVDMi42NTA0MSA0LjA4NTM3IDIuNzcwMTQgMy43OTYzMyAyLjk4MzI1IDMuNTgzMjJaTTEwLjYwNSAxMi4zNDEzQzEwLjYwNSAxMS43MTM3IDExLjExMzcgMTEuMjA0OSAxMS43NDEzIDExLjIwNDlIMjEuOTY4NkMyMi41OTYyIDExLjIwNDkgMjMuMTA1IDExLjcxMzcgMjMuMTA1IDEyLjM0MTNWMjIuNTY4NkMyMy4xMDUgMjMuMTk2MiAyMi41OTYyIDIzLjcwNDkgMjEuOTY4NiAyMy43MDQ5SDExLjc0MTNDMTEuMTEzNyAyMy43MDQ5IDEwLjYwNSAyMy4xOTYyIDEwLjYwNSAyMi41Njg2VjEyLjM0MTNaTTExLjc0MTMgOC45MzIyMUM5Ljg1ODUzIDguOTMyMjEgOC4zMzIyMyAxMC40NTg1IDguMzMyMjMgMTIuMzQxM1YyMi41Njg2QzguMzMyMjMgMjQuNDUxNCA5Ljg1ODUzIDI1Ljk3NzcgMTEuNzQxMyAyNS45Nzc3SDIxLjk2ODZDMjMuODUxNCAyNS45Nzc3IDI1LjM3NzcgMjQuNDUxNCAyNS4zNzc3IDIyLjU2ODZWMTIuMzQxM0MyNS4zNzc3IDEwLjQ1ODUgMjMuODUxNCA4LjkzMjIxIDIxLjk2ODYgOC45MzIyMUgxMS43NDEzWlwiLFxuICBdLFxuICBkb3dubG9hZDogW1xuICAgIFwiTTIuMjExOTEgMTUuNDI3N0MyLjkwMjI3IDE1LjQyNzcgMy40NjE5MSAxNS45ODc0IDMuNDYxOTEgMTYuNjc3N1YyMS42Nzc3QzMuNDYxOTEgMjIuMDA5MyAzLjU5MzYxIDIyLjMyNzIgMy44MjgwMyAyMi41NjE2QzQuMDYyNDUgMjIuNzk2IDQuMzgwMzkgMjIuOTI3NyA0LjcxMTkxIDIyLjkyNzdIMjIuMjExOUMyMi41NDM0IDIyLjkyNzcgMjIuODYxNCAyMi43OTYgMjMuMDk1OCAyMi41NjE2QzIzLjMzMDIgMjIuMzI3MiAyMy40NjE5IDIyLjAwOTMgMjMuNDYxOSAyMS42Nzc3VjE2LjY3NzdDMjMuNDYxOSAxNS45ODc0IDI0LjAyMTYgMTUuNDI3NyAyNC43MTE5IDE1LjQyNzdDMjUuNDAyMyAxNS40Mjc3IDI1Ljk2MTkgMTUuOTg3NCAyNS45NjE5IDE2LjY3NzdWMjEuNjc3N0MyNS45NjE5IDIyLjY3MjMgMjUuNTY2OCAyMy42MjYxIDI0Ljg2MzYgMjQuMzI5NEMyNC4xNjAzIDI1LjAzMjYgMjMuMjA2NSAyNS40Mjc3IDIyLjIxMTkgMjUuNDI3N0g0LjcxMTkxQzMuNzE3MzUgMjUuNDI3NyAyLjc2MzUyIDI1LjAzMjYgMi4wNjAyNiAyNC4zMjk0QzEuMzU3IDIzLjYyNjEgMC45NjE5MTQgMjIuNjcyMyAwLjk2MTkxNCAyMS42Nzc3VjE2LjY3NzdDMC45NjE5MTQgMTUuOTg3NCAxLjUyMTU2IDE1LjQyNzcgMi4yMTE5MSAxNS40Mjc3WlwiLFxuICAgIFwiTTYuMzI4MDMgOS41NDM4NUM2LjgxNjE5IDkuMDU1NyA3LjYwNzY0IDkuMDU1NyA4LjA5NTggOS41NDM4NUwxMy40NjE5IDE0LjkxTDE4LjgyOCA5LjU0Mzg1QzE5LjMxNjIgOS4wNTU3IDIwLjEwNzYgOS4wNTU3IDIwLjU5NTggOS41NDM4NUMyMS4wODQgMTAuMDMyIDIxLjA4NCAxMC44MjM1IDIwLjU5NTggMTEuMzExNkwxNC4zNDU4IDE3LjU2MTZDMTMuODU3NiAxOC4wNDk4IDEzLjA2NjIgMTguMDQ5OCAxMi41NzggMTcuNTYxNkw2LjMyODAzIDExLjMxMTZDNS44Mzk4OCAxMC44MjM1IDUuODM5ODggMTAuMDMyIDYuMzI4MDMgOS41NDM4NVpcIixcbiAgICBcIk0xMy40NjE5IDAuNDI3NzM0QzE0LjE1MjMgMC40Mjc3MzQgMTQuNzExOSAwLjk4NzM3OCAxNC43MTE5IDEuNjc3NzNWMTYuNjc3N0MxNC43MTE5IDE3LjM2ODEgMTQuMTUyMyAxNy45Mjc3IDEzLjQ2MTkgMTcuOTI3N0MxMi43NzE2IDE3LjkyNzcgMTIuMjExOSAxNy4zNjgxIDEyLjIxMTkgMTYuNjc3N1YxLjY3NzczQzEyLjIxMTkgMC45ODczNzggMTIuNzcxNiAwLjQyNzczNCAxMy40NjE5IDAuNDI3NzM0WlwiLFxuICBdLFxuICBleHRlcm5hbDogW1xuICAgIFwiTTI1LjM2NzMgMS4yODMxMkMyNS4zMDc3IDEuMTM5MDQgMjUuMjIgMS4wMDM4NCAyNS4xMDQyIDAuODg1OTFDMjUuMDk4OCAwLjg4MDQyIDI1LjA5MzMgMC44NzQ5OCAyNS4wODc4IDAuODY5NTlDMjQuODYyMyAwLjY0ODE2MyAyNC41NTMyIDAuNTExNTk3IDI0LjIxMjIgMC41MTE1OTdIMjQuMjExOUgxNi43MTIyQzE2LjAyMTggMC41MTE1OTcgMTUuNDYyMiAxLjA3MTI0IDE1LjQ2MjIgMS43NjE2QzE1LjQ2MjIgMi40NTE5NSAxNi4wMjE4IDMuMDExNiAxNi43MTIyIDMuMDExNkgyMS4xOTQ0TDkuNTc4MjcgMTQuNjI3N0M5LjA5MDEyIDE1LjExNTkgOS4wOTAxMiAxNS45MDczIDkuNTc4MjcgMTYuMzk1NUMxMC4wNjY0IDE2Ljg4MzYgMTAuODU3OSAxNi44ODM2IDExLjM0NiAxNi4zOTU1TDIyLjk2MjIgNC43NzkzNlY5LjI2MTZDMjIuOTYyMiA5Ljk1MTk1IDIzLjUyMTggMTAuNTExNiAyNC4yMTIyIDEwLjUxMTZDMjQuOTAyNSAxMC41MTE2IDI1LjQ2MjIgOS45NTE5NSAyNS40NjIyIDkuMjYxNlYxLjc2MjY5QzI1LjQ2MjIgMS43NTg0OCAyNS40NjIxIDEuNzU0MjcgMjUuNDYyMSAxLjc1MDA2QzI1LjQ2MDYgMS41OTEwOCAyNS40MjkgMS40MzIzMyAyNS4zNjczIDEuMjgzMTJaTTQuMjEyMTYgNi43NjE2QzMuODgwNjQgNi43NjE2IDMuNTYyNyA2Ljg5MzI5IDMuMzI4MjcgNy4xMjc3MUMzLjA5Mzg1IDcuMzYyMTMgMi45NjIxNiA3LjY4MDA4IDIuOTYyMTYgOC4wMTE2VjIxLjc2MTZDMi45NjIxNiAyMi4wOTMxIDMuMDkzODUgMjIuNDExMSAzLjMyODI3IDIyLjY0NTVDMy41NjI3IDIyLjg3OTkgMy44ODA2NCAyMy4wMTE2IDQuMjEyMTYgMjMuMDExNkgxNy45NjIyQzE4LjI5MzcgMjMuMDExNiAxOC42MTE2IDIyLjg3OTkgMTguODQ2IDIyLjY0NTVDMTkuMDgwNSAyMi40MTExIDE5LjIxMjIgMjIuMDkzMSAxOS4yMTIyIDIxLjc2MTZWMTQuMjYxNkMxOS4yMTIyIDEzLjU3MTIgMTkuNzcxOCAxMy4wMTE2IDIwLjQ2MjIgMTMuMDExNkMyMS4xNTI1IDEzLjAxMTYgMjEuNzEyMiAxMy41NzEyIDIxLjcxMjIgMTQuMjYxNlYyMS43NjE2QzIxLjcxMjIgMjIuNzU2MiAyMS4zMTcxIDIzLjcxIDIwLjYxMzggMjQuNDEzMkMxOS45MTA1IDI1LjExNjUgMTguOTU2NyAyNS41MTE2IDE3Ljk2MjIgMjUuNTExNkg0LjIxMjE2QzMuMjE3NiAyNS41MTE2IDIuMjYzNzcgMjUuMTE2NSAxLjU2MDUxIDI0LjQxMzJDMC44NTcyNDYgMjMuNzEgMC40NjIxNTggMjIuNzU2MiAwLjQ2MjE1OCAyMS43NjE2VjguMDExNkMwLjQ2MjE1OCA3LjAxNzA0IDAuODU3MjQ2IDYuMDYzMjEgMS41NjA1MSA1LjM1OTk1QzIuMjYzNzcgNC42NTY2OCAzLjIxNzYgNC4yNjE2IDQuMjEyMTYgNC4yNjE2SDExLjcxMjJDMTIuNDAyNSA0LjI2MTYgMTIuOTYyMiA0LjgyMTI0IDEyLjk2MjIgNS41MTE2QzEyLjk2MjIgNi4yMDE5NSAxMi40MDI1IDYuNzYxNiAxMS43MTIyIDYuNzYxNkg0LjIxMjE2WlwiLFxuICBdLFxuICBmaWxlOiBbXG4gICAgXCJNNC4wMDA0NSAxLjYzMjI5QzQuNjM5NzggMC45OTI5NiA1LjUwNjkgMC42MzM3ODkgNi40MTEwNCAwLjYzMzc4OUgxNC4zNjU2QzE0LjY2NyAwLjYzMzc4OSAxNC45NTYgMC43NTM1MTMgMTUuMTY5MSAwLjk2NjYyMkwyMy4xMjM3IDguOTIxMTdDMjMuMzM2OCA5LjEzNDI4IDIzLjQ1NjUgOS40MjMzMiAyMy40NTY1IDkuNzI0N1YyMi4yMjQ3QzIzLjQ1NjUgMjMuMTI4OCAyMy4wOTczIDIzLjk5NiAyMi40NTggMjQuNjM1M0MyMS44MTg3IDI1LjI3NDYgMjAuOTUxNiAyNS42MzM4IDIwLjA0NzQgMjUuNjMzOEg2LjQxMTA0QzUuNTA2OSAyNS42MzM4IDQuNjM5NzggMjUuMjc0NiA0LjAwMDQ1IDI0LjYzNTNDMy4zNjExMiAyMy45OTYgMy4wMDE5NSAyMy4xMjg4IDMuMDAxOTUgMjIuMjI0N1Y0LjA0Mjg4QzMuMDAxOTUgMy4xMzg3MyAzLjM2MTEyIDIuMjcxNjIgNC4wMDA0NSAxLjYzMjI5Wk02LjQxMTA0IDIuOTA2NTJDNi4xMDk2NiAyLjkwNjUyIDUuODIwNjIgMy4wMjYyNCA1LjYwNzUxIDMuMjM5MzVDNS4zOTQ0IDMuNDUyNDYgNS4yNzQ2OCAzLjc0MTUgNS4yNzQ2OCA0LjA0Mjg4VjIyLjIyNDdDNS4yNzQ2OCAyMi41MjYxIDUuMzk0NCAyMi44MTUxIDUuNjA3NTEgMjMuMDI4MkM1LjgyMDYyIDIzLjI0MTMgNi4xMDk2NiAyMy4zNjExIDYuNDExMDQgMjMuMzYxMUgyMC4wNDc0QzIwLjM0ODggMjMuMzYxMSAyMC42Mzc4IDIzLjI0MTMgMjAuODUwOSAyMy4wMjgyQzIxLjA2NCAyMi44MTUxIDIxLjE4MzggMjIuNTI2MSAyMS4xODM4IDIyLjIyNDdWMTAuMTk1NEwxMy44OTQ5IDIuOTA2NTJINi40MTEwNFpcIixcbiAgICBcIk0xNC4zNjU2IDAuNjMzNzg5QzE0Ljk5MzIgMC42MzM3ODkgMTUuNTAyIDEuMTQyNTYgMTUuNTAyIDEuNzcwMTVWOC41ODgzM0gyMi4zMjAyQzIyLjk0NzggOC41ODgzMyAyMy40NTY1IDkuMDk3MSAyMy40NTY1IDkuNzI0N0MyMy40NTY1IDEwLjM1MjMgMjIuOTQ3OCAxMC44NjExIDIyLjMyMDIgMTAuODYxMUgxNC4zNjU2QzEzLjczOCAxMC44NjExIDEzLjIyOTIgMTAuMzUyMyAxMy4yMjkyIDkuNzI0N1YxLjc3MDE1QzEzLjIyOTIgMS4xNDI1NiAxMy43MzggMC42MzM3ODkgMTQuMzY1NiAwLjYzMzc4OVpcIixcbiAgXSxcbiAgbGlzdDogW1xuICAgIFwiTTAgMTAuMjVDMCA5LjU1OTY0IDAuNTU5NjQ0IDkgMS4yNSA5SDE4Ljc1QzE5LjQ0MDQgOSAyMCA5LjU1OTY0IDIwIDEwLjI1QzIwIDEwLjk0MDQgMTkuNDQwNCAxMS41IDE4Ljc1IDExLjVIMS4yNUMwLjU1OTY0NCAxMS41IDAgMTAuOTQwNCAwIDEwLjI1WlwiLFxuICAgIFwiTTAgNS4yNUMwIDQuNTU5NjQgMC41NTk2NDQgNCAxLjI1IDRIMjMuNzVDMjQuNDQwNCA0IDI1IDQuNTU5NjQgMjUgNS4yNUMyNSA1Ljk0MDM2IDI0LjQ0MDQgNi41IDIzLjc1IDYuNUgxLjI1QzAuNTU5NjQ0IDYuNSAwIDUuOTQwMzYgMCA1LjI1WlwiLFxuICAgIFwiTTAgMTUuMjVDMCAxNC41NTk2IDAuNTU5NjQ0IDE0IDEuMjUgMTRIMjMuNzVDMjQuNDQwNCAxNCAyNSAxNC41NTk2IDI1IDE1LjI1QzI1IDE1Ljk0MDQgMjQuNDQwNCAxNi41IDIzLjc1IDE2LjVIMS4yNUMwLjU1OTY0NCAxNi41IDAgMTUuOTQwNCAwIDE1LjI1WlwiLFxuICAgIFwiTTAgMjAuMjVDMCAxOS41NTk2IDAuNTU5NjQ0IDE5IDEuMjUgMTlIMTguNzVDMTkuNDQwNCAxOSAyMCAxOS41NTk2IDIwIDIwLjI1QzIwIDIwLjk0MDQgMTkuNDQwNCAyMS41IDE4Ljc1IDIxLjVIMS4yNUMwLjU1OTY0NCAyMS41IDAgMjAuOTQwNCAwIDIwLjI1WlwiLFxuICBdLFxuICBtb25leTogW1xuICAgIFwiTTEzLjI5MTcgMEMxMy44NjcgMCAxNC4zMzMzIDAuNDY2MzcgMTQuMzMzMyAxLjA0MTY3VjIzLjk1ODNDMTQuMzMzMyAyNC41MzM2IDEzLjg2NyAyNSAxMy4yOTE3IDI1QzEyLjcxNjQgMjUgMTIuMjUgMjQuNTMzNiAxMi4yNSAyMy45NTgzVjEuMDQxNjdDMTIuMjUgMC40NjYzNyAxMi43MTY0IDAgMTMuMjkxNyAwWlwiLFxuICAgIFwiTTcuMzcyOTQgNS41Mzk1NkM4LjI1MjAxIDQuNjYwNDkgOS40NDQzIDQuMTY2NjMgMTAuNjg3NSA0LjE2NjYzSDE4LjVDMTkuMDc1MyA0LjE2NjYzIDE5LjU0MTcgNC42MzMgMTkuNTQxNyA1LjIwODI5QzE5LjU0MTcgNS43ODM1OSAxOS4wNzUzIDYuMjQ5OTYgMTguNSA2LjI0OTk2SDEwLjY4NzVDOS45OTY4MyA2LjI0OTk2IDkuMzM0NDUgNi41MjQzMyA4Ljg0NjA4IDcuMDEyN0M4LjM1NzcgNy41MDEwOCA4LjA4MzMzIDguMTYzNDYgOC4wODMzMyA4Ljg1NDEzQzguMDgzMzMgOS41NDQ3OSA4LjM1NzcgMTAuMjA3MiA4Ljg0NjA4IDEwLjY5NTVDOS4zMzQ0NSAxMS4xODM5IDkuOTk2ODMgMTEuNDU4MyAxMC42ODc1IDExLjQ1ODNIMTUuODk1OEMxNy4xMzkgMTEuNDU4MyAxOC4zMzEzIDExLjk1MjIgMTkuMjEwNCAxMi44MzEyQzIwLjA4OTUgMTMuNzEwMyAyMC41ODMzIDE0LjkwMjYgMjAuNTgzMyAxNi4xNDU4QzIwLjU4MzMgMTcuMzg5IDIwLjA4OTUgMTguNTgxMyAxOS4yMTA0IDE5LjQ2MDRDMTguMzMxMyAyMC4zMzk0IDE3LjEzOSAyMC44MzMzIDE1Ljg5NTggMjAuODMzM0g3LjA0MTY3QzYuNDY2MzcgMjAuODMzMyA2IDIwLjM2NjkgNiAxOS43OTE2QzYgMTkuMjE2MyA2LjQ2NjM3IDE4Ljc1IDcuMDQxNjcgMTguNzVIMTUuODk1OEMxNi41ODY1IDE4Ljc1IDE3LjI0ODkgMTguNDc1NiAxNy43MzczIDE3Ljk4NzJDMTguMjI1NiAxNy40OTg4IDE4LjUgMTYuODM2NSAxOC41IDE2LjE0NThDMTguNSAxNS40NTUxIDE4LjIyNTYgMTQuNzkyNyAxNy43MzczIDE0LjMwNDRDMTcuMjQ4OSAxMy44MTYgMTYuNTg2NSAxMy41NDE2IDE1Ljg5NTggMTMuNTQxNkgxMC42ODc1QzkuNDQ0MyAxMy41NDE2IDguMjUyMDEgMTMuMDQ3OCA3LjM3Mjk0IDEyLjE2ODdDNi40OTM4NiAxMS4yODk2IDYgMTAuMDk3MyA2IDguODU0MTNDNiA3LjYxMDkyIDYuNDkzODYgNi40MTg2NCA3LjM3Mjk0IDUuNTM5NTZaXCIsXG4gIF0sXG4gIHBhcGVyY2xpcDogW1xuICAgIFwiTTE3LjUzNTkgMi44MjgwNkMxNi42NTU1IDIuODI4MDYgMTUuODExMiAzLjE3Nzc5IDE1LjE4ODYgMy44MDAzMUw1LjAyNzQ3IDEzLjk2MTVDMy45OSAxNC45OTkgMy40MDcxNiAxNi40MDYxIDMuNDA3MTYgMTcuODczM0MzLjQwNzE2IDE5LjM0MDUgMy45OSAyMC43NDc2IDUuMDI3NDcgMjEuNzg1QzYuMDY0OTMgMjIuODIyNSA3LjQ3MjA0IDIzLjQwNTMgOC45MzkyNCAyMy40MDUzQzEwLjQwNjQgMjMuNDA1MyAxMS44MTM1IDIyLjgyMjUgMTIuODUxIDIxLjc4NUwyMy4wMTIyIDExLjYyMzlDMjMuNDQ0IDExLjE5MjEgMjQuMTQ0MSAxMS4xOTIxIDI0LjU3NTkgMTEuNjIzOUMyNS4wMDc2IDEyLjA1NTYgMjUuMDA3NiAxMi43NTU3IDI0LjU3NTkgMTMuMTg3NUwxNC40MTQ3IDIzLjM0ODdDMTIuOTYyNSAyNC44MDA5IDEwLjk5MjkgMjUuNjE2NyA4LjkzOTI0IDI1LjYxNjdDNi44ODU1NSAyNS42MTY3IDQuOTE1OTggMjQuODAwOSAzLjQ2MzggMjMuMzQ4N0MyLjAxMTYyIDIxLjg5NjUgMS4xOTU4IDE5LjkyNjkgMS4xOTU4IDE3Ljg3MzNDMS4xOTU4IDE1LjgxOTYgMi4wMTE2MiAxMy44NSAzLjQ2MzggMTIuMzk3OEwxMy42MjUgMi4yMzY2NUMxNC42NjIyIDEuMTk5NDEgMTYuMDY5IDAuNjE2Njk5IDE3LjUzNTkgMC42MTY2OTlDMTkuMDAyOCAwLjYxNjY5OSAyMC40MDk1IDEuMTk5NDEgMjEuNDQ2OCAyLjIzNjY1QzIyLjQ4NCAzLjI3Mzg4IDIzLjA2NjcgNC42ODA2OCAyMy4wNjY3IDYuMTQ3NTVDMjMuMDY2NyA3LjYxNDQyIDIyLjQ4NCA5LjAyMTIxIDIxLjQ0NjggMTAuMDU4NEwxMS4yNzQ1IDIwLjIxOTZDMTAuNjUyMyAyMC44NDE5IDkuODA4MjQgMjEuMTkxNSA4LjkyODE4IDIxLjE5MTVDOC4wNDgxMiAyMS4xOTE1IDcuMjA0MTEgMjAuODQxOSA2LjU4MTgxIDIwLjIxOTZDNS45NTk1MiAxOS41OTczIDUuNjA5OTIgMTguNzUzMyA1LjYwOTkyIDE3Ljg3MzNDNS42MDk5MiAxNi45OTMyIDUuOTU5NTIgMTYuMTQ5MiA2LjU4MTgxIDE1LjUyNjlMMTUuOTY5NSA2LjE1MDI5QzE2LjQwMTUgNS43MTg3NSAxNy4xMDE2IDUuNzE5MTYgMTcuNTMzMSA2LjE1MTIxQzE3Ljk2NDcgNi41ODMyNiAxNy45NjQzIDcuMjgzMzMgMTcuNTMyMiA3LjcxNDg3TDguMTQ1NDggMTcuMDkwNkM3LjkzODE4IDE3LjI5ODEgNy44MjEyNyAxNy41Nzk5IDcuODIxMjcgMTcuODczM0M3LjgyMTI3IDE4LjE2NjggNy45Mzc4OSAxOC40NDg0IDguMTQ1NDggMTguNjU2QzguMzUzMDYgMTguODYzNiA4LjYzNDYxIDE4Ljk4MDIgOC45MjgxOCAxOC45ODAyQzkuMjIxNzUgMTguOTgwMiA5LjUwMzI5IDE4Ljg2MzYgOS43MTA4OCAxOC42NTZMMTkuODgzMSA4LjQ5NDc5QzIwLjUwNTQgNy44NzIzIDIwLjg1NTQgNy4wMjc3MyAyMC44NTU0IDYuMTQ3NTVDMjAuODU1NCA1LjI2NzE2IDIwLjUwNTYgNC40MjI4NCAxOS44ODMxIDMuODAwMzFDMTkuMjYwNiAzLjE3Nzc5IDE4LjQxNjMgMi44MjgwNiAxNy41MzU5IDIuODI4MDZaXCIsXG4gIF0sXG4gIHBlcnNvbjogW1xuICAgIFwiTTMuMDQ5MjcgMTYuNjQ0OUM0LjIzMzIxIDE1LjQ0NjIgNS44Mzg5OCAxNC43NzI3IDcuNTEzMzMgMTQuNzcyN0gxNy42MTQzQzE5LjI4ODcgMTQuNzcyNyAyMC44OTQ1IDE1LjQ0NjIgMjIuMDc4NCAxNi42NDQ5QzIzLjI2MjMgMTcuODQzNiAyMy45Mjc1IDE5LjQ2OTUgMjMuOTI3NSAyMS4xNjQ4VjIzLjcyMTZDMjMuOTI3NSAyNC40Mjc2IDIzLjM2MjIgMjUgMjIuNjY0OCAyNUMyMS45Njc1IDI1IDIxLjQwMjIgMjQuNDI3NiAyMS40MDIyIDIzLjcyMTZWMjEuMTY0OEMyMS40MDIyIDIwLjE0NzYgMjEuMDAzMSAxOS4xNzIxIDIwLjI5MjggMTguNDUyOEMxOS41ODI0IDE3LjczMzYgMTguNjE4OSAxNy4zMjk1IDE3LjYxNDMgMTcuMzI5NUg3LjUxMzMzQzYuNTA4NzIgMTcuMzI5NSA1LjU0NTI2IDE3LjczMzYgNC44MzQ4OSAxOC40NTI4QzQuMTI0NTMgMTkuMTcyMSAzLjcyNTQ1IDIwLjE0NzYgMy43MjU0NSAyMS4xNjQ4VjIzLjcyMTZDMy43MjU0NSAyNC40Mjc2IDMuMTYwMTUgMjUgMi40NjI4MiAyNUMxLjc2NTQ5IDI1IDEuMjAwMiAyNC40Mjc2IDEuMjAwMiAyMy43MjE2VjIxLjE2NDhDMS4yMDAyIDE5LjQ2OTUgMS44NjUzMyAxNy44NDM2IDMuMDQ5MjcgMTYuNjQ0OVpcIixcbiAgICBcIk0xMS45OTU2IDIuNUM5LjkyNDU0IDIuNSA4LjI0NTYxIDQuMTc4OTMgOC4yNDU2MSA2LjI1QzguMjQ1NjEgOC4zMjEwNyA5LjkyNDU0IDEwIDExLjk5NTYgMTBDMTQuMDY2NyAxMCAxNS43NDU2IDguMzIxMDcgMTUuNzQ1NiA2LjI1QzE1Ljc0NTYgNC4xNzg5MyAxNC4wNjY3IDIuNSAxMS45OTU2IDIuNVpNNS43NDU2MSA2LjI1QzUuNzQ1NjEgMi43OTgyMiA4LjU0MzgzIDAgMTEuOTk1NiAwQzE1LjQ0NzQgMCAxOC4yNDU2IDIuNzk4MjIgMTguMjQ1NiA2LjI1QzE4LjI0NTYgOS43MDE3OCAxNS40NDc0IDEyLjUgMTEuOTk1NiAxMi41QzguNTQzODMgMTIuNSA1Ljc0NTYxIDkuNzAxNzggNS43NDU2MSA2LjI1WlwiLFxuICBdLFxuICByZWZyZXNoOiBbXG4gICAgXCJNNi45NzkzNyAzLjQwNTI5QzguNzA1NzcgMi40NTMzNyAxMC42OTQ4IDIuMDg4MzQgMTIuNjQ2NyAyLjM2NTIxQzE0LjU5ODYgMi42NDIwNyAxNi40MDc2IDMuNTQ1ODIgMTcuODAxMiA0Ljk0MDI4QzE3LjgwOTMgNC45NDg0MSAxNy44MTc2IDQuOTU2NDIgMTcuODI1OSA0Ljk2NDNMMjEuMDAyNiA3Ljk1NTc0SDE3LjA0OEMxNi40MjAzIDcuOTU1NzQgMTUuOTExNSA4LjQ2NDYgMTUuOTExNSA5LjA5MjMxQzE1LjkxMTUgOS43MjAwMiAxNi40MjAzIDEwLjIyODkgMTcuMDQ4IDEwLjIyODlIMjMuODY0M0gyMy44Njc1QzI0LjAyNjkgMTAuMjI4OSAyNC4xNzg3IDEwLjE5NiAyNC4zMTY1IDEwLjEzNjdDMjQuNDU0NCAxMC4wNzc1IDI0LjU4MjggOS45ODk4NSAyNC42OTI1IDkuODc0QzI0LjcwMTQgOS44NjQ2MiAyNC43MTAyIDkuODU1MDggMjQuNzE4NyA5Ljg0NTRDMjQuOTA5NSA5LjYyOTk4IDI1LjAwNDEgOS4zNjA4OCAyNS4wMDQgOS4wOTIzMkMyNS4wMDQgOS4wOTEyMSAyNS4wMDQgOS4wOTAwOSAyNS4wMDQgOS4wODg5OFYyLjI3Mjg4QzI1LjAwNCAxLjY0NTE3IDI0LjQ5NTIgMS4xMzYzMSAyMy44Njc1IDEuMTM2MzFDMjMuMjM5NyAxLjEzNjMxIDIyLjczMDkgMS42NDUxNyAyMi43MzA5IDIuMjcyODhWNi40NjA4MkwxOS4zOTY2IDMuMzIwOTVDMTcuNjU2MyAxLjU4NDk3IDE1LjQgMC40NTk4NCAxMi45NjU5IDAuMTE0NTlDMTAuNTI2IC0wLjIzMTQ4NyA4LjAzOTc3IDAuMjI0ODAxIDUuODgxNzggMS40MTQ3QzMuNzIzNzkgMi42MDQ1OSAyLjAxMDk5IDQuNDYzNjMgMS4wMDE0OCA2LjcxMTY2Qy0wLjAwODAzMDk1IDguOTU5NyAtMC4yNTk1NTQgMTEuNDc0OSAwLjI4NDgxMSAxMy44Nzg0QzAuODI5MTc2IDE2LjI4MTggMi4xMzk5NCAxOC40NDMyIDQuMDE5NTcgMjAuMDM2OEM1Ljg5OTIxIDIxLjYzMDUgOC4yNDU4OSAyMi41NzAxIDEwLjcwNiAyMi43MTRDMTMuMTY2MSAyMi44NTc5IDE1LjYwNjMgMjIuMTk4NCAxNy42NTg5IDIwLjgzNDdDMTkuNzExNiAxOS40NzExIDIxLjI2NTQgMTcuNDc3MyAyMi4wODYzIDE1LjE1MzhDMjIuMjk1NCAxNC41NjE5IDIxLjk4NTEgMTMuOTEyNiAyMS4zOTMzIDEzLjcwMzVDMjAuODAxNCAxMy40OTQ0IDIwLjE1MjEgMTMuODA0NyAxOS45NDMgMTQuMzk2NkMxOS4yODYzIDE2LjI1NTQgMTguMDQzMiAxNy44NTA0IDE2LjQwMTEgMTguOTQxM0MxNC43NTkgMjAuMDMyMiAxMi44MDY4IDIwLjU1OTkgMTAuODM4NyAyMC40NDQ3QzguODcwNjYgMjAuMzI5NiA2Ljk5MzMyIDE5LjU3NzkgNS40ODk2MSAxOC4zMDNDMy45ODU5IDE3LjAyODEgMi45MzcyOSAxNS4yOTkgMi41MDE4IDEzLjM3NjJDMi4wNjYzMSAxMS40NTM1IDIuMjY3NTMgOS40NDEyOSAzLjA3NTEzIDcuNjQyODZDMy44ODI3NCA1Ljg0NDQzIDUuMjUyOTggNC4zNTcyMSA2Ljk3OTM3IDMuNDA1MjlaXCIsXG4gIF0sXG4gIHN3b29wOiBbXG4gICAgXCJNMTcuNjQ4OCAwLjQwNjc5NkMxNy4xMDY0IC0wLjEzNTU5OSAxNi4yMjcgLTAuMTM1NTk5IDE1LjY4NDYgMC40MDY3OTZDMTUuMTQyMiAwLjk0OTE5MSAxNS4xNDIyIDEuODI4NTkgMTUuNjg0NiAyLjM3MDk4TDIwLjI1OCA2Ljk0NDQ0SDYuOTQ0NDRDNS4xMDI2NiA2Ljk0NDQ0IDMuMzM2MzIgNy42NzYwOSAyLjAzMzk4IDguOTc4NDNDMC43MzE2NDQgMTAuMjgwOCAwIDEyLjA0NzEgMCAxMy44ODg5VjIzLjYxMTFDMCAyNC4zNzgyIDAuNjIxODI3IDI1IDEuMzg4ODkgMjVDMi4xNTU5NSAyNSAyLjc3Nzc4IDI0LjM3ODIgMi43Nzc3OCAyMy42MTExVjEzLjg4ODlDMi43Nzc3OCAxMi43ODM4IDMuMjE2NzYgMTEuNzI0IDMuOTk4MTcgMTAuOTQyNkM0Ljc3OTU3IDEwLjE2MTIgNS44MzkzOCA5LjcyMjIyIDYuOTQ0NDQgOS43MjIyMkgyMC4yNThMMTUuNjg0NiAxNC4yOTU3QzE1LjE0MjIgMTQuODM4MSAxNS4xNDIyIDE1LjcxNzUgMTUuNjg0NiAxNi4yNTk5QzE2LjIyNyAxNi44MDIzIDE3LjEwNjQgMTYuODAyMyAxNy42NDg4IDE2LjI1OTlMMjQuNTkzMiA5LjMxNTQzQzI0Ljg2MTEgOS4wNDc0OSAyNC45OTY3IDguNjk3MzIgMjQuOTk5OSA4LjM0NjE2QzI1IDguMzQxODkgMjUgOC4zMzc2MSAyNSA4LjMzMzMzQzI1IDguMzI5MDYgMjUgOC4zMjQ3OCAyNC45OTk5IDguMzIwNTFDMjQuOTk4MyA4LjEzNjg2IDI0Ljk2MSA3Ljk2MTczIDI0Ljg5NDYgNy44MDE2OUMyNC44MjY4IDcuNjM3ODggMjQuNzI2NCA3LjQ4NDQgMjQuNTkzMiA3LjM1MTI0TDE3LjY0ODggMC40MDY3OTZaXCIsXG4gIF0sXG4gIHR3aXR0ZXI6IFtcbiAgICBcIk0yMS4zNTEgMi41MDI2QzIwLjQxNzcgMS41MDI2IDE5LjA4NDQgMC44MzU5MzggMTcuNjE3NyAwLjgzNTkzOEMxNC44MTc3IDAuODM1OTM4IDEyLjQ4NDQgMy4xNjkyNyAxMi40ODQ0IDYuMTAyNkMxMi40ODQ0IDYuNTAyNiAxMi41NTEgNi45MDI2IDEyLjYxNzcgNy4zMDI2QzguMzUxMDQgNy4xMDI2IDQuNjE3NzEgNC45NjkyNyAyLjA4NDM4IDEuODM1OTRDMS42MTc3MSAyLjYzNTk0IDEuNDE3NzEgMy41MDI2IDEuNDE3NzEgNC41MDI2QzEuNDE3NzEgNi4zMDI2IDIuMzUxMDQgNy45MDI2IDMuNjg0MzcgOC45MDI2QzIuODE3NzEgOC45MDI2IDIuMDg0MzcgOC42MzU5NCAxLjM1MTA0IDguMjM1OTRWOC4zMDI2QzEuMzUxMDQgMTAuODM1OSAzLjA4NDM4IDEyLjk2OTMgNS40ODQzOCAxMy40MzU5QzUuMDg0MzggMTMuNTY5MyA0LjYxNzcxIDEzLjYzNTkgNC4xNTEwNCAxMy42MzU5QzMuODE3NzEgMTMuNjM1OSAzLjQ4NDM4IDEzLjYzNTkgMy4yMTc3MSAxMy41NjkzQzMuODg0MzggMTUuNjM1OSA1Ljc1MTA0IDE3LjE2OTMgOC4wMTc3MSAxNy4yMzU5QzYuMjg0MzggMTguNjM1OSA0LjA4NDM4IDE5LjUwMjYgMS42ODQzOCAxOS41MDI2QzEuMjg0MzggMTkuNTAyNiAwLjg4NDM3NSAxOS41MDI2IDAuNDg0Mzc1IDE5LjQzNTlDMi43NTEwNCAyMC45MDI2IDUuNDE3NzEgMjEuNzY5MyA4LjM1MTA0IDIxLjc2OTNDMTcuNzUxIDIxLjc2OTMgMjIuOTUxIDEzLjc2OTMgMjIuOTUxIDYuODM1OTRWNi4xNjkyN0MyMy45NTEgNS40MzU5NCAyNC44MTc3IDQuNTAyNiAyNS40ODQ0IDMuNDM1OTRDMjQuNTUxIDMuODM1OTQgMjMuNTUxIDQuMTY5MjcgMjIuNTUxIDQuMjM1OTRDMjMuNDE3NyAzLjUwMjYgMjQuMjE3NyAyLjUwMjYgMjQuNjE3NyAxLjIzNTk0QzIzLjYxNzcgMS44MzU5NCAyMi41NTEgMi4zMDI2IDIxLjM1MSAyLjUwMjZaXCIsXG4gIF0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==