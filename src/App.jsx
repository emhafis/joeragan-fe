import AppRoutes from './routes/AppRoutes';
import LoadingScreen from "./components/LoadingScreen";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <LoadingScreen />
      <AppRoutes />
      <WhatsAppButton />
    </>
  )
}

export default App
