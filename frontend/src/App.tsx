import { useEffect, useMemo, useRef, useState } from 'react'
import type { FC } from 'react'
import { motion, MotionConfig } from 'motion/react'

const productSets = [
  {
    id: 'car',
    title: 'Машинка для дрифта',
    ctr: 'CTR 9%',
    cards: [
      { image: '/images/afthero/car1.png', alt: 'Карточка машинки крупный план', large: true },
      { image: '/images/afthero/car2.png', alt: 'Карточка аксессуаров машинки' },
      { image: '/images/afthero/car3.png', alt: 'Карточка деталей машинки' },
      { image: '/images/afthero/car4.png', alt: 'Карточка возможностей машинки' },
      { image: '/images/afthero/car5.png', alt: 'Карточка преимуществ машинки' },
    ],
  },
  {
    id: 'camera',
    title: 'Экшн камера',
    ctr: 'CTR 8%',
    cards: [
      { image: '/images/afthero/camera1.png', alt: 'Карточка камеры крупный план', large: true },
      { image: '/images/afthero/camera2.png', alt: 'Карточка аксессуаров камеры' },
      { image: '/images/afthero/camera3.png', alt: 'Карточка режимов камеры' },
      { image: '/images/afthero/camera4.png', alt: 'Карточка возможностей камеры' },
      { image: '/images/afthero/camera5.png', alt: 'Карточка преимуществ камеры' },
    ],
  },
  {
    id: 'cube',
    title: 'Игровой куб',
    ctr: 'CTR 9%',
    cards: [
      { image: '/images/afthero/cube1.png', alt: 'Карточка игрового куба крупный план', large: true },
      { image: '/images/afthero/cube2.png', alt: 'Карточка граней куба' },
      { image: '/images/afthero/cube3.png', alt: 'Карточка возможностей куба' },
      { image: '/images/afthero/cube4.png', alt: 'Карточка преимуществ куба' },
      { image: '/images/afthero/cube5.png', alt: 'Карточка аксессуаров куба' },
    ],
  },
  {
    id: 'ar',
    title: 'AR комплект',
    ctr: 'CTR 10%',
    cards: [
      { image: '/images/afthero/ar1.png', alt: 'Карточка AR комплекта крупный план', large: true },
      { image: '/images/afthero/ar2.png', alt: 'Карточка возможностей AR' },
      { image: '/images/afthero/ar3.png', alt: 'Карточка эффектов AR' },
      { image: '/images/afthero/ar4.png', alt: 'Карточка интерфейса AR' },
      { image: '/images/afthero/ar5.png', alt: 'Карточка преимуществ AR' },
    ],
  },
]

const portfolioImages = [
  { src: encodeURI('/images/portfolio/1 сл.jpg'), alt: 'Первый слайд портфолио' },
  { src: encodeURI('/images/portfolio/1 слайд.jpg'), alt: 'Вариант слайда портфолио' },
  { src: encodeURI('/images/portfolio/1.jpg'), alt: 'Пример карточки с товаром' },
  { src: encodeURI('/images/portfolio/Обложка бутсы.jpg'), alt: 'Обложка с бутсами' },
  { src: encodeURI('/images/portfolio/аппарат.jpg'), alt: 'Карточка с аппаратом' },
  { src: encodeURI('/images/portfolio/браслет.jpg'), alt: 'Карточка с браслетом' },
  { src: encodeURI('/images/portfolio/бульдозер.jpg'), alt: 'Карточка с бульдозером' },
  { src: encodeURI('/images/portfolio/вбртр.jpg'), alt: 'Карточка ВБРТР' },
  { src: encodeURI('/images/portfolio/держ.jpg'), alt: 'Карточка держателя' },
  { src: encodeURI('/images/portfolio/кросовки.jpg'), alt: 'Карточка с кроссовками' },
  { src: encodeURI('/images/portfolio/массажер.jpg'), alt: 'Карточка с массажером' },
  { src: encodeURI('/images/portfolio/нож.jpg'), alt: 'Карточка с ножом' },
  { src: encodeURI('/images/portfolio/отпариватель.jpg'), alt: 'Карточка с отпаривателем' },
  { src: encodeURI('/images/portfolio/секатор.jpg'), alt: 'Карточка с секатором' },
  { src: encodeURI('/images/portfolio/сумка.jpg'), alt: 'Карточка с сумкой' },
  { src: encodeURI('/images/portfolio/шуруповерт.jpg'), alt: 'Карточка с шуруповёртом' },
]

const reviewImages = [
  { id: 'review-1', src: '/images/reviews/1.jpg', alt: 'Отзыв клиента №1' },
  { id: 'review-2', src: '/images/reviews/2.jpg', alt: 'Отзыв клиента №2' },
  { id: 'review-3', src: '/images/reviews/3.jpg', alt: 'Отзыв клиента №3' },
  { id: 'review-4', src: '/images/reviews/4.jpg', alt: 'Отзыв клиента №4' },
  { id: 'review-5', src: '/images/reviews/5.jpg', alt: 'Отзыв клиента №5' },
  { id: 'review-6', src: '/images/reviews/6.jpg', alt: 'Отзыв клиента №6' },
  { id: 'review-7', src: '/images/reviews/7.jpg', alt: 'Отзыв клиента №7' },
  { id: 'review-8', src: '/images/reviews/8.jpg', alt: 'Отзыв клиента №8' },
  { id: 'review-9', src: '/images/reviews/9.jpg', alt: 'Отзыв клиента №9' },
  { id: 'review-10', src: '/images/reviews/10.jpg', alt: 'Отзыв клиента №10' },
  { id: 'review-11', src: '/images/reviews/11.jpg', alt: 'Отзыв клиента №11' },
  { id: 'review-12', src: '/images/reviews/12.jpg', alt: 'Отзыв клиента №12' },
  { id: 'review-13', src: '/images/reviews/13.jpg', alt: 'Отзыв клиента №13' },
  { id: 'review-14', src: '/images/reviews/14.jpg', alt: 'Отзыв клиента №14' },
]

const faqItems = [
  {
    question: 'Что от меня нужно для начала работы?',
    answer:
      'Для начала работы нам необходима информация о товаре и фотографии. Если ее нет, то тз и фотографии я смогу составить сам, используя искусственный интеллект',
  },
  {
    question: 'У меня нет фотографий — что делать?',
    answer:
      'Если их нет, то фотографии я смогу создать сам, используя искуственный интелект, идеально визуализируя функции вашего товара, по необходимости найду фото на стоках в интернете',
  },
  {
    question: 'Какие есть способы оплаты?',
    answer: 'Оплата по банковской карте или по счету без ндс и надбавок',
  },
  {
    question: 'Сколько времени занимает разработка?',
    answer:
      'Сроки зависят от объема вашего заказа. Я работаю в порядке живой очереди и выполняю ваш заказ в день обозначенный вместе с вами',
  },
  {
    question: 'У меня крупный заказ. Можете сделать скидку?',
    answer: 'Да, при большом объем я предлагаю скидку 10% - 15%, в зависимости от объема',
  },
  {
    question: 'Сколько правок бесплатно? Работаете по договору?',
    answer: 'Бесплатно вы можете внести 2 круга правок, при необходимости заключим договор',
  },
]

const App: FC = () => {
  const [activeFaq, setActiveFaq] = useState<number>(0)
  const [reviewWindowStart, setReviewWindowStart] = useState<number>(0)
  const [activeProductIndex, setActiveProductIndex] = useState<number>(0)
  const [isCompactNav, setIsCompactNav] = useState<boolean>(false)

  const totalReviews = reviewImages.length
  const defaultReviewSlots = useMemo(() => Math.min(5, Math.max(1, totalReviews)), [totalReviews])
  const [visibleReviewSlots, setVisibleReviewSlots] = useState<number>(defaultReviewSlots)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const getSlots = () => {
      if (window.innerWidth < 640) return Math.min(totalReviews, 2)
      if (window.innerWidth < 1024) return Math.min(totalReviews, 3)
      return Math.min(totalReviews, 5)
    }

    const updateSlots = () => {
      setVisibleReviewSlots(getSlots())
      setIsCompactNav(window.innerWidth < 1024)
    }

    updateSlots()
    window.addEventListener('resize', updateSlots)
    return () => window.removeEventListener('resize', updateSlots)
  }, [totalReviews, defaultReviewSlots])

  const visibleReviews = totalReviews
    ? Array.from({ length: visibleReviewSlots }, (_, index) => {
        const reviewIndex = (reviewWindowStart + index + totalReviews) % totalReviews
        return reviewImages[reviewIndex]
      })
    : []

  const prevVisibleReviewIds = useRef<Set<string>>(new Set(visibleReviews.map((review) => review.id)))

  useEffect(() => {
    prevVisibleReviewIds.current = new Set(visibleReviews.map((review) => review.id))
  }, [visibleReviews])

  const activeProduct = productSets[activeProductIndex]

  const canUseCarousel = totalReviews > visibleReviewSlots

  const handlePrevReview = () => {
    if (!totalReviews) return
    setReviewWindowStart((prev) => (prev - 1 + totalReviews) % totalReviews)
  }

  const handleNextReview = () => {
    if (!totalReviews) return
    setReviewWindowStart((prev) => (prev + 1) % totalReviews)
  }

  const handlePrevProduct = () => {
    setActiveProductIndex((prev) => (prev - 1 + productSets.length) % productSets.length)
  }

  const handleNextProduct = () => {
    setActiveProductIndex((prev) => (prev + 1) % productSets.length)
  }

  const handleScrollTop = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <MotionConfig reducedMotion="user">
      <div id="top" className="min-h-screen font-montserrat text-white">
      <div className="relative overflow-hidden">
        {/* Градиентные свечения */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-12rem] top-[-8rem] h-[28rem] w-[28rem] rounded-full" />
          <div className="absolute right-[-10rem] top-[40%] h-[24rem] w-[24rem] rounded-full" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255, 74, 252, 0.63),transparent_58%)] sm:hidden" />
          <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_top,rgba(255, 74, 252, 0.38),transparent_60%)] sm:block" />
        </div>

        <motion.section
          className="relative mb-12 w-full overflow-hidden border-y border-white/5 shadow-[0_28px_90px_rgба(60,0,120,0.35)]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="relative aspect-[16/9] w-full">
           <img
  src="/images/hero/bg.png"
  alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-90"
        style={{
             mixBlendMode: "overlay"
        }}
/>

            <div className="absolute left-0 top-[-1rem] z-30 w-full flex justify-start px-2 pt-0 sm:px-4 lg:px-6">
              <div className="w-full">
                {!isCompactNav && (
                  <div className="flex flex-wrap items-center justify-between gap-3 px-1 py-2 md:gap-4 lg:px-3 xl:gap-6">
                    <a href="https://t.me/EvgenyCreativity" target="_blank" rel="noreferrer">
                      <img
                        src="images/logo.png"
                        alt="Evgeny Creativity"
                        className="h-10 w-auto transition-transform duration-300 hover:scale-105"
                      />
                    </a>

                    <nav className="hidden lg:flex flex-wrap items-center gap-6 text-sm font-medium text-white xl:gap-10 xl:text-base 2xl:gap-14 2xl:text-lg">
                      <a href="#portfolio" className="transition-colors duration-200 hover:text-white/80">
                        Портфолио
                      </a>
                      <a href="#why" className="transition-colors duration-200 hover:text-white/80">
                        Почему я?
                      </a>
                      <a href="#process" className="transition-colors duration-200 hover:text-white/80">
                        Как работаем?
                      </a>
                      <a href="#faq" className="transition-colors duration-200 hover:text-white/80">
                        Ответы на вопросы
                      </a>
                    </nav>

                    <div className="relative hidden flex-shrink-0 sm:block">
                      <motion.a
                        href="https://t.me/work_miracles1"
                        target="_blank"
                        rel="noreferrer"
                        className="relative origin-left inline-flex items-center gap-4 rounded-full border-2 border-white bg-[linear-gradient(95deg,#ff6af6_0%,#d83bff_100%)] px-8 py-3 text-lg font-semibold text-white shadow-[0_12px_45px_rgбаи(255,106,246,0.5)] transition-transform duration-300 -ml-6 mt-6 sm:px-10 sm:py-4 sm:-ml-8 sm:mt-7 md:px-12 md:text-xl md:py-4 md:-ml-10 md:mt-8 lg:-ml-8 lg:mt-8 xl:-ml-6 before:absolute before:inset-0 before:-z-10 before:content-[''] before:rounded-full before:bg-[#ff6af6]/45 before:blur-[32px]"
                        whileHover={{ scale: 1.01, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } }}
                        whileTap={{ scale: 0.99, transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] } }}
                      >
                        Заказать
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
                          alt="Telegram"
                          className="h-6 w-6"
                        />
                      </motion.a>
                    </div>
                  </div>
                )}
              </div>
            </div>

   <motion.img
  src="/images/hero/character.png"
  alt="Персонаж"
  className="
    pointer-events-none
    absolute inset-0
    h-full w-full
    object-contain
    object-bottom
    z-100
    left-1/4
  "
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: [0, 30, 40] }}
  transition={{
    opacity: { duration: 2 },
    y: { duration: 1, repeat: Infinity }
  }}
/>

            <motion.img
              src="/images/hero/overlay.png"
              alt="Световые эффекты"
              className="pointer-events-none absolute inset-0 z-25 h-full w-full object-cover"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: [1.04, 1.1, 1.04] }}
              transition={{
                opacity: { duration: 3, ease: [0.25, 0.1, 0.25, 1] },
                scale: { duration: 24, repeat: Infinity, ease: 'easeInOut' },
              }}
            />

            {!isCompactNav && (
              <motion.a
                href="https://t.me/work_miracles1"
                target="_blank"
                rel="noreferrer"
                className="hero-cta absolute bottom-[1%] bottom-[4.5%] z-30 inline-flex items-center gap-3 rounded-full border-2 border-white bg-[linear-gradient(95deg,#ff6af6_0%,#d83bff_100%)] px-10 py-4 text-xl font-semibold text-white shadow-[0_18px_60px_rgбаи(255,106,246,0.55)] before:absolute before:inset-0 before:-z-10 before:content-[''] before:rounded-full before:bg-[#ff6af6]/45 before:blur-[32px]"
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.97 }}
              >
                Заказать
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
                  alt="Telegram"
                  className="h-6 w-6"
                />
              </motion.a>
            )}
          </div>
        </motion.section>

        {isCompactNav && (
          <div className="mx-auto flex max-w-[1600px] justify-center px-4 pb-6 pt-3 sm:px-6">
            <a href="https://t.me/EvgenyCreativity" target="_blank" rel="noreferrer">
              <img
                src="images/logo.png"
                alt="Evgeny Creativity"
                className="h-12 w-auto transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>
        )}

        <div className="relative mx-auto flex w-full max-w-[clamp(1300px,70vw,1600px)] flex-col px-[clamp(0.5rem,0.5vw,0.5rem)] pb-20 pt-14">


          <div className="text-center">
            <motion.h1
              className="text-[clamp(3rem,12vw,9.5rem)] font-bebas font-extrabold uppercase leading-tight italic"
              initial={{ opacity: 0, y: 36, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.95, ease: [0.25, 0.1, 0.25, 1] }}
            >
              ПРОДАЮЩЕЕ <span className="text-[#ff4afc]">ПОРТФОЛИО</span>
            </motion.h1>
          </div>

          <section id="why" className="mt-10 grid gap-12 lg:grid-cols-[0.7fr_1.30fr] lg:items-center">
            {/* ЛЕВАЯ ЧАСТЬ */}
            <motion.div
              className="space-y-10"
              initial={{ opacity: 0, x: -40, y: 18 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-12">
                  <div className="h-80 w-3 bg-[#ff4afc]" />
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
                    <motion.button
                      className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-[#ff4afc] text-2xl text-white shadow-[0_10px_35px_rgба(255,74,252,0.35)]"
                      type="button"
                      onClick={handlePrevProduct}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.94 }}
                    >
                      <img src="/images/leftarrow.png" alt="" className="h-6 w-6" aria-hidden />
                    </motion.button>
                    <motion.button
                      className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-[#ff4afc] text-2xl text-white shadow-[0_10px_35px_rgба(255,74,252,0.35)]"
                      type="button"
                      onClick={handleNextProduct}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.94 }}
                    >
                      <img src="/images/rightarrow.png" alt="" className="h-6 w-6" aria-hidden />
                    </motion.button>
                  </div>
                  <span className="text-md text-white">жми на стрелку</span>
                </div>
              </div>

              <div className="flex justify-start">
                <motion.a
                  className="inline-flex items-center gap-3 justify-center rounded-3xl border-2 border-white bg-[linear-gradient(95deg,#ff6af6_0%,#d83bff_100%)] px-16 py-4 text-3xl font-semibold text-white"
                  href="https://t.me/work_miracles1"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.01, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } }}
                  whileTap={{ scale: 0.99, transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] } }}
                >
                  Заказать
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
                    alt="Telegram"
                    className="h-8 w-8"
                  />
                </motion.a>
              </div>
            </motion.div>

            {/* ПРАВАЯ ЧАСТЬ */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, x: 34, y: 16 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="text-center text-5xl uppercase">
                {activeProduct.ctr}
              </div>
              <div className="relative w-full overflow-hidden rounded-[36px] p-8 sm:p-9 lg:max-w-none lg:p-10">
                <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 xl:gap-8 xl:[grid-template-columns:repeat(4,minmax(0,20.5rem))]">
                  <motion.article
                    className="group relative aspect-[3/4] overflow-hidden rounded-[32px] shadow-[0_18px_60px_rgба(8,0,32,0.45)] sm:col-span-2 lg:col-span-2 lg:row-span-2"
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.05, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <img
                      src={activeProduct.cards[0].image}
                      alt={activeProduct.cards[0].alt}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </motion.article>

                  {activeProduct.cards.slice(1).map((card, index) => (
                    <motion.article
                      key={card.image}
                      className="group aspect-[3/4] overflow-hidden rounded-[28px] shadow-[0_16px_50px_rgба(10,0,32,0.4)]"
                      initial={{ opacity: 0, y: 26, scale: 0.96 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.24 }}
                      transition={{ duration: 0.95, delay: 0.05 * index, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </motion.article>
                  ))}
                </div>
              </div>
            </motion.div>

          </section>
        </div>
      </div>

      <motion.section
        id="portfolio"
        className="relative border-t border-white/5 py-16"
        initial={{ opacity: 0, y: 48, scale: 0.93 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.04 }}
        transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="absolute left-1/2 top-10 h-48 w-[60%] -translate-x-1/2 rounded-full bg-[#ff4afc]/15 blur-[160px]" />
        <div className="relative mx-auto w-full max-w-[clamp(1300px,70vw,1600px)] px-[clamp(0.5rem,0.5vw,0.5rem)]">

          <motion.div
            className="mt-16 grid gap-12 sm:grid-cols-2 xl:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.06 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.07 } },
            }}
          >
            {portfolioImages.map((card) => (
              <motion.article
                key={card.src}
                className="group overflow-hidden rounded-[24px] border border-[#ff4afc]/15 bg-[#120026]/70 shadow-[0_18px_55px_rgба(6,0,24,0.32)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgба(8,0,30,0.4)]"
                variants={{
                  hidden: { opacity: 0, y: 32, scale: 0.94 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="aspect-[3/4]">
                  <img
                    src={card.src}
                    alt={card.alt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

    <section id="process" className="relative overflow-hidden pt-16 pb-24">

  {/* Нижний цветной фон */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <div
className="h-full w-full bg-[#ff4afc]"
      style={{
        opacity: '0.9',
        mixBlendMode: 'overlay'
      }}
    />
  </div>

{/* Сетка внутри секции с объемным градиентом */}
<div
  className="absolute inset-0 z-[1] pointer-events-none"
  style={{
    backgroundImage: `
      linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px),
      linear-gradient(180deg, rgba(255,255,255,0.10) 1px, transparent 1px)
    `,
    backgroundSize: "90px 90px",

    maskImage: `
      radial-gradient(
        circle at center,
        rgba(0,0,0,1) 0percent,
        rgba(0,0,0,0.85) 30percent,
        rgba(0,0,0,0.55) 60percent,
        rgba(0,0,0,0.25) 80percent,
        rgba(0,0,0,0) 100percent
      )
    `
    ,
    WebkitMaskImage: `
      radial-gradient(
        circle at center,
        rgba(0,0,0,1) 0percent,
        rgba(0,0,0,0.85) 30percent,
        rgba(0,0,0,0.55) 60percent,
        rgba(0,0,0,0.25) 80percent,
        rgba(0,0,0,0) 100percent
      )
    `
  }}
/>

  {/* Контент поверх обоих слоев */}
  <motion.div
    className="relative z-[2] mx-auto flex w-full max-w-[clamp(1300px,70vw,1600px)] flex-col items-center gap-8 px-[clamp(0.5rem,0.5vw,0.5rem)] text-center text-white"
    initial={{ opacity: 0, y: 48, scale: 0.93 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.18 }}
    transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
  >
    
    {/* Твой контент */}
    <motion.h2
      className="text-[clamp(3.25rem,11vw,10.125rem)] font-bebas font-extrabold uppercase text-white drop-shadow-[0_12px_40px_rgба(0,0,0,0.45)] italic"
      initial={{ opacity: 0, y: 32, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
    >
      Как я работаю?
    </motion.h2>

    <motion.div
      className="grid w-full gap-8 text-left lg:grid-cols-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
    >
      <motion.article
        className="flex flex-col gap-6 rounded-[36px] bg-white p-8 text-[#050014] shadow-[0_28px_90px_rgба(60,0,120,0.35)] lg:flex-row lg:items-center lg:justify-between"
        variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 1.05, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-[420px] space-y-4">
          <motion.h3
            className="text-5xl font-black italic tracking-tight text-[#120026]"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Анализирую ваше
          </motion.h3>
          <motion.p
            className="text-2xl font-semibold italic leading-relaxed text-black"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
          >
            ТЗ, при необходимости составляю его сам, анализирую конкурентов и нишу товара
          </motion.p>
        </div>
        <div className="group mx-auto flex aspect-square w-[9rem] items-center justify-center overflow-hidden rounded-[28px] sm:mx-0 sm:w-[10.5rem] md:w-[11.5rem] lg:w-[12.5rem]">
          <img
            src="/images/work/lupa.png"
            alt="Иконка анализа"
            className="h-full w-full object-contain"
          />
        </div>
      </motion.article>

      <motion.article
        className="flex flex-col gap-6 rounded-[36px] bg-white p-8 text-[#050014] shadow-[0_28px_90px_rgába(60,0,120,0.35)] lg:flex-row lg:items-center lg:justify-between"
        variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 1.05, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-[420px] space-y-4">
          <motion.h3
            className="text-5xl font-black italic tracking-tight text-[#120026]"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Согласование
          </motion.h3>
          <motion.p
            className="text-2xl font-semibold italic leading-relaxed text-black "
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Стоимости и сроков. Предложу несколько тарифов на выбор, чтобы вы выбрали подходящий
          </motion.p>
        </div>
        <div className="group mx-auto flex aspect-square w-[9rem] items-center justify-center overflow-hidden rounded-[28px] 60,0,120,0.25)] md:w-[11.5rem] lg:w-[12.5rem]">
          <img
            src="/images/work/money.png"
            alt="Иконка согласования"
            className="h-full w-full object-contain"
          />
        </div>
      </motion.article>
    </motion.div>

    <motion.div
      className="grid w-full gap-8 text-left sm:grid-cols-2 xl:grid-cols-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
    >
      <motion.article
        className="rounded-[30px] bg-white p-7 text-[#050014] shadow-[0_18px_60px_rgба(60,0,120,0.26)]"
        variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.h3
          className="text-3xl font-black italic tracking-tight text-[#120026]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Выбор стиля
        </motion.h3>
        <motion.p
          className="mt-3 text-xl font-semibold italic leading-relaxed text-black"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Подбираю референсы, которые подходят под ваш товар и формируют правильный визуальный акцент
        </motion.p>
      </motion.article>

      <motion.article
        className="rounded-[30px] bg-white p-7 text-[#050014] shadow-[0_18px_60px_rgба(60,0,120,0.26)]"
        variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.h3
          className="text-3xl font-black italic tracking-tight text-[#120026]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Создаю дизайн
        </motion.h3>
        <motion.p
          className="mt-3 text-xl font-semibold italic leading-relaxed text-black"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Отправляю результат в удобном формате, следую согласованному ТЗ и быстро вношу корректировки
        </motion.p>
      </motion.article>

      <motion.article
        className="rounded-[30px] bg-white p-7 text-[#050014] shadow-[0_18px_60px_rgба(60,0,120,0.26)]"
        variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h3 className="text-3xl font-black italic tracking-tight text-[#120026]">2 круга правок</h3>
        <p className="mt-3 text-xl font-semibold italic leading-relaxed text-black">
          Бесплатно для вас. Помогает довести проект до идеала
        </p>
      </motion.article>

      <motion.article
        className="flex flex-col justify-between rounded-[30px] bg-[#0b001d] from-[#120026] via-[#290057] to-[#ff4afc] p-[1px] shadow-[0_20px_75px_rgба(255,74,252,0.32)]"
        variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="h-full rounded-[28px] bg-[#0b001d] p-7 text-left text-white">
          <h3 className="text-2xl font-black tracking-tight">Заказать дизайн</h3>
          <p className="mt-3 text-md font-semibold italic leading-relaxed text-white">
            Пришлите мне задачу, подберу решение и сроки. Найду формат сотрудничества под ваш продукт
          </p>
          <motion.a
            className="mt-4 inline-flex items-center gap-3 rounded-3xl border-2 border-white bg-[linear-gradient(95deg,#ff6af6_0%,#d83bff_100%)] px-8 py-3 text-2xl font-semibold text-white shadow-[0_16px_50px_rgба(255,74,252,0.45)]"
            href="https://t.me/work_miracles1"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.01, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } }}
            whileTap={{ scale: 0.99, transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] } }}
          >
            Заказать
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
              alt="Telegram"
              className="h-7 w-7"
            />
          </motion.a>
        </div>
      </motion.article>
    </motion.div>

  </motion.div>
</section>


      <motion.section
        id="reviews"
        className="border-t border-white/5  py-20"
        initial={{ opacity: 0, y: 48, scale: 0.93 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.16 }}
        transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="mx-auto w-full max-w-[clamp(1300px,70vw,1600px)] px-[clamp(0.5rem,0.5vw,0.5rem)]">

          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl space-y-6">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                <motion.h2
                  className="flex flex-col gap-4 text-[clamp(3.2rem,9vw,10.5rem)] font-bebas font-extrabold leading-[0.95] italic"
                  initial={{ opacity: 0, y: 32, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <span className="block whitespace-nowrap">Отзывы о работе </span>
                  <span className="flex w-full flex-wrap items-center gap-2 text-white sm:flex-nowrap">
                    <span className="block flex-1 text-white">со мной</span>
                    <motion.span
                      className="inline-flex flex-shrink-0 items-center gap-4 rounded-full border-2 border-white bg-[linear-gradient(95deg,#ff6af6_0%,#d83bff_100%)] px-6 py-2 font-montserrat normal-case shadow-[0_18px_55px_rgбаи(255,74,252,0.3)] sm:ml-auto"
                      initial={{ opacity: 0, y: 26, scale: 0.96 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.32 }}
                      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                      aria-hidden
                    >
                      <div className="flex items-center gap-4 rounded-full bg-[linear-gradient(90deg,#ff6af6,#d83bff)] px-6 py-2 shadow-[0_8px_22px_rgба(255,74,252,0.45)]">
                        <span className="-ml-4 flex h-14 w-14 items-center justify-center rounded-full bg-black font-bebas text-[32px] font-extrabold leading-none text-[#ff6af6] not-italic">
                          4.8
                        </span>
                        <div className="flex min-w-[11rem] flex-col items-start leading-tight text-left font-montserrat normal-case">
                          <div className="mb-1 flex items-center">
                            {Array.from({ length: 5 }).map((_, idx) => (
                              <svg
                                key={idx}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="white"
                                className="h-4 w-4"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-sm font-semibold text-white/95">Рейтинг</span>
                          <span className="text-sm font-semibold text-white/90">на основе Авито</span>
                        </div>
                      </div>
                    </motion.span>
                  </span>
                </motion.h2>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 text-[#ff4afc] lg:items-end">
              <div className="flex flex-col items-center gap-2">
                <div className="flex gap-4">
                  <motion.button
                    aria-label="Предыдущий отзыв"
                    className="flex h-24 w-24 items-center justify-center rounded-[18px] border border-white bg-[#ff4afc] text-2xl text-white shadow-[0_12px_40px_rgбаи(255,74,252,0.4)] disabled:cursor-not-allowed disabled:opacity-50"
                    type="button"
                    onClick={handlePrevReview}
                    disabled={!canUseCarousel}
                    whileHover={{ scale: canUseCarousel ? 1.05 : 1 }}
                    whileTap={{ scale: canUseCarousel ? 0.95 : 1 }}
                  >
                    <img src="/images/leftarrow.png" alt="" className="h-12 w-12" aria-hidden />
                  </motion.button>
                  <motion.button
                    aria-label="Следующий отзыв"
                    className="flex h-24 w-24 items-center justify-center rounded-[18px] border border-white bg-[#ff4afc] text-2xl text-white shadow-[0_12px_40px_rgбаи(255,74,252,0.4)] disabled:cursor-not-allowed disabled:opacity-50"
                    type="button"
                    onClick={handleNextReview}
                    disabled={!canUseCarousel}
                    whileHover={{ scale: canUseCarousel ? 1.05 : 1 }}
                    whileTap={{ scale: canUseCarousel ? 0.95 : 1 }}
                  >
                    <img src="/images/rightarrow.png" alt="" className="h-12 w-12" aria-hidden />
                  </motion.button>
                </div>
                <span className="text-lg text-center text-white">жми на стрелку</span>
              </div>
            </div>
          </div>

          <motion.div
            className="mt-12 flex gap-5 overflow-x-auto pb-4 sm:grid sm:gap-5 sm:overflow-visible sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.16 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {visibleReviews.map((review) => {
              const isNew = !prevVisibleReviewIds.current.has(review.id)
              return (
                <motion.article
                  key={review.id}
                  className="group relative flex-shrink-0 basis-[calc(50%-0.65rem)] overflow-hidden rounded-[24px] p-4 shadow-[0_18px_60px_rgбаи(6,0,24,0.32)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgбаи(8,0,32,0.42)] sm:basis-auto sm:flex-shrink"
                  initial={isNew ? { opacity: 0, y: 32, scale: 0.94 } : false}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{ scrollSnapAlign: 'center' }}
                >
                  <div className="relative overflow-hidden rounded-[22px]">
                    <div className="aspect-[9/16]">
                      <img
                        src={review.src}
                        alt={review.alt}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="faq"
        className="relative border-t border-white/5 py-20"
        initial={{ opacity: 0, y: 48, scale: 0.93 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.16 }}
        transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="relative mx-auto w-full max-w-[clamp(1300px,70vw,1600px)] px-[clamp(0.5rem,0.5vw,0.5rem)]">

          <div className="text-left">
            <motion.h2
              className="text-[clamp(3.2rem,9vw,10.5rem)] font-bebas font-extrabold uppercase leading-none italic tracking-tight"
              initial={{ opacity: 0, y: 32, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            >
              ОТВЕЧАЮ НА ВАШИ{' '}
              <span className="text-[#ff4afc]">ВОПРОСЫ</span>
            </motion.h2>
          </div>

          <motion.div
            className="mt-12 divide-y divide-white/12 border-y border-white/12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
          >
            {faqItems.map((item, index) => {
              const isActive = index === activeFaq
              return (
                <motion.div
                  key={item.question}
                  className="py-6"
                  variants={{ hidden: { opacity: 0, y: 20, scale: 0.96 }, visible: { opacity: 1, y: 0, scale: 1 } }}
                  transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <motion.button
                    className="flex w-full items-center justify-between gap-6 text-left transition-transform duration-300"
                    onClick={() => setActiveFaq(isActive ? -1 : index)}
                    type="button"
                    whileHover={{ scale: 1.01, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } }}
                    whileTap={{ scale: 0.99, transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] } }}
                  >
                    <span className="text-[clamp(1.1rem,3.5vw,2.2rem)] font-black tracking-tight text-white">
                      {item.question}
                    </span>
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-xl text-2xl font-extrabold transition duration-200 ${
                        isActive
                          ? 'bg-gradient-to-br from-[#ff4afc] to-[#d05bff] text-white'
                          : 'border border-[#ff4afc]/40 bg-[#120026] text-[#ff4afc]'
                      }`}
                      aria-hidden
                    >
                      {isActive ? '−' : '+'}
                    </span>
                  </motion.button>
                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isActive ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="min-h-0 text-lg leading-relaxed text-white/70">
                      {item.answer}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </motion.section>

      <section
        id="cta"
        className="relative overflow-hidden pt-24 pb-0"
      >
        <div className="relative mx-auto flex flex-col items-center gap-16 px-4 text-center sm:px-0">
          <div className="flex w-full flex-col items-center gap-8">
            <div className="h-px w-full max-w-[840px] bg-white/18" />
            <motion.h2
              className="text-[clamp(2rem,8vw,10.5rem)] font-bebas max-w-[clamp(1300px,70vw,1600px)] font-extrabold uppercase leading-[0.9] italic tracking-tight"
              initial={{ opacity: 0, y: 40, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.05, ease: [0.25, 0.1, 0.25, 1] }}
            >
              НЕОБХОДИМА{' '}
              <span className="text-[#ff4afc]">ПРОДАЮЩАЯ</span>{' '}
              ИНФОГРАФИКА — ОБРАЩАЙТЕСЬ
            </motion.h2>
            <motion.p
              className="max-w-4xl text-xl font-medium text-white sm:text-3xl lg:text-4xl"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.95, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Давайте обсудим. Вы расскажете вашу ситуацию, а я подскажу, как лучше подойти к оформлению карточки.
            </motion.p>
            <div className="h-24" />
          </div>

          <div
            className="relative w-full rounded-t-[54px] border border-white/12 bg-[#060606] px-4 pb-[6.5rem] pt-24 text-left  sm:rounded-t-[72px] sm:px-10 lg:px-16"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-t-[72px]">
              <div className="absolute inset-0" />
              <img
                src="/images/footer/bg.png"
                alt="Фоновое оформление"
                className="absolute bottom-[-1rem] left-1/2 w-[100%] max-w-none -translate-x-1/2"
              />
            </div>
            <motion.a
              className="absolute left-1/2 top-0 z-30 inline-flex items-center gap-4 rounded-full border-2 border-white bg-[linear-gradient(95deg,#ff6af6_0%,#d83bff_100%)] px-10 py-4 text-xl font-semibold text-white shadow-[0_20px_70px_rgбаи(255,74,252,0.45)] sm:px-16 sm:py-5 sm:text-2xl lg:px-20 lg:py-6 lg:text-3xl"
              initial={{ x: '-50%', y: '-65%' }}
              animate={{ x: '-50%', y: '-65%' }}
              href="https://t.me/work_miracles1"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.01, transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] } }}
              whileTap={{ scale: 0.99, transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] } }}
            >
              Заказать
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
                alt="Telegram"
                className="h-7 w-7"
              />
            </motion.a>

            <div className="relative z-20 flex -translate-y-4 flex-col gap-6 text-sm text-white/70 sm:gap-8">

              {/* ============ 1 ЛИНИЯ ============ */}
              <div className="flex w-full flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">

                {/* ----------- ЛЕВАЯ ЧАСТЬ ----------- */}
                <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:gap-5 sm:text-left">
                  <a
                    href="https://t.me/EvgenyCreativity"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-3"
                  >
                    <img
                      src="images/logo.png"
                      alt="Evgeny Creativity"
                      className="h-8 w-auto transition-transform duration-300 hover:scale-105"
                    />
                  </a>

                  <div className="text-xl text-white leading-snug">
                    Студия разработки<br />
                    продающей инфографики<br />
                    с 2020 года
                  </div>
                </div>

                {/* ----------- ЦЕНТРАЛЬНАЯ ЧАСТЬ ----------- */}
                <div className="flex flex-col items-center gap-5 text-center sm:flex-1 sm:flex-row sm:items-center sm:justify-center sm:gap-10">

                  <motion.a
                    className="flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-200 hover:bg-[#ff4afc]/12"
                    href="https://t.me/work_miracles1"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
                      alt="Telegram"
                      className="h-10 w-10"
                    />
                  </motion.a>

                  <div className="flex flex-col gap-3 text-base text-white/80 sm:flex-row sm:items-center sm:gap-10">
                    <a className="text-sm transition-colors duration-200 hover:text-white" href="#">
                      Политика конфиденциальности
                    </a>

                    <a className="text-sm transition-colors duration-200 hover:text-white" href="#">
                      Договор оферта
                    </a>
                  </div>
                </div>

                {/* ----------- ПРАВАЯ ЧАСТЬ ----------- */}
                <div className="flex justify-center sm:justify-end">
                  <motion.a
                    className="inline-flex items-center gap-3 rounded-full border bg-[#0e0e0f] border-[#ff4afc] px-6 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#ff4afc]/15"
                    href="#top"
                    onClick={handleScrollTop}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <span className="flex h-6 w-10 items-center justify-center rounded-full text-white text-lg">
                      ↑
                    </span>
                    наверх
                  </motion.a>
                </div>

              </div>

              {/* ============ 2 ЛИНИЯ ============ */}
              <div className="pt-6 text-center text-xs font-normal text-white/70 sm:text-sm sm:text-left">
                <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-12">
                  <span>ИП Андрианов Платон Алексеевич</span>
                  <span>ОГРНИП: 317784700167350</span>
                  <span>ИНН: 780108298618</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
    </MotionConfig>
  )
}

export default App