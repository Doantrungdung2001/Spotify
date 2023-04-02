import React from 'react';

// import { Container } from './styles';

function ListSong() {
    return (
        <div className='col-span-2'>
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
                    <tr>
                        <td className='text-center'>1</td>
                        <td>1</td>
                        <td className='text-center'>1</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ListSong;