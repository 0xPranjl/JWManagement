const store = {
  title: 'Обзор склада',
  short: 'Сокращение',
  language: 'Язык',
  languages: 'Языки',
  total: 'Всего',
  count: 'Количество',
  showAll: 'Показать все публикации',
  hideAll: 'Скрыть все неизданные публикации',
  reset: 'Сбросить весь склад',
  noPublication: 'Ты еще не добавил публикаций.<br>Чтобы добавить публикацию, нажми сначала на кнопку, чтобы просмотреть все доступные публикации.<br>Выбери, какие публикации доступны в вашем складе.<br>Нажми на публикацию, для управления языками, на которых она находится на складе.',
  startAddLanguage: 'Добавить язык',
  cancelAddLanguage: 'Отменить',
  close: 'Закрыть',
  addLanguage: 'Добавить',
  removeLanguage: 'Убрать язык',
  setup: {
    title: 'Выбери режим склада',
    support: 'Это пока что ещё не работает',
    description: 'Для инициализации вашего склада нам ещё нужна некоторая информация.<br>Пожалуйста, выбери один из двух режимов, чтобы начать создание склада.<br>Позже будет возможность изменить режим склада если захочешь.',
    simple: {
      name: 'Простой вид',
      description: 'Режим "Простой вид" автоматически настраивает систему так, чтобы сообщать книги, Библии, журналы и.т.д. как "Публикации" в отчёте о смене.'
    },
    advanced: {
      name: 'Расширенный вид',
      description: 'В режиме "Расширенный вид" ты можешь определить, какие публикации могут быть представлены в отчете о смене и сколько из них находятся на складе. Это позволит тебе точно определить, насколько хорошо распространяются отдельные публикации и языки, и у тебя больше возможностей для оптимизации вашего инвентаря.'
    }
  },
  type: {
    books: 'Книги',
    brochures: 'Брошюры',
    magazines: 'Журналы',
    tracts: 'Буклеты',
    misc: 'Другое'
  },
  publication: {
    'CO-inv17': 'Приглашение на региональный конгресс 2017',
    'CO-inv18': 'Приглашение на региональный конгресс 2018',
    'CO-inv19': 'Приглашение на региональный конгресс 2019',
    'CO-inv20': 'Приглашение на региональный конгресс 2020',
    bh: 'Чему на самом деле учит Библия?',
    bi12: 'Библия "Перевод нового мира"',
    bm: 'Библия и ее главная тема',
    ct: 'Gibt es einen Schöpfer, der an uns interessiert ist?',
    dv: 'DVD',
    fg: 'Добрая весть от Бога',
    fy: 'Секрет семейного счастья',
    gt: 'Самый великий человек, который когда-либо жил',
    gu: 'Gottes Anleitung — Unser Weg zum Paradies',
    hf: 'Ваша семья может быть счастливой',
    inv: 'Приглашение на встречи собрания',
    jwcd: 'Визитная карточка для jw.org',
    kt: 'Хотели бы вы узнать истину?',
    lc: 'Была ли жизнь создана?',
    ld: 'Слушайся Бога',
    lf: 'У истоков жизни. Пять вопросов, которые требуют ответа',
    ll: 'Слушайся Бога и живи вечно',
    lmn: '„Siehe! Ich mache alle Dinge neu“',
    lr: 'Учись у Великого Учителя',
    mb: 'Библия для самых маленьких',
    mi16: 'Приглашение на Вечерю 2016',
    mi17: 'Приглашение на Вечерю 2017',
    mi18: 'Приглашение на Вечерю 2018',
    mi19: 'Приглашение на Вечерю 2019',
    mi20: 'Приглашение на Вечерю 2020',
    my: 'Моя книга библейских рассказов',
    pc: 'Прочный мир и счастье. Как их найти',
    ph: 'Der Weg zu Frieden und Glück',
    rj: 'Вернись к Иегове',
    rk: 'Настоящая вера — ключ к счастью',
    rp: 'Wie man den Weg ins Paradies findet',
    sgd: 'Слово Бога в картах и схемах',
    't-30': 'Что для вас Библия?',
    't-31': 'Каким вы видите будущее?',
    't-32': 'На чем строится семейное счастье?',
    't-33': 'В чьих руках этот мир?',
    't-34': 'Придет ли конец страданиям?',
    't-35': 'Будут ли умершие жить снова?',
    't-36': 'Что такое Царство Бога?',
    't-37': 'Где найти ответы на самые важные вопросы?',
    we: 'Когда умер близкий тебе человек',
    'wp/g': 'Сторожевая башня / Пробудитесь',
    yc: 'Обучайте своих детей',
    yp1: 'Ответы на твои вопросы. Том 1',
    yp2: 'Ответы на твои вопросы. Том 2',
    ypq: 'Ответы на 10 вопросов юношей и девушек'
  }
}

export default store
