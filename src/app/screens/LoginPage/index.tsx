import React, { useMemo, useState } from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Tabs,
  Tab,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import "../../../css/login.css";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import MemberApiServices from "../../apiServices/memberApiServices";

const LoginPage = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<number>(0);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Form states (MUHIM FIX)
  const [nick, setNick] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const memberApiService = useMemo(() => new MemberApiServices(), []);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    // tab o'zgarganda passwordni yashirib qo'yamiz (UX)
    setShowPassword(false);
  };

  const handleSignUpRequest = async () => {
    try {
      const mb_phone = Number(phone);

      const is_fulfilled = nick.trim() !== "" && password.trim() !== "" && mb_phone > 0;
      assert.ok(is_fulfilled, Definer.input_err1);

      const signup_data = {
        mb_nick: nick.trim(),
        mb_phone,
        mb_password: password,
      };

      await memberApiService.signupRequest(signup_data);

      sweetTopSmallSuccessAlert("SignUp Success", 1000, true);
      navigate("/");
      window.location.reload();
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  const handleLoginRequest = async () => {
    try {
      const is_fulfilled = nick.trim() !== "" && password.trim() !== "";
      assert.ok(is_fulfilled, Definer.input_err1);

      const login_data = {
        mb_nick: nick.trim(),
        mb_password: password,
      };

      await memberApiService.loginRequest(login_data);

      sweetTopSmallSuccessAlert("Login Success", 1000, true);
      navigate("/");
      window.location.reload();
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <Box className="login_page">
      {/* Auth card */}
      <Container maxWidth="lg" className="forms_container">
        <Box className="forms_wrapper">
          {/* Left - image */}
          <Box className="form_image_section">
            {/* Eslatma: bu rasm public/home/22.jpeg bo‘lishi kerak */}
            <img
              src="/home/22.png"
              alt="Feyri beauty visual"
              className="form_image"
              loading="lazy"
            />
            <Box className="image_overlay">
              <Typography className="overlay_text">
                Minimal routine. Maximum results.
              </Typography>
              <Typography className="overlay_author">— Feyri Beauty</Typography>
            </Box>
          </Box>

          {/* Right - form */}
          <Box className="form_section">
          <Tabs
  value={activeTab}
  onChange={handleTabChange}
  variant="fullWidth"
  sx={{
    mb: "40px",
    borderBottom: "2px solid #f0f0f0",

    // indicator (pastdagi chiziq)
    "& .MuiTabs-indicator": {
      backgroundColor: "#f48fb1",
      height: "3px",
      borderRadius: "3px",
    },

    // tab buttonlar
    "& .MuiTab-root": {
      fontFamily: "Commissioner, Inter, sans-serif",
      fontSize: "14px",
      fontWeight: 700,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "#9a9a9a",
      minHeight: "48px",

      // hover
      "&:hover": { color: "#f48fb1" },

      // click paytidagi ko‘k highlight/ripple’ni yo‘qotish
      "& .MuiTouchRipple-root": { display: "none" },

      // selected
      "&.Mui-selected": { color: "#f48fb1" },

      // keyboard focus (ko‘k chiqmasin)
      "&.Mui-focusVisible": {
        outline: "2px solid rgba(244, 143, 177, 0.35)",
        outlineOffset: "4px",
        borderRadius: "10px",
      },
    },
  }}
>
  <Tab label="LOGIN" disableRipple disableFocusRipple />
  <Tab label="REGISTER" disableRipple disableFocusRipple />
</Tabs>


            {/* LOGIN */}
            {activeTab === 0 && (
              <Box component="form" className="form_content" onSubmit={(e) => e.preventDefault()}>
                <Typography className="form_title">Welcome back</Typography>
                <Typography className="form_subtitle">
                  Log in to continue shopping.
                </Typography>

                <TextField
                  fullWidth
                  label="Username"
                  variant="outlined"
                  className="form_input"
                  value={nick}
                  onChange={(e) => setNick(e.target.value)}
                />

                <TextField
                  fullWidth
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  className="form_input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword((p) => !p)}
                          edge="end"
                          aria-label="toggle password visibility"
                        >
                          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Box className="form_options">
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Remember me"
                    className="remember_checkbox"
                  />
                  <Typography
                    className="forgot_password"
                    onClick={() => navigate("/forgot-password")}
                  >
                    Forgot password?
                  </Typography>
                </Box>

                <Button onClick={handleLoginRequest} fullWidth className="submit_button">
                  Login
                </Button>

                <Box className="divider">
                  <span>OR</span>
                </Box>

                <Box className="social_buttons">
                  <Button
                    onClick={() => navigate("*")}
                    className="social_button"
                    startIcon={<GoogleIcon />}
                  >
                    Google
                  </Button>
                  <Button
                    onClick={() => navigate("*")}
                    className="social_button"
                    startIcon={<FacebookIcon />}
                  >
                    Facebook
                  </Button>
                  <Button
                    onClick={() => navigate("*")}
                    className="social_button"
                    startIcon={<AppleIcon />}
                  >
                    Apple
                  </Button>
                </Box>
              </Box>
            )}

            {/* REGISTER */}
            {activeTab === 1 && (
              <Box component="form" className="form_content" onSubmit={(e) => e.preventDefault()}>
                <Typography className="form_title">Create account</Typography>
                <Typography className="form_subtitle">
                  Register to track orders and save favorites.
                </Typography>

                <TextField
                  fullWidth
                  label="Choose a nickname"
                  type="text"
                  variant="outlined"
                  className="form_input"
                  value={nick}
                  onChange={(e) => setNick(e.target.value)}
                />

                <TextField
                  fullWidth
                  label="Phone number"
                  type="tel"
                  variant="outlined"
                  className="form_input"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <TextField
                  fullWidth
                  label="Create password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  className="form_input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword((p) => !p)}
                          edge="end"
                          aria-label="toggle password visibility"
                        >
                          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Button onClick={handleSignUpRequest} fullWidth className="submit_button">
                  Create account
                </Button>

                <Box className="divider">
                  <span>OR</span>
                </Box>

                <Box className="social_buttons">
                  <Button
                    onClick={() => navigate("*")}
                    className="social_button"
                    startIcon={<GoogleIcon />}
                  >
                    Google
                  </Button>
                  <Button
                    onClick={() => navigate("*")}
                    className="social_button"
                    startIcon={<FacebookIcon />}
                  >
                    Facebook
                  </Button>
                  <Button
                    onClick={() => navigate("*")}
                    className="social_button"
                    startIcon={<AppleIcon />}
                  >
                    Apple
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;
