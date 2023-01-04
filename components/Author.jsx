import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
  console.log(author);
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-purple-800 bg-opacity-20">
      <div className="absolute left-0 right-0 -top-14 flex w-full justify-center">
        <Image
          unoptimized={true}
          src={author.photo.url}
          alt={author.name}
          height={`${100}`}
          width={`${100}`}
          className="align-middle rounded-full"
        />
      </div>
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
