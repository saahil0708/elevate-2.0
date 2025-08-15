"use client"
import React from "react"
import { motion, useScroll, useTransform, useSpring, type MotionValue } from "motion/react"

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string
    link: string
    thumbnail: string
  }[]
}) => {
  const firstRow = products.slice(0, 5)
  const secondRow = products.slice(5, 10)
  const thirdRow = products.slice(10, 15)
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig)
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig)
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig)
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig)
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig)
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig)
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-black"
    >
      <div className="absolute top-0 left-0 right-0 z-20 flex justify-center pt-20">
        <Header />
      </div>
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export const Header = () => {
  return (
    <div className="relative px-4">
      <div className="relative rounded-2xl p-8 text-center">
        <h1 className="text-2xl md:text-7xl font-bold text-white">
          GLIMPSES {}
          <span className="text-[#1cb683]">2024</span>
        </h1>
        <motion.div
            className="w-60 mt-5 h-1 bg-gradient-to-r from-transparent via-[#1cb683] to-transparent mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          />
        <p className="max-w-2xl text-base md:text-xl mt-8 text-gray-300 mx-auto">
          We build beautiful products with the latest technologies and frameworks. We are a team of passionate
          developers and designers that love to build amazing products.
        </p>
      </div>
    </div>
  )
}

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string
    link: string
    thumbnail: string
  }
  translate: MotionValue<number>
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0"
    >
      <a href={product.link} className="block group-hover/product:shadow-2xl transition-all duration-300">
        <div className="absolute inset-0 bg-gray-800/20 border border-[#1cb683]/30 rounded-lg group-hover/product:border-[#1cb683] transition-all duration-300 z-10"></div>

        <img
          src={product.thumbnail || "/placeholder.svg"}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0 rounded-lg"
          alt={product.title}
        />
      </a>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white font-semibold text-lg z-30 transition-opacity duration-300">
        {product.title}
      </h2>
    </motion.div>
  )
}
