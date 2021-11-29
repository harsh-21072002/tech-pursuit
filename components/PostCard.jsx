import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({post}) => {

    console.log(post);

    return (
        <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
            <div className="relative overflow-hidden shadow-md pb-80 mb-6">
                <img 
                src={post.featuredImage.url}
                alt={post.title} 
                className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
                />
            </div>
             <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
                <Link href={`/post/${post.slug}`}>
                {post.title}
                </Link>
            </h1>
            <div className="block lg:flex text-center justify-center mb-8 w-full">
                <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
                    <img 
                    src={post.author.photo.url} 
                    alt={post.author.name} 
                    className="align-middle rounded-full"
                    height="30px" width="30px"
                    />
                    <p className="inline align-middle text-gray-700 ml-2 font-semibold">{post.author.name}</p>
                </div>
                <div className="font-medium text-gray-700 inline align-middle text-gray-700 flex items-center justify-center ml-4 mt-0.5">
                <img src="https://img.icons8.com/material-rounded/24/000000/calendar--v1.png" className="h-6 w-6 inline mr-2 text-black w-full" fill="none" stroke="currentColor"/>
                <span>{moment(post.createdAt).format('MM DD, YYYY')}</span>
                </div>
            </div>
                <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
                    {post.excerpt}
                </p>
                <div className="text-center">
                    <Link href={`/post/${post.slug}`} >
                    <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Read More...</span>
                    </Link>
                </div>
        </div>
    )
}

export default PostCard;
