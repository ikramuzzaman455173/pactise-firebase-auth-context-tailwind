<h1 align="center">This Project Use All Components 😃</h1>

[//]: # (Table of Content)

<a name="top"></a>

## Table Of Contents 🙋‍♂️ content

> Click on any topic to go there

- [Simple Header Section Compoents](#simple-header-section-components)
- [Responsive Login Form Components](#responsive-login-form-components)
- [Responsive Register Form Components](#responsive-register-form-components)


***

### Simple Header Section Compoents

```jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="p-4 bg-gray-100 text-gray-800">
        <div className="container flex justify-between h-16 mx-auto">
          <Link to="/" className="flex items-center p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-8 text-orange-600">
              <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
              <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
            </svg>
          </Link>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-orange-600 border-orange-600">Link</a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Link</a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Link</a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Link</a>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <Link to="/login"><button className="self-center px-8 py-3 rounded font-semibold text-gray-50 mr-2 hover:bg-blue-500  bg-blue-600">Sign in</button></Link>
            <Link to="/register">
              <button className="self-center px-8 py-3 font-semibold rounded bg-orange-600 hover:bg-orange-500 text-gray-50">Sign up</button>
            </Link>
          </div>
          <button className="p-4 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
```

**Header Image Preview:)**

![chrome-capture-2023-3-15](https://user-images.githubusercontent.com/106922916/232214432-5854cbda-ed85-4524-b858-08b04e43931e.png)


#### [Go to top:arrow_up: ](#top)

### Responsive Login Form Components:)

```jsx
import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Login = () => {
  const [passwordShow, setpasswordShow] = useState(false)

  const handleTogglePassword = () => {
    setpasswordShow(!passwordShow)
  }
  return (
    <>
      <div className="w-full mx-auto max-w-md p-4 rounded-md shadow sm:p-8 bg-slate-100 my-10 text-gray-800">
        <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
        <p className="text-md text-center text-gray-600">Dont have account?
        <span className="focus:underline hover:underline cursor-pointer text-blue-500 ml-2 font-semibold"><Link to="/register">Sign Up here</Link></span>
        </p>
        <div className="my-6 space-y-4 ">
          <button aria-label="Login with Google" type="button" className=" active:bg-blue-600 hover:bg-blue-500 duration-300 font-semibold focus:none outline-none hover:text-white flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>
          <button aria-label="Login with GitHub" role="button" className="  active:bg-gray-600 hover:bg-black duration-300 font-semibold focus:none outline-none hover:text-white flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg>
            <p>Login with GitHub</p>
          </button>
          <button aria-label="Login with Twitter" role="button" className=" active:bg-blue-600 hover:bg-blue-400 duration-300 font-semibold focus:none outline-none hover:text-white  flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
              <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
            </svg>
            <p>Login with Twitter</p>
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full text-gray-600" />
          <p className="px-3 text-gray-600">OR</p>
          <hr className="w-full text-gray-600" />
        </div>
        <form className="space-y-8 ng-untouched ng-pristine ng-valid">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-md font-semibold text-gray-700">Email address</label>
              <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-orange-600" />
            </div>
            <div className="space-y-2 relative">
              <div className="flex justify-between">
                <label className="text-md font-semibold text-gray-700">Password</label>
                <a href="#" className=" focus:underline hover:underline text-blue-500 ml-2 text-sm font-semibold">Forgot password?</a>
              </div>
              <input type={passwordShow ? 'text' : 'password'} name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-orange-600" />
              <button
                type="button"
                className="text-gray-600 absolute right-4 transform translate-y-3 text-xl active:text-blue-500"
                onClick={handleTogglePassword}
              >
                {passwordShow ?<FaEyeSlash/>:<FaEye/>}
              </button>
            </div>
          </div>
          <button type="button" className="w-full px-8 py-3 font-semibold rounded-md hover:bg-orange-500 bg-orange-600 text-gray-50">Sign in</button>
        </form>
      </div>
    </>
  );
};

export default Login;
```

**Login Image Preview:)**

![chrome-capture-2023-3-15 (1)](https://user-images.githubusercontent.com/106922916/232215658-f4e72f27-cf58-4644-b533-d2c1afd4210d.png)

#### [Go to top:arrow_up: ](#top)


### Responsive Register Form Components:)

```jsx
import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Register = () => {
  const [passwordShow, setpasswordShow] = useState(false)

  const handleTogglePassword = () => {
    setpasswordShow(!passwordShow)
  }
  return (
    <>
        <div className="w-full mx-auto max-w-md p-4 rounded-md shadow sm:p-8 bg-slate-100 my-10 text-gray-800">
        <h2 className="mb-3 text-3xl font-semibold text-center">Register to your account</h2>
        <p className="text-md text-center text-gray-600">Dont have account?
          <span className="focus:underline hover:underline cursor-pointer text-blue-500 ml-2 font-semibold"><Link to="/login">Sign In here</Link></span>
        </p>
        <div className="my-6 space-y-4 ">
          <button aria-label="Register with Google" type="button" className=" active:bg-blue-600 hover:bg-blue-500 duration-300 font-semibold focus:none outline-none hover:text-white flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Register with Google</p>
          </button>
          <button aria-label="Register with GitHub" role="button" className="  active:bg-gray-600 hover:bg-black duration-300 font-semibold focus:none outline-none hover:text-white flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg>
            <p>Register with GitHub</p>
          </button>
          <button aria-label="Register with Twitter" role="button" className=" active:bg-blue-600 hover:bg-blue-400 duration-300 font-semibold focus:none outline-none hover:text-white  flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
              <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
            </svg>
            <p>Register with Twitter</p>
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full text-gray-600" />
          <p className="px-3 text-gray-600">OR</p>
          <hr className="w-full text-gray-600" />
        </div>
        <form className="space-y-8 ng-untouched ng-pristine ng-valid">
          <div className="space-y-4">
          <div className="space-y-2">
              <label className="block text-md font-semibold text-gray-700">Your Name</label>
              <input type="text" name="userName" id="userName" placeholder="John Doe" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-orange-600" />
            </div>


            <div className="space-y-2">
              <label className="block text-md font-semibold text-gray-700">Email address</label>
              <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-orange-600" />
            </div>
            <div className="space-y-2 relative">
              <div className="flex justify-between">
                <label className="text-md font-semibold text-gray-700">Password</label>
                <a href="#" className=" focus:underline hover:underline text-blue-500 ml-2 text-sm font-semibold">Forgot password?</a>
              </div>
              <input type={passwordShow ? 'text' : 'password'} name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-orange-600" />
              <button
                type="button"
                className="text-gray-600 absolute right-4 transform translate-y-3 text-xl active:text-blue-500"
                onClick={handleTogglePassword}
              >
                {passwordShow ?<FaEyeSlash/>:<FaEye/>}
              </button>
            </div>
          </div>
          <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-orange-600 hover:bg-orange-500 text-gray-50">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default Register;
```

**Registe Components Image Preview:)**

![chrome-capture-2023-3-15 (2)](https://user-images.githubusercontent.com/106922916/232216583-d7ef4d46-972e-403c-8ff3-7d3549a71b2f.png)





