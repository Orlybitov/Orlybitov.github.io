const menu = document.getElementsByTagName("nav")[0];
const menuItems = menu.getElementsByTagName("a");
const menuLink = document.getElementById("menuLink");

function isScrolledIntoView(el) {
  const rect = el.getBoundingClientRect();
  return rect.bottom >= window.innerHeight / 2.5;
}
document.addEventListener("DOMContentLoaded", updateMenu);
document.addEventListener("scroll", updateMenu);
function updateMenu() {
  let selectedItem;
  for (item of menuItems) {
    selectedItem = item;
    if (
      isScrolledIntoView(
        document.getElementsByClassName(item.href.split("#")[1])[0]
      )
    ) {
      break;
    }
  }
  if (selectedItem) {
    for (let item of menuItems) {
      item.classList.remove("selected");
    }
    selectedItem.classList.add("selected");
  }
}
