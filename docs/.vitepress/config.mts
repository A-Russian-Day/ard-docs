import { createRequire } from 'module'
import { defineAdditionalConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export default defineAdditionalConfig({
  title: 'A Russian Day',
  description: 'Официальная википедия по модификации A Russian Day',
  head: [['link', { rel: 'icon', href: 'ard_logo_white.png' }]],
  base: '/',

  themeConfig: {
    logo: 'ard_logo_white.png',
    nav: nav(),

    sidebar: {
      '/story/': { base: '/story/', items: sidebarGuide() },
      '/versions/': { base: '/versions/', items: sidebarVersions() }
    },

    footer: {
      message: 'A Russian Day Team',
      copyright: '© 2025'
    },

    outline: { label: 'Содержание страницы' },

    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },

    lastUpdated: {
      text: 'Обновлено'
    },

    notFound: {
      title: 'СТРАНИЦА НЕ НАЙДЕНА',
      quote:
        'Но если ты не изменишь направление и продолжишь искать, ты можешь оказаться там, куда направляешься.',
      linkLabel: 'перейти на главную',
      linkText: 'Отведи меня домой'
    },

    darkModeSwitchLabel: 'Оформление',
    lightModeSwitchTitle: 'Переключить на светлую тему',
    darkModeSwitchTitle: 'Переключить на тёмную тему',
    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Вернуться к началу',
    langMenuLabel: 'Изменить язык',
    skipToContentLabel: 'Перейти к содержимому'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Сюжет мода',
      link: 'story/first-chapter',
      activeMatch: '/ru/guide/'
    },
    {
      text: 'История версий',
      link: 'versions/introduction',
      activeMatch: '/ru/reference/'
    },
    {
      text: 'Наши ресурсы',
      items: [
        {
          text: 'Telegram',
          link: 'https://t.me/arussianday'
        },
        {
          text: 'Вконтакте',
          link: 'https://vk.com/arussianday'
        },
        {
          text: 'GitHub',
          link: 'https://github.com/A-Russian-Day/ard-docs'
        }
      ]
    }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Глобальный сюжет',
      collapsed: false,
      items: [
        { text: 'Глава I', link: 'first-chapter' },
        { text: 'Глава II', link: 'second-chapter' },
        { text: 'Глава III', link: 'third-chapter' },
        { text: 'Глава IV', 
          link: 'ww3/fourth-chapter.md',
          collapsed: false,
          items: [
            { text: 'Европейский фронт', link: 'ww3/european-front.md' }
          ]}
      ]
    },
    {
      text: 'Локальный сюжет',
      collapsed: false,
      items: [
        { text: 'Российская Федеративная Империя', link: 'countries/russia/russia.md' },
        { text: 'Германская Республика', link: 'countries/germany/germany.md' },
        { text: 'Соединённые Штаты Америки', link: 'countries/usa' },
        { text: 'Трансильвания', link: 'countries/transilvania/transilvania.md' },
        { text: 'Эфиопия', link: 'countries/ethiopia/ethiopia.md' }
      ]
    },
    {
      text: 'События и войны',
      collapsed: false,
      items: [
        { text: 'Диверсии на Потоках (2024)', link: 'conflicts/diversion_potoks/diversion_potoks.md' },
        { text: 'Владивостокский мирный договор (2028)', link: 'conflicts/vladivostok_peace_treaty/vladivostok_peace_treaty.md' }
      ]
    }
  ]
}

function sidebarVersions(): DefaultTheme.SidebarItem[] {
  return [
    { text: 'v1.0.0', link: 'first-chapter' },
    { text: 'v1.1.0 - "First Strike"', link: 'first-chapter' }
  ]
}

