import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Member: React.FC = (): React.ReactElement => {
  const { count } = useSelector((state: any) => state.classify);
  const dispatch = useDispatch();

  return (
    <div>
      Member{count}
      <button
        onClick={() =>
          dispatch({
            type: 'classify/increaseCount',
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
