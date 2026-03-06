document.addEventListener('DOMContentLoaded', () => {
    
    // Experiment Definitions
    const systemExperiments = {
        gemini: [
            { id: 'swiss-minimal', name: 'Swiss Minimal', desc: 'Strict grid alignment, monochrome palette, and absolute precision.' },
            { id: 'organic-soft', name: 'Organic Soft', desc: 'Earthy, low-contrast wellness vibe using editorial typography.' },
            { id: 'neo-brutalist', name: 'Neo Brutalist', desc: 'High-contrast, loud agency layout making aggressive UI statements.' },
            { id: 'glass-frost', name: 'Glass Frost', desc: 'Ethereal web3 aesthetic utilizing heavy background blurring.' },
            { id: 'dark-cyber', name: 'Dark Cyber', desc: 'Retro-futuristic hacker terminal with monospace grids and neon glow.' },
            { id: 'corporate-geometric', name: 'Corporate Geometric', desc: 'Enterprise trust signals with fine gradients and glassmorphism.' }
        ],
        gpt: [
            { id: 'solaris-luxe', name: 'Solaris Luxe', desc: 'Warm hospitality UX characterized by massive soft drop-shadows.' },
            { id: 'signal-brutalist', name: 'Signal Brutalist', desc: 'Vintage physical constructivism with thick black borders.' },
            { id: 'mono-architect', name: 'Mono Architect', desc: 'Clinical infrastructure aesthetic utilizing 0px border-radius.' },
            { id: 'kinetic-wave', name: 'Kinetic Wave', desc: 'High-energy SaaS launch focusing on reactive hover states.' },
            { id: 'glass-atlas', name: 'Glass Atlas', desc: 'Deep-space enterprise dashboard layering frosted panels.' },
            { id: 'editorial-grid', name: 'Editorial Grid', desc: 'High-end journalistic depth built entirely around fine CSS grid lines.' }
        ],
        claude: [
            { id: 'noir-editorial', name: 'Noir Editorial', desc: 'High-fashion cinematic design with dramatic serif typography and restraint.' },
            { id: 'ceramic-minimal', name: 'Ceramic Minimal', desc: 'Japanese-Scandinavian minimalism with matte surfaces and intentional space.' },
            { id: 'duotone-bold', name: 'Duotone Bold', desc: 'Two-color poster-art with massive typography and high-contrast blocks.' },
            { id: 'terminal-green', name: 'Terminal Green', desc: 'Phosphor CRT terminal with scanlines, typing animation, and CLI styling.' },
            { id: 'paper-craft', name: 'Paper Craft', desc: 'Tactile layered paper aesthetic with offset shadows and handmade warmth.' },
            { id: 'aurora-gradient', name: 'Aurora Gradient', desc: 'Vibrant mesh gradients over a dark base with flowing color transitions.' }
        ]
    };

    /**
     * Renders showcase cards into the grid
     */
    const renderGallery = (collection, containerId, imagePathBase, folderPathBase) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = collection.map((exp, index) => {
            const delay = (index % 3) * 75;
            const cleanUrl = `${folderPathBase}/${exp.id}`;
            const imagePath = `${imagePathBase}/${exp.id}.png`;

            return `
                <div class="showcase-card reveal" style="transition-delay: ${delay}ms">
                    <!-- SKELETON OVERLAY -->
                    <div class="absolute inset-0 bg-[#050505] z-20 flex flex-col transition-opacity duration-700 pointer-events-none" id="skel-card-${exp.id}">
                        <div class="card-image-wrapper skeleton border-b-0 !bg-[#111]"></div>
                        <div class="card-content flex flex-col pointer-events-none">
                            <div class="card-header mt-1 mb-2">
                                <div class="h-5 bg-[#1a1a1a] rounded w-7/12 skeleton"></div>
                            </div>
                            <div class="flex flex-col gap-2 mt-2">
                                <div class="h-3.5 bg-[#1a1a1a] rounded w-full skeleton"></div>
                                <div class="h-3.5 bg-[#1a1a1a] rounded w-4/5 skeleton"></div>
                            </div>
                            <div class="mt-auto pt-6 gap-3 grid grid-cols-2">
                                <div class="h-9 bg-[#1a1a1a] rounded-lg w-full skeleton"></div>
                                <div class="h-9 bg-transparent border border-[#2a2a2a] rounded-lg w-full skeleton"></div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- REAL CONTENT -->
                    <a href="${cleanUrl}" class="card-image-wrapper clean-url-link block">
                        <img src="${imagePath}" alt="${exp.name}" class="card-img" loading="lazy" 
                             onerror="this.style.opacity='0'">
                    </a>
                    <div class="card-content">
                        <div class="card-header">
                            <h3 class="card-title">${exp.name}</h3>
                        </div>
                        <p class="card-desc">${exp.desc}</p>
                        <div class="mt-auto pt-6 gap-3 grid grid-cols-2">
                            <a href="${cleanUrl}" class="clean-url-link flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium bg-primary text-black rounded-lg hover:bg-white transition-all shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                Preview
                            </a>
                            <button data-path="${cleanUrl}" class="btn-copy-prompt flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium bg-surface border border-border text-primary rounded-lg hover:bg-border transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                                Prompt
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        container.innerHTML = html;
    };

    renderGallery(systemExperiments.gemini, 'gemini-grid', './assets/preview/gemini', './gemini-models');
    renderGallery(systemExperiments.gpt, 'gpt-grid', './assets/preview/gpt', './gpt-models');
    renderGallery(systemExperiments.claude, 'claude-grid', './assets/preview/claude', './claude-models');

    // Simulate load time and gracefully fade out skeletons
    setTimeout(() => {
        document.querySelectorAll('[id^="skel-card-"]').forEach(skel => {
            skel.style.opacity = '0';
            setTimeout(() => skel.remove(), 700); // Remove from DOM after transition
        });
    }, 1200);

    /**
     * Copy Prompt functionality
     */
    document.addEventListener('click', async (e) => {
        const btn = e.target.closest('.btn-copy-prompt');
        if (!btn) return;
        
        e.preventDefault();
        
        const path = btn.getAttribute('data-path');
        if (!path) return;
        
        const originalHtml = btn.innerHTML;
        
        try {
            // Set loading state
            btn.innerHTML = `<svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Copying...`;
            
            // Always append .html to guarantee fetching the actual static file, 
            // bypassing any live-server directory rules that return a 404 page.
            const fetchUrl = path.endsWith('.html') ? path : `${path}.html`;
            
            // Try fetching the file
            const response = await fetch(fetchUrl);
            const text = await response.text();
            
            // Extract the specific AI Prompt comment using regex
            const match = text.match(/<!--\s*AI PROMPT FOR THIS DESIGN AESTHETIC:([\s\S]*?)-->/i);
            let promptText = "";
            
            if (match && match[1]) {
                promptText = match[1].trim();
                
                // Use Clipboard API if available, otherwise fallback to execCommand
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(promptText);
                } else {
                    // Fallback for non-secure contexts (e.g. accessing via local network IP)
                    const textArea = document.createElement("textarea");
                    textArea.value = promptText;
                    textArea.style.position = "fixed"; // Setup off-screen
                    textArea.style.left = "-999999px";
                    textArea.style.top = "-999999px";
                    document.body.appendChild(textArea);
                    textArea.focus();
                    textArea.select();
                    try {
                        document.execCommand('copy');
                    } catch (err) {
                        console.error('Fallback: Oops, unable to copy', err);
                        throw new Error("Failed to copy prompt");
                    } finally {
                        textArea.remove();
                    }
                }
                
                // Show success
                btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-green-500"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!`;
                btn.classList.add('border-green-500/50', 'text-green-500');
            } else {
                throw new Error("Prompt comment not found in file");
            }
        } catch (error) {
            console.error('Failed to copy prompt:', error);
            btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-red-500"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg> Failed`;
            btn.classList.add('border-red-500/50', 'text-red-500');
        }
        
        // Reset after 2 seconds
        setTimeout(() => {
            btn.innerHTML = originalHtml;
            btn.classList.remove('border-green-500/50', 'text-green-500', 'border-red-500/50', 'text-red-500');
        }, 2000);
    });

    /**
     * Clean URL Fallback Mechanism
     */
    document.querySelectorAll('.clean-url-link').forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.location.protocol === 'file:') {
                e.preventDefault();
                const targetPath = link.getAttribute('href');
                window.location.href = targetPath + '.html';
            }
        });
    });

    /**
     * Intersection Observer for Reveal on Scroll
     */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Give DOM a tiny moment to render the JS-injected HTML before observing
    setTimeout(() => {
        document.querySelectorAll('.reveal').forEach((el) => {
            observer.observe(el);
        });
    }, 100);

    // Smooth scroll navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Menu Toggle Logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileCloseBtn = document.getElementById('mobile-close-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileBackdrop = document.getElementById('mobile-backdrop');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function openMobileMenu() {
        if (mobileMenu) mobileMenu.classList.remove('pointer-events-none');
        if (mobileBackdrop) {
            mobileBackdrop.classList.remove('opacity-0', 'pointer-events-none');
            mobileBackdrop.classList.add('opacity-100', 'pointer-events-auto');
        }
        if (mobileDrawer) mobileDrawer.classList.remove('translate-x-full');
    }

    function closeMobileMenu() {
        if (mobileBackdrop) {
            mobileBackdrop.classList.remove('opacity-100', 'pointer-events-auto');
            mobileBackdrop.classList.add('opacity-0', 'pointer-events-none');
        }
        if (mobileDrawer) mobileDrawer.classList.add('translate-x-full');
        setTimeout(() => {
            if (mobileMenu) mobileMenu.classList.add('pointer-events-none');
        }, 300); // Matches duration-300
    }

    if (mobileMenuBtn && mobileCloseBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', openMobileMenu);
        mobileCloseBtn.addEventListener('click', closeMobileMenu);
        mobileBackdrop.addEventListener('click', closeMobileMenu);
        
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }

});
