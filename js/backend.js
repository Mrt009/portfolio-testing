const scriptURL = 'https://script.google.com/macros/s/AKfycbylIXxyORzTy1Nqqp24S-Dppg8rMU1cC06F5r6auTzddcgvqv7j2BM_VrTNqAieawv-GQ/exec';

// Wait for DOM to be ready before accessing form
document.addEventListener('DOMContentLoaded', function() {
  const form = document.forms['contact-form'];
  
  if (!form) {
    console.log('Contact form not found - backend.js');
    return;
  }

  console.log('Contact form found and backend.js loaded correctly');

// Function to create and display a subtle success message
function showSuccessMessage(message, isSuccess) {
  // Remove any existing success messages
  const existingMessage = document.querySelector('.success-notification');
  if (existingMessage) {
    existingMessage.remove();
  }
  
  if (isSuccess) {
    // Create a subtle success notification
    const successDiv = document.createElement('div');
    successDiv.classList.add('success-notification');
    successDiv.innerHTML = `
      <div class="success-content">
        <i class="lni lni-checkmark-circle"></i>
        <span>${message}</span>
      </div>
    `;
    
    // Add CSS for the notification
    const style = document.createElement('style');
    style.textContent = `
      .success-notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #28a745, #20c997);
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);
        z-index: 1000;
        font-size: 16px;
        font-weight: 500;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.4s ease;
      }
      .success-notification.show {
        opacity: 1;
        transform: translateX(0);
      }
      .success-content {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .success-content i {
        font-size: 20px;
      }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(successDiv);
    
    // Trigger animation
    setTimeout(() => successDiv.classList.add('show'), 100);
    
    // Remove after 4 seconds
    setTimeout(() => {
      successDiv.classList.remove('show');
      setTimeout(() => {
        successDiv.remove();
        // Don't auto-reload the page - let user stay on page
      }, 400);
    }, 4000);
  } else {
    // For errors, just console.error and show a simple message
    console.error('Form submission failed');
    alert('Sorry, there was an issue submitting your message. Please try again or contact me directly.');
  }
}

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      if (response.ok) {
        // Show subtle success message
        showSuccessMessage("Thank you! Your message has been sent successfully.", true);
      } else {
        // If Google Script fails, provide alternative contact method
        showSuccessMessage("Please email me directly at matrikaregmi09@gmail.com or try again later.", false);
      }
    })
    .catch(error => {
      // Provide fallback contact method
      console.error('Contact form error:', error.message);
      showSuccessMessage("Form temporarily unavailable. Please email me directly at matrikaregmi09@gmail.com", false);
    });
});

}); // Close DOMContentLoaded