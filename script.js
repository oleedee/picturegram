const handleStoryScroll = (carousel) => {
const storyContainer = document.querySelector('[data-stories]')
const leftBtn = document.querySelector("[data-stories-button='left']")
const rightBtn = document.querySelector("[data-stories-button='right']")
const stories = Array.from(storyContainer.children)

let currentIndex = 0;
const storiesToScroll = 5;
const gap = parseInt(getComputedStyle(storyContainer).gap);
const storySize = stories[0].offsetWidth + gap;
const maxVisibleStories = Math.ceil(storyContainer.offsetWidth / storySize);


const updateButtons = () => {
  const maxIndex = Math.max(0, stories.length - maxVisibleStories);

  console.log(currentIndex)

  if(currentIndex <= 0) {
    leftBtn.style.display = "none"
  } else {
    leftBtn.style.display = "block"
  }

  if (currentIndex >= maxIndex) {
    rightBtn.style.display = "none"
  } else {
    rightBtn.style.display = "block"
  }

}

const handleScroll = () => {
  const scrollAmount = currentIndex * storySize
  console.log(scrollAmount)
  storyContainer.scrollTo({
    left: scrollAmount,
    behavior: "smooth"
})
  updateButtons();
}

leftBtn.addEventListener("click", () => {
  currentIndex = Math.max(0, currentIndex - storiesToScroll);
  handleScroll();
})

rightBtn.addEventListener("click", () => {
  const maxIndex = Math.max(0, stories.length - maxVisibleStories);
  currentIndex = Math.min(maxIndex, currentIndex + storiesToScroll);
  handleScroll();
})

updateButtons();

}

const handlePostScroll = (container) => {
  const carousel = container.querySelector(".post-images");
  const leftBtn = container.querySelector(".post-traverse-button--left");
  const rightBtn = container.querySelector(".post-traverse-button--right");

  const imgWidth = carousel.offsetWidth;
  const imgCount = carousel.querySelectorAll(".post-image").length - 1;
  
  let currentIndex = 0;


  const updateButtons = () => {
    console.log(currentIndex)

    if(currentIndex <= 0) {
      leftBtn.style.display = "none"
    } else {
      leftBtn.style.display = "block"
    } 

    if(currentIndex >= imgCount) {
      rightBtn.style.display = "none"
    } else {
      rightBtn.style.display = "block"
    }
  }

  const handleScroll = () => {
    carousel.scrollTo({
      left: currentIndex * imgWidth,
      behavior: "smooth"
    })
    updateButtons();
                          
  }

  leftBtn.addEventListener("click", () => {
    currentIndex = Math.max(0, currentIndex - 1);
    handleScroll();
  })

  rightBtn.addEventListener("click", () => {
    currentIndex = Math.min(imgCount, currentIndex + 1);
    handleScroll();
  })

  updateButtons();
}


document.querySelectorAll('[data-carousel]').forEach(handleStoryScroll)
document.querySelectorAll(".post-images-container").forEach(handlePostScroll);

