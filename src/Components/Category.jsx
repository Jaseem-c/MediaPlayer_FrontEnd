import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Button, Modal } from 'react-bootstrap'
import { addCategoryApi, deleteCategoryApi, getAllCategoryApi, updateCategoryApi } from '../services/allApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function Category({dragOut,setDragOut}) {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [allCategory,setAllCategory]=useState([])
  const [addStatus,setAddStatus]=useState(false)
  const [updateStatus,setUpdateStatus]=useState(false)
  const handleClose = () => {
    setCategoryName("")
    setShow(false);
  }
  const handleShow = () => setShow(true);

  
   console.log(categoryName);

  // to add category
 const  handleAddCategory=async()=>{
  if(categoryName)
  {
  const reqbody={
    categoryName,
    allVideos:[]
  }

const  result =await addCategoryApi(reqbody)
console.log(result);
if(result.status>=200 && result.status<300)
{
  toast.success("Category added Succesfully")
  setCategoryName("")
  handleClose()
  setAddStatus(true)
}
 }
else{
  toast.info("Please add Category")
}

 }

//   to get category
const getCategory=async()=>{
  const result= await getAllCategoryApi()
  setAllCategory(result.data)
}
// delete category
const deleteCategory=async(id)=>{
 const result=  await deleteCategoryApi(id);
 if(result.status>=200 && result.status<300)
 {
  toast.success("Category deleted Succesfully")
  setAddStatus(true)
 }
  else{
    toast.error("Something went wrong")
  }
  // getCategory()
} 

console.log(allCategory);

// drag over
const dragOver=(e)=>{
  e.preventDefault()
}
// drop
const dropVideo=async(e,selectedCategory)=>{
  // ctegory
//  console.log("category id:",selectedCategory);
  // video
  const vDetails=JSON.parse(e.dataTransfer.getData("videoDetails"))
  // console.log("video detial is :",vDetails);

  //  add video to category (all videos)-two objects
  if(selectedCategory.allVideos.find(item=> item.id==vDetails.id))
  {
    toast.error("Video already added to this category")
  }
  else{
    selectedCategory.allVideos.push(vDetails)
    const result=await updateCategoryApi(selectedCategory.id,selectedCategory)
    // console.log(result);
     toast.success("video added successfully")
   setUpdateStatus(true)
  }
//  console.log(selectedCategory);
}

//  drag the video to view for deleting video from category
const ondrag=(e,videoId,categoryDetails)=>{
console.log('video id:',videoId);
console.log('category details:',categoryDetails);
const dataShare={videoId,categoryDetails}
e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
}

useEffect(()=>{
  setAddStatus(false)
  setUpdateStatus(false)
  setDragOut(false)
getCategory()
},[addStatus,updateStatus,dragOut])

  return (
    <>
    <h5 className='mt-5 mt-md-0'>Category</h5>
    <button className='btn btn-warning w-100 mt-4' onClick={handleShow}>Add Category</button>
    {allCategory?.length>0?
    allCategory.map((items)=>(
      <div className='p-3 border rounded mt-4'  droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>dropVideo(e,items)} >
      <div className='d-flex justify-content-between'> 
      <p className='mb-4'>{items.categoryName}</p>
      <button className='btn btn-danger' onClick={()=>deleteCategory(items.id)}><FontAwesomeIcon icon={faTrashCan} /></button></div>
      {items?.allVideos?.length>0?
      items?.allVideos?.map((video)=>(<div draggable onDragStart={(e)=>ondrag(e,video.id,items)}>
        <VideoCard video={video} isPresent={true} />
        </div>
       
      ))
      :null}
      </div>
  
    ))
    
      
        :<p className='text-danger mt-5'>No category Added yet</p>
      }
    

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='p-3 border border-secondary rounded'>
            <input type="text" className='form-control' placeholder='Category Name' onChange={(e)=>{setCategoryName(e.target.value)}} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAddCategory}>
           Add
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position="top-right" theme="colored" autoClose={5000}/>
    </>
  )
}

export default Category