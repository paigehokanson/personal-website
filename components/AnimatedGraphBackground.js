'use client'

import { useEffect, useRef, useState } from 'react'

function getRandom(min, max) {
  return Math.random() * (max - min) + min
}

export default function AnimatedGraphBackground() {
  const svgRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const nodeCount = 15
  const minRadius = 4
  const maxRadius = 12
  const [nodes, setNodes] = useState([])
  const [edges, setEdges] = useState([])
  const velocities = useRef([])

  useEffect(() => {
    function updateDimensions() {
      if (svgRef.current) {
        setDimensions({
          width: svgRef.current.clientWidth,
          height: svgRef.current.clientHeight,
        })
      }
    }
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Find nearest neighbors for each node
  function getDistance(a, b) {
    return Math.sqrt((a.cx - b.cx) ** 2 + (a.cy - b.cy) ** 2)
  }

  // Initialize nodes, velocities, and edges when dimensions are set
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      const newNodes = Array.from({ length: nodeCount }, () => ({
        cx: getRandom(0, dimensions.width),
        cy: getRandom(0, dimensions.height * 0.5),
        r: getRandom(minRadius, maxRadius),
      }))
      setNodes(newNodes)
      velocities.current = newNodes.map(() => ({
        vx: getRandom(-0.2, 0.2),
        vy: getRandom(-0.2, 0.2),
      }))
      // Calculate edges only once
      let newEdges = []
      newNodes.forEach((node, i) => {
        const distances = newNodes.map((other, j) => ({
          index: j,
          dist: i === j ? Infinity : getDistance(node, other),
        }))
        distances.sort((a, b) => a.dist - b.dist)
        const neighborCount = Math.floor(Math.random() * 3) + 5 // 5 to 7
        for (let k = 0; k < neighborCount; k++) {
          const neighborIdx = distances[k].index
          if (i < neighborIdx) {
            newEdges.push({ from: i, to: neighborIdx })
          }
        }
      })
      setEdges(newEdges)
    }
  }, [dimensions.width, dimensions.height])

  // Animation loop
  useEffect(() => {
    let animationId
    function animate() {
      setNodes(prevNodes => {
        return prevNodes.map((node, i) => {
          let { cx, cy, r } = node
          let { vx, vy } = velocities.current[i]
          cx += vx
          cy += vy
          // Bounce off edges
          if (cx - r < 0 || cx + r > dimensions.width) {
            vx = -vx
            cx = Math.max(r, Math.min(cx, dimensions.width - r))
          }
          if (cy - r < 0 || cy + r > dimensions.height * 0.5) {
            vy = -vy
            cy = Math.max(r, Math.min(cy, dimensions.height * 0.5 - r))
          }
          velocities.current[i] = { vx, vy }
          return { cx, cy, r }
        })
      })
      animationId = requestAnimationFrame(animate)
    }
    if (nodes.length > 0) {
      animationId = requestAnimationFrame(animate)
    }
    return () => cancelAnimationFrame(animationId)
  }, [nodes.length, dimensions.width, dimensions.height])

  // Edge rendering logic
  const maxLen = 0.25 * Math.max(dimensions.width, dimensions.height)
  const fadeStart = maxLen * 0.75

  return (
    <div className="absolute top-0 left-0 w-full" style={{ height: '50%', zIndex: -1 }}>
      <svg
        ref={svgRef}
        className="w-full h-full"
        width="100%"
        height="100%"
        style={{ display: 'block' }}
      >
        {/* Draw edges */}
        {edges.map((edge, i) => {
          const from = nodes[edge.from]
          const to = nodes[edge.to]
          if (!from || !to) return null
          const dx = from.cx - to.cx
          const dy = from.cy - to.cy
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist > maxLen) return null // Don't render if too long
          let opacity = 0.5
          if (dist > fadeStart) {
            opacity = 0.5 * (1 - (dist - fadeStart) / (maxLen - fadeStart)) // Fade from 0.5 to 0
          }
          return (
            <line
              key={i}
              x1={from.cx}
              y1={from.cy}
              x2={to.cx}
              y2={to.cy}
              stroke="#fff"
              strokeWidth={1}
              opacity={opacity}
            />
          )
        })}
        {/* Draw nodes */}
        {nodes.map((node, i) => (
          <circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill="#38bdf8"
          />
        ))}
      </svg>
    </div>
  )
} 