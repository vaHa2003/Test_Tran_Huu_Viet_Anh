import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../../assets/imgs/Logo";
import { SignInContext, SignInPayload } from "../../context/SignInContext";

const SignIn = () => {
  const [credentials, setCredentials] = useState<SignInPayload>({
    username: "",
  });

  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const signInContext = useContext(SignInContext);

  if (!signInContext) {
    throw new Error("SigninContext phải được sử dụng trong <SignInProvider>");
  }

  const { signin } = signInContext;

  // hàm sign in
  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!credentials.username) {
      setError("Bạn chưa nhập username!!");
      return;
    }

    try {
      await signin(credentials);
      setCredentials({ username: "" });
      setError("");
      navigate("/");
    } catch (error) {
        setError("Chưa có tài khoản này!!");
    }
  };

  // hàm lấy value của username
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto">
      <div className="flex h-screen flex-col py-12">
        <header className="">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </header>

        <div className="flex flex-1 items-center justify-center">
          <div className="mx-auto w-[360px] px-4 py-8 text-center">
            <div className="">
              <h1 className="h1 text-center mb-[2rem] fontFamily">Sign In</h1>
            </div>

            <form className="flex flex-col gap-6" onSubmit={handleSignIn}>
              <label
                htmlFor="username"
                className="font-semibold text-left text-[1.2rem]"
              >
                Username
              </label>
              <input
                value={credentials.username}
                onChange={handleInputChange}
                name="username"
                id="username"
                type="text"
                placeholder="Enter username"
                className="w-full border p-3 rounded-[10px] focus:outline-none border-gray-400"
              />

              {error && <p className="text-red-600 text-left">{error}</p>}
              <button
                type="submit"
                className="w-full text-white bg-violet-500 hover:bg-violet-600 py-[10px] px-[20px] rounded-[20px] text-[1rem]"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
