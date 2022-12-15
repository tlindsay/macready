import "/src/styles.scss"
import Poster from './Poster'
import Logo from './Logo'
import Tagline from './Tagline'
import { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, PerspectiveCamera, Sparkles } from '@react-three/drei'
import { EffectComposer, DepthOfField, Bloom } from '@react-three/postprocessing'
import useCapture from 'use-capture'

export default () => {
  const [bind, startRecording] = useCapture({ format: 'jpg', duration: 2, fps: 60 })
  useEffect(() => {
    const handler = ({ key }) => {
      console.log({ key })
      if(key === ' ') {
        console.log('Recording!')
        startRecording()
      }
    }
    window.addEventListener('keypress', handler);

    return () => window.removeEventListener('keypress', handler)
  })
  return <Canvas gl={{preserveDrawingBuffer: true}} onCreated={bind}>
    <PerspectiveCamera makeDefault position={[0, 0, 1]} />
    <ambientLight intensity={0.5} />
    <Tagline />
    <Poster />
    <Logo />
    <Sparkles
      count={10000}
      noise={4}
      scale={4}
      speed={0.1}
    />
    <EffectComposer>
      {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={1} height={480} /> */}
      {/* <Bloom luminanceThreshold={0} luminanceSmoothing={1.0} height={300} /> */}
    </EffectComposer>
  </Canvas>;
};
