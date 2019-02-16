import React, {useState} from "react";
import { useTrail, animated } from 'react-spring'
import "./Hero.css";
import Navigation from "../Navigation/Navigation.js";

const items = ['Hello', 'My name is Karina', 'A Fullstack Developer']
const config = { mass: 5, tension: 2000, friction: 200 }

const Header = props => {
  const [toggle, set] = useState(true)
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  return (
    <header className="herofull" id="home">
    <Navigation />
    <div className="trails-main" onClick={() => set(state => !state)}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={items[index]}
            className="trails-text"
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
            <animated.div style={{ height }}>{items[index]}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
    <div className="hero-arrow">
                    <a href="#about">﹀</a>
      </div>
    </header>
  )
}


export default Header;


// const Header = props => {
//   return (
//     <header className="herofull" id="home">
//       <Navigation />
//       <Row type="flex" align="middle">
//         <Col span={24}>
//           <p className="hero-welcome">WELCOME</p>
//           <p className="hero-welcome2">My name is</p>
//           <p className="hero-name">Karina Sofyan</p>
//           <p className="hero-subtitle">
//             I'm a Creative Problem Solver and a Full Stack Developer.
//           </p>
//           <div className="hero-arrow">
//             <a href="#about">﹀</a>
//           </div>
//         </Col>
//       </Row>
//     </header>
//   );
// };
// export default Header;
