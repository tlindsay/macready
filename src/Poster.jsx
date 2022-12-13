import poster from '/src/poster.jpg'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader, useThree } from '@react-three/fiber'

export default () => {
  const colorMap = useLoader(TextureLoader, poster);
  const { viewport } = useThree()
  return <mesh>
    <planeGeometry args={[viewport.height * 0.640625, viewport.height]} />
    <meshStandardMaterial map={colorMap} />
  </mesh>
}

