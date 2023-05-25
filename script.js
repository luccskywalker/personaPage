// Timeline data
const timelineData = [
  {
    date: "2022-01-01",
    description: "Event 1 description",
  },
  {
    date: "2022-03-15",
    description: "Event 2 description",
  },
  {
    date: "2022-07-10",
    description: "Event 3 description",
  },
  {
    date: "2022-07-10",
    description: "Event 3 description",
  },
  {
    date: "2022-07-10",
    description: "Event 3 description",
  },
  // Add more events as needed
];

// Function to create timeline items
function createTimelineItem(date, description) {
  const timelineItem = document.createElement("li");
  timelineItem.classList.add("timeline-item");

  const dateElement = document.createElement("div");
  dateElement.classList.add("date");
  dateElement.textContent = date;

  const descriptionElement = document.createElement("div");
  descriptionElement.classList.add("description");
  descriptionElement.textContent = description;

  timelineItem.appendChild(dateElement);
  timelineItem.appendChild(descriptionElement);

  return timelineItem;
}

// Populate the timeline
const timeline = document.getElementById("timeline");

timelineData.forEach((event) => {
  const { date, description } = event;
  const timelineItem = createTimelineItem(date, description);
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
