import { useForm } from "react-hook-form";

const Login = () => {
  const { 
      register,
      handleSubmit,
      formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("userName")} placeholder="Username" required true maxLength="15"/>
            <input {...register("password")} placeholder="Password" required minLength="5"/>
            {errors.password && <span>Invalid password</span>}

            <input type="submit" value="SE CONNECTER"/>
        </form>
    )
}

export default Login;