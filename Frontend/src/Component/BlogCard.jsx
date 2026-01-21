import React from 'react'
import { useNavigate } from 'react-router';

export const BlogCard = ({blog}) => {
    const {title , image , _id , description , category } = blog ; 
    const navigate = useNavigate() ; 
  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="w-full rounded-lg cursor-pointer overflow-hidden shadow hover:scale-102 hover:shadow-[#F05252] duration-400"
    >
      <img src={image} alt="" className="aspect-video" />
      <span className="ml-5 mt-5 px-3 py-1 inline-block bg-[#ff627e]/30 rounded-full text-[#FFE0B2] text-xs">
        {category}
      </span>
      <div>
        <h5 className="font-medium text-white mb-2 ml-5 px-3 py-1 mt-5">
          {title}
        </h5>
        <p
          className="text-xs mb-2 ml-5 px-3 py-1 mt-5 text-gray-400"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 80) }}
        ></p>
      </div>
    </div>
  );
}
