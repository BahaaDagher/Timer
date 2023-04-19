import styled from "@emotion/styled";
import { useRef, useState } from "react";

const Container = styled("div")(({ theme }) => ({
  fontFamily: "Cursive",
  width: "80%",
  margin: "20px auto",
  padding: "30px",
  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
  background: "linear-gradient(180deg, #0084ff  0%, #76d7ff 100%)",
}));

const SecondContainer = styled("div")(({ theme }) => ({
  width: "80%",
  margin: "auto",
  borderRadius: "10px",
  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
  backgroundColor: "#fff",
  padding: "20px",
}));

const Tittle = styled("h1")(({ theme }) => ({
  color: "#706f84",
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "60px",
  margin: "20px 0",
}));
const TimerContainer = styled("div")(({ theme }) => ({
  width: "90%",
  margin: "auto",
  backgroundColor: "#fff",
  padding: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
const TimeBox = styled("div")(({ theme }) => ({
  width: "30%",
  margin: "auto",
  backgroundColor: "#fff",
  padding: "20px",
  textAlign: "center",
}));
const TimeName = styled("h6")(({ theme }) => ({
  color: "#81c0ff",
  fontWeight: "bold",
}));
const TimeUnit = styled("div")(({ theme }) => ({
  fontSize: "80px",
  margin: "auto",
  boxShadow: "0px 4px 10px 1px rgba(0, 0, 0, 0.3)",
  backgroundColor: "#fff",
  padding: "20px",
  textAlign: "center",
  color: "#706f84",
  fontWeight: "bold",
  borderRadius: "10px",
}));

const Colon = styled("div")(({ theme }) => ({
  fontSize: "50px",
  color: "#81c0ff",
  fontWeight: "bold",
}));

const ButtonsContainer = styled("div")(({ theme }) => ({
  width: "90%",
  margin: "auto",
  height: "100px",
  display: "flex",
  alignItems: "center",
}));
const Button = styled("div")(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "20px",
  width: "20%",
  margin: "auto",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0px 4px 10px 1px rgba(0, 0, 0, 0.3)",
  backgroundColor: "#0084ff ",
  borderRadius: "10px",
  transition: "background-color 0.2s ease",
  color: "#fff",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "#0084ffc9",
  },
  "&.start": {
    padding: "40px",
    fontSize: "25px",
    backgroundColor: "#f34571",
    "&:hover": {
      backgroundColor: "#f34571db",
    },
  },
}));

const Timer = () => {
  const [Hours, setHours] = useState("00");
  const [Minutes, setMinutes] = useState("00");
  const [Seconds, setSeconds] = useState("00");
  const [Work, setWork] = useState(false);
  const intervalRef = useRef(null);
  const Start = () => {
    if (Work) return;
    else setWork(true);
    let hours = Number(Hours),
      minutes = Number(Minutes),
      seconds = Number(Seconds);

      intervalRef.current  = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      setSeconds(seconds < 10 ? "0" + seconds : seconds);
      setMinutes(minutes < 10 ? "0" + minutes : minutes);
      setHours(hours < 10 ? "0" + hours : hours);
    }, 1000);
  };

  const Pause = () => {
    setWork(false);
    clearInterval(intervalRef.current);
  };

  const Reset = () => {
    setHours("00");
    setMinutes("00");
    setSeconds("00");
    setWork(false);
    clearInterval(intervalRef.current);
  }
  return (
    <>
      <Container>
        <SecondContainer>
          <Tittle>Timer⏱</Tittle>
          <TimerContainer>
            <TimeBox>
              <TimeName>Hours</TimeName>
              <TimeUnit>{Hours}</TimeUnit>
            </TimeBox>
            <Colon>:</Colon>
            <TimeBox>
              <TimeName>Minutes</TimeName>
              <TimeUnit>{Minutes}</TimeUnit>
            </TimeBox>
            <Colon>:</Colon>
            <TimeBox>
              <TimeName>Seconds</TimeName>
              <TimeUnit>{Seconds}</TimeUnit>
            </TimeBox>
          </TimerContainer>
          <ButtonsContainer>
            <Button
              onClick={() => {
                Pause();
              }}
            >
              Pause
            </Button>
            <Button
              className="start"
              onClick={() => {
                Start();
              }}
            >
              Start
            </Button>
            <Button
              onClick={() => {
                Reset();
              }}
            >
              Reset
            </Button>
          </ButtonsContainer>
        </SecondContainer>
      </Container>
    </>
  );
};

export default Timer;
