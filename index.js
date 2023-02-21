let seatingContainer = document.getElementsByClassName("seating-container")[0];

let h3Available = document.createElement("h3");
h3Available.className = "seating-title";
h3Available.textContent = document.querySelectorAll('[data-seats-status="0"]').length + " Butacas disponibles";
h3Available.style.color = "green";

let h3Occupied = document.createElement("h3");
h3Occupied.className = "seating-title";
h3Occupied.textContent = document.querySelectorAll('[data-seats-status="1"]').length + " Butacas ocupadas";
h3Occupied.style.color = "red";

let br = document.createElement("br");

let infoContainer = document.createElement("div");
infoContainer.appendChild(h3Available);
//infoContainer.appendChild(br);
infoContainer.appendChild(h3Occupied);

seatingContainer.insertBefore(infoContainer, seatingContainer.firstChild);
//header.after(h3Available);
//h3Available.after(h3Occupied);
//h3Occupied.after(br);
