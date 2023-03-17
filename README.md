# OpenDRG的目的是成为国家医保局CHS-DRG的开源实现，就像OpenJDK是Java SE的开源实现一样

## 业务背景

&emsp;&emsp;疾病诊断相关组（Diagnosis Related Groups，DRG）是用于衡量医疗服务质量效率以及进行医保支付的重要工具。国家医疗保障局要求从2022到2024年，三年内全面完成DRG/DIP付费方式改革，很多地区的医保局已经开始采用DRG与医院进行医保资金的结算。

&emsp;&emsp;DRG分组器是医院端DRG信息管理系统的基础和核心，也是难点所在。国家医保局已经发布了1.0版、1.0修正版、1.1版这三个版本的DRG分组方案，即将发布2.0版，但各地市甚至各医院版本更新的进度不一致，同一地区不同医院版本各不相同，甚至可能同一医院多版本并存或者是合集。

&emsp;&emsp;通过大量的研究和实践，采用“知识库+规则库”的思路，研发了此款DRG分组器，具备的优势如下：
* 严格按照医保局规则进行分组，其正确性经过多个地区、多家医院的实际验证
* 分组性能达到单线程每秒5000份病案，满足业务处理、数据分析等多种业务场景
* 支持Java、C#、python、js等多种语言实现
* 不需要部署服务器，支持以插件方式嵌入医院业务系统运行

## 分组器版本
国家医保局CHS-DRG分组器

|DRG分组方案|DRG组数|说明|
|-|-|-|-|
|CHS-DRG 1.1<br>标准版|628组| 陕西铜川<br>山东临沂、菏泽<br>贵州六盘水、铜仁|
|CHS-DRG 1.0<br>修订版|618组| 陕西西安<br>四川成都|
|CHS-DRG 1.1<br>盐城2022细分组|628组| 江苏省盐城市2022版细分组|
|CHS-DRG 1.1<br>苏州2022细分组|667组| 江苏省苏州市2022版细分组|
|CHS-DRG 1.1<br>泰州2022细分组|758组| 江苏省泰州市2022版细分组|
|CHS-DRG 1.1<br>无锡2022细分组|599组| 江苏省无锡市2022版细分组|
|CHS-DRG 1.0修订版<br>武汉2022细分组|660组| 湖北省武汉市2022版细分组|
|CHS-DRG 1.1<br>北京版细分组|696组| 北京2022版细分组|
|CHS-DRG 1.1<br>兰州2022细分组|792组| 甘肃省兰州市2022版细分组|
|CHS-DRG 1.1<br>福州2022细分组|563组| 福建省福州市2022版细分组|
|ZJ-DRG 1.1<br>浙江2022细分组|1006组| 浙江省2022版细分组|
|CHS-DRG 1.1<br>乌鲁木齐2022细分组|718组| 新疆乌鲁木齐市2022版细分组|
|CHS-DRG 1.1<br>长株潭衡2023细分组|737组| 湖南省长株潭衡区域2023版细分组|

&emsp;&emsp;其他地区版本的分组器将逐步发布，敬请关注

## 联系作者
14463966@qq.com