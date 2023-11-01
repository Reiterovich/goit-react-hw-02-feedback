export const Section = ({ title, children }) => {
  console.log(children);
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

// export const Section = ({ title, children }) => {
//   return (
//     <div>
//       <h2>{title}</h2>
//       {children}
//     </div>
//   );
// };
