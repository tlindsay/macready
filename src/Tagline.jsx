import { Text } from '@react-three/drei'
import helvetica from './HelveticaNeue-Bold.otf'

export default () => {
  return (
    <Text position={[0, 3.3, 0]} scale={2.5} font={helvetica} letterSpacing={-0.05} className="tagline">The ultimate in alien terror.</Text>
  )
}
