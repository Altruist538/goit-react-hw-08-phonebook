import ImgBook from '../components/imgDat/phones.png';
import { Container, Title } from './pages.styled';

export default function Home() {
  return (
    <Container>
      <Title>Phone book welcome page</Title>
      <img src={ImgBook} alt="Phone book" style={{ objectFit: 'cover ' }} />
    </Container>
  );
}
