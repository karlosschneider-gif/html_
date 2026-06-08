// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. ROLAGEM SUAVE PARA OS LINKS DO MENU
    const linksMenu = document.querySelectorAll('nav a[href^="#"]');
    
    linksMenu.forEach(link => {
        link.addEventListener("click", function(emite) {
            emite.preventDefault(); // Impede o salto brusco padrão
            
            const idAlvo = this.getAttribute("href");
            const elementoAlvo = document.querySelector(idAlvo);
            
            if (elementoAlvo) {
                elementoAlvo.scrollIntoView({
                    behavior: "smooth", // Define a animação suave
                    block: "start"
                });
            }
        });
    });

    // 2. BOTÃO VOLTAR AO TOPO
    const botaoTopo = document.getElementById("btn-topo");

    // Mostra ou esconde o botão dependendo da rolagem da página
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            botaoTopo.style.display = "block";
        } else {
            botaoTopo.style.display = "none";
        }
    });

    // Quando clicar no botão, rola suavemente para o topo
    botaoTopo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});