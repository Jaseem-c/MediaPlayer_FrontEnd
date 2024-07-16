import React, { useState } from 'react'
import AddVideo from '../Components/AddVideo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import View from '../Components/View'
import Category from '../Components/Category'
import { Link } from 'react-router-dom'
function Home() {
  const [addVideoStatus,setAddVideoStatus]=useState([])
  const [dragOut,setDragOut]=useState(false)
  return (
    <>
    <div className="d-flex justify-content-between p-5">
      <AddVideo setAddVideoStatus={setAddVideoStatus}/>
     <Link to={'/watchhistory'} style={{textDecoration:"none"}}><h5 className='ms-auto'><span className='hide'>Watch History</span><FontAwesomeIcon icon={faClockRotateLeft} /></h5></Link>
    </div>

    <div className="row p-4">
      <div className="col-md-9">
        <View addVideoStatus={addVideoStatus} setDragOut={setDragOut}/>
      </div>
      <div className="col-md-3 p-4">
        <Category setDragOut={setDragOut}  dragOut={dragOut}/>
      </div>
    </div>
    </>
  )
}

export default Home