'use client'
import React, { useState } from 'react'
import toast from "react-hot-toast";
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import axios from 'axios';
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setmobile] = useState("");
  const [password, setPassword] = useState("");
   
  const router = useRouter();
  const handlerSubmit=async(e)=>{
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:9500/user/register", {
        name,
        email,
        mobile,
        password
      });
      console.log(res)
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        router.push('/login')
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
    
    <div className="form-container" style={{ minHeight: "90vh" }}>
        <form onSubmit={handlerSubmit}>
          <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
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
              type="text"
              value={mobile}
              onChange={(e) => setmobile(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your mobile"
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
            REGISTER
          </button>
        </form>

        <div className="create_accountinfo">
          <p>If Already Register?</p>
          <button>
            {" "}
            <Link href="/login">Please Login here</Link>
          </button>
        </div>
      </div>

    </>
    )}
export default Signup