import React,{useState} from 'react';
import { CSSTransition } from 'react-transition-group';

// 昇降する丸
const Slide = ({ show, ...callBack }) => (
    <CSSTransition
      in={show}
      timeout={500}
      unmountOnExit
      classNames="pop__slide"
      {...callBack}
    >
      <div className="pop__slide"></div>
    </CSSTransition>
  );

  // 回転する四角
  const Rotate = ({ show, children, ...callBack }) => (
    <CSSTransition
      in={show}
      timeout={600}
      unmountOnExit
      classNames="pop__rotate"
      {...callBack}
    >
      <div className="pop__rotate">
        {children}
      </div>
    </CSSTransition>
  );

  // フェードインする枠
  const Frame = ({ show, children, ...callBack }) => (
    <CSSTransition
      in={show}
      timeout={200}
      unmountOnExit
      classNames="pop__frame"
      {...callBack}
    >
      <div className="pop__frame">
        {children}
      </div>
    </CSSTransition>
  );

  const CSSTransitionPage = () => {
    const [flame, setFlame] = useState(false);
    const [rotate, setRotate] = useState(false);
    const [slide, setSlide] = useState(false);
    const [lock, setLock] = useState(false);

    return (
      <div className="pop">
        <button
          className="btn"
          disabled={lock}
          onClick={() => {
            if (flame) {
              setSlide(false);
              setLock(true);
            } else {
              setFlame(true);
              setLock(true);
            }
          }}
        >
          Click !
        </button>
        <Frame
          show={flame}
          onEntered={() => setRotate(true)}
          onExited={() => setLock(false)}
        >
          <Rotate
            show={rotate}
            onEntered={() => setSlide(true)}
            onExited={() => setFlame(false)}
          >
            <Slide
              show={slide}
              onEntered={() => setLock(false)}
              onExited={() => setRotate(false)}
            />
          </Rotate>
        </Frame>
      </div>
    );
  };

  export default CSSTransitionPage;
