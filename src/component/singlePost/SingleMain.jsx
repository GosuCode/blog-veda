import user from '../../assets/user.png'
import { GoComment } from 'react-icons/go'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { TbHeartPlus } from "react-icons/tb";
import { BsBookmark } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import moment from 'moment'
import axios from "axios"

const SingleMain = () => {
    const { id } = useParams();
    const [singleBlog, setSingleBlog] = useState([]);

    useEffect(() => {
        axios
            .get(`https://kalikablog.onrender.com/blog/${id}`)
            .then((response) => {
                setSingleBlog([response.data.data]);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [id]);

    const formatCreatedAt = (timestamp) => {
        return moment(timestamp).format("MMMM Do YYYY");
    };

    return (
        <div>
            {singleBlog ? (singleBlog.map((val, key) => {
                return (
                    <div key={key} className='md:grid md:grid-cols-11 pb-32'>
                        <div className="fixed ml-10 md:block hidden col-start-1 col-span-2">
                            <button className="grid mt-8 justify-items-center w-12 h-12 items-center hover:bg-slate-200 rounded-full">
                                <TbHeartPlus className="text-2xl hover:text-rose-500" />
                            </button>
                            <button className="grid mt-8 justify-items-center w-12 h-12 items-center hover:bg-slate-200 rounded-full">
                                <GoComment className="text-2xl hover:text-blue-500" />
                            </button>
                            <button className="grid mt-8 justify-items-center w-12 h-12 items-center hover:bg-slate-200 rounded-full">
                                <BsBookmark className="text-2xl hover:text-yellow-400" />
                            </button>
                            <button className="grid mt-8 justify-items-center w-12 h-12 items-center hover:bg-slate-200 rounded-full">
                                <FiMoreHorizontal className="text-2xl hover:text-slate-500" />
                            </button>
                        </div>
                        <div className="col-start-3 col-span-9 bg-white shadow-sm shadow-slate-400 pb-10">
                            <div className='w-full rounded-t-md'>
                                <img src={val.image[0].path} className='w-full h-40 md:h-full' alt="" />
                            </div>
                            <div className='flex mt-4'>
                                <div className='grid items-center'>
                                    <img src={user} alt="" className='h-14 rounded-full m-1 p-1' />
                                </div>
                                <div className='grid items-center py-3 capitalize'>
                                    <div className='font-semibold text-base'>{val.author_name}</div>
                                    <span className='text-xs'>{formatCreatedAt(val.createdAt)}</span>
                                </div>
                            </div>
                            <div className='mt-8'>
                                <div className='pl-10'>
                                    <h1 className='font-extrabold text-xl md:text-4xl font-sans'>
                                        {val.title}
                                    </h1>
                                    <h2 className='font-bold text-slate-700 text-base md:text-2xl font-sans'>
                                        {val.sub_title}
                                    </h2>
                                </div>
                            </div>
                            <div className="px-3 md:px-16 md:p-0 py-8 font-serif mt-10 text-xl leading-10">
                                <p dangerouslySetInnerHTML={{ __html: val.description }} />
                            </div>
                        </div>
                    </div>
                )
            })
            ) : (
                <p className='w-screen h-screen grid place-items-center'>Loading...</p>
            )}

        </div>
    )
}

export default SingleMain
