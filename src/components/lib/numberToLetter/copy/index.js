if (navigator.clipboard) {
  console.log("Clipboard API available")
}

document.getElementById("copybutton").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("added to clipboard")
  } catch (err) {
    console.error("Could not write to clipboard", err)
  }
})
