function openModal(imgElement) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const caption = document.getElementById("caption");
  
    modal.style.display = "block";
    modalImg.src = imgElement.src;
    caption.innerText = imgElement.alt;
  }
  
  function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
  }
  