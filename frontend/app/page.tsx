"use client"
import React from "react";
import { CiSearch, CiShoppingBasket, CiHome, CiStar } from "react-icons/ci";
import { FaFilter } from "react-icons/fa";
import ProductCard from "./components/productsCard";


export default function Home(){
  const [showFilterList, setShowFilterList] = React.useState(false)
  const getFilterList = () => {
    return <div className="flex flex-col border-2 rounded-2xl p-2 fixed top-28 left-3/12 w-6/12" id="filter-list">
          <div className="flex justify-between items-center">
            <span>Lanches</span>
            <input type="checkbox" /> 
          </div>
          <div className="flex justify-between items-center">
            <span>Bebidas</span>
            <input type="checkbox" /> 
          </div>
          <div className="flex justify-between items-center">
            <span>Acompanhantes</span>
            <input type="checkbox" /> 
          </div>
          <div className="flex justify-between items-center">
            <span>Doces</span>
            <input type="checkbox" /> 
          </div>
      </div>

  }

  return <>
    <header className="p-2 flex justify-center">
      <h1><b>LOGO</b></h1>
    </header>
    <main>
      <section>
        <div className="my-4 flex flex-col px-2">

          <div className="flex justify-between items-center w-9/12 m-auto">
            <div className="flex justify-between items-center border-2 border-gray-200 rounded-2xl px-2  ">
              <input type="text" placeholder="Pesquisar" className="outline-none"/>
              <CiSearch />
            </div>
            <FaFilter onClick={_ => setShowFilterList(!showFilterList)}/>
            {showFilterList ? getFilterList() : null}
          </div>

          <div className="overflow-x-auto mt-4 text-md scroll-custom font-bold ">
            <span className="mx-4">Hamburgueres</span>
            <span className="mx-4">Acompanhamentos</span>
            <span className="mx-4">Refrigerantes</span>
            <span className="mx-4">MilkShakes</span>
            <span className="mx-4">Sucos</span>
          </div>

        </div>
      </section>
        
      <section className="px-2 flex flex-col mt-8">
        <h2 className="font-bold mb-4">Hamburgueres</h2>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
      <section className="px-2 flex flex-col mt-8">
        <h2 className="font-bold mb-4">Acompanhamentos</h2>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
      <div className="flex items-center justify-around w-full text-xl fixed bottom-0 bg-yellow-300 h-10">
        <CiHome />
        <CiStar />
        <CiShoppingBasket />
      </div>
    </main>
    <footer className="bg-yellow-300 h-10">
      <p>Desenvolvedor: Adilan Williams</p>
    </footer>
  </>
}