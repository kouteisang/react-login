# 基于React开发的登录组件 :technologist: :stars:

## 技术栈: react,redux,antd 
所有组件以及数据交互均通过redux进行管理          
icon使用antd组件库

## 运行截图
![](./src/asset/images/screenshot/screenshot1.png)
![](./src/asset/images/screenshot/screenshot2.png)
![](./src/asset/images/screenshot/screenshot3_new.png)
![](./src/asset/images/screenshot/screenshot4.png)


## Redux
1. reducer一定要返回新的对象，不要对原来的状态进行修改，这样会导致地址一样，不会触发重新render（血泪教训）

## CSS相关知识
1. vh就是当前屏幕可见高度的1%，也就是说height:100vh = height:100%，但是有个好处是当元素没有内容的时候，设置height:100%该元素不会被撑开，而设置100vh该元素会被撑开屏幕高度一致。
2. box-shadow为样式加阴影 eg: box-shadow: 0 8px 18px 0 rgba(2, 92, 209, .57);
3. outline: none取消outlin （在自己写input组件时，我们通常情况下会把outline和border设置为none）
4. border:none 取消边框
5. box-size:border-box width = width + padding
6. text-align:center 行内元素居中对齐
7. 动画效果transform:translate(x, y) 平移 使用animation属性
8. 隐藏样式 visibility:hidden
9. 可以使用display:flex

## React中引入图片
1. 方式一： import tsIcon from '../images/typescript.jpeg';
2. 方式二： const tsIcon = require( '../images/typescript.jpeg');

## antd组件库
1. icon使用 安装npm install --save @ant-design/icons 使用:import {WechatFilled, QqCircleFilled} from '@ant-design/icons'; //引入所需icon

## js
1. onFocus:定焦
2. onBlur:失焦