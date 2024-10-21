"use client";

import { useState } from "react";

export default function FavColor() {
    // useState untuk warna default
    const [warna, setWarna] = useState("Biru");

return ( 
    <div className="container mx-auto p-4 text-center">
        <h1>Warna Favorit saya adalah {warna} </h1>
        <hr className="m-10" />
        <p>Ubah state warna ke warna</p>
        <button
        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setWarna("hijau")}>

        hijau
        </button>
        <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setWarna("biru")}>

        biru
        </button>
        <button
        className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setWarna("merah")}>
            
        merah
        </button>
        <button
        className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setWarna("ungu")}>

        ungu
        </button>
        <button
        className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setWarna("kuning")}>

        kuning
        </button>
    </div>
);   
}