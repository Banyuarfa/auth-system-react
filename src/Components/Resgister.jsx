import { Link } from "react-router-dom";
import Input from "./Fragments/Input";
export default function RegisterForm() {
  return (
    <fieldset>
      <legend>Register Form</legend>
      <Input
        labelText="Username"
        placeHolder="Enter Username"
        type="password"
      />
      <Input labelText="Email" placeHolder="example@email.com" type="email" />
      <Input
        labelText="Password"
        placeHolder="Enter Password"
        type="password"
      />
      <Input
        labelText="Password"
        placeHolder="Enter Password"
        type="password"
      />
      <button type="submit">Submit</button>
      <p>
        Sudah Punya Akun? <Link to="/LoginForm-ReactJS/login">Login</Link>
      </p>
    </fieldset>
  );
}
