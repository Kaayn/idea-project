import { useForm } from "react-hook-form";
import { login } from "../../utils/firebaseInit";
import { useNavigate } from "react-router-dom";
import { AuthDataContext, ContextAction } from "../../App";
import { useContext } from "react";
import { User } from "@firebase/auth";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { dispatchData } = useContext(AuthDataContext);

  const onSubmit = async (data: any) => {
    const user = await login(data.Email, data.Password);

    if ("accessToken" in user) {
      dispatchData({
        type: ContextAction.setUser,
        newValue: user as User,
      });
      navigate("/orders");
    }
  };

  const navigate = useNavigate();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col">
        <input
          className="bg-white border-2 border-black rounded-md my-1 text-black"
          placeholder="Email"
          {...register("Email", { required: true })}
        />
        <input
          className="bg-white border-2 border-black rounded-md my-1 text-black"
          placeholder="Password"
          type={"password"}
          {...register("Password", { required: true })}
        />
        {(errors.Password || errors.Email) && (
          <span>missing email or password</span>
        )}

        <input className="bg-red-500 rounded-lg my-1" type="submit" />
      </form>
    </div>
  );
};
