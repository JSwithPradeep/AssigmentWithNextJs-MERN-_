import React from "react";
import Signup from "./Form";

export default {
  title: "SignUp",
  component: Signup,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const SignUp = {
  args: {
    label: "Regiter Form",
  },
};

export const LoginForm = {
  args: {
    label: "Login",
  },
};
