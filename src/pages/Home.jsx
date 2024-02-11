import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Instructor from '../models/Instructor'
import Loader from '../components/Loader'
import { OrbitControls } from '@react-three/drei'

function Home() {
  const adjustInstructorForScreenSize= () => {
    let screenScale = [70,70,70];
    let screenPosition = [0,0,0]
    let rotation=[0,0,0]

    if(window.innerWidth < 768)
    {
      screenScale=[25,25,25];
      screenPosition=[0,-50,-50];
    }
    else
    {
      screenScale=[70,70,70];
    }
    return [screenScale, screenPosition, rotation];
  }

  const [instructorScale,instructorPosition, instructorRotation]= adjustInstructorForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        POPUP
      </div> */}
      <Canvas className='w-full h-screen bg-transparent'
              camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
        </Suspense>
          <ambientLight />
          <directionalLight position={[1,1,10]} intensity={2} />
          <hemisphereLight skyColor='#b1e1ff' groundColor='#000000'  intensity={1}/>
          <group position={[0,-1,0]}>
          <Instructor 
              position={instructorPosition}
              scale={instructorScale}
              rotation={instructorRotation}
          />
          </group>
      </Canvas>

    </section>
  )
}

export default Home