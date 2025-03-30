// In the file where the fetchSidebarData function is defined
export async function fetchSidebarData() {
    try {
        const response = await fetch('/api/v2/facts/random'); 
        const data = await response.json();
        
        const sidebarContent = document.getElementById('sidebar-content');
        
        data.forEach(fact => {
            const factDiv = document.createElement('div');
            factDiv.classList.add('sidebar-article');

            factDiv.innerHTML = `
                <h4>${fact.title || 'Random Fact'}</h4>
                <p>${fact.text || 'No description available.'}</p>
            `;
            sidebarContent.appendChild(factDiv);
        });
    } catch (error) {
        console.error('Error fetching sidebar data:', error);
    }
}
