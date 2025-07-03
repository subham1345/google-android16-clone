// import React, { useEffect, useState } from 'react';
// import './ScrollPopup.css';

// const ScrollPopup = () => {
//   const [show, setShow] = useState(true); // Start hidden

//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY > 200) {
//         setShow(true);
//       } else {
//         setShow(false);
//       }
//     };
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   const handleClose = () => setShow(true);

//   return (
//     <>
//       {show && (
//         <div className="popup-overlay">
//           <div className="popup-content">
//             <div className="icon">📖</div>
//             <h2>Turn on Brave News, and never miss a story</h2>
//             <p>
//               Follow your favorite sources, in a single feed. Just open a tab in Brave, scroll down, and... voilà!
//               <br />
//               Brave News is ad-supported with private, anonymized ads. <a href="#">Learn more</a>.
//             </p>
//             <button className="enable-btn">Turn on Brave News</button>
//             <button className="no-thanks" onClick={handleClose}>No thanks</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ScrollPopup;


