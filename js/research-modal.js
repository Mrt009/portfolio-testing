// SIMPLE Research Modal that ACTUALLY WORKS
console.log('Research modal script starting...');

function showResearchModal() {
    console.log('showResearchModal called');
    const modal = document.getElementById('researchPaperModal');
    if (modal) {
        modal.style.display = 'flex';
        modal.classList.add('show');
        console.log('Modal shown successfully');
    } else {
        console.error('Modal not found!');
    }
}

function hideResearchModal() {
    console.log('hideResearchModal called');
    const modal = document.getElementById('researchPaperModal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
        console.log('Modal hidden successfully');
    }
}

// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, setting up research modal...');
    
    const modal = document.getElementById('researchPaperModal');
    const closeBtn = document.getElementById('closeModal');
    const viewLaterBtn = document.getElementById('viewLater');
    const overlay = document.getElementById('modalOverlay');
    
    console.log('Modal found:', !!modal);
    console.log('Close button found:', !!closeBtn);
    console.log('View later button found:', !!viewLaterBtn);
    console.log('Overlay found:', !!overlay);
    
    if (closeBtn) {
        closeBtn.onclick = hideResearchModal;
    }
    
    if (viewLaterBtn) {
        viewLaterBtn.onclick = hideResearchModal;
    }
    
    if (overlay) {
        overlay.onclick = hideResearchModal;
    }
    
    // Modal will only show when user clicks the research button - no auto-show
    console.log('Research modal setup complete - manual trigger only');
});

// Global functions
window.showResearchModal = showResearchModal;
window.hideResearchModal = hideResearchModal;

console.log('Research modal script loaded');