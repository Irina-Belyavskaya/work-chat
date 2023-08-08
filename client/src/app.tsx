import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "app.routes";
import { ThemeProvider } from "@emotion/react";
import theme from "theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppRoutes/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
