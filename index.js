document.addEventListener('DOMContentLoaded', () => {
  const top = document.querySelector('#top');
  const about = document.querySelector('#about');
  const skills = document.querySelector('#skills');
  const projects = document.querySelector('#projects');
  const contact = document.querySelector('#contact');

  document.querySelector('#btn-top').addEventListener('click', () => {
    top.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    });
  });

  document.querySelector('#btn-about').addEventListener('click', () => {
    about.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    });
  });
  document.querySelector('#btn-skills').addEventListener('click', () => {
    skills.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    });
  });

  document.querySelector('#btn-projects').addEventListener('click', () => {
    projects.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    });
  });

  document.querySelector('#btn-contact').addEventListener('click', () => {
    contact.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    });
  });
});
