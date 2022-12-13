import "/src/styles.scss"
import Poster from './Poster'
import Logo from './Logo'
import Tagline from './Tagline'
import { Canvas, useFrame } from '@react-three/fiber'

export default () => {
  return <Canvas>
    <ambientLight intensity={0.5} />
    <directionalLight />
    <Tagline />
    <Poster />
    <Logo />
  </Canvas>;
};
