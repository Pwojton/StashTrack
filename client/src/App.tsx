import { AppStylesContainer } from "./App.styles";
import MenuComponent from "./components/MenuComponent/MenuComponent";
import MainPage from "./pages/MainPage";
import LogoComponent from "./components/LogoComponent/LogoComponent";
import useScreenWidth from "./hooks/useScreenWidth";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  const screenWidth: number = useScreenWidth();
  const isLogged: boolean = false;

  if (!isLogged)
    return (
      <AppStylesContainer>
        <LoginPage />
      </AppStylesContainer>
    );

  return (
    <AppStylesContainer>
      {screenWidth < 1024 && <LogoComponent />}
      <MenuComponent />
      <MainPage />
    </AppStylesContainer>
  );
}

export default App;
