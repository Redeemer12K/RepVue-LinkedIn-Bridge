const injectButton = () => {
    const titleHeader = document.querySelector('.org-top-card-summary__title');
    if (titleHeader && !document.getElementById('rv-bridge-btn')) {
        const company = titleHeader.innerText.trim();
        const urlName = company.toLowerCase().replace(/[^a-z0-9]/g, '');
        
        const btn = document.createElement('a');
        btn.id = 'rv-bridge-btn';
        btn.innerHTML = '📊 View RepVue Score';
        btn.href = `https://www.repvue.com/companies/${urlName}`;
        btn.target = '_blank';
        btn.style = "margin-left:12px; font-size:12px; background:#0073b1; color:white; padding:5px 10px; border-radius:15px; text-decoration:none; font-weight:bold;";
        
        titleHeader.appendChild(btn);
    }
};

const observer = new MutationObserver(injectButton);
observer.observe(document.body, { childList: true, subtree: true });

