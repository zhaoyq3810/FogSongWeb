import { IObj } from '@/interface'

// url截取字段
export const getQueryString = (item: string) => {
  const svalue = (window.location as IObj).href.match(new RegExp(`[\?\&]${ item }=([^\&]*)(\&?)`, 'i'))
  return svalue ? svalue[1] : svalue
}

// jwt解析
export const analyseJWT = (token: string) => {
  const arr = token.split('.')
  if (arr.length === 3) {
    const tokenBody = arr[1]
    return JSON.parse(window.atob(tokenBody))
  }
  return {}
}

// 电话
export function goTel(tel: string) {
  window.location.href = `tel:${tel}`
}

// 当前运行环境
export const deviceBrowser = () => {
  const u: any = navigator.userAgent
  let MobileOrPC
  if ((u.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    MobileOrPC = 'Mobile'
  } else {
    MobileOrPC = 'PC'
  }
  const wx = u.match(/MicroMessenger/i) == 'micromessenger'
  return {
    Mobile: MobileOrPC === 'Mobile',
    PC: MobileOrPC === 'PC',
    Android: u.indexOf('Android') !== -1,
    IOS: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    WeiXin: wx,
    Web: !wx,
  }
}
