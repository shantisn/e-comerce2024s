import React from 'react';
import Container from '../components/Container';
import Flex from '../components/Flex';
import Image from '../components/Image';
import SlideberIcon from '../assets/iconone.png'
import { FaSearch, FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { TiArrowSortedDown } from 'react-icons/ti';
<FaSearch />
const Slidebar = () => {
  return (
    <section className=' bg-slate-300 py-6'>
<Container>
    <Flex className='items-center'>
        <div className='w-3/12'>
        <Flex className='items-center gap-x-3'>
              < Image src={SlideberIcon}/>
            <p className='text-sm text-primary font-dm font-normal'>Shop by Category</p>
        </Flex>
        </div>
        <div className='w-5/12'>
        <div className='w-full bg-lime-50 relative '>
        <input className=' w-full py-4 px-5 border-0 placeholder: text-fuchsia-900 placeholder:font-dm text-sm' type="text" placeholder='search products'/>
        <FaSearch className='absolute top-1/2  right-[17px] -translate-y-2.5' />  
            </div> 
        </div>
        <div className='w-4/12 '>
       <Flex className='gap-x-10 items-center justify-end'>
        <div className='flex gap-x-2.5'> <FaUserAlt />
        <TiArrowSortedDown />
        </div>
        <FaShoppingCart className='text-2xl' />
       </Flex>
        </div>
    </Flex>
</Container>
    </section>
  );
}

export default Slidebar;
