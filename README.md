# bigintTransform

## 下载
```
npm install bigint-transform
```

### 导入
```js
import bigintTransform from 'bigint-transform'
```

### 使用
```ts
let str: string
let num: number
bigintTransform.pack(str)
bigintTransform.pack(num) // 长整数类型字符串转化为每组长度小于等于15位字符串的数组

let arr: [stirng]
bigintTransform.unpack(arr) // 还原为字符串

let arrA: [stirng]
let arrb: [stirng]
bigintTransform.plus(arrA, arrB) // 计算两个当前的bigint类型数据相加

bigintTransform.minus(arrA, arrB) // 计算两个当前的bigint类型数据相减
// 可联合使用
bigintTransform.plus(bigintTransform.pack(str), bigintTransform.pack(str))

bigintTransform.minus(bigintTransform.pack(str), bigintTransform.pack(str))
```

### 提示
```
1. 目前仅支持正整数bigint
2. 如果出现下载失败的情况记得切换镜像源
    nrm ls
    nrm use 镜像源
```

### 更新
```
v 1.0.3 版本之前只更新说明文档
v 1.0.4 新增plus函数，计算两个当前的bigint类型数据相加
v 1.0.4 - 1.0.6 更新说明文档
v 1.0.7 紧急修复plus功能
v 1.0.8 文档有误
v 1.0.9 新增minus功能，计算两个当前的bigint类型数据相减
```

#### 有问题及时上GitHub提issue:
> GitHub地址: https://github.com/BB-zhan/bigint-Transfrom

> npm地址: https://www.npmjs.com/package/bigint-transform
