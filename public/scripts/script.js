const section = document.querySelector('section'),
      sectionInfo = section.getBoundingClientRect(),
      sectionHeight = sectionInfo.height,
      
      longSection = document.getElementById('activity'),
      longSectionInfo = longSection.getBoundingClientRect(),
      longSectionHeight = longSectionInfo.height,

      linkOne = document.getElementById('linkOne'),
      linkTwo = document.getElementById('linkTwo'),
      linkThree = document.getElementById('linkThree');

window.addEventListener('scroll', function() {
    if (window.scrollY > sectionHeight) {
        linkOne.classList.add('active')
    } else {
        linkOne.classList.remove('active')
    } if (window.scrollY > sectionHeight + longSectionHeight) {
        linkTwo.classList.add('active')
    } else {
        linkTwo.classList.remove('active')
    } if (window.scrollY > longSectionHeight + sectionHeight * 2) {
        linkThree.classList.add('active')
    } else {
        linkThree.classList.remove('active')
    }
})
