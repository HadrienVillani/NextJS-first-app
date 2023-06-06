('use client');
import { useRouter } from 'next/navigation';
import { NextPage } from 'next';
import Link from 'next/link';
import Test from '../../components/layout-nested';
const BlogIndex: NextPage = () => {
  const router = useRouter();
  return (
    <section className='h-screen flex justify-center flex-col justify-center items-center '>
      <h1>
        <Test layout1='Je suis dans blog' />
      </h1>
      <section className='flex justify-center flex-col  items-center h-96 border-solid border-5 border-white w-2/4 b bg-red-500 m-10 p-10 text-center'>
        <h1>Title1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          velit rem, totam magni voluptatibus nemo itaque quos doloremque culpa
          iusto iste ex ipsum aut veritatis harum veniam ullam, laborum officia.
        </p>
        <Link href={'/blog/article1'} className='hover:text-violet-600'>
          Article 1
        </Link>
      </section>
      <section className='flex justify-center flex-col  items-center h-96 border-solid border-5 border-white w-2/4 b bg-red-500'>
        <h1>title 2</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          velit rem, totam magni voluptatibus nemo itaque quos doloremque culpa
          iusto iste ex ipsum aut veritatis harum veniam ullam, laborum officia.
        </p>
        <button
          className='m-5 border-solid border-2 border-white p-3'
          type='button'
          onClick={() => router.push('/blog/article2')}>
          Article 2
        </button>
      </section>
    </section>
  );
};
export default BlogIndex;
