import { SContainer } from "@/components/UI/Container/SContainer"
import { Grid } from "@mui/material"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { ProjectCard } from "@/components/ProjectCard/ProjectCard"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { SButton } from "@/components/UI/Buttons/SButton"

export default function Home() {
  return (
    <>
      <SContainer sx={{ marginBottom: 80 / 16 + "rem" }}>
        <Grid container spacing={2}>
          <Grid
            item
            xl={4}
            lg={6}
            md={8}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h2" component="h2">
              Мы создали эту биржу с одной целью
            </Typography>
            <Typography variant="body1" component="p">
              — объединить талантливых специалистов и страстных энтузиастов в
              увлекательном мире пэт-проектов. Здесь вы найдёте идеи и вызовы,
              которые помогут вам развиваться, обучаться и делиться своими
              уникальными навыками.
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{ marginBottom: "0" }}
            >
              Не важно, являетесь ли вы разработчиком, дизайнером или кем‑то,
              кто просто ищет вдохновение, наша биржа открыта для всех. Здесь вы
              можете присоединиться к увлекательным проектам, внести свой вклад
              и обрести опыт, который выходит за пределы стандартных рамок.
            </Typography>
          </Grid>
          <Grid item xl={8} lg={6} md={4}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <img src="/Welcome.svg" alt="welcome img" />
            </Box>
          </Grid>
        </Grid>
      </SContainer>
      <SContainer sx={{ marginBottom: 40 / 16 + "rem" }}>
        <Grid container spacing={{ xl: 5, lg: 4, md: 3, sm: 3 }}>
          <Grid item lg={4} md={6} sm={12}>
            <ProjectCard />
          </Grid>
          <Grid item lg={4} md={6} sm={12}>
            <ProjectCard />
          </Grid>
          <Grid item lg={4} md={6} sm={12}>
            <ProjectCard />
          </Grid>
          <Grid item lg={4} md={6} sm={12}>
            <ProjectCard />
          </Grid>
          <Grid item lg={4} md={6} sm={12}>
            <ProjectCard />
          </Grid>
          <Grid item lg={4} md={6} sm={12}>
            <ProjectCard />
          </Grid>
        </Grid>
      </SContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 80 / 16 + "rem",
        }}
      >
        <SButton startIcon={<ExpandMoreIcon />}>Больше проектов</SButton>
      </Box>

      {/*<div className="modal" id="logInModal">*/}
      {/*  <div className="modal-content">*/}
      {/*    <button className="close-button" onClick="closeModal()">*/}
      {/*      &times;*/}
      {/*    </button>*/}
      {/*    <h2>Вход</h2>*/}
      {/*    <div className="input-container">*/}
      {/*      <input*/}
      {/*        type="email"*/}
      {/*        className="modal-input"*/}
      {/*        id="emailInput"*/}
      {/*        placeholder="Email"*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*    <div className="input-container">*/}
      {/*      <input*/}
      {/*        type="password"*/}
      {/*        className="modal-input"*/}
      {/*        id="passwordInput"*/}
      {/*        placeholder="Password"*/}
      {/*      />*/}
      {/*      <button*/}
      {/*        className="button-eye-logIn"*/}
      {/*        onClick="togglePasswordVisibility()"*/}
      {/*      >*/}
      {/*        <img src="/frontend/src/img/Icon_eye.svg" alt="Показать пароль" />*/}
      {/*      </button>*/}
      {/*    </div>*/}
      {/*    <button className="modal-button" id="loginButton">*/}
      {/*      Войти*/}
      {/*    </button>*/}
      {/*    <p>или</p>*/}
      {/*    <button className="register-button" onClick="showRegistrationModal()">*/}
      {/*      Регистрация*/}
      {/*    </button>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className="modal" id="registrationModal">*/}
      {/*  <div className="modal-content">*/}
      {/*    <button className="close-button" onClick="closeModal()">*/}
      {/*      &times;*/}
      {/*    </button>*/}
      {/*    <h2>Регистрация</h2>*/}
      {/*    <div className="input-container">*/}
      {/*      <input*/}
      {/*        type="email"*/}
      {/*        className="modal-input"*/}
      {/*        id="emailInputReg"*/}
      {/*        placeholder="Email"*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*    <div className="input-container">*/}
      {/*      <input*/}
      {/*        type="password"*/}
      {/*        className="modal-input"*/}
      {/*        id="passwordInputReg"*/}
      {/*        placeholder="Password"*/}
      {/*      />*/}
      {/*      <button*/}
      {/*        className="button-eye-reg"*/}
      {/*        onClick="togglePasswordVisibility1()"*/}
      {/*      >*/}
      {/*        <img src="/frontend/src/img/Icon_eye.svg" alt="Показать пароль" />*/}
      {/*      </button>*/}
      {/*    </div>*/}
      {/*    <div className="input-container">*/}
      {/*      <input*/}
      {/*        type="password"*/}
      {/*        className="modal-input"*/}
      {/*        id="passwordInputReg2"*/}
      {/*        placeholder="Repeat password"*/}
      {/*      />*/}
      {/*      <button*/}
      {/*        className="button-eye-reg"*/}
      {/*        onClick="togglePasswordVisibility2()"*/}
      {/*      >*/}
      {/*        <img src="/frontend/src/img/Icon_eye.svg" alt="Показать пароль" />*/}
      {/*      </button>*/}
      {/*    </div>*/}
      {/*    <label>*/}
      {/*      <input type="checkbox" id="agreementCheckbox" />*/}
      {/*      Соглашаюсь с политикой обработки персональных данных*/}
      {/*    </label>*/}
      {/*    <button className="modal-button" id="regButton">*/}
      {/*      Регистрация*/}
      {/*    </button>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  )
}
