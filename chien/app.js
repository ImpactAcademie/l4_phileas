const icons = {
  paw: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 13c-2.1 0-5.5 3.1-5.5 5.3 0 2.9 3.4 2.1 5.5 2.1s5.5.8 5.5-2.1C17.5 16.1 14.1 13 12 13Z"/><ellipse cx="5.6" cy="10" rx="2" ry="2.7"/><ellipse cx="10" cy="6.7" rx="2" ry="2.7"/><ellipse cx="15" cy="6.7" rx="2" ry="2.7"/><ellipse cx="18.4" cy="10" rx="2" ry="2.7"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1z"/></svg>',
  explore: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3M14.5 7.5l-2 5-5 2 2-5z"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.8 8.8c0 4.2-8.8 10-8.8 10S3.2 13 3.2 8.8A4.7 4.7 0 0 1 12 6.3a4.7 4.7 0 0 1 8.8 2.5Z"/></svg>',
  message: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.7 8.7 0 0 1-3.6-.8L4 20l1.4-3.5A7.2 7.2 0 0 1 4 12c0-4.2 3.6-7.5 8-7.5s8 2.8 8 7Z"/></svg>',
  bookmark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-4-6 4z"/></svg>',
  photo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9" r="1.5"/><path d="m21 15-5-5L5 20"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></svg>'
};

const me = { name: 'Camille Martin', handle: '@camille_et_pistache', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80' };
const stories = [
  { name: 'Milo', image: 'photo-1552053831-71594a27632d' },
  { name: 'Nala', image: 'photo-1548199973-03cce0bbc87b' },
  { name: 'Oscar', image: 'photo-1537151608828-ea2b11777ee8' },
  { name: 'Ruby', image: 'photo-1517849845537-4d257902454a' },
  { name: 'Toby', image: 'photo-1583337130417-3346a1be7dee' },
  { name: 'Luna', image: 'photo-1551717743-49959800b1f6' }
];
const posts = [
  { id: 1, name: 'Julie & Oslo', handle: '@julie_oslo', avatar: 'photo-1494790108377-be9c29b29330', time: 'il y a 18 min', text: 'Notre première balade au bord du lac… Oslo a découvert les canards et je crois qu’il veut maintenant devenir leur meilleur ami 🦆🐶', tag: '#baladeduchien', image: 'photo-1470252649378-9c29740c9fa8', alt: 'Un chien profite d’une balade en plein air', likes: 248, comments: [{ name: 'Malo le beagle', text: 'Team canards ici aussi 😄' }, { name: 'Sarah', text: 'Cette bouille, je fonds !' }], followed: true, liked: false, saved: false, popular: 95 },
  { id: 2, name: 'Max & Pixel', handle: '@pixel_the_corgi', avatar: 'photo-1500648767791-00dcc994a43e', time: 'il y a 1 h', text: 'Le dimanche parfait : un rayon de soleil, un grand jardin et absolument aucun rappel quand on m’appelle. #vieDeChien #teamCorgi', tag: '#teamcorgi', image: 'photo-1530281700549-e82e7bf110d6', alt: 'Un chien court dans l’herbe', likes: 182, comments: [{ name: 'Luna & Co', text: 'Même programme chez nous !' }], followed: false, liked: false, saved: false, popular: 72 },
  { id: 3, name: 'Élodie & Paco', handle: '@paco_le_doux', avatar: 'photo-1531123897727-8f129e1688ce', time: 'il y a 3 h', text: 'Petit rappel tout doux : pensez à prendre de l’eau pendant les promenades quand il fait chaud. Paco valide sa gourde nomade 💧', tag: '#conseilcanin', image: 'photo-1543466835-00a7907e9de1', alt: 'Un chien regarde l’objectif', likes: 96, comments: [{ name: 'Julie & Oslo', text: 'Super conseil, merci !' }, { name: 'Theo', text: 'Paco a l’air si sage 🥹' }], followed: true, liked: false, saved: false, popular: 48 },
  { id: 4, name: 'Thomas & Rocket', handle: '@rocket_en_vadrouille', avatar: 'photo-1506794778202-cad84cf45f1d', time: 'hier', text: 'On a adopté Rocket il y a un mois. Un mois de câlins, de chaussettes disparues et de bonheur immense. Bienvenue à la maison ❤️', tag: '#adoption', image: 'photo-1587300003388-59208cc962cb', alt: 'Un chien adopté dans sa nouvelle maison', likes: 531, comments: [{ name: 'Pistache', text: 'Bienvenue Rocket 🐾' }], followed: false, liked: false, saved: false, popular: 99 }
];

const storiesEl = document.querySelector('#stories');
const feedEl = document.querySelector('#feed');
const toast = document.querySelector('#toast');
let currentFilter = 'all';
let searchQuery = '';
let toastTimer;

function dogImage(id, width = 120) {
  if (String(id).startsWith('http')) return id;
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&h=${width}&q=80`;
}
function renderStories() {
  storiesEl.innerHTML = `<button class="story add-story" data-compose aria-label="Ajouter une story"><span class="story-ring"><img src="${dogImage(stories[0].image, 100)}" alt=""><span class="story-plus">+</span></span><span class="story-name">Ta story</span></button>` + stories.map(story => `<button class="story" data-story="${story.name}"><span class="story-ring"><img src="${dogImage(story.image, 100)}" alt="Chien de ${story.name}"></span><span class="story-name">${story.name}</span></button>`).join('');
}
function postTemplate(post) {
  const faces = [post.avatar, 'photo-1534528741775-53994a69daeb', 'photo-1500648767791-00dcc994a43e'];
  return `<article class="post" data-post-id="${post.id}">
    <div class="post-head"><img class="avatar" src="${dogImage(post.avatar)}" alt=""><div><div class="post-author">${escapeHtml(post.name)} <span class="verified">✦</span></div><div class="post-meta">${escapeHtml(post.handle)} · ${escapeHtml(post.time)}</div></div><button class="more-button" aria-label="Plus d’options">···</button></div>
    <div class="post-copy">${formatText(post.text)}</div>
    ${post.image ? `<div class="post-image-wrap"><img class="post-image" src="${dogImage(post.image, 1000)}" alt="${escapeHtml(post.alt || 'Photo de chien')}" loading="lazy"><span class="post-tag">🐾 ${escapeHtml(post.tag || '#chien')}</span></div>` : ''}
    <div class="post-stats"><div class="reaction-faces">${faces.map(face => `<img src="${dogImage(face, 60)}" alt="">`).join('')}<span class="reaction-label">Aimé par <strong>${post.likes.toLocaleString('fr-FR')}</strong> personnes</span></div><span>${post.comments.length} commentaire${post.comments.length > 1 ? 's' : ''}</span></div>
    <div class="post-actions"><button class="post-action like-button ${post.liked ? 'liked' : ''}" data-action="like">${icons.heart} J’aime</button><button class="post-action" data-action="comment">${icons.message} Commenter</button><button class="post-action save-button ${post.saved ? 'liked' : ''}" data-action="save">${icons.bookmark} Enregistrer</button></div>
    <section class="comments" ${post.comments.length ? '' : 'hidden'}><div class="comment-list">${post.comments.map(comment => `<div class="comment"><strong>${escapeHtml(comment.name)}</strong>${escapeHtml(comment.text)}</div>`).join('')}</div><form class="comment-form"><input name="comment" placeholder="Écrire un commentaire…" aria-label="Écrire un commentaire" required><button type="submit">Publier</button></form></section>
  </article>`;
}
function escapeHtml(value) { return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]); }
function formatText(value) { return escapeHtml(value).replace(/(#[-\wÀ-ÿ]+)/g, '<span class="hashtag">$1</span>').replace(/\n/g, '<br>'); }
function renderFeed() {
  let visible = [...posts];
  if (currentFilter === 'following') visible = visible.filter(post => post.followed);
  if (currentFilter === 'popular') visible.sort((a, b) => b.popular - a.popular);
  if (searchQuery) visible = visible.filter(post => `${post.name} ${post.handle} ${post.text} ${post.tag}`.toLowerCase().includes(searchQuery));
  feedEl.innerHTML = visible.length ? visible.map(postTemplate).join('') : '<div class="empty-state">Aucun toutou trouvé pour le moment 🐾<br>Essaie une autre recherche !</div>';
}
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}
function openComposer() { document.querySelector('#modal').classList.add('open'); document.querySelector('#postText').focus(); }
function closeComposer() { document.querySelector('#modal').classList.remove('open'); }

renderStories();
renderFeed();

document.querySelectorAll('[data-compose]').forEach(button => button.addEventListener('click', openComposer));
document.querySelector('#closeModal').addEventListener('click', closeComposer);
document.querySelector('#modal').addEventListener('click', event => { if (event.target.id === 'modal') closeComposer(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeComposer(); });

document.querySelectorAll('.feed-tab').forEach(tab => tab.addEventListener('click', () => {
  document.querySelector('.feed-tab.active')?.classList.remove('active');
  tab.classList.add('active');
  currentFilter = tab.dataset.filter;
  renderFeed();
}));
document.querySelector('#searchInput').addEventListener('input', event => { searchQuery = event.target.value.trim().toLowerCase(); renderFeed(); });
document.querySelector('#publishForm').addEventListener('submit', event => {
  event.preventDefault();
  const text = document.querySelector('#postText').value.trim();
  const photo = document.querySelector('#postPhoto').value.trim();
  if (!text) return;
  const imageId = photo.match(/images\.unsplash\.com\/(photo-[\w-]+)/)?.[1] || (photo.startsWith('https://') ? photo : '');
  posts.unshift({ id: Date.now(), name: 'Camille & Pistache', handle: me.handle, avatar: 'photo-1534528741775-53994a69daeb', time: 'à l’instant', text, tag: '#maVieDeChien', image: imageId, alt: 'Photo partagée par Camille', likes: 0, comments: [], followed: true, liked: false, saved: false, popular: 0 });
  document.querySelector('#publishForm').reset();
  closeComposer();
  currentFilter = 'all';
  document.querySelectorAll('.feed-tab').forEach(tab => tab.classList.toggle('active', tab.dataset.filter === 'all'));
  renderFeed();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  showToast('Ta publication est en ligne 🐾');
});

document.addEventListener('click', event => {
  const story = event.target.closest('[data-story]');
  if (story) showToast(`La story de ${story.dataset.story} arrive bientôt 🐶`);
  const action = event.target.closest('[data-action]');
  if (action) {
    const article = action.closest('[data-post-id]');
    const post = posts.find(item => String(item.id) === article.dataset.postId);
    if (action.dataset.action === 'like') {
      post.liked = !post.liked;
      post.likes += post.liked ? 1 : -1;
      renderFeed();
    } else if (action.dataset.action === 'save') {
      post.saved = !post.saved;
      action.classList.toggle('liked', post.saved);
      action.innerHTML = `${icons.bookmark} ${post.saved ? 'Enregistré' : 'Enregistrer'}`;
      showToast(post.saved ? 'Publication enregistrée ✨' : 'Publication retirée des favoris');
    } else if (action.dataset.action === 'comment') {
      const comments = article.querySelector('.comments');
      comments.hidden = !comments.hidden;
      if (!comments.hidden) comments.querySelector('input').focus();
    }
  }
  const follow = event.target.closest('.follow-button');
  if (follow) {
    const isFollowing = follow.classList.toggle('following');
    follow.textContent = isFollowing ? 'Abonné·e' : 'Suivre';
    showToast(isFollowing ? 'Tu suis ce compte 🐾' : 'Tu ne suis plus ce compte');
  }
});

document.addEventListener('submit', event => {
  if (!event.target.matches('.comment-form')) return;
  event.preventDefault();
  const article = event.target.closest('[data-post-id]');
  const post = posts.find(item => String(item.id) === article.dataset.postId);
  const input = event.target.elements.comment;
  const text = input.value.trim();
  if (!text) return;
  post.comments.push({ name: 'Camille', text });
  renderFeed();
  const newArticle = document.querySelector(`[data-post-id="${post.id}"]`);
  newArticle.querySelector('.comments').hidden = false;
  showToast('Commentaire publié 💬');
});

document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => {
  document.querySelector('.nav-link.active')?.classList.remove('active');
  link.classList.add('active');
  const label = link.querySelector('span')?.textContent.trim();
  if (label && label !== 'Accueil') showToast(`${label} : bientôt disponible 🐾`);
  else window.scrollTo({ top: 0, behavior: 'smooth' });
}));
document.querySelectorAll('.trend').forEach(item => item.addEventListener('click', () => {
  const tag = item.querySelector('.trend-tag').textContent.replace('#', '');
  document.querySelector('#searchInput').value = tag;
  searchQuery = tag.toLowerCase();
  renderFeed();
}));
document.querySelector('.topbar .icon-button').addEventListener('click', () => showToast('Tu es à jour ! Aucun nouveau wouf 🐶'));
