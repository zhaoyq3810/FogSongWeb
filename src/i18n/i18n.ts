import { createI18n } from 'vue-i18n'
import en from './en'
import cn from './cn'

const messages = { en, cn }

const i18n = createI18n({
  locale: sessionStorage.getItem('fogsong_lang') || 'cn',
  messages,
})

export default i18n
