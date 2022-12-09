import { useForm } from "react-hook-form";

export const ReactHookForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: object) => console.log(data);

  console.log(watch("Name")); // watch input value by passing the name of it
  console.log(errors);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className="react-hooks-forms" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        className="react-hooks-forms"
        defaultValue="test"
        {...register("Name", {
          required: true,
          pattern: /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/,
        })}
      />
      {errors.Name && <span>This field is required</span>}

      {/* include validation with required or other standard HTML validation rules */}
      <input
        className="react-hooks-forms"
        {...register("exampleRequired", { required: true })}
      />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};
