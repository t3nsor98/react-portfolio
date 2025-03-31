function getMessage() {
  fetch("/api/message")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("response").textContent = data.message;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function sendData() {
  const dataToSend = { name: "Digbijaya", age: 25, city: "Bhuneshwar" };

  fetch("/api/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("response").textContent = data.message;
    })
    .catch((error) => {
      console.error("Error:", error);
    })
    .finally(() => {
      fetch("/api/data")
        .then((response) => response.json())
        .then((data) => {
          document.getElementById("response").textContent = data.message;
        });
    });
}
