import { Alarm } from "../../components/alarm/alarm";
import { Clock } from "../../components/clock/clock";
import { Container } from "../../components/container/container";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";

export function Stopwatch(): JSX.Element {
  return (
    <Container>
      <Header />
      <Clock />
      <Alarm />
      <Footer />
    </Container>
  );
}
