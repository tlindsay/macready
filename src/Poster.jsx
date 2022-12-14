import poster from '/src/poster.jpg'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader, useThree } from '@react-three/fiber'
import { Plane } from '@react-three/drei'

export default () => {
  const colorMap = useLoader(TextureLoader, poster);
  const { viewport } = useThree()
  return <Plane name="Poster" args={[viewport.height * 0.640625, viewport.height]} scale={1.1} position={[0,0,-0.1]}>
    <meshPhysicalMaterial map={colorMap} />
  </Plane>
}

