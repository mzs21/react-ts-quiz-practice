import { SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

export default function SignUpForm() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");

  const { signUp } = useAuth();

  return (
    <Form style={{ height: "500px" }}>
      <TextInput
        type="text"
        placeholder="Enter name"
        icon="person"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextInput
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
      />
      <TextInput
        type="password"
        placeholder="Enter password"
        icon="lock"
        value={password}
      />
      <TextInput
        type="password"
        placeholder="Confirm password"
        icon="lock_clock"
        value={confirmPassword}
      />

      <Checkbox text="I agree to the Terms &amp; Conditions" />
      <Button>
        <span>Submit Now</span>
      </Button>
      <div className="info">
        Already have an account?
        <Link to="/login"> Login</Link> instead.
      </div>
    </Form>
  );
}
