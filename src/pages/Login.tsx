import { useForm } from "react-hook-form";
import Input from "../components/inputs/Input";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
export type FormValues = {
  username: string;
  password: string;
};
const Login = () => {
  const navigate = useNavigate();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const handleFormSubmit = handleSubmit(
    useCallback(
      (data) => {
        console.log(data);
        navigate(`/?user=${data.username}`);
        reset();
      },
      [reset, navigate]
    )
  );
  return (
    <div className="flex items-center justify-center min-h-screen  bg-gradient-to-tr from-cyan-400 to-indigo-500 flex-col">
      <form
        onSubmit={handleFormSubmit}
        className="px-3 py-5 bg-white shadow-lg flex flex-col space-y-6 border-2 max-w-xl w-full border-white rounded-md"
      >
        <h3 className="text-zinc-500 font-bold text-xl text-center">
          Welcome Back 🙏
        </h3>
        <Input
          label="Username"
          register={register}
          errors={errors}
          id="username"
          type="text"
          required
          placeholder="Username"
        />
        <Input
          label="Password"
          register={register}
          errors={errors}
          id="password"
          type="password"
          required
          placeholder="Password"
        />
        <button className="font-medium bg-rose-500 p-4 rounded-md text-white text-lg hover:bg-rose-700 transition">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
