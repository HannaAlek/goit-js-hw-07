const categories=document.querySelector("#categories");
const categoriesItems=categories.children.length;
console.log(`Number of categories: ${categoriesItems}`);
for (let i = 0; i < categories.children.length; i++) {
    let categoryName=document.querySelector("h2").textContent;
    let categoryElements=document.querySelector(".list").children.length;  
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElements}`);
}
