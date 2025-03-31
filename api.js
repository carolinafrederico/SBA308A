// In the file where the fetchSidebarData function is defined
const apiKey2 = 'bd1849c6a5804a0a9dc231607253003'

export async function fetchSidebarData() {
    try {
        const response = await fetch('http://api.weatherapi.com/v1'); 
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
