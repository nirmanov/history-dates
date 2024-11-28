export interface IData {
  firstYear: string;
  secondYear: string;
  tag: string;
  info: IInfo[];
}

export interface IInfo {
  event_year: string;
  description: string;
}

export const mockData: IData[] = [
  {
    firstYear: '1903',
    secondYear: '1920',
    tag: 'Изобретения',
    info: [
      {
        event_year: '1903',
        description: 'Первый полет братьев Райт на самолете «Флайер-1»',
      },
      {
        event_year: '1905',
        description: 'Запатентована электрическая лампа накаливания',
      },
      {
        event_year: '1913',
        description: 'Генри Форд внедрил конвейерный метод производства автомобилей',
      },
      {
        event_year: '1914',
        description: 'Изобретён холодильник с использованием электрического компрессора',
      },
      {
        event_year: '1920',
        description: 'Изобретение первых прототипов телевизоров',
      },
    ],
  },
  {
    firstYear: '1945',
    secondYear: '1965',
    tag: 'Кино',
    info: [
      {
        event_year: '1945',
        description: 'Выход фильма «Рим — открытый город» Роберто Росселлини',
      },
      {
        event_year: '1954',
        description: 'Выход первого цветного фильма в СССР «Кубанские казаки»',
      },
      {
        event_year: '1957',
        description: 'Основание Каннского кинофестиваля',
      },
      {
        event_year: '1960',
        description: 'Премьера фильма «Психо» Альфреда Хичкока',
      },
      {
        event_year: '1965',
        description: 'Премьера фильма «Доктор Живаго»',
      },
    ],
  },
  {
    firstYear: '1804',
    secondYear: '1830',
    tag: 'Транспорт',
    info: [
      {
        event_year: '1804',
        description: 'Создан первый паровоз Ричардом Тревитиком',
      },
      {
        event_year: '1817',
        description: 'Изобретён первый прототип велосипеда Карлом фон Дрезом',
      },
      {
        event_year: '1825',
        description: 'Открыта первая железная дорога в Англии',
      },
      {
        event_year: '1829',
        description: 'Паровоз «Ракета» Джорджа Стефенсона установил рекорд скорости',
      },
      {
        event_year: '1830',
        description: 'Первая регулярная пассажирская железнодорожная линия Ливерпуль — Манчестер',
      },
    ],
  },
  {
    firstYear: '1980',
    secondYear: '2000',
    tag: 'Технологии',
    info: [
      {
        event_year: '1981',
        description: 'Выход первого персонального компьютера IBM PC',
      },
      {
        event_year: '1985',
        description: 'Создана первая версия Windows',
      },
      {
        event_year: '1990',
        description: 'Запуск первого веб-сайта и изобретение WWW',
      },
      {
        event_year: '1994',
        description: 'Основана компания Amazon',
      },
      {
        event_year: '1997',
        description: 'Создана первая версия поисковой системы Google',
      },
    ],
  },
  {
    firstYear: '1600',
    secondYear: '1650',
    tag: 'Культура',
    info: [
      {
        event_year: '1603',
        description: 'Написана пьеса Уильяма Шекспира «Отелло»',
      },
      {
        event_year: '1611',
        description: 'Публикация английского перевода Библии — Королевской Библии',
      },
      {
        event_year: '1616',
        description: 'Умерли Уильям Шекспир и Мигель де Сервантес',
      },
      {
        event_year: '1632',
        description: 'Создана картина Рембрандта «Ночной дозор»',
      },
      {
        event_year: '1642',
        description: 'Начало гражданской войны в Англии',
      },
    ],
  },
  {
    firstYear: '2015',
    secondYear: '2022',
    tag: 'Наука',
    info: [
      {
        event_year: '2015',
        description:
          '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
      },
      {
        event_year: '2016',
        description:
          'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
      },
      {
        event_year: '2017',
        description:
          'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
      },
      {
        event_year: '2018',
        description: 'Событие происходит в 2018 году',
      },
      {
        event_year: '2022',
        description: 'Что-то произошло в 2022 году',
      },
    ],
  },
];
