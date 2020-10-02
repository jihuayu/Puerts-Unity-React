# puerts-unity-react

Puerts Unity React Gui 的测试版。

## 使用方法

```shell script
npm run watch
```
然后复制 dist 目录下的 index.js.txt 到你的项目，require 一下即可。

## 自定义组件

组件定义在 comp.tsx 中，其中 GameObject 会生成一个 GameObject，其他的会生成一个 Component 挂在他的父对象（GameObject）上。

UGUI 的直接生成的组件在 Raw 命名空间中，根据 Raw 组合的组件在外面。
