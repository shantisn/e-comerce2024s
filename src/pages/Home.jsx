import React from 'react'
import Navber from '../layouts/Navber'
import Slidebar from '../layouts/Slidebar'
import Footer from '../layouts/Footer'
import Image from '../components/Image'
import BannerImage from'../assets/banneri.png'
import Flex from '../components/Flex'
import TwoNe from'../assets/two.Png'
import ShapeOn from'../assets/shape.Png'
import UndoNe from'../assets/undo.Png'

const Home = () => {
  return (
    <div>
    <Navber/>
    <Slidebar/>
    <Image src={BannerImage}/>
    <Flex className='justify-between py-8'>
      <div className='flex gap-x-4 '>
        <Image className='text-lg' src={TwoNe}/>
        <h6 className='text-sm text-[#6D6D6D] font-normal font-dm'>Two years warranty</h6>
      </div>
      <div className='flex gap-x-4'>
        < Image className='text-lg' src={ShapeOn}/>
        <h6 className='text-sm text-[#6D6D6D] font-normal font-dm'>Free shipping</h6>
      </div>
      <div className='flex gap-x-4 '>
        <Image className='' src={UndoNe}/>
        <h6 className='text-sm text-[#6D6D6D] font-normal font-dm'>Return policy in 30 days</h6>
      </div>
    </Flex>
    <Footer/>
    </div>
  )}

export default Home