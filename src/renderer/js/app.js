// Main application JavaScript
const { ipcRenderer } = require('electron');

// Application state
const appState = {
    currentView: 'home',
    currentChapter: null,
    bookmarks: JSON.parse(localStorage.getItem('smithBookmarks') || '[]'),
    history: [],
    historyIndex: -1,
    zoomLevel: 100
};

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializeSidebar();
    initializeEventListeners();
    loadHomeView();
});

// Initialize sidebar with chapters and resources
function initializeSidebar() {
    // Load guide chapters
    const chaptersList = document.getElementById('guide-chapters');
    guideContent.chapters.forEach(chapter => {
        const li = document.createElement('li');
        li.innerHTML = `<img src="assets/icons/${chapter.icon}" alt="${chapter.title}"><span>${chapter.title}</span>`;
        li.dataset.chapterId = chapter.id;
        li.addEventListener('click', () => loadChapter(chapter.id));
        chaptersList.appendChild(li);
    });
    
    // Load resource categories
    const resourcesList = document.getElementById('resource-categories');
    resourcesDirectory.categories.forEach(category => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${category.title}</span>`;
        li.dataset.categoryId = category.id;
        li.addEventListener('click', () => loadResourceCategory(category.id));
        resourcesList.appendChild(li);
    });
}

// Initialize event listeners
function initializeEventListeners() {
    // Navigation buttons
    document.getElementById('home-btn').addEventListener('click', loadHomeView);
    document.getElementById('search-btn').addEventListener('click', loadSearchView);
    document.getElementById('bookmark-btn').addEventListener('click', loadBookmarksView);
    document.getElementById('back-btn').addEventListener('click', navigateBack);
    
    // Search functionality
    document.getElementById('search-submit').addEventListener('click', performSearch);
    document.getElementById('search-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
    
    // Card navigation
    document.querySelectorAll('.card[data-navigate]').forEach(card => {
        card.addEventListener('click', () => {
            const target = card.dataset.navigate;
            if (target === 'guide') {
                loadChapter(guideContent.chapters[0].id);
            } else if (target === 'directory') {
                loadResourceCategory(resourcesDirectory.categories[0].id);
            }
        });
    });
    
    // IPC listeners for menu actions
    ipcRenderer.on('navigate', (event, direction) => {
        switch(direction) {
            case 'home': loadHomeView(); break;
            case 'guide': loadChapter(guideContent.chapters[0].id); break;
            case 'directory': loadResourceCategory(resourcesDirectory.categories[0].id); break;
            case 'back': navigateBack(); break;
            case 'forward': navigateForward(); break;
        }
    });
    
    ipcRenderer.on('search', () => {
        loadSearchView();
    });
    
    ipcRenderer.on('bookmark', (event, action) => {
        if (action === 'add') addBookmark();
        else if (action === 'view') loadBookmarksView();
    });
    
    ipcRenderer.on('zoom', (event, action) => {
        if (action === 'in') changeZoom(10);
        else if (action === 'out') changeZoom(-10);
        else if (action === 'reset') resetZoom();
    });
}

// View management functions
function switchView(viewId) {
    document.querySelectorAll('.content-view').forEach(view => {
        view.classList.remove('active');
    });
    document.getElementById(viewId).classList.add('active');
    
    // Update history
    if (appState.currentView !== viewId) {
        appState.history = appState.history.slice(0, appState.historyIndex + 1);
        appState.history.push({ view: viewId, data: appState.currentChapter });
        appState.historyIndex++;
    }
    
    appState.currentView = viewId;
}

function loadHomeView() {
    switchView('home-view');
    clearActiveNavItems();
}

function loadChapter(chapterId) {
    const chapter = guideContent.chapters.find(c => c.id === chapterId);
    if (!chapter) return;
    
    appState.currentChapter = chapterId;
    
    // Update UI
    document.getElementById('chapter-title').textContent = chapter.title;
    document.getElementById('chapter-content').innerHTML = chapter.content;
    
    // Update sidebar
    clearActiveNavItems();
    document.querySelector(`[data-chapter-id="${chapterId}"]`).classList.add('active');
    
    switchView('guide-view');
}

function loadResourceCategory(categoryId) {
    const category = resourcesDirectory.categories.find(c => c.id === categoryId);
    if (!category) return;
    
    // Build category content
    let html = `<div class="category-section">
        <h3>${category.title}</h3>`;
    
    category.items.forEach(item => {
        html += `<div class="resource-item">
            <h4>${item.name}</h4>`;
        
        if (item.description) {
            html += `<p>${item.description}</p>`;
        }
        
        if (item.website) {
            html += `<a href="#" class="website" onclick="openExternal('${item.website}')">${item.website}</a>`;
        }
        
        if (item.author) {
            html += `<p>Author: ${item.author}</p>`;
        }
        
        if (item.specialties) {
            html += '<div class="resource-tags">';
            item.specialties.forEach(spec => {
                html += `<span class="resource-tag">${spec}</span>`;
            });
            html += '</div>';
        }
        
        if (item.features) {
            html += '<div class="resource-tags">';
            item.features.forEach(feature => {
                html += `<span class="resource-tag">${feature}</span>`;
            });
            html += '</div>';
        }
        
        if (item.products) {
            html += '<div class="resource-tags">';
            item.products.forEach(product => {
                html += `<span class="resource-tag">${product}</span>`;
            });
            html += '</div>';
        }
        
        html += '</div>';
    });
    
    html += '</div>';
    
    document.getElementById('directory-content').innerHTML = html;
    
    // Update sidebar
    clearActiveNavItems();
    document.querySelector(`[data-category-id="${categoryId}"]`).classList.add('active');
    
    switchView('directory-view');
}

function loadSearchView() {
    switchView('search-view');
    document.getElementById('search-input').focus();
}

function loadBookmarksView() {
    const bookmarksList = document.getElementById('bookmarks-list');
    
    if (appState.bookmarks.length === 0) {
        bookmarksList.innerHTML = '<p>No bookmarks saved yet.</p>';
    } else {
        let html = '';
        appState.bookmarks.forEach((bookmark, index) => {
            html += `<div class="bookmark-item">
                <h4 onclick="loadBookmark('${bookmark.type}', '${bookmark.id}')">${bookmark.title}</h4>
                <button class="bookmark-remove" onclick="removeBookmark(${index})">Remove</button>
            </div>`;
        });
        bookmarksList.innerHTML = html;
    }
    
    switchView('bookmarks-view');
}

// Search functionality
function performSearch() {
    const query = document.getElementById('search-input').value.toLowerCase();
    if (!query) return;
    
    const results = [];
    
    // Search chapters
    guideContent.chapters.forEach(chapter => {
        if (chapter.title.toLowerCase().includes(query) || 
            chapter.content.toLowerCase().includes(query)) {
            results.push({
                type: 'chapter',
                id: chapter.id,
                title: chapter.title,
                preview: chapter.content.substring(0, 200) + '...'
            });
        }
    });
    
    // Search resources
    resourcesDirectory.categories.forEach(category => {
        category.items.forEach(item => {
            if (item.name.toLowerCase().includes(query) || 
                (item.description && item.description.toLowerCase().includes(query))) {
                results.push({
                    type: 'resource',
                    categoryId: category.id,
                    title: item.name,
                    preview: item.description || category.title
                });
            }
        });
    });
    
    // Display results
    const resultsContainer = document.getElementById('search-results');
    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    } else {
        let html = '';
        results.forEach(result => {
            html += `<div class="search-result" onclick="loadSearchResult('${result.type}', '${result.id || result.categoryId}')">
                <h4>${result.title}</h4>
                <p>${result.preview}</p>
            </div>`;
        });
        resultsContainer.innerHTML = html;
    }
}

// Navigation functions
function navigateBack() {
    if (appState.historyIndex > 0) {
        appState.historyIndex--;
        const entry = appState.history[appState.historyIndex];
        if (entry.view === 'guide-view' && entry.data) {
            loadChapter(entry.data);
        } else {
            switchView(entry.view);
        }
    }
}

function navigateForward() {
    if (appState.historyIndex < appState.history.length - 1) {
        appState.historyIndex++;
        const entry = appState.history[appState.historyIndex];
        if (entry.view === 'guide-view' && entry.data) {
            loadChapter(entry.data);
        } else {
            switchView(entry.view);
        }
    }
}

// Bookmark functions
function addBookmark() {
    if (appState.currentView === 'guide-view' && appState.currentChapter) {
        const chapter = guideContent.chapters.find(c => c.id === appState.currentChapter);
        const bookmark = {
            type: 'chapter',
            id: appState.currentChapter,
            title: chapter.title,
            timestamp: Date.now()
        };
        
        if (!appState.bookmarks.find(b => b.id === bookmark.id)) {
            appState.bookmarks.push(bookmark);
            localStorage.setItem('smithBookmarks', JSON.stringify(appState.bookmarks));
            alert('Bookmark added!');
        }
    }
}

function removeBookmark(index) {
    appState.bookmarks.splice(index, 1);
    localStorage.setItem('smithBookmarks', JSON.stringify(appState.bookmarks));
    loadBookmarksView();
}

function loadBookmark(type, id) {
    if (type === 'chapter') {
        loadChapter(id);
    }
}

// Helper functions
function clearActiveNavItems() {
    document.querySelectorAll('.chapter-list li, .resource-list li').forEach(item => {
        item.classList.remove('active');
    });
}

function loadSearchResult(type, id) {
    if (type === 'chapter') {
        loadChapter(id);
    } else if (type === 'resource') {
        loadResourceCategory(id);
    }
}

function openExternal(url) {
    require('electron').shell.openExternal(url);
    return false;
}

function changeZoom(delta) {
    appState.zoomLevel += delta;
    document.body.style.zoom = `${appState.zoomLevel}%`;
}

function resetZoom() {
    appState.zoomLevel = 100;
    document.body.style.zoom = '100%';
}