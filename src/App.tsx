import HeaderDesktop from "./Components/HeaderDesktop";
import HeaderMobile from "./Components/HeaderMobile";
import Welcome from "./Components/Welcome";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <>
      <Welcome />
      <HeaderMobile />
      <HeaderDesktop />
      <MainPage />
    </>
  );
}

export default App;
