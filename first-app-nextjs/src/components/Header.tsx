import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className='navbar'>
      <ul className=' text-xl flex flex-row space-x-4 justify-end mx-20 mb-5 h-20 items-center '>
        <Link href={'/'} className='hover:text-violet-600'>
          home
        </Link>
        <Link href={'/projects'} className='hover:text-violet-600'>
          Projects
        </Link>
        <Link href={'/contact'} className='hover:text-violet-600'>
          contact
        </Link>
        <Link href={'/blog'} className='hover:text-violet-600'>
          blog
        </Link>
      </ul>
    </header>
  );
};
