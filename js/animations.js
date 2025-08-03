const inicioText = document.querySelector(".inicio__text");
const planes = document.querySelector(".sector_planes > .planes-container")

/* FUNCIONES */

const closeNav = ()=>
{
    const headerOCbutton = document.querySelectorAll(".header__ocbutton");
    const headerNavWrapper = document.querySelector(".header__nav-wrapper");
    const headerNav = document.querySelector(".header__nav");
    
    headerOCbutton.forEach(button =>
    {
        button.addEventListener("click",()=>
        {
            if (headerNav.classList.contains("oculto"))
                {
                    headerNav.classList.remove("oculto");
                    headerNavWrapper.classList.remove("oculto");
            } else
            {
                headerNav.classList.add("oculto");
                headerNavWrapper.classList.add("oculto");
            }
        })
    })
}
const hideNav = ()=>
{
    const headerNavWrapper = document.querySelector(".header__nav-wrapper");
    const headerNav = document.querySelector(".header__nav");
    headerNav.classList.add("oculto");
    headerNavWrapper.classList.add("oculto");
}

const removeBlur = ()=>
{
    setTimeout(()=>
    {
        inicioText.classList.remove("blur");
        document.querySelector(".inicio__button").classList.remove("blur");
    },500)
}

const loadHref = ()=>
{
    href = "https://messenger.com";
    for (i = 0; i < 3; i++)
    {
        plan = planes.children[i];
        planBoton = plan.childNodes[9];
        planBoton.href = href;
    }
}

const openCloseQuestion = ()=>
{
    flechaArriba = "keyboard_arrow_up";
    flechaAbajo = "keyboard_arrow_down";
    const hideAnswer = (flecha,respuesta)=>
    {
        flecha.textContent = flechaAbajo;
        requestAnimationFrame(()=>
        {
            respuesta.classList.add("cerrada");
            respuesta.removeAttribute("style");
        })
    }
    const displayAnswer = (flecha,respuesta)=>
    {
        flecha.textContent = flechaArriba;
        requestAnimationFrame(()=>
        {
            respuesta.style.height = respuesta.scrollHeight + "px";
            respuesta.classList.remove("cerrada");
        })
    }
    const preguntas = document.querySelectorAll(".faq__pregunta-title");
    const flechas = document.querySelectorAll(".faq__pregunta-title-wrapper > button.material-symbols-outlined");
    const respuesta = document.querySelectorAll(".faq__pregunta-respuesta");
    flechas.forEach((flecha,i) =>
    {
        flecha.addEventListener("click",()=>
        {
            if (flecha.textContent == flechaArriba)
            {
                hideAnswer(flecha,respuesta[i]);
            }
            else
            {
                displayAnswer(flecha,respuesta[i]);
            }
        })
    })
    preguntas.forEach((pregunta,i)=>
    {
        pregunta.addEventListener("click",()=>
        {
            if (flechas[i].textContent == flechaArriba) hideAnswer(flechas[i],respuesta[i]);
            else displayAnswer(flechas[i],respuesta[i])
        })
    })
}
const openCloseForm = ()=>
{
    const contactoWrapper = document.querySelector(".contacto-wrapper");
    const contactoContainer = document.querySelector(".contacto-container");
    const aparecer = (elem)=>
    {
        elem.addEventListener("click",()=> { hideNav(); contactoWrapper.classList.remove("muyoculto"); contactoWrapper.classList.remove("oculto"); contactoContainer.classList.remove("oculto"); })
    }
    const buttonContacto = document.querySelector(".button__openContacto");
    const buttonContacto2 = document.querySelector(".contacto__info-button");
    aparecer(buttonContacto); aparecer(buttonContacto2);
    const buttonClose = document.querySelector(".contacto__close-button");
    buttonClose.addEventListener("click",()=>
    {
        requestAnimationFrame(()=>
        {
            contactoWrapper.classList.add("oculto");
            contactoContainer.classList.add("oculto");
            setTimeout(()=>
            {
                contactoWrapper.classList.add("muyoculto");
            },750) 
        })
    })
}

/* EJECUCIONES */
openCloseQuestion();
closeNav();
removeBlur();
loadHref();
openCloseForm();