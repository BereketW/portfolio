const services = document.querySelector("#services");
const worksModal = document.querySelector(".works-modal");
const modalCard = document.querySelector(".modal-card");
const btnClose = document.querySelector(".btn-close");
const workBtn = document.querySelector(".work-btn");
const aboutBtn = document.querySelector(".about-btn");
const abouts = document.querySelectorAll(".about");
const serviceBtn = document.querySelector(".service-btn");
const accordionCard = document.querySelector(".accordion-card");
const accordionCardTitle = document.querySelector(".accordion-title");
const aboutCardContainer = document.querySelector(".about-hover-card");
const serviceModalClose = document.querySelector(".service-modal-close");
const serviceModal = document.querySelector(".service-modal");
console.log(modalCard);
btnClose.addEventListener("click", () => {
  worksModal.classList.add("display-none");
  console.log("Hello");
});

workBtn.addEventListener("click", () => {
  worksModal.classList.remove("display-none");
});

aboutBtn.addEventListener("mouseenter", () => {
  aboutCardContainer.classList.add("show-about");
});

aboutBtn.addEventListener("mouseleave", () => {
  aboutCardContainer.classList.remove("show-about");
});

serviceModalClose.addEventListener("click", () => {
  serviceModal.classList.add("display-none");
});

serviceBtn.addEventListener("click", () => {
  console.log(serviceModal);
  serviceModal.classList.remove("display-none");
});

accordionCardTitle.addEventListener("click", () => {
  console.log(accordionCard.querySelector("p"));
  accordionCard.querySelector("p").style.height = "100%";
});

document.addEventListener('DOMContentLoaded', function() {
  const worksModal = document.querySelector('.works-modal');
  const serviceModal = document.querySelector('.service-modal');
  const aboutModal = document.querySelector('.about-modal');
  const plansModal = document.querySelector('.plans-modal');
  
  const workBtn = document.querySelector('.work-btn');
  const serviceBtn = document.querySelector('.service-btn');
  const aboutBtn = document.querySelector('.about-btn');
  const plansBtn = document.querySelector('.card:nth-child(4)');
  
  const worksModalClose = document.querySelector('.btn-close');
  const serviceModalClose = document.querySelector('.service-modal-close');
  const aboutModalClose = aboutModal.querySelector('.service-modal-close');
  const plansModalClose = plansModal.querySelector('.service-modal-close');
  
  const aboutCardContainer = document.querySelector('.about-hover-card');

  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (!isTouchDevice) {
    aboutBtn.addEventListener('mouseenter', () => {
      aboutCardContainer.classList.add('show-about');
    });

    aboutBtn.addEventListener('mouseleave', () => {
      aboutCardContainer.classList.remove('show-about');
    });
  } else {
    aboutCardContainer.style.display = 'none';
    document.querySelectorAll('.works').forEach(work => {
      work.style.display = 'none';
    });
    document.querySelectorAll('.services').forEach(service => {
      service.style.display = 'none';
    });
  }

  workBtn.addEventListener('click', () => {
    worksModal.classList.remove('display-none');
    document.body.style.overflow = 'hidden';
  });

  worksModalClose.addEventListener('click', () => {
    worksModal.classList.add('display-none'); 
    document.body.style.overflow = '';
  });

  serviceBtn.addEventListener('click', () => {
    serviceModal.classList.remove('display-none');
    document.body.style.overflow = 'hidden';
  });

  serviceModalClose.addEventListener('click', () => {
    serviceModal.classList.add('display-none');
    document.body.style.overflow = '';
  });

  aboutBtn.addEventListener('click', () => {
    aboutModal.classList.remove('display-none');
    document.body.style.overflow = 'hidden';
  });

  aboutModalClose.addEventListener('click', () => {
    aboutModal.classList.add('display-none');
    document.body.style.overflow = '';
  });

  plansBtn.addEventListener('click', () => {
    plansModal.classList.remove('display-none');
    document.body.style.overflow = 'hidden';
  });

  plansModalClose.addEventListener('click', () => {
    plansModal.classList.add('display-none');
    document.body.style.overflow = '';
  });

  window.addEventListener('click', (e) => {
    if (e.target === worksModal) {
      worksModal.classList.add('display-none');
      document.body.style.overflow = '';
    }
    if (e.target === serviceModal) {
      serviceModal.classList.add('display-none');
      document.body.style.overflow = '';
    }
    if (e.target === aboutModal) {
      aboutModal.classList.add('display-none');
      document.body.style.overflow = '';
    }
    if (e.target === plansModal) {
      plansModal.classList.add('display-none');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      worksModal.classList.add('display-none');
      serviceModal.classList.add('display-none');
      aboutModal.classList.add('display-none');
      plansModal.classList.add('display-none');
      document.body.style.overflow = '';
    }
  });

  const accordionTitles = document.querySelectorAll('.accordion-title');
  
  accordionTitles.forEach(title => {
    title.addEventListener('click', () => {
      const content = title.nextElementSibling;
      const span = title.querySelector('span');
      
      document.querySelectorAll('.accordion-content.active').forEach(activeContent => {
        if (activeContent !== content) {
          activeContent.classList.remove('active');
          activeContent.previousElementSibling.querySelector('span').textContent = '+';
        }
      });
      
      content.classList.toggle('active');
      span.textContent = content.classList.contains('active') ? '−' : '+';
    });
  });

  document.querySelectorAll('.checklist input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const label = this.nextElementSibling;
      if (this.checked) {
        label.style.textDecoration = 'line-through';
        label.style.color = '#999';
        label.style.transition = 'all 0.3s ease';
        label.style.opacity = '0.7';
      } else {
        label.style.textDecoration = 'none';
        label.style.color = '#444';
        label.style.opacity = '1';
      }
    });
  });

  const emailModal = document.querySelector('.email-modal');
  const emailBtn = document.querySelector('.email-btn');
  const emailCloseBtn = emailModal.querySelector('.service-modal-close');
  const contactForm = document.getElementById('contactForm');

  emailBtn.addEventListener('click', () => {
    emailModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });

  emailCloseBtn.addEventListener('click', () => {
    emailModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  emailModal.addEventListener('click', (e) => {
    if (e.target === emailModal) {
      emailModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    
    toastMessage.textContent = message;
    toast.style.backgroundColor = type === 'success' ? '#4CAF50' : '#f44336';
    
    toast.style.display = 'block';
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
    
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
      setTimeout(() => {
        toast.style.display = 'none';
      }, 300);
    }, 3000);
  }

  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };

    try {
      const response = await fetch('send_email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (data.success) {
        showToast(data.message, 'success');
        this.reset();
        document.querySelector('.email-modal').classList.add('display-none');
      } else {
        showToast(data.message, 'error');
      }
    } catch (error) {
      showToast('An error occurred. Please try again later.', 'error');
    }
  });

  const formInputs = contactForm.querySelectorAll('input, textarea');
  formInputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.style.borderColor = '#2c3e50';
      input.style.boxShadow = '0 0 0 2px rgba(44, 62, 80, 0.1)';
    });
    
    input.addEventListener('blur', () => {
      input.style.borderColor = '#e1e1e1';
      input.style.boxShadow = 'none';
    });
  });
});
