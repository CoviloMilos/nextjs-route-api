"use client";
import { Grid } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMemo, useState } from "react";
import { CompanyRegisterForm } from "@/components/register-forms/company-register-form";
import { PersonalRegisterForm } from "@/components/register-forms/personal-register-form";
import { AffiliationLogos } from "@/components/affiliation-logos/affiliation-logos";
import styles from "./register.module.css";
import { RegisterType } from "@/types/enums";

const labels = {
  title: "YES DO IT",
  text: `Create an account and become part of the <br />
            <span style="color: #00DF81">YES DO IT</span>
            community!`,
  subtitle: "Create an account and become part of the YES DO IT community!",
  description:
    "Welcome! Whether you are looking for a job or want to advertise open " +
    "positions in your company, our registration process is quick and easy. " +
    "Create an account and connect with companies and professionals in the field of ecology " +
    "and sustainable development.",
  question: "Ready? Are you an individual or a company?",
  company: "Company",
  individual: "Individual",
};

const Register = () => {
  const [registerType, setRegisterType] = useState<RegisterType>(
    RegisterType.COMPANY,
  );

  const theme = useTheme();

  const companyButtonCheck: "contained" | "outlined" = useMemo(() => {
    return registerType === RegisterType.COMPANY ? "contained" : "outlined";
  }, [registerType]);

  const personalButtonCheck: "contained" | "outlined" = useMemo(() => {
    return registerType === RegisterType.PERSONAL ? "contained" : "outlined";
  }, [registerType]);

  const handleChangeRegisterType = (type: RegisterType) => {
    setRegisterType(type);
  };

  return (
    <Grid container className={styles.wrapper}>
      <Grid className={styles.firstColumn}>
        <Grid container>
          <Typography
            variant="h1"
            fontWeight={900}
            color={theme.palette.common.white}
            sx={{ textTransform: "uppercase" }}
          >
            {labels.title}
          </Typography>
        </Grid>
        <Grid container sx={{ gap: 4 }}>
          <Typography
            variant="h1"
            fontWeight={800}
            color={theme.palette.common.white}
            dangerouslySetInnerHTML={{ __html: labels.text }}
          />
          <Typography variant="body1" color={theme.palette.common.white}>
            {labels.description}
          </Typography>
          <Typography variant="body1" color={theme.palette.common.white}>
            {labels.question}
          </Typography>
          <Grid container size={12} spacing={2}>
            <Button
              color="white"
              variant={companyButtonCheck}
              onClick={() => handleChangeRegisterType(RegisterType.COMPANY)}
              href="#register-form"
            >
              {labels.company}
            </Button>
            <Button
              color="white"
              variant={personalButtonCheck}
              onClick={() => handleChangeRegisterType(RegisterType.PERSONAL)}
              href="#register-form"
            >
              {labels.individual}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={styles.secondColumn}>
        {registerType === RegisterType.COMPANY ? (
          <CompanyRegisterForm />
        ) : (
          <PersonalRegisterForm />
        )}
        <AffiliationLogos />
      </Grid>
    </Grid>
  );
};

export default Register;
