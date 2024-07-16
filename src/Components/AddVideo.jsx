import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react'
import { allVideoapi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function AddVideo({setAddVideoStatus}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // reqbody
  const [video,setVideo] = useState({
    caption:"",
    imageUrl:"",
    videoUrl:""
  })

  console.log(video);

  const getUrl=(e)=>{
    const link=e.target.value
    // console.log(link.slice(-11));

    if(link.startsWith('https://youtu.be/'))
    {
      // const emplink=link.slice(17,28)
      // console.log(emplink);
      setVideo({...video,videoUrl:`https://www.youtube.com/embed/${link.slice(17,28)}`})
    }
    else{
      // const emplink=link.slice(-11)
      // console.log(emplink);
      setVideo({...video,videoUrl:`https://www.youtube.com/embed/${link.slice(-11)}`})
    }
  }  

  /*
  user:https://www.youtube.com/watch?v=a3Ue-LN5B9U
 https://youtu.be/a3Ue-LN5B9U?si=-kBBN1jUUaRrtGMC

  developer:
  <iframe width="699" height="480" src="https://www.youtube.com/embed/a3Ue-LN5B9U" title="Sai Abhyankkar - Aasa Kooda (Music Video) | Thejo Bharathwaj | Preity Mukundhan | Sai Smriti" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
   */

  // 3-different common key -- a3Ue-LN5B9U


  const handleUpload= async(e)=>{
    e.preventDefault(e)

    const result= await allVideoapi(video)
      console.log(result);
      if(result.status>=200 && result.status<300)
      {
        toast.success("video uploaded Successfully")
        handleClose()
        setAddVideoStatus(result.data)

      }
      else{
        toast.error("Something Went Wrong")
        console.log(result);
      }
  }
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <h5 >Upload A video</h5>
        <button onClick={handleShow} className='btn fs-5'><FontAwesomeIcon icon={faCloudArrowUp}  /></button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} className='me-2' />Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill The Following Details</p>
          <form action="" className='p-3 border border-secondary rounded'>
            <input type="text" className='form-control' placeholder='VideoCaption'  onChange={(e)=>setVideo({...video,caption:e.target.value})} />
            <input type="text" className='form-control mt-3' placeholder='VideoImage' onChange={(e)=>setVideo({...video,imageUrl:e.target.value})}/>
            <input type="text" className='form-control mt-3' placeholder='VideoUrl' onChange={(e)=>getUrl(e)}/>
          </form>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={(e)=>{handleUpload(e)}}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position="top-right" theme="colored" autoClose={5000}/>
    </>

  )
}

export default AddVideo