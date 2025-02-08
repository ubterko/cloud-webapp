counter = document.querySelector('.views-counter')
async function getViewsCount() {
    response = await fetch("https://oq3f3bchluczzsbece3dewq76m0jvhwi.lambda-url.us-east-1.on.aws/")
    views = await response.json()
    counter.innerHTML = `Views: ${views}`
}

getViewsCount();