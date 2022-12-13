import logo from '/src/logo.png'

import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const WIDTH = 418 / 100;
const HEIGHT = 202 / 100;
const SCALE = 0.70;

export default () => {
  const colorMap = useLoader(TextureLoader, logo);
  const width = WIDTH * SCALE;
  const height = HEIGHT * SCALE;
  return <mesh position={[0, -2.41, 0]}>
    <planeGeometry args={[width, height]} />
    <meshBasicMaterial transparent map={colorMap} />
  </mesh>
}

