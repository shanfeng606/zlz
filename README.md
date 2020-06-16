# zlz-UI——一个Vue UI组件
[![Build Status](https://travis-ci.org/shanfeng606/zlz.svg?branch=master)](https://travis-ci.org/shanfeng606/zlz)

## 介绍
学习Vue过程的同时制作一个UI框架

## 安装
1.添加CSS样式
    使用本框架前，请在CSS中开启border-box

    ```css
    *，*::before,*::after{box-sizing:border-box;}
    ```
    IE8 及以上浏览器都支持此样式
    你还需要设置默认颜色等变量（后续会改成SCSS变量）
    ```css
    html {
            --button-height: 32px;
            --font-size: 14px;
            --button-bg: white;
            --button-active-bg: #eee;
            --border-radius: 4px;
            --color: #333;
            --border-color: #999;
            --border-color-hover: #666;
        }
    ```
    IE15 及以上浏览器都支持此样式
2.安装zlz-UI
 ```
 npm i --save zlz-2020
 ```
 3.引入zlz
 ```js
 import {Button,ButtonGroup,Icon} from 'zlz-2020'
 import 'zlz-2020'

 export default{
     name:'app'
     components:{
         'g-button':Button,
         'g-icon':Icon
     }
 }
 ```
4.引入svg symbols
```html
<script src="//at.alicdn.com/t/font_1878994_56nz96ichih.js"></script>
```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

