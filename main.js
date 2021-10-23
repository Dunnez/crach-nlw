const links = {
  github: 'Dunnez',
  youtube: 'channel/UCPF5Il8QjdCS-OyQ50r5mGQ',
  instagram: 'nunesduu',
  facebook: 'eduarda.nunes.9480',
  twitter: 'nunes_duu'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${links[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userLogin.textContent = data.login
      userImage.src = data.avatar_url
    })
}

getGitHubProfileInfos()
