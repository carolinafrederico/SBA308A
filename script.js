// import { fetchSidebarData } from "./api.js";
const apiKey = '7ba4a580810a4bde8575f8bdd4205c7d'

const blogContainer = document.getElementById("blog-container");
const searchField = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

async function fetchRandomNews() {
    try {
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=8&apiKey=${apiKey}`
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles;

    } catch (error) {
        console.error("Error fetching random news", error);
        return

    }
}

searchButton.addEventListener("click", async () => {
    const query = searchField.value.trim()
    if (query !== "") {
        try {
            const articles = await fetchNewsQuery(query)
            displayBlogs(articles)
        } catch (error) {
            console.log("Error fetching news by query", error)
        }
    }

})
searchField.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        searchButton.click();
    }
});
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".read-more").forEach(button => {
        button.addEventListener("click", (event) => {
            let articleCard = event.target.closest(".blog-card");
            let articleURL = articleCard.getAttribute("data-url"); // Assuming you add a data attribute for URL

            if (articleURL) {
                window.open(articleURL, "_blank"); // Opens article in a new tab
            } else {
                alert("Full article link not available.");
            }
        });
    });
});

async function fetchNewsQuery(query) {
    try {
        const apiUrl = `https://newsapi.org/v2/everything?q=${query}&pageSize=7&apiKey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.error("Error fetching random news", error);
        return [];

    }
}

function displayBlogs(articles) {
    blogContainer.innerHTML = "";
    articles.forEach((article) => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");
        const img = document.createElement("img");
        img.src = article.urlToImage;
        img.alt = article.title;
        const title = document.createElement("h2");
        const truncatedTitle = article.title.length > 48 ? article.title.slice(0, 48) + "..." : article.title;
        // title.textContent = article.title;
        title.textContent = truncatedTitle;
        const description = document.createElement("p");
        const truncatedDes = article.description.length > 110 ? article.description.slice(0, 110) + "..." : article.description;
        description.textContent = truncatedDes;
        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);
        blogCard.addEventListener("click", () => {
            window.open(article.url, "_blank");
        });
        blogContainer.appendChild(blogCard);
        const readMoreBtn = document.createElement("button");
        readMoreBtn.textContent = "Read More";
        readMoreBtn.classList.add("read-more");
        readMoreBtn.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevents the entire card from opening the link
            window.open(article.url, "_blank");
        });

        blogCard.appendChild(readMoreBtn);


    });
}
// Call fetchSidebarData when DOM content is loaded
// document.addEventListener("DOMContentLoaded", () => {
//     fetchSidebarData(); // Fetch and render sidebar data
//     existing DOMContentLoaded logic for Read More button
// });

(async () => {
    try {
        const articles = await fetchRandomNews()
        displayBlogs(articles);
    } catch (error) {
        console.error("Error fetching random news", error);
        return [];

    }
})();