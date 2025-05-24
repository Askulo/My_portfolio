"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function NameRevealAnimation() {
  const [hoveredSegment, setHoveredSegment] = useState(null)

  const segments = [
    { short: "As", full: "hish" },
    { short: "ku", full: "mar" },
    { short: "lo", full: "hra" },
  ]

  return (
    <div className="flex items-center justify-center  ">
      <div className="text-2xl font-bold tracking-wide">
        {segments.map((segment, index) => (
          <motion.span
            key={index}
            className="inline-block cursor-pointer"
            onHoverStart={() => setHoveredSegment(segment.short)}
            onHoverEnd={() => setHoveredSegment(null)}
          >
            {segment.short}
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: hoveredSegment === segment.short ? "auto" : 0,
                opacity: hoveredSegment === segment.short ? 1 : 0,
              }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="inline-block overflow-hidden"
            >
              {segment.full}
            </motion.span>
            {index === 1 && " "}
            
          </motion.span>
        ))}
      </div>
    </div>
  )
}

