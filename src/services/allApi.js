import { commonApi } from "./commonApi"
import { serverUrl } from "./ServerUrl"

//  add video
 export const allVideoapi=async(reqbody)=>{
    return await  commonApi('POST',`${serverUrl}/allVideos`,reqbody)
 }

// api to  get all video
export const getAllVideoApi=async()=>{
   return await commonApi("GET",`${serverUrl}/allVideos`,"")
}
//  apt to delete a video
export const deleteVideo=async(id)=>{
   return await commonApi("DELETE",`${serverUrl}/allVideos/${id}`,{})
}
// api to add video to history
export const addVideoToHistory=async(reqbody)=>{
   return await commonApi("POST",`${serverUrl}/history`,reqbody)
}
// api to get video history
export const getVideoHistoryApi=async()=>{
   return await commonApi("GET",`${serverUrl}/history`,{})
}
// api to delete video history
export const deleteHistoryApi=async(id)=>{
   return await commonApi("DELETE",`${serverUrl}/history/${id}`,{})
}
// api to add category 
export const addCategoryApi=async(reqbody)=>{
   return await commonApi("POST",`${serverUrl}/category`,reqbody)
}
//  to get all catergory
export const getAllCategoryApi=async()=>{
   return await commonApi("GET",`${serverUrl}/category`)
}
// to delete category
export const deleteCategoryApi=async(id)=>{
   return await commonApi("DELETE",`${serverUrl}/category/${id}`,{})
}
// api to update category
export const updateCategoryApi=async(id,reqbody)=>{
   return await commonApi("PUT",`${serverUrl}/category/${id}`,reqbody)
}