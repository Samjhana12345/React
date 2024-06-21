import React from 'react';

function Down_nav() {
  return (
    <>
    <div id='section-1'>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img height='400px'width='200px' src="https://booksmandala.com/_next/image?url=https%3A%2F%2Fpheonix.booksmandala.com%2F%2Fstorage%2Fslider-images%2FJTD7G6qGQ5VUeTsvVfJCa0RzcB1Yg22ry9g4XB4W.webp&w=1920&q=75" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img height='400px'width='200px' src="https://booksmandala.com/_next/image?url=https%3A%2F%2Fpheonix.booksmandala.com%2F%2Fstorage%2Fslider-images%2FdjtVvjGWbHdF4oz1zfY9htD7dtlDZz94WIWhVbSG.webp&w=1920&q=75" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img height='400px'width='200px' src="https://booksmandala.com/_next/image?url=https%3A%2F%2Fpheonix.booksmandala.com%2F%2Fstorage%2Fslider-images%2Fo4a18iVjFamKxUvEhBXIW0VTXzPoPuplqDggcKRD.webp&w=1920&q=75" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
</>
      )
}

      export default Down_nav;
