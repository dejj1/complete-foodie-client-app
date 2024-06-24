// import React, { useRef, useState, useEffect } from 'react';
// import { CSSTransition } from 'react-transition-group';
// import styled from 'styled-components';
// import useIntersectionObserver from '../hooks/useIntersectionObserver';


// const Section = styled.div`
//   margin: 20px 0;
// `;

// const Placeholder = styled.div`
//   height: 400px;
//   background: #f0f0f0;
// `;

// eslint-disable-next-line react/prop-types
// const LazyComponent = ({ component: Component }) => {
//   const ref = useRef();
//   const isVisible = useIntersectionObserver(ref);
//   const [hasLoaded, setHasLoaded] = useState(false);

//   useEffect(() => {
//     if (isVisible) {
//       setHasLoaded(true);
//     }
//   }, [isVisible]);

//   return (
//     <Section ref={ref}>
//       <React.Suspense fallback={<Placeholder>Loading...</Placeholder>}>
//         <CSSTransition
//           in={isVisible && !hasLoaded}
//           timeout={500}
//           classNames="fade"
//           unmountOnExit
//         >
//           <div>{hasLoaded ? <Component /> : <Placeholder />}</div>
//         </CSSTransition>
//       </React.Suspense>
//     </Section>
//   );
// };

// export default LazyComponent;