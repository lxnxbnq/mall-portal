import * as React from 'react';
import { connect } from 'react-redux';

const Member: React.FC = ({ count, dispatch }: any): React.ReactElement => {
  return (
    <div>
      Member{count}
      <button
        onClick={() =>
          dispatch({
            type: 'member/increaseCount',
            payload: { count: count + 1 }
          })
        }
      >
        增加
      </button>
    </div>
  );
};

export default connect(({ member }: any) => {
  return {
    count: member.count
  };
})(Member);
