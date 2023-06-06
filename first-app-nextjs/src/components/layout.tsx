type Props = {
  children: any;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <header className='text-black'>c'est le header</header>
      <main className='bg-black'>{children}</main>
      <footer className='text-black'> c'est le footer</footer>
    </>
  );
}
