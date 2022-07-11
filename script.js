const buttonJett = document.getElementById("jett")
const buttonOmen = document.getElementById("omen")
const buttonBrim = document.getElementById("brim")
const buttonViper = document.getElementById("viper")
const buttonSova = document.getElementById("sova")

const addJett = () =>{
    const nameAgent = document.getElementById("name-agent")
    const funcAgent = document.getElementById("func-agent")
    const imgAgent = document.getElementById("img-agent")
    const hab1 = document.getElementById("hab-1")
    const hab2 = document.getElementById("hab-2")
    const hab3 = document.getElementById("hab-3")
    const hab4 = document.getElementById("hab-4")
    nameAgent.innerHTML = "Jett"
    funcAgent.innerHTML = "Duelista"
    imgAgent.src = "./img/jett.png"
    hab1.innerHTML = "<b>Q</b> – Corrente Ascendente"
    hab2.innerHTML = "<b>E</b> – Brisa de Impulso"
    hab3.innerHTML = "<b>C</b> – Erupção das Brumas"
    hab4.innerHTML = "<b>X</b> – Tormenta de aço"
    
}
const addOmen = () =>{
    const nameAgent = document.getElementById("name-agent")
    const funcAgent = document.getElementById("func-agent")
    const imgAgent = document.getElementById("img-agent")
    nameAgent.innerHTML = "Omen"
    funcAgent.innerHTML = "Controlador"
    imgAgent.src = "./img/omen.png"
    
}
const addBrim = () =>{
    const nameAgent = document.getElementById("name-agent")
    const funcAgent = document.getElementById("func-agent")
    const imgAgent = document.getElementById("img-agent")
    nameAgent.innerHTML = "Brimstone"
    funcAgent.innerHTML = "Controlador"
    imgAgent.src = "./img/omen.png"
    
}
const addViper = () =>{
    const nameAgent = document.getElementById("name-agent")
    const funcAgent = document.getElementById("func-agent")
    const imgAgent = document.getElementById("img-agent")
    nameAgent.innerHTML = "Viper"
    funcAgent.innerHTML = "Controlador"
    imgAgent.src = "./img/omen.png"
    
}




buttonJett.addEventListener("click",addJett)
buttonOmen.addEventListener("click",addOmen)
buttonBrim.addEventListener("click",addBrim)
buttonViper.addEventListener("click",addViper)
