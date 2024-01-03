import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function SignUp() {
    
  var loading1 = (
    <div className="flex gap-12 text-center">
      <p className="w-1/2 mt-1"> در حال پردازش</p>
      <svg
        aria-hidden="true"
        className="w-1/2 inline h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 50.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>{" "}
    </div>
  );


  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value, // what ever changing set that value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try{
        setLoading(true);
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        console.log(data);
        if (data.success === false) {
          setError(data.message);
          setLoading(false);
          return;
        }
        setLoading(false);
        console.log(formData);
        setError(null);
        navigate('/sign-in');
      } catch (error){
        setLoading(false);
        setError(error.message);
     }}
  return (
    <section className="bg-gray-50 dark:bg-gray-900" dir="rtl">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img src="../../assets/lightLogo.png" />
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border  sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="font-kalameLight mb-3 font-bold text-xl leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              نام کاربری
            </h1>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div dir="ltr">
                <input
                  type="text"
                  name="usename"
                  id="username"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 
                      sm:text-sm rounded-lg focus:ring-primary-600 
                      focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
                       dark:border-gray-600 dark:placeholder-gray-400
                        dark:text-white dark:focus:ring-blue-500
                         dark:focus:border-blue-500"
                  placeholder="sabmelki"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="font-kalameLight block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  ایمیل
                </label>
                <input
                  dir="ltr"
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300
                        text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 
                        focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
                         dark:border-gray-600 dark:placeholder-gray-400
                          dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500"
                  placeholder="sabmelki@gmail.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className=" font-kalameLight block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  پسورد
                </label>
                <input
                  dir="ltr"
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 
                       sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 
                       block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                         dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 mx-2 text-green-600 bg-gray-100
                       border-green-300 rounded focus:ring-green-500
                        dark:focus:ring-green-600
                         dark:ring-offset-green-800 focus:ring-2
                          dark:bg-green-700 dark:border-green-600"
                          required=""/>
                   
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-yellow-500 dark:text-gray-300  font-kalameLight "
                    >
                      مرا به خاطر بسپار
                    </label>
                  </div>
                </div>
              </div>
              <button
                disabled={loading}
                type="submit"
                className="mb-2 w-full text-white bg-yellow-600
                   hover:bg-yellow-700 focus:ring-4 focus:outline-none
                    focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 
                    text-center dark:bg-yellow-700 dark:hover:bg-yellow-600
                     dark:focus:ring-yellow-600 disabled:opacity-60 font-kalame  "
              >
                {loading ? loading1 : "ثبت نام"}
              </button>
            </form>
            {error && <p className="text-red-500"> {error} </p>}
            <div>
              <Link
                to={"/sign-in"}
                className="text-slate-50 font-kalameExtraBold font-bold"
              >
                اکانت داری؟
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
  }
