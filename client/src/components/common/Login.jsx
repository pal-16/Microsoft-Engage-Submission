import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  Button,
  Paper,
  InputAdornment,
  IconButton
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { useAuthState, useAuthDispatch } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import { login } from "../../actions/authActions";
import { SnackbarContext } from "../../context/SnackbarContext";
import { REQUEST_AUTH, AUTH_ERROR } from "../../reducers/types";
import FormField from "../../components/FormField";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "80vh"
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "50%"
    },
    [theme.breakpoints.up("md")]: {
      width: "40%"
    }
  },
  form: {
    width: "100%",
    justifyContent: "center"
  },
  formInner: {
    padding: "20px 30px"
  },
  formControl: {
    marginTop: "15px",
    marginBottom: "20px"
  }
}));

const Login = (props) => {
  const classes = useStyles();
  const { isAuthenticated, loading, userType } = useAuthState();
  const dispatch = useAuthDispatch();
  const history = useHistory();
  const { setOpen, setSeverity, setMessage } = useContext(SnackbarContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  const [errors, updateErrors] = useState({
    email: "",
    password: ""
  });


  useEffect(() => {
    if (localStorage.getItem('pubkey'))
      history.push(`/newpage`);

    // if (isAuthenticated && userType === props.userType) {
    //   history.push(`/${props.userType}/applications`);
    // }
  }, [history, isAuthenticated, userType, props.userType]);



  return loading ? (
    <Spinner />
  ) : (
    <Box
      className={classes.root}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Paper elevation={3} className={classes.paper}>
        <div style={{ marginTop: "24px" }}>
          <Typography variant="h5">{props.name} Login</Typography>
        </div>
        <form className={classes.form} noValidate>
          <div className={classes.formInner}>
            <FormField
              label="Email"
              name="email"
              required={true}
              onChange={handleEmail}
              error={errors.email}
            />
            <FormField
              label="Password"
              name="password"
              required={true}
              onChange={handlePassword}
              error={errors.password}
              InputProps={{
                type: showPassword ? "text" : "password",
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={toggleShowPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <div>
              <Button
                onClick={window.vjcoin.login}
                size="large"
                color="primary"
                type="submit"
                fullWidth
                variant="contained"
              >
                Login
              </Button>
            </div>
          </div>
        </form>
        <Typography
          style={{ color: "#303F9E", fontSize: 15, marginBottom: "15px" }}
        >
          Don't have an account?
          <Link style={{ color: "#303F9E" }} to={`/${props.userType}/register`}>
            {" "}
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
