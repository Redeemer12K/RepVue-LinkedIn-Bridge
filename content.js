const injectButton = () => {
    const titleHeader = document.querySelector('.org-top-card-summary__title');
    if (titleHeader && !document.getElementById('rv-bridge-btn')) {
        const company = titleHeader.innerText.trim();
        const urlName = company.toLowerCase().replace(/[^a-z0-9]/g, '');
        
        const btn = document.createElement('a');
        btn.id = 'rv-bridge-btn';
        // Adding an SVG icon for a "Professional" look
        btn.innerHTML = `📈 View RepVue Stats`;
        btn.href = `https://www.repvue.com/companies/${urlName}`;
        btn.target = '_blank';
        
        // Premium Styling
        btn.style = `
            margin-left: 15px;
            font-size: 13px;
            background: white;
            color: #0073b1;
            padding: 6px 14px;
            border-radius: 20px;
            text-decoration: none;
            font-weight: 600;
            border: 1px solid #0073b1;
            transition: all 0.3s ease;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        `;
        
        // Hover Interaction
        btn.onmouseover = () => { btn.style.background = '#0073b1'; btn.style.color = 'white'; };
        btn.onmouseout = () => { btn.style.background = 'white'; btn.style.color = '#0073b1'; };
        
        titleHeader.appendChild(btn);
    }
};

const observer = new MutationObserver(injectButton);
observer.observe(document.body, { childList: true, subtree: true });

