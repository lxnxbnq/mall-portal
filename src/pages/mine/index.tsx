import * as React from 'react';
import { useSelector } from 'react-redux';

const Home: React.FC = (): React.ReactElement => {
  const { count } = useSelector((state: any) => state.mine);
  return <div>Mine{count}</div>;
};

export default Home;
