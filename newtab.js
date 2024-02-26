chrome.storage.local.get(["bgi", "pos"], (d) => {
    const body = document.body;
    if (d.bgi) 
        body.style.backgroundImage = `url(${d.bgi})`;
    body.style.backgroundPosition = d.pos ?? "center";
});
