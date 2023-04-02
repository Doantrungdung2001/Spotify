import React, { useContext } from 'react';
import { Songs } from '../Context'

function ListSong() {
    const {DataSongs} = useContext(Songs)
    console.log(DataSongs);
    return (
        <div className='col-span-2 overflow-y-scroll'>
            <table className='table-auto w-full'>
                <thead className='text-white h-12'>
                    <tr>
                        <th className='w-[10%]'>#</th>
                        <th className='text-left'>Titile</th>
                        <th className='w-[10%]'>Author</th>
                        <th className='w-[10%]'><i className='fa fa-download'>d</i></th>

                    </tr>
                </thead>
                <tbody>
                    {DataSongs.map((song,index) => (
                        <tr key={index} className='bg-slate-800 h-12 text-gray-500 hover:bg-slate-400 hover:text-gray-800' >
                            <td className='text-center'>{index +1}</td>
                            <td>{song.name}</td>
                            <td className='text-center'>{song.author}</td>
                            <td>1</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    );
}

export default ListSong;