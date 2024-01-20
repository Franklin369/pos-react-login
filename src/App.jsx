import styled, { ThemeProvider } from "styled-components";
import {
  AuthContextProvider,
  GlobalStyles,
  MyRoutes,
  Sidebar,
  useThemeStore,
  Login,
} from "./index";
import { Device } from "./styles/breakpoints";
import { useState } from "react";
import { useLocation } from "react-router-dom";
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { themeStyle } = useThemeStore();
  const { pathname } = useLocation();
  return (
    <ThemeProvider theme={themeStyle}>
      <AuthContextProvider>
        <GlobalStyles />
        {pathname != "/login" ? (
          <Container className={sidebarOpen ? "active" : ""}>
            <section className="contentSidebar">
              <Sidebar
                state={sidebarOpen}
                setState={() => setSidebarOpen(!sidebarOpen)}
              />
            </section>
            <section className="contentMenuhambur">menu hambur</section>
            <section className="contentRouters">
              <MyRoutes />
            </section>
          </Container>
        ) : (
          <Login />
        )}
      </AuthContextProvider>
    </ThemeProvider>
  );
}
const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  transition: 0.1s ease-in-out;
  color: ${({ theme }) => theme.text};
  .contentSidebar {
    display: none;
    /* background-color: rgba(78, 45, 78, 0.5); */
  }
  .contentMenuhambur {
    position: absolute;
    /* background-color: rgba(53, 219, 11, 0.5); */
  }
  .contentRouters {
    /* background-color: rgba(231, 13, 136, 0.5); */
    grid-column: 1;
    width: 100%;
  }
  @media ${Device.tablet} {
    grid-template-columns: 88px 1fr;
    &.active {
      grid-template-columns: 260px 1fr;
    }
    .contentSidebar {
      display: initial;
    }
    .contentMenuhambur {
      display: none;
    }
    .contentRouters {
      grid-column: 2;
    }
  }
`;
export default App;
