import * as React from 'react';
import { connect } from 'react-redux';

const Home: React.FC = ({ count, dispatch }: any): React.ReactElement => {
  return (
    <div>
      Home{count}
      <button
        onClick={() =>
          dispatch({
            type: 'home/increaseCount',
            payload: { count: count + 1 }
          })
        }
      >
        增加
      </button>
    </div>
  );
};

export default connect(({ home }: any) => {
  return {
    count: home.count
  };
})(Home);
