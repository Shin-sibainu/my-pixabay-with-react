import React from 'react'
import "./ImageGrallery.css"

const ImageGrallery = ({fetchData, isLoading}) => {

  return (
    <div>
        <div className="images-wrapper">
        {/* {isLoading && <h2>Loading...</h2>} */}
            {/* {fetchData.map(data => (<>
                <div className="image" key={data.id}>
                    <img src="https://pixabay.com/get/g4ab2fae6965d2ed0bd512bbf91199a482bf0276c729c9b2ea6a4c99b29f7c656c3e4d07e601f63b0c1871fcd627552cac8de883565500b9ff760d9618c1e886f_1280.png" alt="" />
                </div>
            </>))} */}

            {/* {fetchData.hits[0].id}  */}

            {/* <div className="image box01">
                <img src="https://pixabay.com/get/g4ab2fae6965d2ed0bd512bbf91199a482bf0276c729c9b2ea6a4c99b29f7c656c3e4d07e601f63b0c1871fcd627552cac8de883565500b9ff760d9618c1e886f_1280.png" alt="" />
            </div>
            <div className="image box02">
                <img src="https://pixabay.com/get/g01015af8f72cf76e3d864b339a08520a5ce05f2619765121208d5f884f486bbbef612987c2b02ae6f9a7990afcc77706f29c4bb960f1f38ccf2a4b31a0983bea_1280.jpg" alt="" />
            </div>
            <div className="image box02">
                image-3
            </div>
            <div className="image box02">
                image-4
            </div>
            <div className="image box02">
                image-5
            </div> */}
        </div>
    </div>
  )
}

export default ImageGrallery