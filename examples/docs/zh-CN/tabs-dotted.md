## TabsDotted 点分tab标签

### 基础用法
:::demo 标签一共有两个方向的设置 `tabPosition="top|bottom"`

```html
<template>
  <el-tabs-dotted tab-position="top">
    <el-tab-pane label="用户管理">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
  </el-tabs-dotted>
</template>
```
:::


### TabsDotted Attributes
|   参数   |    说明    |   类型    |   可选值   |   默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| tab-position | 选项卡所在位置 | string  |  top/bottom |  top |