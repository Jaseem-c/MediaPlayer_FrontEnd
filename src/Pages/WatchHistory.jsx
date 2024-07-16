import { faHouse, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryApi, getVideoHistoryApi } from '../services/allApi'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function WatchHistory() {
  const [videoHistory, setVideoHistory] = useState([])
  // get video history
  const getVideoHistory = async () => {
    const result = await getVideoHistoryApi()

    console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setVideoHistory(result.data)
    }

  }
  console.log(videoHistory);

  // delete history
  const handleDeleteHistory=async(id)=>{
    const newHistory = await deleteHistoryApi(id)
    
    console.log(newHistory);
    if(newHistory.status>=200 && newHistory.status<300)
    {
      toast.success("History deleted")
      getVideoHistory()
    }
    else{
      toast.error("Something went wrong")
    }

  }
  useEffect(() => {
    getVideoHistory()
  }, [])
  return (
    <>
      <div className="row w-100 my-5">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className='d-flex'>
            <h5>Watch History</h5>
            <h5 className='ms-auto'><Link to={'/home'} style={{ textDecoration: "none", color: "white" }}><FontAwesomeIcon icon={faHouse} className='me-2' /><span className='hide'>Back To Home</span></Link></h5>
          </div>
          <table className='table mt-5'>
            <thead>
              <tr>
                <th>Sl.No</th>
                <th>Caption</th>
                <th>Url</th>
                <th>Time Stamp</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

              {videoHistory.length>0?videoHistory.map((item, index) => (

                <tr>
                  <td>{index+1}</td>
                  <td>{item?.caption}</td>
                  <td><Link to={item.url} target='_blank'>{item?.url}</Link></td>
                  <td>{item?.timeStamp}</td>
                  <td><button className='btn btn-danger' onClick={()=>handleDeleteHistory(item.id)}><FontAwesomeIcon icon={faTrashCan} /></button></td>
                </tr>)):<p className='text-danger fs-1 mt-3'>no data found</p>}

            </tbody>
          </table>
        </div>
        <div className="col-md-2"></div>
      </div>

      <ToastContainer position="top-right" theme="colored" autoClose={5000}/>
    </>
  )
}

export default WatchHistory