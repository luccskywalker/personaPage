// Timeline data
const timelineData = [
  {
    title: "Game Collection",
    date: "2022-01-01",
    description: "Event 1 description",
  },
  {
    title: "Game Collection",
    date: "2022-03-15",
    description: "Event 2 description",
  },
  {
    title: "Game Collection",
    date: "2022-07-10",
    description: "Event 3 description",
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
