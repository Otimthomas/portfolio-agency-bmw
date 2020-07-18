import React from "react";
import Title from './Title';

export default function Gallery() {
  return (
    <section className='gallery'>
      <div className='container'>
        <Title>
          <h3 className="heading-1 text-center text-uppercase">The Selected of</h3>
          <h2 className="heading-2 text-center text-uppercase">Gallery</h2>
        </Title>
        Hello from Gallery
      </div>
    </section>
  );
}
