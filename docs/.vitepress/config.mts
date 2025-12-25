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
        { text: 'Глава II', link: 'second-chapter' }
      ]
    },
    {
      text: 'Локальный сюжет',
      collapsed: false,
      items: [
        { text: 'Российская Федеративная Империя', link: 'countries/russia/russia.md' },
        { text: 'Германская Республика', link: 'countries/germany/germany.md',
          collapsed: false,
          items: [
            { text: 'Основной сюжет', link: 'countries/germany/lore/lore.md',
              collapsed: false,
              items: [
                { text: 'Введение', link: 'countries/germany/lore/start.md' ,
                  collapsed: false,
                  items: [
                    { text: 'Партии', link: 'countries/germany/lore/parties.md',
                      collapsed: false,
                      items: [
                        { text: 'Koalition der Linken Krafte', link: 'countries/germany/lore/parties/KLK.md'},
                        { text: 'Alternative für Deutschland', link: 'countries/germany/lore/parties/AfD.md'},
                        { text: 'Christlich Demokratische Union Deutschlands', link: 'countries/germany/lore/parties/CDU.md'},
                        { text: 'Die Grünen', link: 'countries/germany/lore/parties/Grunen.md'},
                        { text: 'Freie Demokratische Partei', link: 'countries/germany/lore/parties/FDP.md'}
                      ]
                    },
                    { text: 'Персонажи',
                      collapsed: false,
                      items: [
                        { text: 'Патрик Кёбеле', link: 'countries/germany/lore/characters/Partick_Kobele.md'},
                        { text: 'Алиса Вайдель', link: 'countries/germany/lore/characters/Alice_Waidel.md'},
                        { text: 'Олаф Шольц', link: 'countries/germany/lore/characters/Olaf_Sholz'},
                        { text: 'Фридрих Мерц', link: 'countries/germany/lore/characters/Fridrich_Merz'},
                        { text: 'Сара Вагенкнехт', link: 'countries/germany/lore/characters/Sara_Vagenkneht'}
                      ]
                    },
                  ]
                },
                { text: 'Довоенное время', link: 'countries/germany/lore/beforewar'},
                { text: 'Политика военного времени', link: 'countries/lore/germany/war'},
                { text: 'Конец войны', link: 'countries/germany/lore/endwar' },
              ]
            }
          ]
        },
        { text: 'Соединённые Штаты Америки', link: 'countries/usa' }
      ]
    },
    {
      text: 'События и войны',
      collapsed: false,
      items: [
        { text: 'Владивостокский мирный договор', link: 'conflicts/vladivostok_peace_treaty.md' },
        { text: 'Трансильванский конфликт', link: 'conflicts/transylvania.md' }
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

