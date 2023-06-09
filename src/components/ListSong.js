import React, { useContext, useState } from 'react';
import { Songs } from '../Context'

function ListSong() {
    const {DataSongs,handleSetSong} = useContext(Songs)
    const [idSong,setidSong] = useState(0)
    const handlePlaySong = (idSong) =>{
        setidSong(idSong)
        handleSetSong(idSong)
    }
    return (
        <div className='col-span-2 overflow-y-scroll'>
            <table className='table-auto w-full'>
                <thead className='text-white h-12'>
                    <tr>
                        <th className='w-[10%]'>#</th>
                        <th className='text-left'>Titile</th>
                        <th className='w-[10%]'>Author</th>
                        <th className='w-[10%]'><i className='fa fa-download'></i></th>

                    </tr>
                </thead>
                <tbody>
                    {DataSongs.map((song,index) => (
                        <tr 
                            key={index} 
                            className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 ${idSong === song.id && 'bg-slate-600 text-teal-400'}`} 
                            onClick={() => handlePlaySong(song.id)} 
                        >
                            <td className='text-center'>{index +1}</td>
                            <td>{song.name}</td>
                            <td className='text-center'>{song.author}</td>
                            <th className='w-[10%]'><i className='fa fa-download'></i></th>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    );
}

export default ListSong;