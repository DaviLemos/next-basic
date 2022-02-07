import Link from 'next/link';
import { useState } from 'react';

const Home = ({}) => {
  const [contador, setContador] = useState(0);
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">
        <a> About </a>
      </Link>
      <p>{contador}</p>
      <button onClick={() => setContador((c) => c + 1)}>CLICK</button>
    </div>
  );
};

export default Home;
