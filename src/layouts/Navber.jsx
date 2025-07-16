import React from 'react';
import Container from '../components/Container'
import Flex from '../components/Flex'
import ImgOne from '../assets/imageone.png'
import Image from '../components/Image'
import List from '../components/List';
import { Link } from 'react-router-dom';
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
                       <Link to='/'> <List text='Home' /></Link>
                       <Link to='/Shop'><List text='Shop' /></Link>
                       <Link to='/About'><List text='About' /></Link>
                       <Link to='/Contacts'><List text='Contacts' /></Link>
                       <Link to='/Journal'> <List text='Journal' /></Link>
                    </ul>
                    </div>
                </Flex>
            </Container>                        
        </nav>
    
  );
}

export default Navber;
