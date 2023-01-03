import React, { useState } from "react";
import {
	Container,
	Paper,
	Grid,
	Button,
	Typography,
	Avatar,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { GoogleLogin } from "react-google-login";

import { useDispatch } from "react-redux";
import Input from "./Input";
import useStyles from "./styles";
import Icon from "./icon";
import { useNavigate } from "react-router-dom";
import { AUTH } from "../../constants/actionTypes";

const Auth = () => {
	// const isSignUp = false;
	const classes = useStyles();
	const [showPassword, setShowPassword] = useState(false);
	const [isSignUp, setisSignUp] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleSubmit = () => {};
	const handleChange = () => {};
	const switchMode = () => setisSignUp((prev) => !prev); // handleShowPassword(false)

	const handleShowPassword = () =>
		setShowPassword((previousState) => !previousState);

	const googleFailure = (err) => {
		console.log(err);
	};

	const googleSuccess = async (res) => {
		const result = res?.profileObj;
		const token = res?.tokenId;

		try {
			dispatch({ type: AUTH, data: { result, token } });
			navigate("/");// return to homepage after login
		} catch (error) {}
		console.log("login successful");
	};
	//"You have created a new client application that uses libraries for user authentication or authorization that will soon be deprecated. New clients must use the new libraries instead; existing clients must also migrate before these libraries are deprecated. See the [Migration Guide](https://developers.google.com/identity/gsi/web/guides/gis-migration) for more information."
	return (
		<Container component="main" maxWidth="xs">
			<Paper className={classes.paper} elevation={3}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
				<form className={classes.form} onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						{isSignUp && (
							<>
								<Input
									name="firstName"
									label="First Name"
									handleChange={handleChange}
									autoFocus
									xs={6}
								/>
								<Input
									name="lastName"
									label="Last Name"
									handleChange={handleChange}
									half
								/>
							</>
						)}
						<Input
							name="email"
							label="Email"
							handleChange={handleChange}
							type="email"
						/>
						<Input
							name="password"
							label="Password"
							handleChange={handleChange}
							handleShowPassword={handleShowPassword}
							type={showPassword ? "text" : "password"}
						/>
						{isSignUp && (
							<Input
								name="confirmPassword"
								label="Confirm Password"
								handleChange={handleChange}
								handleShowPassword={handleShowPassword}
								type="password"
							/>
						)}
					</Grid>
					<Button
						type="submit"
						variant="contained"
						fullWidth
						className={classes.submit}
						color="primary"
					>
						{isSignUp ? "Sign Up" : "Sign In"}
					</Button>
					<GoogleLogin
						clientId="713033227325-4skiv0d6bhee57lj7fs92lu3rfrsql61.apps.googleusercontent.com"
						render={(renderProps) => (
							<Button
								className={classes.googleButton}
								color="primary"
								fullWidth
								onClick={renderProps.onClick}
								disabled={renderProps.disabled}
								variant="contained"
								startIcon={<Icon />}
							>
								Sign In with Google
							</Button>
						)}
						onFailure={googleFailure}
						onSuccess={googleSuccess}
						cookiePolicy="single_host_origin"
					/>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Button onClick={switchMode}>
								{isSignUp
									? "Already have an account? Sign In"
									: "Don't have an account? Sign Up"}
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Container>
	);
};

export default Auth;
