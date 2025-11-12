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

          <section id="expertise" className="grid gap-6 md:grid-cols-3">
            {highlights.map((highlight) => (
              <article
                key={highlight.title}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:border-white/20"
              >
                <div className={`absolute inset-0 -z-10 opacity-40 ${highlight.accent}`} />
                <h3 className="text-xl font-semibold text-white">{highlight.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/70">{highlight.description}</p>
              </article>
            ))}
          </section>

          <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="space-y-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  {feature.pill}
                </span>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{feature.copy}</p>
              </div>
            ))}
          </section>

          <section id="process" className="grid gap-10 lg:grid-cols-[0.55fr_0.45fr] lg:items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">От исследования до запуска</h2>
              <p className="max-w-xl text-base text-white/70">
                Проходим три ключевых этапа, чтобы убедиться, что продукт не просто выглядит эффектно, но и работает на бизнес-цели.
              </p>
              <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                {steps.map((step, index) => (
                  <div key={step.title} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-semibold text-white/80">
                      0{index + 1}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                      <p className="text-sm text-white/60">{step.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <h3 className="text-lg font-semibold text-white">Командный ритм</h3>
                <p className="mt-3 text-sm text-white/70">
                  Создаем прозрачный календарь сессий и контрольных точек. Каждую неделю команда получает апдейт в формате короткого отчета и интерактивной доски.
                </p>
                <div className="mt-6 space-y-3 text-sm text-white/60">
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span>Спринт: концепции</span>
                    <span className="text-white/40">завершено</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span>Тестирование с аудиторией</span>
                    <span className="text-aurora">в процессе</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span>Настройка автоматизации</span>
                    <span className="text-white/40">запланировано</span>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur">
                <h3 className="text-lg font-semibold text-white">Результаты с первого месяца</h3>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  <li>• Рост конверсии лендинга на 42% после обновления сценариев.</li>
                  <li>• Ускорение процесса утверждения дизайна в 3 раза.</li>
                  <li>• Экономия 25 часов в неделю благодаря автоматизации.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="metrics" className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl space-y-4">
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Убедительные цифры подтверждают устойчивость решений
                </h2>
                <p className="text-base text-white/70">
                  Мы отслеживаем каждую инициативу: от первых откликов до повторных продаж. Это помогает прогнозировать нагрузку и планировать рост.
                </p>
              </div>
              <div className="grid flex-1 gap-4 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div
                    key={`metric-secondary-${metric.label}`}
                    className="rounded-3xl border border-white/10 bg-white/10 p-6 text-center shadow-glow"
                  >
                    <div className="text-3xl font-semibold text-white">{metric.value}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/50">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="cta" className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-aurora/20 via-white/10 to-lilac/20 p-[1px]">
            <div className="relative rounded-3xl bg-midnight px-10 py-14">
              <div className="absolute -top-20 right-10 h-48 w-48 rounded-full bg-lilac/40 blur-3xl" />
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="space-y-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                    Готовы создать экосистему
                  </span>
                  <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                    Забронируйте консультацию и получите первичную карту роста бренда.
                  </h2>
                  <p className="max-w-xl text-sm text-white/60">
                    После 45-минутного созвона вы получите дорожную карту с предложениями по развитию каналов, визуальной системе и автоматизации.
                  </p>
                </div>
                <div className="flex flex-col items-start gap-4 lg:items-end">
                  <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-midnight transition hover:bg-slate-200">
                    Забронировать слот
                  </button>
                  <span className="text-xs text-white/50">
                    Осталось 4 свободных окна на этой неделе
                  </span>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-20 flex flex-col items-center gap-4 border-t border-white/10 py-8 text-xs text-white/50 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Studio Konch. Все права защищены.</span>
          <div className="flex gap-4">
            <a className="transition hover:text-white" href="#">Политика</a>
            <a className="transition hover:text-white" href="#">Условия</a>
            <a className="transition hover:text-white" href="#">LinkedIn</a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
