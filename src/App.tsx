import React from "react";
import Projects from "./pages/projects/projects.cmp";
import Header from "./components/header/header.cmp";
import { Container } from "@mui/material";
import "./App.css";
import useProjectStore from "./stores/auth.store";

function App() {
  const login = useProjectStore((state) => state.login);

  // React.useEffect(() => {
  //   login();
  // }, []);

  return (
    <div className="App">
      <Header />
      <Container sx={{ marginTop: "16px" }}>
        <Projects />
      </Container>
    </div>
  );
}

export default App;
