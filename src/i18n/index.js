import VueI18n from 'vue-i18n'
import Vue from 'vue'
Vue.use(VueI18n)

const messages = {
  en: {
    'title': 'Cliff Height Timer',
    'label': ''
  },
  fr: {
    'title': 'Cliff Height Timer',
    'label': 'Il s\'agit d\'une application'
  }
}

export const i18n = new VueI18n({
  locale: getLanguage(),
  fallbackLocale: 'en',
  messages

})

function getLanguage () {
  try {
    let l = navigator.language.split('-')
    return l[0]
  } catch (err) {
    return navigator.language
  }
}
