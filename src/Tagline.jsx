import { Text } from '@react-three/drei'
import helvetica from './HelveticaNeue-Bold.otf'

export default () => {
  return (
    <Text name="tagline" position={[0, .38, 0]} scale={0.4} font={helvetica} letterSpacing={-0.05} className="tagline">The ultimate in alien terror.</Text>
  )
}
