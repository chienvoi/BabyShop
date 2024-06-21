const toggleDisplayMenu = () => {
    const collection = document.getElementsByClassName("mfn-popup")
    for (let i=0; i<collection.length; i++) {
      if (collection[i].style.display === "block") {
        collection[i].style.display = "none";
      } else {
        collection[i].style.display = "block";
      } 
    }
    console.log(123)
  }