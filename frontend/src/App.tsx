import { FC, useState } from 'react'

const portfolioItems = [
  { tag: 'Запуск продукта', title: 'Марафон «Новая энергия» для фитнес-тренера' },
  { tag: 'Оформление карточки', title: 'Линейка протеиновых батончиков Strong Taste' },
  { tag: 'Запуск продукта', title: 'Beauty-интенсив «Glow Reset» для косметолога' },
  { tag: 'Оформление карточки', title: 'Промо-набор спортивного питания Power Mix' },
  { tag: 'Запуск продукта', title: 'Онлайн-школа «Старт в дизайне»' },
  { tag: 'Запуск продукта', title: 'Фитнес-марафон «Body Focus»' },
  { tag: 'Оформление карточки', title: 'Инфографика для бренда уходовой косметики' },
  { tag: 'Запуск продукта', title: 'Марафон «Reset Mind» для продюсерского центра' },
  { tag: 'Оформление карточки', title: 'Линейка натуральных витаминов Vitamins & Co' },
  { tag: 'Запуск продукта', title: 'Марафон «Перезагрузка 21»' },
  { tag: 'Оформление карточки', title: 'Пакет материалов для онлайн-школы Speaking' },
  { tag: 'Запуск продукта', title: 'Beauty-марафон «Vogue Body»' },
]

const processSteps = [
  {
    number: '01',
    title: 'Погружаюсь в ваш продукт',
    description:
      'Изучаю нишу, целевую аудиторию, конкурентную среду и ценность продукта. Формирую стратегию визуальной подачи.',
  },
  {
    number: '02',
    title: 'Создаю визуальную систему',
    description:
      'Продумываю структуру блоков, тексты и графику. Делаю понятные прототипы и согласовываю визуальную концепцию.',
  },
  {
    number: '03',
    title: 'Запускаю и сопровождаю',
    description:
      'Готовлю итоговые макеты под нужные форматы, помогаю внедрить материалы и даю рекомендации для роста.',
  },
]

const testimonials = [
  {
    author: 'Елизавета, маркетолог бренда витаминов',
    quote:
      '«Работаем со Studio Konch на постоянной основе. Карточки всегда вовремя, продуманы детали, которые подчеркивают ценность продукта и увеличивают конверсию.»',
  },
  {
    author: 'Антон, продюсер онлайн-школы',
    quote:
      '«Получили полный комплект материалов для запуска. Видно, что дизайнер разбирается в маркетинге: структура выстроена логично, а продажи выросли на первой же неделе.»',
  },
  {
    author: 'Наталья, основатель салона красоты',
    quote:
      '«Нашли общий стиль для всей линейки услуг. Теперь каждое предложение выглядит премиально и узнаваемо. Планируем масштабировать сотрудничество.»',
  },
]

const faqItems = [
  {
    question: 'Сколько вариантов дизайна вы предоставляете?',
    answer:
      'Под каждый проект готовлю один выверенный концепт, который базируется на аналитике и прототипировании. В стоимость входят правки по согласованному ТЗ.',
  },
  {
    question: 'Какие материалы нужны для старта?',
    answer:
      'Поможет заполненный бриф, доступы к продукту и понимание целевой аудитории. При необходимости помогу собрать недостающую информацию.',
  },
  {
    question: 'Можете ли вы взять проект «под ключ»?',
    answer:
      'Да, сопровождению под ключ уделяется особое внимание: от аналитики и упаковки до методичек для менеджеров и рекомендаций по запуску.',
  },
  {
    question: 'Какой срок производства?',
    answer:
      'В среднем на проект уходит от 5 до 10 рабочих дней в зависимости от объема. Ставлю реальные дедлайны и держу вас в курсе прогресса.',
  },
  {
    question: 'Можно ли заказать тестовую карточку?',
    answer:
      'Да, доступен формат пилотного проекта. Он поможет познакомиться с подходом и оценить, как визуал влияет на продажи вашего продукта.',
  },
]

const App: FC = () => {
  const [activeFaq, setActiveFaq] = useState<number>(0)

  return (
    <div className="min-h-screen bg-[#050014] font-montserrat text-white">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-12rem] top-[-8rem] h-[28rem] w-[28rem] rounded-full bg-[#ff4afc]/30 blur-[140px]" />
          <div className="absolute right-[-10rem] top-[40%] h-[24rem] w-[24rem] rounded-full bg-[#7a2bff]/35 blur-[160px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,74,252,0.2),transparent_60%)]" />
        </div>

        <div className="relative mx-auto flex max-w-[1220px] flex-col px-4 pb-20 pt-14 sm:px-8 lg:px-12">
          <header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">
              Графический дизайнер + маркетолог
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-white/70">
              <a className="rounded-full border border-white/20 px-4 py-2 transition hover:border-[#ff4afc] hover:text-white" href="#portfolio">
                Кейсы
              </a>
              <a className="rounded-full border border-white/20 px-4 py-2 transition hover:border-[#ff4afc] hover:text-white" href="#process">
                Как я работаю
              </a>
              <a className="rounded-full border border-white/20 px-4 py-2 transition hover:border-[#ff4afc] hover:text-white" href="#reviews">
                Отзывы
              </a>
              <a className="rounded-full border border-white/20 px-4 py-2 transition hover:border-[#ff4afc] hover:text-white" href="#faq">
                FAQ
              </a>
            </div>
          </header>

          <section className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-xl space-y-8">
              <h1 className="text-[clamp(3rem,6vw,5rem)] font-extrabold uppercase leading-[1.05]">
                ПРОДАЮЩЕЕ <span className="text-[#ff4afc]">ПОРТФОЛИО</span>
              </h1>
              <p className="text-lg leading-relaxed text-white/70">
                Создам дизайн, который вызывает доверие и эмоцию. Визуал подкрепляет стратегию, а каждая карточка ведет клиента к покупке.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-[#120026]/80 p-6">
                  <div className="text-sm uppercase tracking-[0.18em] text-[#ffbdfc]">Результаты</div>
                  <div className="mt-5 text-4xl font-bold">+73%</div>
                  <p className="mt-2 text-sm text-white/60">Средний рост конверсии карточек после обновления дизайна.</p>
                </div>
                <div className="rounded-3xl border border-[#ff4afc]/40 bg-[#1a0433]/80 p-6 shadow-[0_0_60px_rgba(255,74,252,0.1)]">
                  <div className="text-sm uppercase tracking-[0.18em] text-[#ffbdfc]">Опыт</div>
                  <div className="mt-5 text-4xl font-bold">70+ проектов</div>
                  <p className="mt-2 text-sm text-white/60">Запуски инфопродуктов, e-commerce и услуги в премиум-сегменте.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-[#ff4afc] px-8 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#050014] transition hover:brightness-110"
                  href="#cta"
                >
                  Оставить заявку
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:border-[#ff4afc]"
                  href="#portfolio"
                >
                  Смотреть кейсы
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#1d0034] via-[#0b001b] to-[#120026] p-10 shadow-[0_20px_80px_rgba(10,0,20,0.7)]">
              <div className="absolute -top-16 right-10 h-40 w-40 rounded-full bg-[#ff4afc]/30 blur-[120px]" />
              <div className="absolute -bottom-12 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#7a2bff]/25 blur-[140px]" />
              <div className="relative space-y-6">
                <div className="text-xs uppercase tracking-[0.3em] text-white/50">Структура презентации</div>
                <ul className="space-y-5 text-sm text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#ff4afc]" />
                    <span>Прототипирование блоков и сценариев взаимодействия пользователя.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#ff4afc]" />
                    <span>Единая визуальная система, которую легко масштабировать на новые продукты.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#ff4afc]" />
                    <span>Работаю в связке с маркетингом: подбираю сильные аргументы и офферы.</span>
                  </li>
                </ul>
                <div className="rounded-3xl border border-[#ff4afc]/30 bg-black/20 p-6">
                  <div className="text-4xl font-bold text-white">24/7</div>
                  <p className="mt-2 text-sm text-white/60">На связи по проекту, отправляю промежуточные результаты и правки.</p>
import type { FC } from 'react'

const highlights = [
  {
    title: 'Стратегия роста',
    description:
      'Гибкая система аналитики помогает отслеживать прогресс кампаний и выявлять новые точки роста бренда.',
    accent: 'bg-gradient-to-r from-aurora/80 to-lilac/80',
  },
  {
    title: 'Команда экспертов',
    description:
      'Наставники, дизайнеры и маркетологи работают как единое целое, формируя полный цикл сопровождения.',
    accent: 'bg-gradient-to-r from-lilac/80 to-aurora/80',
  },
  {
    title: 'Автоматизация процессов',
    description:
      'Единая платформа синхронизирует задачи, снижает операционные риски и экономит время команды.',
    accent: 'bg-gradient-to-r from-sky-500/70 to-lilac/70',
  },
]

const features = [
  {
    title: 'Диагностика бренда',
    copy: 'Запускаем сессию исследований, чтобы глубоко понять ценности компании и аудиторию.',
    pill: '01',
  },
  {
    title: 'Дизайн-платформа',
    copy: 'Создаем визуальную систему, которая легко масштабируется на любые каналы коммуникации.',
    pill: '02',
  },
  {
    title: 'Воронка взаимодействия',
    copy: 'Продумываем сценарии касаний и автоматизируем персонализированные сообщения.',
    pill: '03',
  },
  {
    title: 'Метрики успеха',
    copy: 'Подключаем дашборды, которые показывают динамику роста и ценность каждого шага.',
    pill: '04',
  },
]

const steps = [
  {
    title: 'Погружение',
    details: 'Встреча с командой, аудит текущих активов, формирование гипотез развития.',
  },
  {
    title: 'Прототипирование',
    details: 'Разработка сценариев и дизайн-концептов, тестирование на фокус-группах.',
  },
  {
    title: 'Запуск и масштаб',
    details: 'Релиз кампаний, настройка автоматизации и итеративная оптимизация.',
  },
]

const metrics = [
  { label: 'Командных часов сохранено', value: '1200+' },
  { label: 'Средний рост лидов', value: 'x3.4' },
  { label: 'Срок внедрения', value: '6 недель' },
]

const App: FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-midnight font-montserrat text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-lilac blur-3xl" />
        <div className="absolute right-[-12rem] top-1/3 h-[28rem] w-[28rem] rounded-full bg-aurora blur-3xl" />
        <div
          className="absolute bottom-0 left-0 h-full w-full bg-grid-pattern"
          style={{ backgroundSize: '60px 60px' }}
        />
      </div>

      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-midnight via-midnight/90 to-transparent" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-20 pt-10 sm:px-10">
        <header className="flex items-center justify-between gap-6 rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
            Studio Konch
          </span>
          <nav className="hidden items-center gap-6 text-sm font-medium text-white/70 sm:flex">
            <a className="transition hover:text-white" href="#expertise">
              Экспертиза
            </a>
            <a className="transition hover:text-white" href="#process">
              Процесс
            </a>
            <a className="transition hover:text-white" href="#metrics">
              Метрики
            </a>
            <a className="transition hover:text-white" href="#cta">
              Связаться
            </a>
          </nav>
          <button className="rounded-full bg-gradient-to-r from-aurora to-lilac px-5 py-2 text-sm font-semibold text-midnight shadow-glow transition hover:shadow-lg">
            Записаться на созвон
          </button>
        </header>

        <main className="mt-16 flex flex-1 flex-col gap-24">
          <section className="relative grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Новый взгляд на бренд
              </div>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Трансформируем бренды в живые экосистемы, которые вдохновляют клиентов каждый день.
              </h1>
              <p className="max-w-xl text-lg text-white/70">
                Комбинируем стратегию, дизайн и цифровые продукты, чтобы создать устойчивую платформу взаимодействия.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-midnight transition hover:bg-slate-200">
                  Обсудить проект
                </button>
                <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white">
                  Посмотреть подход
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-aurora/60 blur-3xl" />
              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                    Индекс вовлеченности
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">
                    +18%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-aurora to-lilac" />
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                    >
                      <div className="text-2xl font-semibold text-white">{metric.value}</div>
                      <div className="mt-1 text-xs text-white/60">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section id="portfolio" className="relative border-t border-white/5 bg-[#070019] py-20">
        <div className="absolute left-1/2 top-10 h-48 w-[60%] -translate-x-1/2 rounded-full bg-[#ff4afc]/15 blur-[160px]" />
        <div className="relative mx-auto max-w-[1220px] px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center text-center">
            <span className="rounded-full border border-[#ff4afc]/40 bg-[#14002a] px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#ff9dfd]">
              Портфолио
            </span>
            <h2 className="mt-6 text-4xl font-extrabold uppercase tracking-wide">Кейсы, которые продают</h2>
            <p className="mt-4 max-w-2xl text-base text-white/65">
              Подбираю цвета, типографику и композицию так, чтобы выделить продукт и отразить ценность бренда. Изображения заменены на заглушки.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {portfolioItems.map((item) => (
              <article
                key={item.title}
                className="group flex h-full flex-col justify-between gap-6 rounded-[30px] border border-[#ff4afc]/25 bg-[#0c001d]/90 p-6 shadow-[0_10px_40px_rgba(8,0,18,0.35)] transition hover:border-[#ff4afc]/60"
              >
                <div className="space-y-5">
                  <div className="h-40 w-full rounded-[20px] border border-dashed border-[#ff4afc]/40 bg-[#14002a]" />
                  <div>
                    <div className="inline-flex rounded-full bg-[#ff4afc]/15 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ff9dfd]">
                      {item.tag}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold leading-tight text-white">{item.title}</h3>
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#ff4afc] transition group-hover:translate-x-1">
                  Смотреть структуру
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="relative overflow-hidden py-20">
        <div className="absolute inset-x-0 top-10 -z-10 h-full bg-gradient-to-b from-[#ff4afc]/10 via-transparent to-transparent" />
        <div className="relative mx-auto flex max-w-[1220px] flex-col gap-10 rounded-[40px] bg-gradient-to-r from-[#ff4afc] via-[#b83dff] to-[#721bff] px-6 py-12 text-center text-[#050014] sm:px-12">
          <span className="text-xs font-semibold uppercase tracking-[0.32em]">Как я работаю?</span>
          <h2 className="text-4xl font-extrabold uppercase">Упаковываю ваш продукт в сильный визуал</h2>
          <p className="mx-auto max-w-3xl text-base font-medium">
            Помогаю брендам выстроить презентацию и визуальную коммуникацию, которая отражает ценность продукта и ведет клиента к действию.
          </p>
          <div className="grid gap-6 text-left sm:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.number} className="rounded-[30px] bg-white/15 p-8 shadow-[0_20px_60px_rgba(5,0,20,0.1)]">
                <div className="text-sm font-semibold uppercase tracking-[0.32em]">{step.number}</div>
                <h3 className="mt-4 text-xl font-semibold uppercase leading-tight">{step.title}</h3>
                <p className="mt-4 text-sm text-[#f4d6ff]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="border-t border-white/5 bg-[#060016] py-20">
        <div className="mx-auto max-w-[1220px] px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-4 text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ff9dfd]">Отзывы о работе со мной</span>
            <h2 className="text-4xl font-extrabold uppercase">Клиенты возвращаются и рекомендуют</h2>
            <p className="max-w-2xl text-base text-white/65">
              Работая с Studio Konch, вы получаете партнера, который понимает маркетинг и визуал. Ниже — несколько живых отзывов.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.author}
                className="flex h-full flex-col justify-between gap-6 rounded-[30px] border border-[#ff4afc]/25 bg-[#0a001b] p-8 shadow-[0_20px_70px_rgba(6,0,20,0.35)]"
              >
                <p className="text-base leading-relaxed text-white/80">{item.quote}</p>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ff9dfd]">{item.author}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="relative border-t border-white/5 bg-[#050014] py-20">
        <div className="absolute left-[10%] top-10 h-56 w-56 rounded-full bg-[#7a2bff]/25 blur-[160px]" />
        <div className="relative mx-auto max-w-[900px] px-4 sm:px-8 lg:px-12">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ff9dfd]">Отвечаю на ваши вопросы</span>
            <h2 className="mt-5 text-4xl font-extrabold uppercase">FAQ</h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqItems.map((item, index) => {
              const isActive = index === activeFaq
              return (
                <div key={item.question} className="rounded-[24px] border border-[#ff4afc]/25 bg-[#0b001d] p-6">
                  <button
                    className="flex w-full items-center justify-between gap-6 text-left text-base font-semibold uppercase tracking-[0.2em] text-white"
                    onClick={() => setActiveFaq(isActive ? -1 : index)}
                  >
                    {item.question}
                    <span className="text-[#ff4afc]">{isActive ? '—' : '+'}</span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isActive ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="min-h-0 text-sm leading-relaxed text-white/65">{item.answer}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="cta" className="relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#120027] via-[#050014] to-[#050014]" />
        <div className="absolute left-1/2 top-0 -z-10 h-72 w-[70%] -translate-x-1/2 rounded-full bg-[#ff4afc]/20 blur-[180px]" />
        <div className="relative mx-auto flex max-w-[1220px] flex-col items-center rounded-[40px] border border-[#ff4afc]/40 bg-[#100022]/90 px-6 py-16 text-center shadow-[0_30px_120px_rgba(7,0,24,0.6)] sm:px-12">
          <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ff9dfd]">
            Необходима продающая инфографика?
          </span>
          <h2 className="mt-6 text-4xl font-extrabold uppercase leading-tight">
            Обращайтесь — помогу упаковать продукт и показать его ценность
          </h2>
          <p className="mt-4 max-w-2xl text-base text-white/70">
            Заполните бриф и расскажите о своей задаче. Предложу стратегию, сроки и форматы, которые дадут рост продаж уже на старте.
          </p>
          <a
            className="mt-10 inline-flex items-center justify-center rounded-full bg-[#ff4afc] px-10 py-4 text-sm font-semibold uppercase tracking-[0.32em] text-[#050014] transition hover:brightness-110"
            href="mailto:hello@studiokonch.com"
          >
            Заполнить бриф
          </a>
        </div>
      </section>
    </div>
  )
}

export default App
