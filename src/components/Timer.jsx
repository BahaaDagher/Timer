import styled from "@emotion/styled";

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
color : "#81c0ff" ,  
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
    transition : "background-color 0.2s ease",
    color : "#fff",
    '&:hover':{
        cursor: "pointer",
        backgroundColor: "#0084ffc9",
    },
    '&.start':{
        padding: "40px",
        fontSize: "25px",
        backgroundColor: "#f34571",
        '&:hover':{
            backgroundColor: "#f34571db",
        } ,
    }
}));


const Timer = () => {
  return (
    <>
      <Container>
        <SecondContainer>
            <Tittle>Timer⏱</Tittle>
            <TimerContainer>
                <TimeBox>
                    <TimeName>Hours</TimeName>
                    <TimeUnit>00</TimeUnit>
                </TimeBox>
                <Colon>:</Colon>
                <TimeBox>
                    <TimeName>Minutes</TimeName>
                   <TimeUnit>00</TimeUnit>
                </TimeBox>
                <Colon>:</Colon>
                <TimeBox>
                    <TimeName>Seconds</TimeName>
                   <TimeUnit>00</TimeUnit>
                </TimeBox>
            </TimerContainer>
            <ButtonsContainer>
                <Button>Pause</Button>
                <Button className= "start">Start</Button>
                <Button>Reset</Button>
            </ButtonsContainer>
        </SecondContainer>
      </Container>
    </>
  );
};

export default Timer;
