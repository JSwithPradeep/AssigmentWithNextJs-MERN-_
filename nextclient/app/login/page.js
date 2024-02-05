'use client'
import React from 'react'
import toast from "react-hot-toast";
import axios  from 'axios';
import { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/navigation';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:9500/user/login', {
        email,
        password,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        router.push('/home');
      } else {
        // Display detailed error message if available
        const errorMessage = res.data.message || 'An error occurred';
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('Something went wrong during login');
    }
  };

  return (
    <div className="form-container " style={{ minHeight: "90vh" }}>
    <form onSubmit={handleSubmit}>
      <h4 className="title">LOGIN FORM</h4>

      <div className="mb-3">
        <input
          type="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Enter Your Email "
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Enter Your Password"
          required
        />
      </div>
     

      <button type="submit" className="btn btn-primary">
        LOGIN
      </button>
    </form>
    <div className="create_accountinfo">
      <p>If Not Register?</p>
      <button>
        {" "}
        <Link href="/signup">Please Register here</Link>
      </button>
    </div>
  </div>
  )
}

export default Login