
function scrollFunction() {
  const tesseract = document.getElementById("tesseract_img");
  const webProj = document.getElementById("webProj");
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    tesseract.className = tesseract.className.replace(/\btesseract_img_normal\b/g, "tesseract_img_shrunk");
    author.style.display = 'none';
    webProj.className = webProj.className.replace(/\btitle_normal\b/g, "title_shrunk");
  } else { 
    tesseract.className = tesseract.className.replace(/\btesseract_img_shrunk\b/g, "tesseract_img_normal");
    author.style.display = 'block'; 
    webProj.className = webProj.className.replace(/\btitle_shrunk\b/g, "title_normal");
  }
}

window.onscroll = function() { scrollFunction() };
