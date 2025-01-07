let colors=[
    "LightBlue",  "LightCoral",  "LightCyan",  "LightGoldenRodYellow",  "LightGray",  "LightGreen",  "LightPink",  "LightSalmon",
    "LightSeaGreen",  "LightSkyBlue",  "LightSlateGray",  "LightSteelBlue",
    "LightYellow",  "Lavender",  "LavenderBlush",  "LemonChiffon",
    "MistyRose",  "MintCream",  "PaleGoldenRod",  "PaleTurquoise"
  ]
  let randomClr=()=>{
    let index=Math.floor(Math.random()*colors.length)
    return colors[index]
  }
  // console.log(randomClr())
  
  
  
  let notes=document.querySelector(".notes")
  let inputNotes=document.querySelector("#inputNotes")
  let addButton=document.querySelector("#add");
  addButton.addEventListener("click",()=>{
    let div=document.createElement("div")
    div.classList.add("box");
    let seletedClr=randomClr()
    div.style.backgroundColor=seletedClr;
    div.textContent=inputNotes.value;
    inputNotes.value=""
    let cross=document.createElement("button")
    cross.textContent="X";
    cross.classList.add("cross")
    // cross.style.backgroundColor=seletedClr;
    cross.addEventListener("click",()=>{
      notes.removeChild(div);
    })
    div.appendChild(cross)
    notes.appendChild(div)
  
  })
  
  