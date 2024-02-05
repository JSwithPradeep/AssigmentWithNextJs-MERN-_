import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import "./form.css";
import PropTypes from "prop-types";
const Signup = ({ backgroundColor, size, label, ...props }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setmobile] = useState("");
  const [password, setPassword] = useState("");

  const handlerSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:9500/user/register", {
        name,
        email,
        mobile,
        password,
      });
      console.log(res);
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
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
      <div className="form-container">
        <form onSubmit={handlerSubmit}>
          <h4 className="title">{label}</h4>
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
      </div>
    </>
  );
};
export default Signup;

Signup.propType = {
  backgroundColor: PropTypes.string,

  label: PropTypes.string.isRequired,

  onClick: PropTypes.func,
};

Signup.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
