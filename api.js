// const apiKey2 = 'bd1849c6a5804a0a9dc231607253003';

// export async function fetchSidebarData() {
//     try {
//         // Replace 'New York' with a dynamic location if needed
//         const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey2}&q=New York`);
//         const data = await response.json();

//         const sidebarContent = document.getElementById('sidebar-content'); // Make sure this exists
//         sidebarContent.innerHTML = ""; // Clear previous content

//         if (data && data.location && data.current) {
//             const factDiv = document.createElement('div');
//             factDiv.classList.add('sidebar-article');

//             factDiv.innerHTML = `
//                 <h4>Weather in ${data.location.name}, ${data.location.country}</h4>
//                 <p>Temperature: ${data.current.temp_c}°C (${data.current.temp_f}°F)</p>
//                 <p>Condition: ${data.current.condition.text}</p>
//                 <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">
//             `;
//             sidebarContent.appendChild(factDiv);
//         } else {
//             sidebarContent.innerHTML = "<p>Weather data unavailable.</p>";
//         }
//     } catch (error) {
//         console.error('Error fetching sidebar data:', error);
//         document.getElementById('sidebar-content').innerHTML = "<p>Error fetching weather data.</p>";
//     }
// }
