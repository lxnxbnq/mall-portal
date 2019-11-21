import * as React from 'react';
import { connect } from 'react-redux';

const About: React.FC = ({ count, dispatch }: any): React.ReactElement => {
  return (
    <div>
      About{count}
      <button
        onClick={() =>
          dispatch({
            type: 'about/increaseCount',
            payload: { count: count + 1 }
          })
        }
      >
        增加
      </button>
      <button
        onClick={() =>
          dispatch({
            type: 'about/decreaseCount',
            payload: { count: count - 1 }
          })
        }
      >
        减少
      </button>
    </div>
  );
};

export default connect(({ about }: any) => {
  return {
    count: about.count
  };
})(About);
