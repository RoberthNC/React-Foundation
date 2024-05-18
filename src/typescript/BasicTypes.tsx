export const BasicTypes = () => {
  const name = "Roberto";
  const age: number = 24;
  const isActive: boolean = true;
  const powers: string[] = ["React.js", "Node.js", "Laravel"];

  return (
    <>
      <h3>
        {name} {age} {isActive}
        <br />
        {powers.join(",")}
      </h3>
    </>
  );
};
