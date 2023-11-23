import React from "react";
import SignUpForm from "./SignUp/SignUpForm";

class SignUpRoute extends React.Component {
    componentDidMount() {
        if (window.location.pathname === "/sign-up") {
        window.location.reload();
        }
    }

    render() {
        return <SignUpForm />;
    }
}
  
  export default SignUpRoute;
