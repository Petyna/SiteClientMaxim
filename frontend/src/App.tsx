import { useState } from 'react'
import type { FC } from 'react'

const heroFeatureCards = [
  { image: '/machine-light.png', alt: 'Подсветка машинки' },
  { image: '/machine-wheel.png', alt: 'Колёса для дрифта' },
  { image: '/machine-control.png', alt: 'Контроллер управления' },
  { image: '/machine-extreme.png', alt: 'Поездка по любой поверхности' },
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
        {/* Градиентные свечения */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-12rem] top-[-8rem] h-[28rem] w-[28rem] rounded-full bg-[#ff4afc]/30 blur-[140px]" />
          <div className="absolute right-[-10rem] top-[40%] h-[24rem] w-[24rem] rounded-full bg-[#7a2bff]/35 blur-[160px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,74,252,0.2),transparent_60%)]" />
        </div>

        <div className="relative mx-auto flex max-w-[1600px] flex-col px-4 pb-20 pt-14 sm:px-8 lg:px-12">
          <div className="text-center">
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold uppercase leading-tight">
              ПРОДАЮЩЕЕ <span className="text-[#ff4afc]">ПОРТФОЛИО</span>
            </h1>
          </div>

          <section className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* ЛЕВАЯ ЧАСТЬ */}
            <div className="space-y-10">
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-6">
                  <div className="h-60 w-1 bg-[#ff4afc]" />
                  <p className="max-w-[500px] text-3xl text-white">
                    Я <span className="font-bold text-[#ff4afc]">Евгений Орлов</span>,<br/>
                    профессиональный дизайнер с опытом работы более
                    <span className="font-bold text-[#ff4afc]"> 3 лет</span>, а также реализовавший около
                    <span className="font-bold text-[#ff4afc]"> 300 проектов</span> в разных нишах и
                    <span className="font-bold text-[#ff4afc]"> 2000 слайдов</span> за последний год в инфографике
                  </p>
                </div>

                <div className="flex flex-col items-end gap-3 text-[#ff4afc]">
                  <div className="flex gap-3">
                    <button className="flex h-16 w-16 border-2 border-white items-center justify-center rounded-full bg-[#ff4afc] text-2xl text-white shadow-[0_10px_35px_rgба(255,74,252,0.35)] transition hover:brightness-110">
                      ‹
                    </button>
                    <button className="flex h-16 w-16 border-2 border-white items-center justify-center rounded-full bg-[#ff4afc] text-2xl text-white shadow-[0_10px_35px_rgба(255,74,252,0.35)] transition hover:brightness-110">
                      ›
                    </button>
                  </div>
                  <span className="text-xl text-white">жми на стрелку</span>
                </div>
              </div>

              <div className="flex justify-start">
                <a
                  className="inline-flex items-center gap-3 justify-center rounded-3xl border-2 border-white bg-gradient-to-r from-[#ff4afc] to-[#7a2bff] px-16 py-4 text-3xl font-semibold text-white transition hover:scale-105 hover:brightness-110"
                  href="#cta"
                >
                  Заказать
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
                    alt="Telegram"
                    className="h-8 w-8"
                  />
                </a>
              </div>
            </div>

            {/* ПРАВАЯ ЧАСТЬ */}
            <div className="space-y-4">
              <div className="text-center text-3xl uppercase">
                CTR 9%
              </div>
              <div className="relative w-full max-w-[1200px] overflow-hidden rounded-[36px] ">

                <div className="relative grid gap-7 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
                  <article className="relative overflow-hidden rounded-[28px] bg-[#120026]/90 ">
                    <div className="aspect-[3/5]">
                      <img src="/machine-main.png" alt="Машинка для дрифта" className="h-full w-full object-cover" />
                    </div>
                  </article>

                  <div className="grid grid-cols-2 gap-7">
                    {heroFeatureCards.map((card) => (
                      <article
                        key={card.image}
                        className="overflow-hidden rounded-[24px] bg-[#15002d]/85"
                      >
                        <div className="aspect-[6/5]">
                          <img src={card.image} alt={card.alt} className="h-full w-full object-cover" />
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </section>
        </div>
      </div>

      <section id="portfolio" className="relative border-t border-white/5 bg-[#070019] py-20">
        <div className="absolute left-1/2 top-10 h-48 w-[60%] -translate-x-1/2 rounded-full bg-[#ff4afc]/15 blur-[160px]" />
        <div className="relative mx-auto max-w-[1380px] px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center text-center">
            <span className="rounded-full border border-[#ff4afc]/40 bg-[#14002a] px-5 py-2 text-xl font-semibold uppercase text-[#ff9dfd]">
              Портфолио
            </span>
          </div>

          <div className="mt-16 grid gap-12 sm:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 16 }).map((_, index) => (
              <article
                key={index}
                className="overflow-hidden rounded-[24px] border border-[#ff4afc]/15 bg-[#120026]/70 shadow-[0_18px_55px_rgба(6,0,24,0.32)] transition hover:-translate-y-1 hover:shadow-[0_26px_70px_rgба(8,0,30,0.4)]"
              >
                <div className="aspect-[2/3]">
                  <img src="/machine-main.png" alt="Пример карточки" className="h-full w-full object-cover" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,74,252,0.25),_transparent_65%)]" />
        <div className="relative mx-auto flex max-w-[1380px] flex-col items-center gap-16 px-4 text-center text-white sm:px-10 lg:px-16">
          <h2 className="text-[clamp(2.8rem,6vw,4.5rem)] font-extrabold uppercase tracking-[0.18em] text-[#ff9dfd] drop-shadow-[0_12px_40px_rgба(0,0,0,0.45)]">
            Как я работаю?
          </h2>

          <div className="grid w-full gap-8 text-left lg:grid-cols-2">
            <article className="flex flex-col gap-6 rounded-[36px] bg-white/95 p-8 text-[#050014] shadow-[0_28px_90px_rgба(60,0,120,0.35)] lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-[420px] space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-tight text-[#120026]">Анализирую ваше</h3>
                <p className="text-sm leading-relaxed text-[#050014]/80 sm:text-base">
                  ТЗ, при необходимости составляю его сам, анализирую конкурентов и нишу товара
                </p>
              </div>
              <div className="hidden h-32 w-32 overflow-hidden rounded-[28px] bg-gradient-to-br from-[#ff4afc] to-[#7a2bff] p-2 shadow-[0_18px_50px_rgба(120,0,255,0.45)] sm:block">
                <div className="h-full w-full rounded-[22px] bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#25003d_70%)]" />
              </div>
            </article>

            <article className="flex flex-col gap-6 rounded-[36px] bg-white/95 p-8 text-[#050014] shadow-[0_28px_90px_rgба(60,0,120,0.35)] lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-[420px] space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-tight text-[#120026]">Согласование</h3>
                <p className="text-sm leading-relaxed text-[#050014]/80 sm:text-base">
                  Стоимости и сроков. Предложу несколько тарифов на выбор, чтобы вы выбрали подходящий
                </p>
              </div>
              <div className="hidden h-32 w-32 overflow-hidden rounded-[28px] bg-gradient-to-br from-[#ffd86f] to-[#ff4afc] p-2 shadow-[0_18px_50px_rgба(255,120,0,0.45)] sm:block">
                <div className="h-full w-full rounded-[22px] bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#2c0130_70%)]" />
              </div>
            </article>
          </div>

          <div className="grid w-full gap-8 text-left sm:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-[32px] bg-white/95 p-7 text-[#050014] shadow-[0_20px_70px_rgба(60,0,120,0.28)]">
              <h3 className="text-xl font-black uppercase tracking-tight text-[#120026]">Выбор стиля</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#050014]/80">
                Подбираю референсы, которые подходят под ваш товар и формируют правильный визуальный акцент
              </p>
            </article>

            <article className="rounded-[32px] bg-white/95 p-7 text-[#050014] shadow-[0_20px_70px_rgба(60,0,120,0.28)]">
              <h3 className="text-xl font-black uppercase tracking-tight text-[#120026]">Создаю дизайн</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#050014]/80">
                Отправляю результат в удобном формате, следую согласованному ТЗ и быстро вношу корректировки
              </p>
            </article>

            <article className="rounded-[32px] bg-white/95 p-7 text-[#050014] shadow-[0_20px_70px_rgба(60,0,120,0.28)]">
              <h3 className="text-xl font-black uppercase tracking-tight text-[#120026]">2 круга правок</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#050014]/80">
                Бесплатно для вас. Правки не включают полную переработку, но помогают довести проект до идеала
              </p>
            </article>

            <article className="flex flex-col justify-between rounded-[32px] bg-gradient-to-br from-[#120026] via-[#290057] to-[#ff4afc] p-[1px] shadow-[0_22px_80px_rgба(255,74,252,0.35)]">
              <div className="h-full rounded-[30px] bg-[#0b001d] p-7 text-left text-white">
                <h3 className="text-xl font-black uppercase tracking-tight">Заказать дизайн</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/80">
                  Напишите задачу, и я предложу лучшее решение и сроки. Подберу формат сотрудничества под ваш продукт
                </p>
                <a
                  className="mt-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#ff4afc] via-[#d05bff] to-[#7a2bff] px-8 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white shadow-[0_16px_50px_rgба(255,74,252,0.45)] transition hover:scale-105"
                  href="#cta"
                >
                  Заказать
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
                    alt="Telegram"
                    className="h-5 w-5"
                  />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="reviews" className="border-t border-white/5 bg-[#060016] py-20">
        <div className="mx-auto max-w-[1220px] px-4 sm:px-8 lg:px-12">
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.author}
                className="flex h-full flex-col justify-between gap-6 rounded-[30px] border border-[#ff4afc]/25 bg-[#0a001b] p-8 shadow-[0_20px_70px_rgba(6,0,20,0.35)]"
              >
                <p className="text-base leading-relaxed text-white/80">{item.quote}</p>
                <div className="text-sm font-semibold uppercase text-[#ff9dfd]">{item.author}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="relative border-t border-white/5 bg-[#050014] py-20">
        <div className="absolute left-[10%] top-10 h-56 w-56 rounded-full bg-[#7a2bff]/25 blur-[160px]" />
        <div className="relative mx-auto max-w-[900px] px-4 sm:px-8 lg:px-12">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase text-[#ff9dfd]">Отвечаю на ваши вопросы</span>
            <h2 className="mt-5 text-4xl font-extrabold uppercase">FAQ</h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqItems.map((item, index) => {
              const isActive = index === activeFaq
              return (
                <div key={item.question} className="rounded-[24px] border border-[#ff4afc]/25 bg-[#0b001d] p-6">
                  <button
                    className="flex w-full items-center justify-between gap-6 text-left text-base font-semibold uppercase text-white"
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
          <span className="text-xs font-semibold uppercase text-[#ff9dfd]">
            Необходима продающая инфографика?
          </span>
          <h2 className="mt-6 text-4xl font-extrabold uppercase leading-tight">
            Обращайтесь — помогу упаковать продукт и показать его ценность
          </h2>
          <p className="mt-4 max-w-2xl text-base text-white/70">
            Заполните бриф и расскажите о своей задаче. Предложу стратегию, сроки и форматы, которые дадут рост продаж уже на старте.
          </p>
          <a
            className="mt-10 inline-flex items-center justify-center rounded-full bg-[#ff4afc] px-10 py-4 text-sm font-semibold uppercase text-[#050014] transition hover:brightness-110"
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