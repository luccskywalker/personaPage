// Timeline data
const timelineData = [
  {
    title: "Game Collection",
    date: "07-02-2021",
    cardImage: "assets/game-collection.png",
    link: "https://github.com/luccskywalker/discCollection",
    description:
      "A Simple game collection to search and store your favourite games",
    tech: "Angular, html, css, js",
  },
  {
    title: "Magic Deck",
    date: "2022-03-15",
    cardImage: "assets/magic-deck.png",
    description:
      "A Magic The Gathering application to get five random daily cards to share your luck on social networks",
    link: "https://github.com/luccskywalker/discCollection",

    tech: "Angular, html, css, js",
  },
  {
    title: "This Website",
    date: "2022-07-10",
    cardImage: "assets/persona-page.png",
    description: "Yep, this site :)",
    link: "https://github.com/luccskywalker/discCollection",

    tech: "html, css, js",
  },
];

// Function to create timeline items
function createTimelineItem(title, date, cardImage, description, link, tech) {
  const timelineItem = document.createElement("li");
  timelineItem.classList.add("timeline-item");

  const titleElement = document.createElement("div");
  titleElement.classList.add("title", "title-style");
  titleElement.textContent = title;

  const dateElement = document.createElement("div");
  dateElement.classList.add("date", "paragraph-style");
  dateElement.textContent = date;

  const imageElement = document.createElement("img");
  imageElement.classList.add("card-image");
  imageElement.src = cardImage;

  const descriptionElement = document.createElement("div");
  descriptionElement.classList.add("description", "paragraph-style");
  descriptionElement.textContent = description;

  const linkElement = document.createElement("div");
  linkElement.classList.add("link", "paragraph-style");
  linkElement.textContent = link;

  const techElement = document.createElement("div");
  techElement.classList.add("tech-used", "paragraph-style");
  techElement.textContent = tech;

  timelineItem.appendChild(titleElement);
  timelineItem.appendChild(dateElement);
  timelineItem.appendChild(imageElement);
  timelineItem.appendChild(descriptionElement);
  timelineItem.appendChild(linkElement);
  timelineItem.appendChild(techElement);

  return timelineItem;
}

// Populate the timeline
const timeline = document.getElementById("timeline");

timelineData.forEach((event) => {
  const { title, date, cardImage, description, link, tech } = event;
  const timelineItem = createTimelineItem(
    title,
    date,
    cardImage,
    description,
    link,
    tech
  );
  timeline.appendChild(timelineItem);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
