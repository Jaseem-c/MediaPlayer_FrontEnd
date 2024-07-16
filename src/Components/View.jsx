import React, { useEffect, useState } from 'react'
import VideoCard from '../Components/VideoCard'
import { getAllVideoApi, updateCategoryApi } from '../services/allApi'
import { toast } from 'react-toastify'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function View({addVideoStatus,setDragOut}) {

  const [allVideo,setAllVideo]=useState([])
  const [deleteVideoStatus,SetDeleteVideoStatus]=useState([])
  const getAllVideo=async()=>{
    const result=await getAllVideoApi()
    // console.log(result);
    setAllVideo(result.data)
  }
  console.log(allVideo);


// drop the category video to delete  
const dragOver=(e)=>{
e.preventDefault()
}

const videoDrop=async(e)=>{
const result= JSON.parse(e.dataTransfer.getData("dataShare"))
console.log(result);
// video id,category details - we want remove video(videoid) from this(categoryDetails) category 
const newDetails=result.categoryDetails.allVideos.filter((item)=>item.id!=result.videoId)
console.log(newDetails);

const reqbody={
  categoryName:result.categoryDetails.categoryName,
  allVideos:newDetails,
  id:result.categoryDetails.id
}

// update api

const response =await updateCategoryApi(reqbody.id,reqbody)
console.log(response);
if(response.status>=200 && response.status<300)
{
  toast.success("Video Deleted Successfully")
  setDragOut(true)
}
else{
  toast.error("Something went wrong")
}
}


  useEffect(()=>{
    getAllVideo()
  },[addVideoStatus,deleteVideoStatus])

  return (
    <>
    <h5>All Videos</h5>
    <div className="row  w-100 " droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e)}>
      
      { allVideo?
      allVideo.map((item)=>(
         <div className="col-md-3 mt-4 ">
         <VideoCard video={item} SetDeleteVideoStatus={SetDeleteVideoStatus}/>
       </div>))
     : <p className='text-danger fs-5 mt-5'>Nothing to Display</p> }
    </div>
    <ToastContainer position="top-right" theme="colored" autoClose={5000}/>
    </>
    
  )
}

export default View