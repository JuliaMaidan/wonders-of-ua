document.addEventListener('DOMContentLoaded', function () {
  let scrollToTourButton = document.getElementById('scrollToTour');

  scrollToTourButton.addEventListener('click', function () {
    let tourSection = document.getElementById('tours');
    tourSection.scrollIntoView({ behavior: 'smooth' });
  });
});
