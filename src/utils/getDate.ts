import { IObj } from '@/interface'
/**
 * @IObj NormalObject
 * interface IObj<T = any> {
 *   [key: string]: T
 * }
 */
function isDate(d: string, now: Date) {
  switch (d) {
    case 'Y':
      return now.getFullYear()
    case 'M':
      return now.getMonth() + 1
    case 'D':
      return now.getDate()
    case 'h':
      return now.getHours()
    case 'm':
      return now.getMinutes()
    case 's':
      return now.getSeconds()
    case 'ms':
      return now.getMilliseconds()
    case 'day':
      return now.getDay()
    case 'time':
      return now.getTime()
  }
}

/**
 * @params { date = new Date(), select: [] }
 * date?     默认当前时间 可选: 时间格式字符串 | 时间戳 | 时间类型
 * select?   返回的内容   可选: Y M D h m s ms day time
 *                          年 月 日 时 分 秒 毫秒 星期 时间戳
 */
export default (params: IObj) => {
  const { date = <string | number | Date> new Date(), select = [] } = params
  const now = (typeof date) === 'string' ? new Date(date) : (typeof date) === 'number' ? new Date(date) : date
  const state = ['Y', 'M', 'D', 'h', 'm', 's', 'ms', 'day', 'time']
  const data: IObj = {}
  const se = select ? select.length >= 1 : false;
  (se ? select : state).forEach((item: string) => {
    data[item] = isDate(item, now)
  })
  return data
}
