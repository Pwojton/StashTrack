import { AppStylesContainer } from "./App.styles";
import MenuComponent from "./components/MenuComponent/MenuComponent";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <AppStylesContainer>
      <MenuComponent />
      <MainPage />
    </AppStylesContainer>
  );
}

export default App;
