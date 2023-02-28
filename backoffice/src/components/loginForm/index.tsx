import { useForm } from "react-hook-form";
import { login } from "../../utils/firebaseInit"


export const LoginForm = () => {
    
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => await login(data.Email, data.Password);
    

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Email" {...register("Email", { required: true})} />    
      <input placeholder="Password" type={"password"} {...register("Password", { required: true })} />
      {(errors.Password || errors.Email) && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
}