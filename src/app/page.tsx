import Image from "next/image"
import { FiPlusCircle } from "react-icons/fi";

export default function Home() {
  return (
    <div>
      <nav className="flex justify-between py-4 px-8">
        <a href="https://smriti.co/"><Image src="https://smriti.co/images/image2.png" width={100} height={10} alt="logo"/></a>
        <a href="https://smriti.co/ielts-writing-checker/login"><button className="border-2 rounded-md py-1 text-blue-600 px-4 border-blue-500">Sign In!</button></a>
      </nav>
      <section className="flex flex-col justify-center items-center text-center p-4">
        <div className="text-2xl lg:text-4xl font-semibold">Upload Essay Image</div>
        <div className="flex flex-col lg:flex-row m-2">
          <div className="my-2 lg:my-8 mx-0 lg:mx-4 flex flex-col justify-center items-center">
            <h3 className="text-xl lg:text-2xl font-medium">Page 1</h3>
            <div className="shadow-xl h-[300px] lg:h-[400px] w-[200px] lg:w-[250px] flex justify-center items-center rounded-2xl"><a href=""><FiPlusCircle size={80} color="#367cd2"/></a></div>
          </div>
          <div className="my-2 lg:my-8 mx-0 lg:mx-4 flex flex-col justify-center items-center">
            <h3 className="text-xl lg:text-2xl font-medium">Page 2</h3>
            <div className="shadow-xl h-[300px] lg:h-[400px] w-[200px] lg:w-[250px] flex justify-center items-center rounded-2xl"><a href=""><FiPlusCircle size={80} color="#367cd2"/></a></div>
          </div>
          <div className="my-2 lg:my-8 mx-0 lg:mx-4 flex flex-col justify-center items-center">
            <h3 className="text-xl lg:text-2xl font-medium">Page 3</h3>
            <div className="shadow-xl h-[300px] lg:h-[400px] w-[200px] lg:w-[250px] flex justify-center items-center rounded-2xl"><a href=""><FiPlusCircle size={80} color="#367cd2"/></a></div>
          </div>
        </div>
        <div><button className="text-white bg-[#9e9e9e] py-1 lg:py-2 my-4 px-4 text-lg lg:text-2xl hover:bg-[#afafaf] rounded-lg">Convert Image to Text</button></div>
      </section>
    </div>
  )
}
