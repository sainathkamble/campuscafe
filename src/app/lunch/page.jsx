import "../globals.css";
import React from "react";
import Image from "next/image";
import Navbar from "@/app/navbar/page";
import Footer from "@/app/footer/page";
import Items from "../itemscount/items";
import { PRODUCTSLIST } from "../productslist.js";

export default function Lunch(){
    return(
        <>
        <Navbar/> 
          <section className="h-[70vh] w-screen flex justify-center items-center flex-wrap gap-4 p-4 bg-slate-950 overflow-y-scroll custom">
           {PRODUCTSLIST.map(({id,item,price,image}) =>(
             <div key={id} className="h-[20vh] w-full flex justify-between items-center p-4 rounded-lg bg-slate-800 hover:bg-slate-700 sm:w-full md:w-full lg:w-3/4 xl:w-3/4 2xl:w-1/2">
               <Image className="h-full w-1/4 bg-cover rounded-lg" 
                height={100} width={100} src="/blank.jpeg" alt="Item image"/>

               <div className="h-full w-1/2 grid grid-cols-1 grid-rows-2 place-items-start place-content-between gap-2 p-2">
                 <p className="h-auto w-full text-sm text-white sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">{item}</p>
                 <p className="h-auto w-full text-sm text-white sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">{price}</p>
               </div>
               <Items/>
             </div>
           ))}
           <button className="h-[8vh] w-full flex justify-center items-center m-4 p-4 rounded-lg text-white bg-red-600 font-bold text-xl sm:w-full md:w-full lg:w-3/4 xl:w-3/4 2xl:w-1/2">
           Add To Order
          </button>
         </section>
        <Footer/>
        </>
    );
}