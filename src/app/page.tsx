import Header from '../components/Header/';
import Footer from '../components/Footer/';
import Main from '@/components/Main/Main';

export default function Home() {
  const skewStyle = {
      transform: "skewX(-8deg) translateX(-20%) scaleX(1.2)"
  }
  return (
    <>
      <Header isMain={true} />
      <Main />
      <Footer />
    </>
  )
}
