import { useForm } from "react-hook-form";
import { login } from "../../utils/firebaseInit"
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
    
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    const user = await login(data.Email, data.Password);
    
    if ("accessToken" in user) navigate("/home")
  };
    
  const navigate = useNavigate();
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Email" {...register("Email", { required: true})} />    
      <input placeholder="Password" type={"password"} {...register("Password", { required: true })} />
      {(errors.Password || errors.Email) && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
}