let tabId;

chrome.storage.local.get("pos", (d) => {
    if (d.pos)
        document.querySelector(`[value='${d.pos}']`).checked = true;
});

document.querySelector("#image-file").addEventListener("change", (e) => {
    const f = e.target.files[0];
    const r = new FileReader();
    r.onload = () => {
        chrome.storage.local.set({
            "bgi": r.result
        });
    };
    r.readAsDataURL(f);
});

document.querySelectorAll("[type='radio']").forEach((e) => 
    e.addEventListener("change", function() {
        const v = this.value;
        switch (this.name) {
            case "pos": 
                chrome.storage.local.set({"pos": v});
                break;
        }
    })
);

chrome.action.onClicked.addListener((tab) => tabId = tab.id);
