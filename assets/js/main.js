/**
 * Main JavaScript file for Di sản Hồ Chí Minh Website
 * Handles all interactive functionality and animations
 */

// ===================================
// Constants and Variables
// ===================================

const DAILY_QUOTES = [
    "Không có gì quý hơn độc lập tự do",
    "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công",
    "Muôn việc khó trở nên dễ, chỉ sợ lòng không bền",
    "Dù cho có phải đi ăn cỏ, cũng quyết tâm giữ lấy nền độc lập",
    "Tất cả vì nước, tất cả vì dân"
];

// DOM Elements
const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('main-nav');
const backToTop = document.getElementById('back-to-top');
const dailyQuoteElement = document.querySelector('#daily-quote .quote-text');

// ===================================
// Utility Functions
// ===================================

/**
 * Debounce function to limit the rate of function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Get random element from array
 * @param {Array} arr - Array to select from
 * @returns {*} Random element
 */
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Check if element is in viewport
 * @param {Element} element - Element to check
 * @returns {boolean} Whether element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Smooth scroll to element
 * @param {string} targetId - ID of target element
 */
function smoothScrollTo(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ===================================
// Header & Navigation Functions
// ===================================

/**
 * Handle header scroll effect
 */
function handleHeaderScroll() {
    const scrollY = window.scrollY;
    
    if (scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

/**
 * Toggle mobile navigation menu
 */
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    mainNav.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (mainNav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

/**
 * Close mobile menu when clicking on nav links
 */
function closeMobileMenu() {
    if (window.innerWidth <= 768) {
        hamburger.classList.remove('active');
        mainNav.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ===================================
// Back to Top Button Functions
// ===================================

/**
 * Show/hide back to top button based on scroll position
 */
function handleBackToTop() {
    const scrollY = window.scrollY;
    
    if (scrollY > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
}

/**
 * Scroll to top of page
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ===================================
// Daily Quote Functions
// ===================================

/**
 * Display random daily quote
 */
function displayDailyQuote() {
    if (dailyQuoteElement) {
        const randomQuote = getRandomElement(DAILY_QUOTES);
        dailyQuoteElement.textContent = `"${randomQuote}"`;
        
        // Add fade in animation
        dailyQuoteElement.style.opacity = '0';
        setTimeout(() => {
            dailyQuoteElement.style.transition = 'opacity 1s ease';
            dailyQuoteElement.style.opacity = '1';
        }, 100);
    }
}

// ===================================
// Timeline Animation Functions (for tieu-su.html)
// ===================================

/**
 * Animate timeline items when they come into view
 */
function animateTimelineItems() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('fade-in');
        }
    });
}

/**
 * Initialize timeline animations using Intersection Observer
 */
function initTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    if (timelineItems.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// ===================================
// Accordion Functions (for noi-dung.html)
// ===================================

/**
 * Toggle accordion item
 * @param {Element} header - Accordion header element
 */
function toggleAccordion(header) {
    const item = header.parentElement;
    const content = item.querySelector('.accordion-content');
    const isActive = item.classList.contains('active');
    
    // Close all accordion items
    const allItems = document.querySelectorAll('.accordion-item');
    allItems.forEach(accordionItem => {
        accordionItem.classList.remove('active');
        const accordionContent = accordionItem.querySelector('.accordion-content');
        accordionContent.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        item.classList.add('active');
        content.classList.add('active');
    }
}

/**
 * Initialize accordion functionality
 */
function initAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => toggleAccordion(header));
    });
}

// ===================================
// Modal Functions (for tac-pham.html)
// ===================================

/**
 * Open modal with work details
 * @param {Object} workData - Work data object
 */
function openModal(workData) {
    const modal = document.getElementById('work-modal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalBody = modal.querySelector('.modal-body');
    
    if (modal && modalTitle && modalBody) {
        modalTitle.textContent = workData.title;
        modalBody.innerHTML = workData.content;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Close modal
 */
function closeModal() {
    const modal = document.getElementById('work-modal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
}

/**
 * Initialize modal functionality
 */
function initModal() {
    const modal = document.getElementById('work-modal');
    const closeBtn = document.querySelector('.modal-close');
    const workCards = document.querySelectorAll('.work-card');
    
    if (!modal) return;
    
    // Close button event
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // Click outside modal to close
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // ESC key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
    
    // Work card click events
    workCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            const workData = getWorkData(index);
            if (workData) {
                openModal(workData);
            }
        });
    });
}

/**
 * Get work data by index (sample data for demonstration)
 * @param {number} index - Work index
 * @returns {Object} Work data object
 */
function getWorkData(index) {
    const works = [
        {
            title: "Đường Kách Mệnh",
            content: `
                <p><strong>Đường Kách Mệnh</strong> là tác phẩm quan trọng của Chủ tịch Hồ Chí Minh, được viết vào năm 1927.</p>
                <p>Tác phẩm này trình bày quan điểm của Người về con đường giải phóng dân tộc và xây dựng chế độ xã hội mới.</p>
                <blockquote>"Cách mệnh là quyền thiêng liêng, là nghĩa vụ thiêng liêng của các dân tộc bị áp bức."</blockquote>
                <p>Đây là một trong những văn bản lý luận quan trọng nhất về tư tưởng cách mạng của Hồ Chí Minh.</p>
            `
        },
        {
            title: "Tuyên Ngôn Độc Lập",
            content: `
                <p><strong>Tuyên Ngôn Độc Lập</strong> được Chủ tịch Hồ Chí Minh đọc tại Quảng trường Ba Đình vào ngày 2/9/1945.</p>
                <p>Đây là văn kiện lịch sử tuyên bố sự ra đời của nước Việt Nam Dân chủ Cộng hòa.</p>
                <blockquote>"Tất cả mọi người đều sinh ra có quyền bình đẳng. Tạo hóa cho họ những quyền không ai có thể xâm phạm được; trong những quyền ấy, có quyền được sống, quyền tự do và quyền mưu cầu hạnh phúc."</blockquote>
                <p>Bản tuyên ngôn thể hiện tinh thần độc lập, tự do và khát vọng hòa bình của dân tộc Việt Nam.</p>
            `
        },
        {
            title: "Di Chúc",
            content: `
                <p><strong>Di Chúc của Chủ tịch Hồ Chí Minh</strong> được viết vào tháng 5/1969, trước khi Người qua đời.</p>
                <p>Đây là di sản tinh thần quý báu mà Bác Hồ để lại cho Đảng, cho dân tộc.</p>
                <blockquote>"Toàn Đảng, toàn dân ta đoàn kết phấn đấu, xây dựng một nước Việt Nam hòa bình, thống nhất, độc lập, dân chủ và giàu mạnh, và góp phần xứng đáng vào sự nghiệp cách mạng thế giới."</blockquote>
                <p>Di chúc thể hiện tình yêu sâu sắc của Người đối với Đảng, đối với nhân dân và khát vọng xây dựng đất nước.</p>
            `
        }
    ];
    
    return works[index] || null;
}

// ===================================
// Event Listeners Setup
// ===================================

/**
 * Initialize all event listeners
 */
function initEventListeners() {
    // Header scroll effect (with debounce for performance)
    const debouncedScrollHandler = debounce(() => {
        handleHeaderScroll();
        handleBackToTop();
        
        // Timeline animations if on biography page
        if (document.querySelector('.timeline')) {
            animateTimelineItems();
        }
    }, 10);
    
    window.addEventListener('scroll', debouncedScrollHandler);
    
    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    // Close mobile menu when clicking on nav links
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Back to top button
    if (backToTop) {
        backToTop.addEventListener('click', scrollToTop);
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!header.contains(e.target) && mainNav.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', debounce(() => {
        // Close mobile menu on desktop
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    }, 250));
}

// ===================================
// Page-specific Initializations
// ===================================

/**
 * Initialize page-specific functionality based on current page
 */
function initPageSpecific() {
    // Check current page and initialize accordingly
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch (currentPage) {
        case 'index.html':
        case '':
            displayDailyQuote();
            break;
            
        case 'tieu-su.html':
            initTimelineAnimations();
            break;
            
        case 'noi-dung.html':
            initAccordion();
            break;
            
        case 'tac-pham.html':
            initModal();
            break;
    }
}

// ===================================
// Initialization
// ===================================

/**
 * Initialize all functionality when DOM is ready
 */
function init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
        return;
    }
    
    // Initialize all functionality
    initEventListeners();
    initPageSpecific();
    
    // Initial calls
    handleHeaderScroll();
    handleBackToTop();
    
    console.log('Di sản Hồ Chí Minh website initialized successfully!');
}

// Start initialization
init();

// ===================================
// Export functions for testing (if needed)
// ===================================

// Uncomment if you need to test functions
// window.HoChiMinhWebsite = {
//     toggleMobileMenu,
//     displayDailyQuote,
//     scrollToTop,
//     openModal,
//     closeModal
// };
