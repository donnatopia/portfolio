import Head from 'next/head';
import Image from 'next/image';
import { Navbar, Main, About, Skills, Projects } from '../../components';

export default function Home() {
  return (
   <div>
    <Head>
      <title>Donna Wong | Full Stack Software Engineer</title>
      <meta name='description' content='generated by create next app' />
      <link rel='icon' href='/assets/navLogo.png' />
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </Head>
    <Navbar />
    <Main />
    <About />
    <Skills />
    <Projects />
   </div>
  )
}
