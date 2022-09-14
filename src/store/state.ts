import { IObj } from '@/interface'

export default {
  // token
  token: '',
  // refreshToken
  refreshToken: '',

  // 视图样式
  viewMode: '',
  // 当前主题
  there: '',
  thereCustom: {
    backgroundColor: '#f1f2f6',
    color: '#323734',
  },

  // 用户 id
  userId: '',
  // 用户昵称
  userName: '',
  // 用户头像
  userAvatar: '',

  // 收藏
  like: [],

  // 浏览记录
  history: [],
  // 是否每次都自动跳转上次浏览的位置
  isHistory: true,
  // 是否不再提示跳转上次浏览位置的弹窗
  canHistoryPopup: false,
} as IObj
