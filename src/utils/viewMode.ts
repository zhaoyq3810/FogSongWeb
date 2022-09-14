import { deviceBrowser } from '@/utils/common'
import { storeCommit } from '@/store/Tools'

export default function (width: number) {
  // 设备
  const env = deviceBrowser()

  // 手机
  if (env.Mobile) return storeCommit('setViewMode', 'Mobile')
  // 电脑
  if (env.Web) {
    if (width >= 500) {
      storeCommit('setViewMode', 'Web')
    } else storeCommit('setViewMode', 'Mobile')
  }
}
