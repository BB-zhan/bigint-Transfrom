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
bigintTransform.pack(str) // 长整数类型字符串转化为每组长度小于等于15位字符串的数组
let arr: [stirng]
bigintTransform.unpack(arr) // 还原为字符串

bigintTransform.plus(arr) // 计算两个当前的bigint类型数据相加
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
v 1.0.4 更新plus函数，计算两个当前的bigint类型数据相加
```