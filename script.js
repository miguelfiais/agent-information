const buttonJett = document.getElementById("jett")
const buttonOmen = document.getElementById("omen")
const buttonBrim = document.getElementById("brim")
const buttonViper = document.getElementById("viper")
const buttonSova = document.getElementById("sova")
const hab1 = document.getElementById("hab-1")
const hab2 = document.getElementById("hab-2")
const hab3 = document.getElementById("hab-3")
const hab4 = document.getElementById("hab-4")
const back = document.getElementById("back")

const addJett = () =>{
    const nameAgent = document.getElementById("name-agent")
    const funcAgent = document.getElementById("func-agent")
    const imgAgent = document.getElementById("img-agent")
    back.style.backgroundColor = "rgba(3,105,255,0.5) ";
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
    back.style.backgroundColor = "rgba(3,105,255,0.5) ";
    nameAgent.innerHTML = "Omen"
    funcAgent.innerHTML = "Controlador"
    imgAgent.src = "./img/omen.png"
    hab1.innerHTML = "<b>Q</b> – Paranoia"
    hab2.innerHTML = "<b>E</b> – Manto Sombrio"
    hab3.innerHTML = "<b>C</b> – Passos Tenebrosos"
    hab4.innerHTML = "<b>X</b> – Salto das Sombras"
    
    
}
const addBrim = () =>{
    const nameAgent = document.getElementById("name-agent")
    const funcAgent = document.getElementById("func-agent")
    const imgAgent = document.getElementById("img-agent")
    back.style.backgroundColor = "rgba(251,153,82,0.5) ";
    nameAgent.innerHTML = "Brimstone"
    funcAgent.innerHTML = "Controlador"
    imgAgent.src = "./img/brim.png"
    hab1.innerHTML = "<b>Q</b> – Incendiário"
    hab2.innerHTML = "<b>E</b> – Fumaça Celeste"
    hab3.innerHTML = "<b>C</b> – Sinalizador Estimulante"
    hab4.innerHTML = "<b>X</b> – Ataque Orbital"

    
}
const addViper = () =>{
    const nameAgent = document.getElementById("name-agent")
    const funcAgent = document.getElementById("func-agent")
    const imgAgent = document.getElementById("img-agent")
    back.style.backgroundColor = "rgba(0,97,3,0.5)";
    nameAgent.innerHTML = "Viper"
    funcAgent.innerHTML = "Controlador"
    imgAgent.src = "./img/viper2.png"
    hab1.innerHTML = "<b>Q</b> – Nuvem Venenosa"
    hab2.innerHTML = "<b>E</b> – Cortina Tóxica"
    hab3.innerHTML = "<b>C</b> – Veneno de Cobra"
    hab4.innerHTML = "<b>X</b> – Poço Peçonhento"
    
    
}




buttonJett.addEventListener("click",addJett)
buttonOmen.addEventListener("click",addOmen)
buttonBrim.addEventListener("click",addBrim)
buttonViper.addEventListener("click",addViper)
