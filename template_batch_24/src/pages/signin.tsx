/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useFormik, ErrorMessage } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";
import Link from "next/link";
import { userLoginReq } from "@/redux-saga/action/loginAction";
import { Spinner } from "flowbite-react";

export default function signin() {
 
  const [isLoading, setIsLoading] = useState(false);
  const [isFailLogin, setIsFailLogin] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const login = useSelector((state:any) => state.login);
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().min(3).max(10).required("Password is required"),
  });
  
useEffect(() => {
  if (login.loginFail) {
    setIsLoading(false)
      console.log("GAGAL", login.loginFail.message)
    // handle error here, you can also use the error message from login.loginFail
  } else if (login.isLoggedIn && login.currentUser) {
    setIsLoading(false)
    router.push('/profile');
  }
}, [login, router]);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      let payload = {
        username: values.username,
        password: values.password,
      };
      dispatch(userLoginReq(payload));
      setIsLoading(true)
    },
  });
  return (
    <>
    <div>
    <div className="flex items-center justify-center mt-24">
               <img
                  className="h-8 w-15"
                  src="https://static.wixstatic.com/media/ab2f5c_9fb242eeec974426acc4769b6d7f6d6b~mv2.png/v1/fill/w_320,h_102,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/code-colored_edited.png"
                  alt="Your Company"
                  />
        </div>
      <div className="text-center">
        <h2 className="text-4xl tracking-tight">Sign in into your account</h2>
        <span className="text-sm">
          or{" "}
          <Link
            href="/signup"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            sign up your account
          </Link>
        </span>
      </div>
      <div className="flex justify-center my-2 mx-4 md:mx-0">
        <form className="w-full max-w-xl bg-white rounded-lg shadow-md p-6" onSubmit={formik.handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="username"
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                placeholder="Username"
                required
              />
              {formik.touched.username && formik.errors.username ? (
                <span className="mt-2 text-sm text-red-600">
                  {formik.errors.username}
                </span>
              ) : null}
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="Password"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="current-password"
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                placeholder="Password"
                required
              />
              {formik.touched.password && formik.errors.password ? (
                <span className="mt-2 text-sm text-red-600">
                  {formik.errors.password}
                </span>
              ) : null}
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <button
                type="submit"
                className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500"
              >
                Sign In
              </button>
            </div>
            {isLoading && (
            <div className="mt-3">
              <Spinner aria-label="Saving..." size="lg" />
            </div>
            )}


      {login.loginFail && (
              <div className="mt-3">
                <p className="text-red-600 font-semibold">{login.loginFail.message}</p>
              </div>
            )}

            {/* {isFailLogin && (
            <div className="mt-3">
              <p className="text-red-600 font-semibold">Password atau Username salah!</p>
            </div>
            )} */}
          </div>
        </form>
      </div>
    </div>
    
  
  </>
  );
}
