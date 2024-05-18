interface Person {
  fullName: string;
  age: number;
  address: Address;
}

interface Address {
  country: string;
  houseNo: number;
}

export const ObjectLiterals = () => {
  const person: Person = {
    fullName: "Roberto Núñez",
    age: 24,
    address: {
      country: "Perú",
      houseNo: 146,
    },
  };

  return (
    <>
      <h3>Object Literals</h3>
      <pre>{JSON.stringify(person, null, 3)}</pre>
    </>
  );
};
