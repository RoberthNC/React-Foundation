export const BasicFunctions = () => {
  const addTwoNumbers = (a: number, b: number): string => {
    return (a + b).toString();
  };

  return (
    <>
      <h3>Functions</h3>
      <span>Result: {addTwoNumbers(2, 7)}</span>
    </>
  );
};
