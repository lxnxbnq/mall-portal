import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const About: React.FC = (): React.ReactElement => {
  const { count } = useSelector((state: any) => state.about);
  const dispatch = useDispatch();
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

export default About;
