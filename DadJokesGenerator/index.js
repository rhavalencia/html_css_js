const btnElement = document.getElementById("btn");
const jokeElement = document.getElementById("joke");

async function getJoke() {
    try {
      updateUI("Loading...", true); // Show loading state
  
      const response = await fetch("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
  
      const data = await response.json();
      jokeElement.innerHTML = data.joke; // Display joke in the UI
    } catch (error) {
      jokeElement.innerHTML = "Error fetching joke. Please try again.";
      console.error("Error fetching joke:", error);
    } finally {
      updateUI("Tell me a joke", false); // Restore button state
    }
  }
  
  // Utility function to update UI state
  function updateUI(text, disabled) {
    btnElement.innerHTML = text;
    btnElement.disabled = disabled;
  }

btnElement.addEventListener("click", getJoke);
