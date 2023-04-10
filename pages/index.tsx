
import Head from 'next/head';
import Banner from '../components/Banner';
import Contactpage from '../components/Contactpage';
import { Header } from '../components/Header';
import Homepage from '../components/Homepage';
import Roompage from '../components/Roompage';
import RoomPage2 from '../components/RoomPage2';
import Servicepage from '../components/Servicepage';

export default function Home() {
  return (
    <div className="" >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="bg-[url(/img/bg.jpg)] bg-cover h-screen" >
     
   <Homepage/>
      </div>
      
  

      <main className="mx-auto max-w-screen-2xl">
      <Roompage/>
    
     
      </main>
      <div   className="mx-auto  max-w-screen-2xl" >
      <RoomPage2/>
      </div>
      <div   className="bg-black">
   
      <Contactpage/>

      </div>
  

    </div>
  );
}
