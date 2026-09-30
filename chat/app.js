const icons = {
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.8 8.8c0 4.2-8.8 10-8.8 10S3.2 13 3.2 8.8A4.7 4.7 0 0 1 12 6.3a4.7 4.7 0 0 1 8.8 2.5Z"/></svg>',
  message: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.7 8.7 0 0 1-3.6-.8L4 20l1.4-3.5A7.2 7.2 0 0 1 4 12c0-4.2 3.6-7.5 8-7.5s8 2.8 8 7Z"/></svg>',
  bookmark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-4-6 4z"/></svg>'
};
const avatar = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80';
const seedPosts = [
  { id: 'p1', name: 'Léa & Chaussette', handle: '@chaussette_la_royale', avatar: 'photo-1494790108377-be9c29b29330', time: 'il y a 12 min', text: 'J’ai installé un nouveau panier tout doux… Chaussette a décidé que le carton était beaucoup mieux 📦😹 #vieDeChat #chat', image: 'photo-1514888286974-6c03e2ca1dba', alt: 'Un chat confortablement installé', likes: 324, comments: [{ name: 'Mimi la curieuse', text: 'Le carton, c’est toujours mieux !' }, { name: 'Tom', text: 'Classique 😂' }], followed: true, popular: 94 },
  { id: 'p2', name: 'Nicolas & Sushi', handle: '@sushi_le_tigré', avatar: 'photo-1500648767791-00dcc994a43e', time: 'il y a 45 min', text: 'La sieste au soleil est officiellement mon activité préférée. Ne pas déranger avant demain 😴☀️ #sieste', image: 'photo-1573865526739-10659fec78a5', alt: 'Un chat tigré qui se repose', likes: 187, comments: [{ name: 'Léa & Chaussette', text: 'Quelle vie de rêve !' }], followed: false, popular: 71 },
  { id: 'p3', name: 'Inès du refuge des Lilas', handle: '@refuge_des_lilas', avatar: 'photo-1544005313-94ddf0286df2', time: 'il y a 2 h', text: 'Voici Pistou, 4 mois, grand amateur de plumeaux et de genoux. Il cherche une famille pour la vie. Venez le rencontrer ce week-end 💜 #adoption #chaton', image: 'photo-1511044568932-338cba0ad803', alt: 'Un chaton à l’adoption', likes: 496, comments: [{ name: 'Alex & Moustache', text: 'Il est adorable 🥹' }, { name: 'Pauline', text: 'Je partage autour de moi !' }], followed: true, popular: 99 },
  { id: 'p4', name: 'Camille & Figaro', handle: '@figaro_fait_sa_loi', avatar: 'photo-1534528741775-53994a69daeb', time: 'hier', text: 'Petit rappel : les chats ont besoin de cachettes tranquilles et de hauteur pour se sentir bien à la maison. Figaro valide son arbre à chat 🌿', image: 'photo-1533738363-b7f9aef128ce', alt: 'Un chat curieux pose pour une photo', likes: 102, comments: [{ name: 'Moustache', text: 'Merci pour le conseil ! 🐾' }], followed: false, popular: 58 }
];

function loadPosts() {
  try {
    const saved = JSON.parse(localStorage.getItem('chatouille-posts') || '[]');
    return [...saved, ...seedPosts];
  } catch {
    return [...seedPosts];
  }
}
const posts = loadPosts();
let filter = 'all';
let query = '';
let toastTimer;
const feed = document.querySelector('#feed');
const stories = [
  ['Moustache', 'photo-1514888286974-6c03e2ca1dba'], ['Mimi', 'photo-1573865526739-10659fec78a5'],
  ['Pistou', 'photo-1511044568932-338cba0ad803'], ['Simba', 'photo-1533738363-b7f9aef128ce'],
  ['Pixel', 'photo-1495360010541-f48722b34f7d'], ['Luna', 'photo-1513364776144-60967b0f800f']
];

function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}
function photoUrl(id, size = 120) {
  return String(id).startsWith('http') ? id : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${size}&h=${size}&q=80`;
}
function savePosts() {
  try { localStorage.setItem('chatouille-posts', JSON.stringify(posts.filter(post => post.createdLocally))); }
  catch { showToast('Stockage indisponible : cette publication ne sera pas gardée après fermeture.'); }
}
function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2300);
}
function renderStories() {
  document.querySelector('#stories').innerHTML = `<button class="story add-story" data-compose aria-label="Ajouter une story"><span class="story-ring"><img src="${photoUrl(stories[0][1], 100)}" alt=""><span class="story-plus">+</span></span><span class="story-name">Ta story</span></button>` + stories.map(([name, image]) => `<button class="story" data-story="${escapeHtml(name)}"><span class="story-ring"><img src="${photoUrl(image, 100)}" alt="Chat ${escapeHtml(name)}"></span><span class="story-name">${escapeHtml(name)}</span></button>`).join('');
}
function postTemplate(post) {
  const comments = post.comments || [];
  return `<article class="post" data-post-id="${escapeHtml(post.id)}">
    <div class="post-head"><img class="avatar" src="${photoUrl(post.avatar)}" alt=""><div><div class="post-author">${escapeHtml(post.name)} <span class="verified">✦</span></div><div class="post-meta">${escapeHtml(post.handle)} · ${escapeHtml(post.time)}</div></div><button class="more-button" aria-label="Plus d’options">···</button></div>
    <div class="post-copy">${escapeHtml(post.text).replace(/(#[-\wÀ-ÿ]+)/g, '<span class="hashtag">$1</span>').replace(/\n/g, '<br>')}</div>
    ${post.image ? `<div class="post-image-wrap"><img class="post-image" src="${escapeHtml(photoUrl(post.image, 1000))}" alt="${escapeHtml(post.alt || 'Photo de chat')}" loading="lazy"><span class="post-tag">🐾 #chat</span></div>` : ''}
    <div class="post-stats"><div class="reaction-faces"><img src="${photoUrl(post.avatar, 60)}" alt=""><img src="${avatar}" alt=""><span class="reaction-label">Aimé par <strong>${Number(post.likes).toLocaleString('fr-FR')}</strong> personnes</span></div><span>${comments.length} commentaire${comments.length > 1 ? 's' : ''}</span></div>
    <div class="post-actions"><button class="post-action like-button ${post.liked ? 'liked' : ''}" data-action="like">${icons.heart} J’aime</button><button class="post-action" data-action="comment">${icons.message} Commenter</button><button class="post-action save-button ${post.saved ? 'liked' : ''}" data-action="save">${icons.bookmark} ${post.saved ? 'Enregistré' : 'Enregistrer'}</button></div>
    <section class="comments" ${post.commentsOpen || comments.length ? '' : 'hidden'}><div class="comment-list">${comments.map(comment => `<div class="comment"><strong>${escapeHtml(comment.name)}</strong>${escapeHtml(comment.text)}</div>`).join('')}</div><form class="comment-form"><input name="comment" placeholder="Écrire un commentaire…" aria-label="Écrire un commentaire" required><button type="submit">Publier</button></form></section>
  </article>`;
}
function renderFeed() {
  let visible = [...posts];
  if (filter === 'following') visible = visible.filter(post => post.followed);
  if (filter === 'popular') visible.sort((a, b) => b.popular - a.popular);
  if (query) visible = visible.filter(post => `${post.name} ${post.handle} ${post.text}`.toLowerCase().includes(query));
  feed.innerHTML = visible.length ? visible.map(postTemplate).join('') : '<div class="empty-state">Aucun minou trouvé pour le moment 🐾<br>Essaie une autre recherche !</div>';
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
  filter = tab.dataset.filter;
  renderFeed();
}));
document.querySelector('#searchInput').addEventListener('input', event => { query = event.target.value.trim().toLowerCase(); renderFeed(); });
document.querySelector('#publishForm').addEventListener('submit', event => {
  event.preventDefault();
  const text = document.querySelector('#postText').value.trim();
  const rawPhoto = document.querySelector('#postPhoto').value.trim();
  if (!text) return;
  const image = rawPhoto.match(/images\.unsplash\.com\/(photo-[\w-]+)/)?.[1] || (rawPhoto.startsWith('https://') ? rawPhoto : '');
  posts.unshift({ id: `local-${Date.now()}`, name: 'Alex & Moustache', handle: '@alex_et_moustache', avatar: 'photo-1534528741775-53994a69daeb', time: 'à l’instant', text, image, alt: 'Photo partagée par Alex', likes: 0, comments: [], followed: true, popular: 0, createdLocally: true });
  savePosts();
  event.target.reset();
  closeComposer();
  filter = 'all';
  document.querySelectorAll('.feed-tab').forEach(tab => tab.classList.toggle('active', tab.dataset.filter === 'all'));
  renderFeed();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  showToast('Ta publication est en ligne 😻');
});
document.addEventListener('click', event => {
  const story = event.target.closest('[data-story]');
  if (story) showToast(`La story de ${story.dataset.story} arrive bientôt 😺`);
  const action = event.target.closest('[data-action]');
  if (action) {
    const post = posts.find(item => String(item.id) === action.closest('[data-post-id]').dataset.postId);
    if (action.dataset.action === 'like') {
      post.liked = !post.liked;
      post.likes += post.liked ? 1 : -1;
      savePosts(); renderFeed();
    } else if (action.dataset.action === 'save') {
      post.saved = !post.saved;
      action.classList.toggle('liked', post.saved);
      action.innerHTML = `${icons.bookmark} ${post.saved ? 'Enregistré' : 'Enregistrer'}`;
      showToast(post.saved ? 'Publication enregistrée ✨' : 'Publication retirée des favoris');
    } else if (action.dataset.action === 'comment') {
      post.commentsOpen = true;
      renderFeed();
      document.querySelector(`[data-post-id="${post.id}"] .comment-form input`)?.focus();
    }
  }
  const follow = event.target.closest('.follow-button');
  if (follow) {
    const following = follow.classList.toggle('following');
    follow.textContent = following ? 'Abonné·e' : 'Suivre';
    showToast(following ? 'Tu suis ce compte 🐾' : 'Tu ne suis plus ce compte');
  }
  const trend = event.target.closest('.trend');
  if (trend) {
    const tag = trend.dataset.tag;
    document.querySelector('#searchInput').value = tag;
    query = tag.toLowerCase(); renderFeed();
  }
});
document.addEventListener('submit', event => {
  if (!event.target.matches('.comment-form')) return;
  event.preventDefault();
  const post = posts.find(item => String(item.id) === event.target.closest('[data-post-id]').dataset.postId);
  const text = event.target.elements.comment.value.trim();
  if (!text) return;
  post.comments.push({ name: 'Alex', text });
  post.commentsOpen = true;
  savePosts(); renderFeed();
  showToast('Commentaire publié 💬');
});
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => {
  document.querySelector('.nav-link.active')?.classList.remove('active');
  link.classList.add('active');
  const label = link.dataset.nav;
  if (label !== 'Accueil') showToast(`${label} : bientôt disponible 🐾`);
  else window.scrollTo({ top: 0, behavior: 'smooth' });
}));
document.querySelector('#notifications').addEventListener('click', () => showToast('Tout est calme dans le panier 😽'));
