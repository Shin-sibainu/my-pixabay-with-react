import React from 'react'
import "./ImageGrallery.css"

const API_KEY = "27800439-c51423717090186532fd42957"
const URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+ 'red roses';

const ImageGrallery = () => {
  return (
    <div>
        <div className="images-wrapper">
            <div className="image box01">
                <img src="https://pixabay.com/get/g05596d3b2fe5e1743eb207bb064857e4a042747df2bb4a8fa37724c6ce90cb34d86749b59353f41e90c02822b9c228bd1fe026cff797ff68919a7dc604fd99ba_1280.jpg" alt="" />
            </div>
            <div className="image box02">
                image-2
            </div>
            <div className="image box02">
                image-3
            </div>
            <div className="image box02">
                image-4
            </div>
            <div className="image box02">
                image-5
            </div>
        </div>
    </div>
  )
}

export default ImageGrallery