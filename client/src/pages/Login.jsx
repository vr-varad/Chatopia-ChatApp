import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CameraAlt } from "@mui/icons-material";
import { VisullyHiddenInput } from "../components/styles/StyledComponent.jsx";
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { usernameValidator } from "../utils/validator.js";

const Login = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  const toggleLogin = () => setIsLogin(!isLogin);
  const [showError, setShowError] = useState(false);

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useStrongPassword();

  const avatar = useFileHandler("single");

  useEffect(() => {
    if (avatar.error) {
      setShowError(true);
      const timer = setTimeout(() => setShowError(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [avatar.error]);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(username, password);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(name, bio, username, password, avatar);
  };

  return (
    <div
      style={{
        height: "100vh",
        background:
          "linear-gradient(25deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 20%, rgba(0,212,255,1) 100%)",
      }}
    >
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          paddingTop: 15,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {isLogin ? (
            <>
              <Typography variant="h5">Login</Typography>
              <form
                style={{
                  marginTop: 2,
                  width: "100%",
                }}
                onSubmit={handleLogin}
              >
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
                />
                <Button
                  sx={{
                    marginTop: 2,
                  }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Login
                </Button>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: 2,
                  }}
                >
                  Don&apos;t have an account?{" "}
                  <Button
                    color="primary"
                    onClick={toggleLogin}
                    style={{ textTransform: "none" }}
                  >
                    Sign Up
                  </Button>
                </Typography>
              </form>
            </>
          ) : (
            <>
              <Typography variant="h5">Sign Up</Typography>
              <form
                style={{
                  marginTop: 2,
                  width: "100%",
                }}
                onSubmit={handleSignUp}
              >
                <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                  <Avatar
                    sx={{
                      width: "10rem",
                      height: "10rem",
                      backgroundColor: "primary.main",
                      objectFit: "contain",
                    }}
                    src={avatar.preview}
                  />
                  <IconButton
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      backgroundColor: "white",
                    }}
                    component="label"
                  >
                    <>
                      <CameraAlt />
                      <VisullyHiddenInput
                        type="file"
                        onChange={avatar.changeHandler}
                      />
                    </>
                  </IconButton>
                </Stack>
                {showError && (
                  <Typography
                    paddingLeft={"6rem"}
                    variant="body2"
                    color="error"
                  >
                    {avatar.error}
                  </Typography>
                )}
                <TextField
                  required
                  fullWidth
                  label="Name"
                  margin="normal"
                  variant="outlined"
                  value={name.value}
                  onChange={name.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Bio"
                  margin="normal"
                  variant="outlined"
                  value={bio.value}
                  onChange={bio.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
                />
                {username.error && (
                  <Typography variant="body2" color="error">
                    {username.error}
                  </Typography>
                )}
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
                />
                {password.error && (
                  <Typography variant="body2" color="error">
                    {password.error}
                  </Typography>
                )}
                <Button
                  sx={{
                    marginTop: 2,
                  }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Sign Up
                </Button>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: 2,
                  }}
                >
                  Already have an account?{" "}
                  <Button
                    color="primary"
                    onClick={toggleLogin}
                    style={{ textTransform: "none" }}
                  >
                    Login
                  </Button>
                </Typography>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
