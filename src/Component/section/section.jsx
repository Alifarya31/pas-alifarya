import React from 'react'
import car from '../../image/nav/car.png'
// import Populer from '../content/populer'
// import Category from '../content/category'

export default function Section(props){

    let data = [
        {   Image: props.img,
            Jumlah: props.jumlah,
            Total: props.total,
            Nama: props.nama,
        }
    ]
    console.log(data)
    return(
        <React.Fragment>
            <div className="m-5">
                <div className="text-3xl font-bold">Pesanan Saya</div>
                <div className="bg-green-700 h-2/10 rounded-xl">
                    <div className="m-8 text-xl font-bold text-white">
                        <div className="mb-3">Alif Arya</div>
                        <div className="mb-3">Rp. 1.000.000,-</div>
                        <div className="mb-3">089646489202</div>
                    </div>
                </div>
                <div className="">
                <ul className="flex w-full justify-between flex-wrap">
                        {data.map((dt,i)=>(
                            dt.Jumlah*dt.Total === 0 ? "" :<li key={i} className="flex items-center justify-between w-full h-24 relative">  
                            <img className="rounded-xl w-2/12 h-8 " src={dt.Image} alt={dt.Image} />
                        <div className="flex">
                           {dt.Total}
                        </div>
                        <div>x</div>
                        <div className="font-bold">{props.nama}</div>
                        <div>
                            {dt.Jumlah * dt.Total}
                        </div>
                      </li>
                            
                        ))}
                        <li className="flex items-center justify-between w-11/12 h-24 relative">
                        <img className="rounded-xl w-1/12 h-4 " src={car} alt={car} />
                            <div className="mr-5 ml-5 items-center font-bold text-xl text-bold ">
                                Jonggol, Bogor 
                            </div>
                            <div className="w-2 h-2 text-xs text-gray-400">Gratis</div>
                        </li>
                       
                    </ul>
                </div>
                <div>
                    <ul className="flex w-full items-center justify-between mt-10">
                        <li>
                            <div className="">
                                Total :
                            </div>
                        </li>
                        <li>
                            <div className="items-center font-bold text-xl text-bold ">
                                {props.jumlah * props.total}
                            </div>
                        </li>
                    </ul>
                </div>
                <button className="bg-yellow-500 w-full rounded-xl font-bold font-poppins mt-10 h-10">
                    Pesan
                </button>
            </div>
        </React.Fragment>
    )
}
