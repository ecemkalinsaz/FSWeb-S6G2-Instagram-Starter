import React from 'react';
import Yorumlar from '../Yorumlar/Yorumlar';
import BeğenBölümü from './BeğenBölümü';
import GönderiBaşlığı from './GönderiBaşlığı';

const Gönderi = props => {
  const { gönderi, gonderiyiBegen } = props;
  // const gönderi = props.gönderi
  // const gonderiyiBegen = props.gonderiyiBegen

  console.log(gönderi, 'gONDERI')
  return (
    <div className='post-border'>
      <GönderiBaşlığı
        username={gönderi.username}
        thumbnailUrl={gönderi.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={gönderi.imageUrl}
        />
      </div>
      {/* BeğenBölümü düzgün çalışması için ihtiyaç duyduğu tüm proplara sahip mi? */}
      <BeğenBölümü gonderiyiBegen={() => gonderiyiBegen(gönderi.id)} begeniSayisi={gönderi.likes}/>
      {/* Yorumlar da proplara dikkat istiyor! */}
      <Yorumlar />
    </div>
  );
};

export default Gönderi;
