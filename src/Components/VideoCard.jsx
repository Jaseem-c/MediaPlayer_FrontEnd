import {  faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { useState } from 'react';
import { addVideoToHistory, deleteVideo } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function VideoCard({video,SetDeleteVideoStatus,isPresent}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => 
    {
      // to add history
      const caption=video?.caption
      const url=video?.videoUrl
      const time=new Date()
      // console.log(time);
      // formate the date and time
    const timeStamp=new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(time)
    console.log(timeStamp);

    const reqbody={caption,url,timeStamp}

      setShow(true);
      const result =await addVideoToHistory(reqbody)
      // console.log(result);
    }


  // delete video
const handleDelete=async(id)=>{
  const result= await deleteVideo(id)
 if(result.status>=200 && result.status<300)
 {
  toast.success("video Deleted")
  SetDeleteVideoStatus(result.data)
 }
 else{
  toast.error("video not Deleted")
 }
 console.log(result);
}
// drag video
const videoDrag=(e,video)=>{
  // console.log(`draged video id is ${video}`);
  e.dataTransfer.setData("VideoDetails",JSON.stringify(video))
}
  return (
    <>
     <Card style={{ width: '100%'}} draggable onDragStart={(e)=>videoDrag(e,video)} className='mt-4'>
     {!isPresent && <Card.Img variant="top" onClick={handleShow} src={video?.imageUrl} height={'270px'} />}
      <Card.Body>
        <div className='d-flex justify-content-between'>
        <Card.Text>{video?.caption}</Card.Text>
        {!isPresent ? <Button variant="danger" onClick={()=>handleDelete(video?.id)}><FontAwesomeIcon icon={faTrashCan} /></Button>
        :null}
        </div>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={`${video?.videoUrl}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>

      <ToastContainer position="top-right" theme="colored" autoClose={5000}/>
    </>
  )
}

export default VideoCard