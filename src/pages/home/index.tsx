import * as React from 'react';
import { useSelector } from 'react-redux';

const Home: React.FC = (): React.ReactElement => {
  const { count } = useSelector((state: any) => state.home);
  return <div>Home{count}</div>;
};

export default Home;
