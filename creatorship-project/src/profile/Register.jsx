import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { backend_uri } from '../constants/Uri';
import './Register.css';
import axios from "axios";

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');
    const [name, setName] = useState(''); 
    const navigate= useNavigate();

    const onSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post(`${backend_uri}/auth/register`, { name, email, password, userType});
        alert('Registered successfully');
        navigate('/login');
      } catch (error) {
        console.error('Error during registration:', error.response.data);
        alert(error.response.data.message || 'Registration failed');
      }
    };

  return (
    <div>
      <section className="section grid grid-cols-1 lg:grid-cols-2">
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
        <div className="absolute inset-0">
          <img
            className="h-full w-full rounded-md object-cover object-top"
            src="https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk0fHxkZXNpZ25lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="relative">
          <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
            <h3 className="text-4xl font-bold text-white">
              Are you any of the below? We can help you meet and grow.
            </h3>
            <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              <li className="flex items-center space-x-3">
                <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                  <svg
                    className="h-3.5 w-3.5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span className="text-lg font-medium text-white">
                  Creator/Influencer
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                  <svg
                    className="h-3.5 w-3.5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span className="text-lg font-medium text-white">
                  Youtuber
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                  <svg
                    className="h-3.5 w-3.5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span className="text-lg font-medium text-white">
                  Startup
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                  <svg
                    className="h-3.5 w-3.5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span className="text-lg font-medium text-white">
                  Brands
                </span>
              </li>
            </ul>
          </div>
        </div>
        </div>
        <div className="flex items-center justify-center py-10 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
            Create an Account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account? 
            <a href="/login" className="font-semibold text-black transition-all duration-200 hover:underline">
              Sign In
            </a>
          </p>
            <form onSubmit={onSubmit} className="mt-8">
              <div className="space-y-5">
              <div>
                <label htmlFor="username" className="label text-base font-medium text-gray-900">Username</label>
                <input type="text" id="username" name="username" value={name} onChange={(e) => setName(e.target.value)} className="input w-full border-gray-300 px-3 py-2 rounded-md text-gray-900" required autoComplete="username" />
              </div>
              <div>
                <label htmlFor="email" className="label text-base font-medium text-gray-900">Email</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input w-full border-gray-300 px-3 py-2 rounded-md text-gray-900" required autoComplete="email" />
              </div>
              <div>
                <label htmlFor="password" className="label text-base font-medium text-gray-900">Password</label>
                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input w-full border-gray-300 px-3 py-2 rounded-md text-gray-900" required autoComplete="current-password" />
              </div>
                <div>
                  <label className="label text-base font-medium text-gray-900">Role</label>
                  <select name="role" value={userType} onChange={(e) => setUserType(e.target.value)} className="input w-full border-gray-300 px-3 py-2 rounded-md text-gray-900" required>
                    <option value="" disabled>Select your role</option>
                    <option value="creator">Creator</option>
                    <option value="business">Business</option>
                  </select>
                </div>
                {/* {userType === 'creator' && (
                  <div>
                    <label className="label text-base font-medium text-gray-900">Bio</label>
                    <textarea name="bio" value={bio} onChange={(e) => setBio(e.target.value)} className="input w-full border-gray-300 px-3 py-2 rounded-md text-gray-900" required />
                  </div>
                )} */}
                <div>
                  <button type="submit" className="button w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Sign Up</button>
                </div>
              </div>
            </form>
            {/* <div className="mt-6 space-y-3">
              <button type="button" className="relative inline-flex items-center justify-center w-full h-10 rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none">
                <svg className="w-6 h-6 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.563-.063-1.116-.165-1.64h-4.165v3.641z" />
                </svg>
                <span className="ml-2">Sign up with Google</span>
              </button>
              <button type="button" className="relative inline-flex items-center justify-center w-full h-10 rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none">
                <svg className="w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.677 0h-21.354c-.728 0-1.323.594-1.323 1.323v21.354c0 .728.594 1.323 1.323 1.323h11.498v-9.293h-3.118v-3.631h3.118v-2.678c0-3.061 1.868-4.728 4.598-4.728 1.307 0 2.432.097 2.76.141v3.2h-1.892c-1.486 0-1.772.708-1.772 1.746v2.319h3.543l-.462 3.631h-3.081v9.293h6.041c.728 0 1.323-.594 1.323-1.323v-21.354c0-.728-.594-1.323-1.323-1.323" />
                </svg>
                <span className="ml-2">Sign up with Facebook</span>
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
