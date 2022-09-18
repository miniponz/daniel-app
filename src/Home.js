import "./App.css";
import { useEffect, useState } from "react";
import daniel_quotes from "./quotes.json";
import { Typography, Box, CssBaseline, Container, Button } from "@mui/material";
import CaraFooter from "./footer";

function Home() {
  const [quotes, setQuotes] = useState([]);
  const [current_quote, setCurrentQuote] = useState("");

  useEffect(() => {
    setQuotes(daniel_quotes.quotes);
  }, [quotes]);

  const handleClick = () => {
    setCurrentQuote(
      daniel_quotes.quotes[
        Math.floor(Math.random() * daniel_quotes.quotes.length)
      ]
    );
    console.log(current_quote);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1" gutterBottom>
          {" "}
          Danyul App
        </Typography>
        <img
          src={
            "https://scontent.fhio2-2.fna.fbcdn.net/v/t39.30808-6/277445681_10100752976725578_1843621580474304088_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ad2b24&_nc_ohc=JUUHNiRZGHgAX9gWbWc&_nc_ht=scontent.fhio2-2.fna&oh=00_AT-0FzkoCTkNMTlXOvyFx09md-Nrnr9F1P2nDLIx6uKhpw&oe=632C6700"
          }
          className="App-logo"
          alt="logo"
        />
      </header>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "50vh",
          alignItems: "space-between",
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Button
            onClick={() => {
              handleClick();
            }}
            variant={"contained"}
            sx={{ margin: "10px" }}
          >
            Mak me speek
          </Button>
          <Typography variant="h3" component="h2" gutterBottom>
            {"Daniel Says:"}
          </Typography>
          <Typography variant="h5">{`"${current_quote}"`}</Typography>
        </Container>
      </Box>
      <CaraFooter></CaraFooter>
    </div>
  );
}

export default Home;
