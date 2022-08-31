// 分享二维码替换
import html2canvas from 'html2canvas'
import { IEl, IObj } from '@/interface'

function DPR() {
  if (window.devicePixelRatio && window.devicePixelRatio > 1) {
    return window.devicePixelRatio
  }
  return 1
}
export default function (el: IEl) {
  const width = el?.offsetWidth
  const height = el?.offsetHeight
  const scale = DPR()
  const canvas = document.createElement('canvas')
  canvas.width = width * scale
  canvas.height = height * scale
  canvas.style.width = `${width }px`
  canvas.style.height = `${height }px`
  const context = canvas.getContext('2d') as IObj
  context.translate(0, 0)

  html2canvas(el, {
    width,
    height,
    backgroundColor: null,
    useCORS: true,
    scale,
    canvas,
  }).then(canvas => {
    const context = canvas.getContext('2d') as IObj
    context.mozImageSmoothingEnabled = false
    context.webkitImageSmoothingEnabled = false
    context.msImageSmoothingEnabled = false
    context.imageSmoothingEnabled = false
    el.innerHTML = `<img src="${canvas.toDataURL('image/png')}" width="${width}" height="${height}" alt="img" />`
  })
}
