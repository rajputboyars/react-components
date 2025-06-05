import React, { useState } from "react";
import "./uploadComponent.css";

const UploadComponent = () => {
  const [dragging, setDragging] = useState(false);
  const [images, setImages] = useState([]);
  const [modalImage, setModalImage] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));
    const imageUrls = imageFiles.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...imageUrls]);
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="upload-container">
      <label
        className={`drop-area ${dragging ? "drag-over" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="icon">⬆️</div>
        <p>Drag & drop your images here (up to 5GB)</p>
        <p>OR</p>
        <input type="file" id="fileInput" multiple onChange={handleFileSelect} />
        <label htmlFor="fileInput" className="browse-btn">
          Browse files
        </label>
      </label>

      <div className="image-grid">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Uploaded ${index}`} onClick={() => openModal(image)} className="grid-image" />
        ))}
      </div>

      {modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImage} alt="Enlarged view" />
            <button className="close-btn" onClick={closeModal}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadComponent;
