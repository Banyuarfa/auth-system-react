import { Link } from "react-router-dom";
import Input from "./Fragments/Input";

export default function LoginForm() {
  return (
    <fieldset>
      <legend>Login Form</legend>
      <Input labelText="Email" placeHolder="example@email.com" type="email" />
      <Input
        labelText="Password"
        placeHolder="Enter Password"
        type="password"
      />
      <button type="submit">Submit</button>
      <p>
        Belum Punya Akun? <Link to="/LoginForm-ReactJS/register">Daftar</Link>
      </p>
    </fieldset>
  );
}
