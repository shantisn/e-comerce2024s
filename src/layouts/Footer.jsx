import React from 'react';
import Container from'../components/Container'
import Flex from'../components/Flex'
import List from'../components/List'
import  Image from '../components/Image'
import OerbiOne from'../assets/orebi.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
const Footer = () => {
  return (
    <section className='py-14 bg-[#F5F5F3]  '> 
    <Container>
        <Flex>
     <div className='w-2/12'>
     <h6 className='text-base text-primary font-bold font-dm pb-[17px]'>MENU</h6>
     <ul className='flex flex-col gap-y-[6px] text-[#6D6D6D] '>
        <List className='hover:font-normal' text='Home'/>
        <List className='hover:font-normal' text='Shop'/>
        <List className='hover:font-normal' text='About'/>
        <List className='hover:font-normal' text='Contact'/>
        <List className='hover:font-normal' text='Journal'/>
    </ul>
     </div>
     <div className='w-2/12'>
     <h6 className='text-base text-primary font-bold font-dm pb-[17px]'>SHOP</h6>
     <ul className='flex flex-col gap-y-[6px] text-[#6D6D6D]'>
        <List className='hover:font-normal' text='Categhory 1'/>
        <List className='hover:font-normal' text='Categhory 2'/>
        <List className='hover:font-normal' text='Categhory 3'/>
        <List className='hover:font-normal' text='Categhory 4'/>
        <List className='hover:font-normal' text='Categhory 5'/>
    </ul>
     </div>
     <div className='w-2/12'>
     <h6 className='text-base text-primary font-bold font-dm pb-[17px]'>HELP</h6>
     <ul className='flex flex-col gap-y-[6px] text-[#6D6D6D] '>
        <List className='hover:font-normal' text='Privacy Polycy'/>
        <List className='hover:font-normal' text='Terms & Conditions'/>
        <List className='hover:font-normal' text='Special E-Shop'/>
        <List className='hover:font-normal' text='Shipping'/>
        <List className='hover:font-normal' text='Secure Payments'/>
    </ul>
     </div>
     <div className='w-4/12'>
     <h6 className='text-base text-primary font-bold font-dm '>(052) 611-5711</h6>
     
     <h6 className='text-base text-primary font-bold font-dm '>company@domain.com</h6>
     
        <List className='hover:font-normal list-none text-[#6D6D6D] pt-4' text='575 Crescent Ave. Quakertown, PA 18951'/>
        </div>
     <div className='w-2/12'>
     <Image src={OerbiOne}/>
     </div>
     
  
        </Flex>
      <Flex className='justify-between pt-16'>
       
             <div className='flex gap-x-7'>
       <FaFacebookF/>
       <FaLinkedinIn />
       <FaInstagram />
        </div>
         <h6 className='text-sm text-[#6D6D6D] font-normal font-dm'>2020 Orebi Minimal eCommerce Figma Template by Adveits</h6>
      </Flex>
    </Container>
    </section>
  );
}

export default Footer;
