import React from "react";
import Title from "./Title";

export default function About() {
  return (
    <section className='about py-5'>
      <div className='container'>
        <Title>
          <h3 className='heading-1 text-uppercase text-center'>Something</h3>
          <h2 className='heading-2 heading-2__light mb-5 text-center text-uppercase'>About BMW</h2>
          <p className='text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            laboriosam maiores ad et placeat, tempora neque provident cum non,
            eligendi explicabo corporis quis est error exercitationem at, sed
            debitis qui voluptatem adipisci! Voluptas, officiis incidunt
            adipisci hic esse assumenda earum labore autem blanditiis iure enim,
            maiores minus atque voluptates expedita.
          </p>
        </Title>
      </div>
    </section>
  );
}
