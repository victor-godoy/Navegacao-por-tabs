// data-id é um jeito de referencia um elemento id
function primeiroMetodo() {
  const tabLinks = document.querySelectorAll(".tab-links button");

  const tabContent = document.querySelectorAll(".tab-content section");
  tabContent[0].classList.add("ativar");

  function tabAtivo(ativar) {
    tabContent.forEach((section) => {
      section.classList.remove("ativar");
    });

    tabContent[ativar].classList.add("ativar");
  }

  tabLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
      tabAtivo(index); // ambos tem a mesma quantidade entao uso o index
    });
  });
}
primeiroMetodo();

// metodo maikao
// const $ = document.querySelector.bind(document);

// function tabNavegation() {
//   const html = {
//     links: [...$(".tab-links").children],
//     contents: [...$(".tab-content").children],
//     openTab: $("[data-open]"),
//   };

//   function hideAllTabContent() {
//     contents.forEach((section) => {
//       section.style.display = "none";
//     });
//   }
//   function removeActiveClass() {
//     html.links.forEach((tab) => {
//       tab.className = tab.className.replace("active", "");
//     });

//     const tabContent = $("#" + id);
//     tabContent.style.display = "block";
//   }

//   function showCurrentTab(id) {}

//   function selectTab(event) {
//     hideAllTabContent();
//     const target = event.currentTarget;
//     showCurrentTab(target.dataset.id);

//     target.className += "active";
//   }

//   function listenForChange() {
//     html.links.forEach((tab) => {
//       tab.addEventListener("click", selectTab);
//     });
//   }
//   function init() {
//     hideAllTabContent();
//     listenForChange();
//     html.openTab.click();
//   }

//   return { init };
// }
// tabNavegation();
// window.addEventListener("load", () => {
//   const tabNavegation = tabNavegation();
//   tabNavegation.init();
// });
