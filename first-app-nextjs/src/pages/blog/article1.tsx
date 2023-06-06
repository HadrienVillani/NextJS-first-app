import H1 from '@/components/H1';
import { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const article1: NextPage = () => {
  // ---------------JS-----------------------
  const tableOne: string[] = [
    'titre1',
    'titre2',
    'titre1',
    'titre2',
    'titre1',
    'titre2',
  ];
  interface Person {
    name: string;
    age: number;
  }
  type testType = {
    name: string;
    age: number;
  };
  let myTestType: testType = { name: 'tutu', age: 3 };
  let myTitle: Person = { name: 'tutu', age: 1 };

  interface Article {
    title: number;
    text: number;
    author: string;
  }
  let Article = {
    title: 'coucou',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit laboriosam dolore praesentium omnis voluptas mollitia sapiente quia laborum inventore! Magnam natus voluptatem unde commodi consequatur id amet ratione dolorum obcaecati.;',
    author: 'moi',
  };

  return (
    <section className='h-50 flex flex-col justify-center'>
      <section>
        {tableOne.map((element, key) => (
          <h1 key={key}>{element}</h1>
        ))}
      </section>
    </section>
  );
};
export default article1;
