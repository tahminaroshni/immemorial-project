import React from 'react';

const NotFound = ({ needFullHeight }) => {
  return (
    <section className={`${needFullHeight && "min-h-100vh"}`}>
      <h2>404! Page not found</h2>
    </section>
  );
};

export default NotFound;