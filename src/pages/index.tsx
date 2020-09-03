import React from 'react';
import {router} from 'next/client';

function HomePage() {
  return (
    <section id='home-page'>
      <h1 className='title'>Welcome</h1>
      <p className='hoverable' onClick={() => {router.push('/test')}}>go to test page</p>
      <a className='hoverable' href='https://google.com' target='_blank'>google</a>
    </section>
  )
}

export default HomePage;
