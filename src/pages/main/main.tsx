import { Alarm } from "../../components/alarm/alarm";
import { Clock } from "../../components/clock/clock";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Container } from "../../components/container/container";
//import { Test } from "../test";

function App(): JSX.Element {
  const isAlarmPage = true;
  return (
    <Container>
      <Header />
      <Clock isAlarm={isAlarmPage} />
      <Alarm isAlarm={isAlarmPage} />
      <Footer />
    </Container>
  );
}

export default App;
