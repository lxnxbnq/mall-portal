import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Member: React.FC = (): React.ReactElement => {
  const { count } = useSelector((state: any) => state.member);
  const dispatch = useDispatch();

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

export default Member;
