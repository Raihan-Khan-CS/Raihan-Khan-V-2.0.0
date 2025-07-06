document.addEventListener('DOMContentLoaded', () => {

    // --- HAMBURGER MENU & NAVBAR LOGIC ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        });
        document.addEventListener('click', (event) => {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);
            if (navMenu.classList.contains('active') && !isClickInsideNav && !isClickOnHamburger) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // --- DYNAMIC YEAR IN FOOTER ---
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- SKILL BAR ANIMATION ON SCROLL ---
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const skillObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillProgressElements = entry.target.querySelectorAll('.skill-progress');
                    skillProgressElements.forEach(skill => {
                        skill.style.width = skill.dataset.width + '%';
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        skillObserver.observe(skillsSection);
    }

    // --- CENTRALIZED DATA ---
    const galleryData = [
        { src: 'gallery/raihan-khan-1.jpeg', title: 'Implementation Monitoring and Evaluation Division', link: 'https://mtibkk.com/category/national-training/' },
        { src: 'gallery/raihan-khan-2.jpeg', title: 'Implementation Monitoring and Evaluation Division', link: 'https://www.raihankhan.info/image-gallery/professional-life.html' },
        { src: 'gallery/raihan-khan-3.jpeg', title: 'Implementation Monitoring and Evaluation Division', link: 'https://www.raihankhan.info/image-gallery/professional-life.html' },
        { src: 'gallery/raihan-khan-4.jpeg', title: 'Implementation Monitoring and Evaluation Division', link: 'https://www.raihankhan.info/image-gallery/professional-life.html' },
        { src: 'gallery/raihan-khan-5.jpeg', title: 'Implementation Monitoring and Evaluation Division', link: 'https://www.raihankhan.info/image-gallery/professional-life.html' },
        { src: 'gallery/raihan-khan-6.jpeg', title: 'Implementation Monitoring and Evaluation Division', link: 'https://www.raihankhan.info/image-gallery/professional-life.html' },
        { src: 'gallery/raihan-khan-7.jpeg', title: 'Seminar on Occupational English Test (OET)', link: 'https://siamhcbd.com/event/seminar-on-occupational-english-test-oet-held-at-dgnm/' },
        { src: 'gallery/raihan-khan-8.jpeg', title: 'Startup Incubation Programme in Rangpur', link: 'https://www.tbsnews.net/bangladesh/idea-launches-four-day-startup-incubation-programme-rangpur-222970' },
        { src: 'gallery/raihan-khan-9.jpeg', title: 'Implementation Monitoring and Evaluation Division', link: 'https://mtibkk.com/category/national-training/' },
        { src: 'gallery/raihan-khan-10.jpeg', title: 'Implementation Monitoring and Evaluation Division', link: 'https://mtibkk.com/category/national-training/' },
        { src: 'gallery/raihan-khan-11.jpeg', title: 'My life at Management and Training International Ltd.', link: 'https://www.raihankhan.info/image-gallery/nsu-life.html' },
        { src: 'gallery/raihan-khan-12.jpeg', title: 'Travelling Beautiful Bangladesh', link: 'https://www.raihankhan.info/image-gallery/travelling.html' },
    ];

    const allPosts = [
        { href: "blog/blog10.html", author: "Raihan Khan", title: "বাবা: নির্ভরতার ছায়া থেকে বন্ধুত্বের আলো", date: "2025-06-15", categorySlug: "writing", categoryDisplay: "লেখালেখি", excerpt: "জীবনের পথচলায় আমরা বহু মানুষের সান্নিধ্যে আসি, গড়ে ওঠে অগণিত সম্পর্ক। কিন্তু কিছু সম্পর্ক থাকে রক্তের অক্ষরে লেখা, যার গভীরতা মাপা যায় না, যার তুলনা হয় না।", isBengali: true, imgSrc: "images/baba.JPG", imgAlt: "Baba" },
        { href: "blog/blog9.html", author: "Raihan Khan", title: "চাকরির বাজারে চাহিদা এবং যোগান", date: "2024-09-01", categorySlug: "job-market", categoryDisplay: "Job Market", excerpt: "অর্থনীতির মূল ভিত্তি চাহিদা ও যোগান কীভাবে চাকরির বাজারকে প্রভাবিত করে এবং এর ফলে কী ধরনের সুবিধা ও অসুবিধা তৈরি হতে পারে, তার একটি বিশ্লেষণ।", isBengali: true, imgSrc: "images/demand-supply.jpg", imgAlt: "Demand and Supply" },
        { href: "blog/blog8.html", author: "Raihan Khan", title: "২০২৫ সালে প্রযুক্তি দুনিয়া: সম্ভাবনা ও চ্যালেঞ্জ", date: "2025-01-04", categorySlug: "technology", categoryDisplay: "Technology", excerpt: "২০২৫ সালে AI, IoT, ব্লকচেইন, এবং রোবোটিক্সের মতো প্রযুক্তি মানুষের জীবনযাত্রা, কর্মসংস্থান এবং অর্থনৈতিক ব্যবস্থাকে কীভাবে প্রভাবিত করবে তার একটি বিশ্লেষণ।", isBengali: true, imgSrc: "images/tech-2025.jpg", imgAlt: "A futuristic city with AI" },
        { href: "blog/blog6.html", author: "Raihan Khan", title: "আমরা বিশ্ববিদ্যালয়ে কেন যাব?", date: "2024-09-09", categorySlug: "writing", categoryDisplay: "লেখালেখি", excerpt: "বিশ্ববিদ্যালয় শিক্ষা কেন গুরুত্বপূর্ণ এবং এটি কিভাবে আমাদের ব্যক্তিগত ও পেশাগত জীবনকে প্রভাবিত করে, তা নিয়ে আলোচনা।", isBengali: true, imgSrc: "images/university.jpg", imgAlt: "A university campus" },
        { href: "blog/blog5.html", author: "Raihan Khan", title: "নক্ষত্রের পতন", date: "2024-08-30", categorySlug: "writing", categoryDisplay: "লেখালেখি", excerpt: "মিথ্যা প্রশংসা ও তোষামোদ কিভাবে একজন সফল প্রতিষ্ঠাতাকে ধ্বংসের পথে নিয়ে যেতে পারে, তার একটি শিক্ষণীয় গল্প।", isBengali: true, imgSrc: "images/blog3_starfall.jpg", imgAlt: "A falling star" },
        { href: "blog/blog4.html", author: "Raihan Khan", title: "মা: পৃথিবীর সেরা সহযোদ্ধা, ডাক্তার এবং শিক্ষক, উদ্যোক্তা!", date: "2024-05-12", categorySlug: "writing", categoryDisplay: "লেখালেখি", excerpt: "মায়ের বহুমুখী ভূমিকা এবং সন্তানের জীবনে তার অপরিমেয় অবদান নিয়ে একটি heartfelt লেখা।", isBengali: true, imgSrc: "images/blog4_mother.jpg", imgAlt: "A mother's embrace" },
        { href: "blog/blog3.html", author: "Raihan Khan", title: "সময় মানুষের প্রধান শত্রু", date: "2023-01-01", categorySlug: "writing", categoryDisplay: "লেখালেখি", excerpt: "সময় এমন একটি অমূল্য সম্পদ যা কোনোভাবেই পুনরুদ্ধার করা সম্ভব নয়। এই দৃষ্টিকোণ থেকে সময়কে অনেকেই মানুষের প্রধান শত্রু হিসেবে বিবেচনা করেন।", isBengali: true, imgSrc: "images/time-enemy.jpg", imgAlt: "A clock" },
        { href: "blog/blog7.html", author: "Raihan Khan", title: "চ্যাট জিপিটি (ChatGPT) এর প্রভাবে মানুষ কি চাকরি হারাতে পারে?", date: "2022-12-28", categorySlug: "artificial-intelligence", categoryDisplay: "Artificial Intelligence", excerpt: "উন্নত প্রযুক্তির কারণে অনেকেই উদ্বিগ্ন, বিশেষ করে চাকরির বাজারে এর প্রভাব নিয়ে। চ্যাট জিপিটি কি মানুষের চাকরি হারানোর কারণ হতে পারে....", isBengali: true, imgSrc: "images/chatgpt-job-loss.jpg", imgAlt: "ChatGPT and job loss" },
        { href: "blog/blog2.html", author: "Raihan Khan", title: "চ্যাট জিপিটি (ChatGPT): হুমকি নাকি সম্ভাবনা?", date: "2022-12-17", categorySlug: "artificial-intelligence", categoryDisplay: "Artificial Intelligence", excerpt: "ChatGPT একটি শক্তিশালী টুল হলেও এর ব্যবহার নিয়ে প্রশ্ন উঠেছে। এটি কি সম্ভাবনা নিয়ে এসেছে, নাকি হুমকি সৃষ্টি করেছে? এর বিস্তারিত আলোচনা।", isBengali: true, imgSrc: "images/chatgpt-threat-potential.jpg", imgAlt: "AI threat or potential" },
        { href: "blog/blog1.html", author: "Raihan Khan", title: "চ্যাট জিপিটি (ChatGPT) কি? এটি কিভাবে কাজ করে?", date: "2022-12-04", categorySlug: "artificial-intelligence", categoryDisplay: "Artificial Intelligence", excerpt: "ChatGPT হলো একটি উন্নত ভাষা মডেল যা মানুষের সাথে স্বাভাবিক ভাষায় কথোপকথন করতে সক্ষম। এর কার্যপ্রণালী এবং কাজের পদ্ধতি নিয়ে বিস্তারিত আলোচনা।", isBengali: true, imgSrc: "images/chatgpt-how-it-works.jpg", imgAlt: "How ChatGPT works" }
    ];

    // --- GALLERY & LIGHTBOX LOGIC ---
    let lightbox;
    let currentGallery = [];
    let currentIndex = 0;

    function renderGalleryGrid(photos, gridElement) {
        if (!gridElement) return;
        gridElement.innerHTML = photos.map((photo, index) => `
            <div class="gallery-item" data-index="${index}">
                <img src="${photo.src}" alt="${photo.title}" loading="lazy">
                <div class="gallery-item-overlay">
                    <h3>${photo.title}</h3>
                    <a href="${photo.link}" target="_blank" rel="noopener noreferrer" class="visit-link" onclick="event.stopPropagation();">Visit Link</a>
                </div>
            </div>`).join('');
    }

    function createLightbox() {
        if (document.querySelector('.lightbox-overlay')) return;
        const lightboxHTML = `<div class="lightbox-overlay"><div class="lightbox-content"><button class="lightbox-close" title="Close">×</button><button class="lightbox-prev" title="Previous image">‹</button><img src="" alt="Enlarged gallery image"><button class="lightbox-next" title="Next image">›</button><div class="lightbox-info"><h3 class="lightbox-title"></h3></div></div></div>`;
        document.body.insertAdjacentHTML('beforeend', lightboxHTML);
        lightbox = document.querySelector('.lightbox-overlay');
        lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
        lightbox.querySelector('.lightbox-prev').addEventListener('click', showPrevImage);
        lightbox.querySelector('.lightbox-next').addEventListener('click', showNextImage);
        lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
    }

    function showImage(index) {
        if (index < 0 || index >= currentGallery.length) return;
        const photo = currentGallery[index];
        lightbox.querySelector('img').src = photo.src;
        lightbox.querySelector('.lightbox-title').textContent = photo.title;
        currentIndex = index;
    }

    function showNextImage() { showImage((currentIndex + 1) % currentGallery.length); }
    function showPrevImage() { showImage((currentIndex - 1 + currentGallery.length) % currentGallery.length); }

    function openLightbox(clickedIndex, galleryArray) {
        if (!lightbox) createLightbox();
        currentGallery = galleryArray;
        showImage(clickedIndex);
        lightbox.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        if (lightbox) {
            lightbox.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    }

    document.addEventListener('keydown', e => {
        if (!lightbox || !lightbox.classList.contains('show')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNextImage();
        if (e.key === 'ArrowLeft') showPrevImage();
    });

    // --- BLOG & SIDEBAR RENDERING FUNCTIONS ---
    function renderBlogGrid(posts, gridElement, relativePath = "") {
        if (!gridElement) return;
        const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
        if (sortedPosts.length === 0) {
            gridElement.innerHTML = `<p style="text-align: center; grid-column: 1 / -1; font-size: 1.1rem; color: #555;">No articles found matching your search.</p>`;
            return;
        }
        gridElement.innerHTML = sortedPosts.map(post => {
            const bengaliClass = post.isBengali ? 'bengali' : '';
            return `<a href="${relativePath}${post.href}" class="blog-card">
                <div class="blog-card-image"><img src="${relativePath}${post.imgSrc}" alt="${post.imgAlt}"></div>
                <div class="blog-card-content">
                    <h3 class="blog-title ${bengaliClass}">${post.title}</h3>
                    <p class="blog-meta"><span class="blog-date">${new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span> | <span class="blog-category">${post.categoryDisplay}</span></p>
                    <p class="blog-excerpt ${bengaliClass}">${post.excerpt}</p>
                    <span class="blog-read-more-link">Read More <i class="fas fa-arrow-right"></i></span>
                </div>
            </a>`;
        }).join('');
    }
    
    function renderSidebar(relativePath = "") {
        const recentPostsList = document.querySelector('.sidebar .related-posts-widget ul');
        const categoriesList = document.querySelector('.sidebar .categories-widget ul');

        if (recentPostsList) {
            const recentPosts = [...allPosts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 2);
            recentPostsList.innerHTML = recentPosts.map(post => {
                const bengaliClass = post.isBengali ? 'bengali' : '';
                 return `<li><a href="${relativePath}${post.href}"><img src="${relativePath}${post.imgSrc}" alt="${post.imgAlt}"><span class="post-title ${bengaliClass}">${post.title}</span></a></li>`;
            }).join('');
        }

        if (categoriesList) {
            const categoryCounts = allPosts.reduce((acc, post) => {
                if (!acc[post.categorySlug]) acc[post.categorySlug] = { display: post.categoryDisplay, count: 0 };
                acc[post.categorySlug].count++;
                return acc;
            }, {});
            categoriesList.innerHTML = Object.entries(categoryCounts).map(([slug, data]) => {
                return `<li><a href="${relativePath}${slug}.html">${data.display}<span class="category-count">(${data.count})</span></a></li>`;
            }).join('');
        }
    }

    // --- PAGE-SPECIFIC LOGIC ---
    const pathName = window.location.pathname.split('/').pop() || 'index.html';

    // Logic for index.html
    if (pathName === 'index.html') {
        renderBlogGrid(allPosts.slice(0, 6), document.querySelector('#blog .blog-grid'), "");
        const indexGalleryGrid = document.querySelector('#gallery .gallery-grid');
        if (indexGalleryGrid) {
            renderGalleryGrid(galleryData.slice(0, 6), indexGalleryGrid);
            indexGalleryGrid.addEventListener('click', e => {
                const galleryItem = e.target.closest('.gallery-item');
                if(galleryItem) openLightbox(parseInt(galleryItem.dataset.index, 10), galleryData.slice(0, 6));
            });
        }
    }

    // Logic for blog.html
    else if (pathName === 'blog.html') {
        renderBlogGrid(allPosts, document.querySelector('.blog-listing-section .blog-grid'), "");
    }

    // Logic for gallery.html
    else if (pathName === 'gallery.html') {
        const galleryGridFull = document.getElementById('gallery-grid-full');
        const paginationContainer = document.getElementById('pagination-container');
        const photosPerPage = 6;
        
        const displayPage = (page) => {
            const start = (page - 1) * photosPerPage;
            const end = start + photosPerPage;
            const paginatedPhotos = galleryData.slice(start, end);
            renderGalleryGrid(paginatedPhotos, galleryGridFull);
            galleryGridFull.querySelectorAll('.gallery-item').forEach((item, i) => {
                 item.addEventListener('click', () => openLightbox(i, paginatedPhotos));
            });
            updatePaginationButtons(page);
        };

        const setupPagination = () => {
            const pageCount = Math.ceil(galleryData.length / photosPerPage);
            for (let i = 1; i <= pageCount; i++) {
                const btn = document.createElement('button');
                btn.className = 'pagination-btn';
                btn.innerText = i;
                btn.addEventListener('click', () => displayPage(i));
                paginationContainer.appendChild(btn);
            }
        };

        const updatePaginationButtons = (currentPage) => {
             const buttons = paginationContainer.querySelectorAll('.pagination-btn');
             buttons.forEach((button, index) => button.classList.toggle('active', index + 1 === currentPage));
        };
        
        setupPagination();
        displayPage(1);
    }
    
    // Logic for Category Pages
    else if (document.querySelector('.blog-grid[id^="blog-grid-"]')) {
        const grid = document.querySelector('.blog-grid[id^="blog-grid-"]');
        const slug = grid.id.replace('blog-grid-', '');
        renderBlogGrid(allPosts.filter(p => p.categorySlug === slug), grid, ""); 
    }

    // Logic for Search Results Page
    else if (pathName === 'search-results.html') {
        const params = new URLSearchParams(window.location.search);
        const query = params.get('q');
        const searchTitle = document.getElementById('search-results-title');
        const searchSubtitle = document.getElementById('search-results-subtitle');
        const resultsGrid = document.getElementById('search-results-grid');

        if (query && resultsGrid) {
            const decodedQuery = decodeURIComponent(query).toLowerCase();
            searchTitle.textContent = `Search Results for: "${decodedQuery}"`;
            
            const filteredPosts = allPosts.filter(post => 
                post.title.toLowerCase().includes(decodedQuery) || 
                post.excerpt.toLowerCase().includes(decodedQuery) ||
                post.categoryDisplay.toLowerCase().includes(decodedQuery) ||
                (post.author && post.author.toLowerCase().includes(decodedQuery))
            );
            
            searchSubtitle.textContent = `Found ${filteredPosts.length} article(s).`;
            renderBlogGrid(filteredPosts, resultsGrid, "");
        } else if (searchTitle) {
            searchTitle.textContent = "No Search Query";
            searchSubtitle.textContent = "Please use the search bar on another page to find articles.";
        }
    }

    // Logic for Single Blog Post Pages (to render sidebar)
    if (document.querySelector('.blog-post-full')) {
        renderSidebar("../"); 
    }
    
    // --- EVENT LISTENERS ---

    // Search Form Submission
    document.querySelectorAll('.search-widget form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const searchInput = form.querySelector('input[type="text"]');
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                const isSinglePost = window.location.pathname.includes('/blog/');
                const searchPagePath = isSinglePost ? '../search-results.html' : 'search-results.html';
                window.location.href = `${searchPagePath}?q=${encodeURIComponent(searchTerm)}`;
            }
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById("contact-form");
    if(contactForm){
        const status = document.getElementById("form-status");
        contactForm.addEventListener("submit", async (event) => {
            event.preventDefault();
            status.innerHTML = "Sending...";
            status.style.color = 'gray';
            const data = new FormData(event.target);
            try {
                const response = await fetch(event.target.action, {
                    method: contactForm.method,
                    body: data,
                    headers: {'Accept': 'application/json'}
                });
                if (response.ok) {
                    status.innerHTML = "Thanks for your message!";
                    status.style.color = 'green';
                    contactForm.reset();
                } else {
                    const responseData = await response.json();
                    status.innerHTML = responseData.errors ? responseData.errors.map(e => e.message).join(", ") : "Oops! There was a problem submitting your form";
                    status.style.color = 'red';
                }
            } catch (error) {
                status.innerHTML = "Oops! There was a problem submitting your form.";
                status.style.color = 'red';
            }
        });
    }
});
