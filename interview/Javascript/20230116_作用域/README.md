## 01 - html 文件引入 js 文件 js 里面有 var a = 1; let b = 2; const c = 3;问 window 最后会挂载哪些变量？

A: window 只会挂载 var 声明的变量 a，let 和 const 声明的变量是 `undefined`。原因是 ES6 中，var 和 function 兼容 ES5 的设计，支持变量提升，同时挂载到全局 window 上，而 let 和 const 变量被定义为块级作用域，不存在变量提升，所以不会挂到 window 上，通过浏览器 Debug 查看会发现，let 和 const 定义的变量会被挂到一个名为 Script 的块作用域内。

![](./%E4%BD%9C%E7%94%A8%E5%9F%9F01.png)
