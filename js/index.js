const developerName = document.getElementById("developerName");

developerName.innerText = "</Thyago Dantas>";

developerName.addEventListener("mouseover", () => {
  developerName.innerText = "</Driifas>";
});

developerName.addEventListener("mouseleave", () => {
  developerName.innerText = "</Thyago Dantas>";
});
