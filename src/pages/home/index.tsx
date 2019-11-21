import * as React from 'react';
import { connect } from 'react-redux';

const Home: React.FC = ({ count }: any): React.ReactElement => {
  return (
    <div>
      Home{count}
    </div>
  );
};

export default connect(({ home }: any) => {
  return {
    count: home.count
  };
})(Home);
