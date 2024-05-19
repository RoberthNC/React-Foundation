import { useForm } from "react-hook-form";

interface FormInputs {
  email: string;
  password: string;
}

export const FormsPage = () => {
  const { register, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (myForm: FormInputs) => {
    console.log(myForm);
  };

  return (
    <>
      <form onSubmit={() => handleSubmit(onSubmit)}>
        <h3>Forms</h3>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
};
