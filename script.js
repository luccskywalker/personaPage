// Timeline data
const timelineData = [
  {
    title: "Game Collection",
    date: "07-02-2021",
    description:
      "A Simple game collection to search and store your favourite games",
  },
  {
    title: "Magic Deck",
    date: "2022-03-15",
    description:
      "A Magic The Gathering application to get five random daily cards to share your luck on social networks",
  },
  {
    title: "This Website",
    date: "2022-07-10",
    description: "Yep, this site :)",
  },
];

// Function to create timeline items
function createTimelineItem(title, date, description) {
  const timelineItem = document.createElement("li");
  timelineItem.classList.add("timeline-item");

  const titleElement = document.createElement("div");
  titleElement.classList.add("title", "title-style");
  titleElement.textContent = title;

  const dateElement = document.createElement("div");
  dateElement.classList.add("date", "paragraph-style");
  dateElement.textContent = date;

  const descriptionElement = document.createElement("div");
  descriptionElement.classList.add("description");
  descriptionElement.textContent = description;

  timelineItem.appendChild(titleElement);
  timelineItem.appendChild(dateElement);
  timelineItem.appendChild(descriptionElement);

  return timelineItem;
}

// Populate the timeline
const timeline = document.getElementById("timeline");

timelineData.forEach((event) => {
  const { title, date, description } = event;
  const timelineItem = createTimelineItem(title, date, description);
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
