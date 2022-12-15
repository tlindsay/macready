import poster from '/src/poster.jpg'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader, useThree } from '@react-three/fiber'
import { Plane } from '@react-three/drei'
import { useDrag } from '@use-gesture/react'
import { animated, useSpring } from '@react-spring/three'

const AnimatedPlane = animated(Plane);

export default () => {
  const [springs, api] = useSpring(() => ({
    rotation: [0, 0, 0]
  }))
  const bind = useDrag(
    ({ active, movement: [x, y] }) => {
      console.log({ active, x, y })
      if (active) {
      api.start({
        rotation: [y / 10, x / 10, 0],
        immediate: active
      })
      } else {
        api.start({
        rotation: [0, 0, 0],
        immediate: active
      })

      }
    }, {
    bounds: { left: -0.5, right: 0.5, top: -0.5, bottom: 0.5 },
    rubberband: true
  })

  console.log({springs})
  const colorMap = useLoader(TextureLoader, poster);
  const { viewport } = useThree()
  return (
    <AnimatedPlane
      {...bind()}
      rotation={springs.rotation.to((x, y) => [x, y, 0])}
      name="Poster"
      args={[viewport.height * 0.640625, viewport.height]}
      scale={ 1.1}
      position={[0, 0, -0.1]}
    >
      <meshBasicMaterial map={colorMap} />
    </AnimatedPlane >
  )
}

