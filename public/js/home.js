const generateBtn= document.querySelector("#generate-btn")

generateBtn.addEventListener("click", async (evt)=>{
  const response= await fetch("/generate");
  const dummyData= await response.json();
  for( let i=0; i<10; i++){
    const nameEl= document.querySelector(`#data-${i} .name span`);
    nameEl.innerText=dummyData[i].name;

    const salaryEl= document.querySelector(`#data-${i} .salary span`);
    salaryEl.innerText=dummyData[i].salary;

    const languageEl= document.querySelector(`#data-${i} .language span`);
    languageEl.innerText=dummyData[i].language;

    const cityEl= document.querySelector(`#data-${i} .city span`);
    cityEl.innerText=dummyData[i].city;

    const isManagerEl= document.querySelector(`#data-${i} .is-manager span`);
    isManagerEl.innerText=dummyData[i].isManager;
  }
})