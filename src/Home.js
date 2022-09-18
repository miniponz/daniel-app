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
          Tweaky App
        </Typography>
        <img
          src={
            "https://progameguides.com/wp-content/uploads/2020/06/fortnite-outfit-metal-team-leader-1.jpg"
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
            {"Mr. Bubbles Says:"}
          </Typography>
          <Typography variant="h5">{`"${current_quote}"`}</Typography>
        </Container>
      </Box>
      <CaraFooter></CaraFooter>
    </div>
  );
}

export default Home;
