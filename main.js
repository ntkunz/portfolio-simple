// TODO: Add relevant alt data for images in data.json

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
        const portfolioContainer = document.getElementById('main')

        data.forEach((section) => {
            Object.entries(section).forEach(([key, items]) => {
                const sectionTitle = document.createElement('h2')
                sectionTitle.textContent = capitalizeFirstLetter(key)
                sectionTitle.id = key
                portfolioContainer.appendChild(sectionTitle)

                items.forEach((item) => {
                    const projectContainer = document.createElement('div')
                    projectContainer.classList.add('project')

                    const title = document.createElement('h3')
                    title.textContent = capitalizeFirstLetter(item.title)
                    projectContainer.appendChild(title)

                    if (item.description) {
                        item.description.forEach((desc) => {
                            const description = document.createElement('p')
                            description.textContent = desc
                            projectContainer.appendChild(description)
                        })
                    }

                    if (item.url) {
                        const url = document.createElement('a')
                        url.href = item.url
                        url.textContent = 'View Live Site'
                        url.target = '_blank'
                        url.rel = 'noopener noreferrer'
                        projectContainer.appendChild(url)
                    }

                    const imageContainer = document.createElement('div')
                    imageContainer.classList.add('image-container')
                    projectContainer.appendChild(imageContainer)

                    if (item.images) {
                        item.images.forEach((imageData) => {
                            const image = document.createElement('img')
                            image.src = './images/' + imageData.src
                            image.alt = imageData.alt
                            imageContainer.appendChild(image)
                        })
                    }

                    if (item.frontend) {
                        const frontend = document.createElement('a')
                        frontend.href = item.frontend
                        frontend.textContent = 'Frontend Repo'
                        frontend.target = '_blank'
                        frontend.rel = 'noopener noreferrer'
                        projectContainer.appendChild(frontend)
                    }

                    if (item.backend) {
                        const backend = document.createElement('a')
                        backend.href = item.backend
                        backend.textContent = 'Backend Repo'
                        backend.target = '_blank'
                        backend.rel = 'noopener noreferrer'
                        projectContainer.appendChild(backend)
                    }

                    if (item.icons) {
                        const icons = document.createElement('div')
                        item.icons.forEach((icon) => {
                            const iconImg = document.createElement('img')
                            iconImg.classList.add('icon')
                            iconImg.src = './images/icons/' + icon
                            icons.appendChild(iconImg)
                        })
                        projectContainer.appendChild(icons)
                    }

                    if (item.link) {
                        const link = document.createElement('a')
                        link.href = item.link
                        link.textContent = 'Article from annual event'
                        projectContainer.appendChild(link)
                    }

                    if (item.email) {
                        const emailLink = document.createElement('a')
                        emailLink.href = 'mailto:' + item.email
                        emailLink.textContent = item.email
                        projectContainer.appendChild(emailLink)
                    }

                    if (item.linkedIn) {
                        const linkedInLink = document.createElement('a')
                        linkedInLink.href = item.linkedIn
                        linkedInLink.target = '_blank'
                        linkedInLink.textContent = item.linkedIn
                        projectContainer.appendChild(linkedInLink)
                    }

                    portfolioContainer.classList.add(
                        'animate__animated',
                        'animate__fadeInUp',
                        'animate__delay-2s'
                    )
                    portfolioContainer.appendChild(projectContainer)
                })
            })
        })
    })
    .catch((error) => {
        console.error('Error:', error)
        portfolioContainer.textContent = 'Error: ' + error
    })
