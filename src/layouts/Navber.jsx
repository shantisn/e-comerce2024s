import React from 'react';
import Container from '../components/Container'
import Flex from '../components/Flex'
import ImgOne from '../assets/imageone.png'
import Image from '../components/Image'
import List from '../components/List';
const Navber = () =>{
  return (
 
        <nav className='py-10  bg-white'>
            <Container>
                <Flex>
                    <div className='w-4/12'>
                    < Image src={ImgOne}/>
                    </div>
                    <div className='w-8/12'>
                    <ul className='flex gap-x-10 '>
                       <List text='Home' />
                       <List text='Shop' />
                       <List text='About' />
                       <List text='Contacts' />
                       <List text='Journal' />
                    </ul>
                    </div>
                </Flex>
            </Container>                        
        </nav>
    
  );
}

export default Navber;
