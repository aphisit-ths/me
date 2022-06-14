import React from 'react';

function InfoPage() {
  return (
    <section
      id='infopage'
      className='bg-slate-200 w-full min-h-screen relative'
    >
      <div className=' bg-zinc-800 w-1/5  rounded-full'>
        <img
          src={process.env.PUBLIC_URL + '/me.jpg'}
          alt='me'
          className='object-fill rounded-full w-full h-full'
        />
      </div>
    </section>
  );
}

export default InfoPage;
