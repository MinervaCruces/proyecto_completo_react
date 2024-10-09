import './ImageGallery.css'; 

const ImageGallery = () => {
  const images = [
    { src: '../../../Public/ropa1.jpg', alt: '' },
    { src: '../../../Public/ropa2.jpg', alt: '' },
    { src: '../../../Public/ropa3.jpg', alt: '' },

  ];

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img 
          key={index} 
          src={image.src} 
          alt={image.alt} 
          className="gallery-image" 
        />
      ))}
    </div>
  );
};

export default ImageGallery;