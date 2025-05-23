import { FaPlusSquare } from "react-icons/fa";

export default function ProductCard(){
    return(
    <article className="my-2 flex items-center border-y-2 border-gray-200 rounded-l-xl">
        <div className="bg-gray-200 w-3/12 h-24 rounded-xl">

        </div>
        <div className="w-9/12 pl-4 py-1 h-20 flex flex-col justify-between">
            <div>
                <h3 className="text-sm text-center font-bold">HAMBURGUER 01</h3>
                <p className="text-xs leading">Pão Brioco, 200g de carne bovina, cabola grelhada, mussarela, tomate, alface, cheeddar</p>
            </div>
            <div className="text-sm flex items-center justify-between pr-4 mt-2">
                <span className="font-bold">R$ 28,00</span>
                <FaPlusSquare className="text-yellow-400 text-lg"/>
            </div>
        </div>
    </article>
    )
}   