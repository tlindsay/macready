import "/src/styles.scss"
import Poster from './Poster'
import Logo from './Logo'
import Tagline from './Tagline'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Sparkles } from '@react-three/drei'

export default () => {
  return <Canvas>
    <PerspectiveCamera makeDefault position={[0, 0, 1]} />
    <ambientLight intensity={0.5} />
    <Tagline />
    <Poster />
    <Logo />
    <Sparkles
      count={500}
      noise={[10, 10, 10]}
      scale={4}
      speed={0.1}
    />
  </Canvas>;
};
