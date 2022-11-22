const bigintTransform = {
    /* -------------------------处理函数------------------------------- */
    // 补零操作
    addZero: (a, b) => {
        let sum = +a + +b + '',
            len = 15 - sum.length
        if (len <= 0) return sum
        for (let i = 0; i < len - 1; i++) {
            sum = '0' + sum
        }
        return sum
    },
    // 计算结果
    plusArrFun: function(a, b) {
        return a.map((item, i) => {
            if (b[i]) {
                return i === a.length - 1 ? +item + +b[i] + '' : this.addZero(item, b[i])
            } else {
                return item
            }
        })
    },
    /* --------------------------------------------------------------- */
    // 转化
    pack: function (str) {
        if (!str || typeof str !== 'string') {
            if (typeof str === 'number' && `${str}`.length <= 16) {
                return this.pack(`${str}`)
            }
            console.log('数据项不合法')
            return 'Error'
        }
        let i = 0
        let sumArr = [...str].reverse().reduce((total, cur, index) => {
            if (index % 15 === 0 && index / 15 !== 0) {
                i++
            }
            if (!total[i]) {
                total[i] = ''
            }
            total[i] += cur
            return total
        }, []).map(item => [...item].reverse().join('')).reverse()
        let j = 0
        while (Number(sumArr[j]) <= 0) {
            j++
        }
        sumArr.splice(0, j)
        let res = sumArr.map((item, i) => {
            return i === 0 ? +item + '' : item
        })
        console.log(`转化成功, 结果为[${res.join(',')}]`)
        return res
    },
    // 解包
    unpack: (arr) => {
        if (arr && Object.prototype.toString.call(arr) === '[object Array]') {
            if (arr.every(item => !isNaN(Number(item)))) {
                let res = arr.map(item => item + '').join('')
                for (let i = 0; i < arr.length - 1; i++) {
                    if (i !== 0) {
                        if (String(arr[i]).length !== 15) {
                            console.log(`数据项不合法, 强制转化为${res}`)
                            break
                        } else {
                            console.log(`转化成功, 结果为${res}`)
                            break
                        }
                    }
                }
                return res
            } else {
                console.log('数据项不合法')
                return 'Error'
            }
        }
    },
    // 增
    plus: function (arrA, arrB) {
        if (arrA === 'Error' || arrB === 'Error') return
        arrA = arrA.reverse()
        arrB = arrB.reverse()
        // 开始求和
        let sumArr = arrA.length >= arrB.length ? this.plusArrFun(arrA, arrB) : this.plusArrFun(arrB, arrA)
        sumArr = sumArr.reverse()
        // 数据进位操作
        sumArr.forEach((item, i) => {
            if (i === 0) return
            if (sumArr[i - 1] && item.length > 15) {
                sumArr[i] = item.substr(1, item.length - 1)
                sumArr[i - 1] = this.addZero(sumArr[i - 1], item.substr(0, 1))
            }
        })
        console.log(`计算结果是${sumArr.join('')}`)
        // 结果
        return sumArr.join('')
    }
}

export default bigintTransform