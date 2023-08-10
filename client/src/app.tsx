import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "app.routes";
import { ThemeProvider } from "@emotion/react";
import theme from "theme";
import { WebsocketProvider, socket } from "contexts/websockets.context";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <WebsocketProvider value={socket}>
        <Router>
          <AppRoutes/>
        </Router>
      </WebsocketProvider>
    </ThemeProvider>
  );
}

export default App;
