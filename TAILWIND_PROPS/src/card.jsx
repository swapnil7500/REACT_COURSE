import React from 'react'

function Card ({name,prize="2456",className=" "}){
    console.log(name);
    return(
        <div className={`w-159 h-1 flex flex-col rounded-xl bg-black min-h-[10rem] ${className}`}>
      <div>
        <img
          src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
          alt="test"
          className="object-cover object-center h-2 rounded-t-xl"
        />
      </div>
      <div className="flex flex-col py-3 px-3 pb-10">
        <div className="flex justify-between ">
          <h1 className="font-bold ">{name}</h1>
          {/* <h1></h1> */}
        </div>
        <div className="flex  justify-between">
          <p>{prize}</p>
          <p>0.01</p>
        </div>
      </div>
    </div>
    )
}


export default Card