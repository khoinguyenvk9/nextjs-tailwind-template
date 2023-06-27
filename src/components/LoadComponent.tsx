// import * as React from 'react';
//
// const requireComponent = require('../components/carts');
// const CartComponents = requireComponent
//   .keys()
//   .map((filename) => {
//     const componentModule = requireComponent(filename);
//     return componentModule.default || componentModule;
//   });
//
// const HomePage = () => {
//   return (
//     <div>
//       {CartComponents.map((Component, index) => (
//         <Component key={index} />
//       ))}
//     </div>
//   );
// };
//
// export default HomePage;
//
export const LoadComponent = () => {
  return (
    <div className="bg-gray-300">
      <h1>Load component</h1>
    </div>
  );
};
