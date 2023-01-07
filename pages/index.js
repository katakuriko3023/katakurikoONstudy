import Header from "./component/Header";
import { AiOutlineHome,AiFillMail,AiOutlineMedium,AiOutlineZhihu,AiOutlineQq,AiOutlineSearch } from "react-icons/ai";
import Head from "next/head";
import Mail from "./component/Mail";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Ray 2.0</title>
      </Head>
    <header className=" flex flex-col sm:flex-row m-5  justify-between items-center h-auto">
        <div className="flex flex-grow  justify-evenly  max-w-2xl text-white">
          <Header title= "Home" Icon = {AiOutlineHome} />
          <Header title= {"Mail"} Icon = {AiFillMail} />
          <Header title= {"About"} Icon = {AiOutlineMedium} />
          <Header title= {"Search"} Icon = {AiOutlineSearch} />
          <Header title= {"lan"} Icon = {AiOutlineZhihu} />
          <Header title= {"Pengin"} Icon = {AiOutlineQq} />
        </div>
        <p className=" font-bold  text-6xl text-white">RAY</p>
    </header>
    {/* Nav */}
    {/* Hero */}
    <Mail />
  </div>


  )
}
