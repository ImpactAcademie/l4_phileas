const heartIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.8 8.8c0 4.2-8.8 10-8.8 10S3.2 13 3.2 8.8A4.7 4.7 0 0 1 12 6.3a4.7 4.7 0 0 1 8.8 2.5Z"/></svg>';
const commentIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.7 8.7 0 0 1-3.6-.8L4 20l1.4-3.5A7.2 7.2 0 0 1 4 12c0-4.2 3.6-7.5 8-7.5s8 2.8 8 7Z"/></svg>';
const shareIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 16V3m0 0L7 8m5-5 5 5M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/></svg>';
const elephantPosts = [
  { id: 'e1', creator: 'Wildlife Diaries', handle: '@wildlife.diaries', avatar: 'photo-1494790108377-be9c29b29330', image: 'photo-1564760055775-d63b17a55c44', text: 'La douche du matin, version pachyderme 🐘💦 Il n’y a pas meilleur réveil dans la savane.', tags: '#elephant #wildlife #nature', place: 'Parc national d’Amboseli', likes: 24800, comments: [{ name: 'Lina', text: 'Le bonheur à l’état pur 🥹', avatar: 'photo-1534528741775-53994a69daeb', likes: 42 }, { name: 'Marco', text: 'J’aimerais être à sa place !', avatar: 'photo-1500648767791-00dcc994a43e', likes: 16 }, { name: 'sarah.nature', text: 'La trompe qui arrose tout le monde 😂', avatar: 'photo-1544005313-94ddf0286df2', likes: 8 }], followed: false },
  { id: 'e2', creator: 'Terre Sauvage', handle: '@terresauvage', avatar: 'photo-1544005313-94ddf0286df2', image: 'photo-1557050543-4d5f4e07ef46', text: 'Le troupeau avance ensemble. Chez les éléphants, la famille, c’est pour la vie. 🤎', tags: '#famille #elephants #safari', place: 'Réserve du Masai Mara', likes: 18300, comments: [{ name: 'Noah', text: 'Quelle scène incroyable !', avatar: 'photo-1506794778202-cad84cf45f1d', likes: 31 }, { name: 'Emma', text: 'Les bébés qui suivent, je fonds 🥲', avatar: 'photo-1531123897727-8f129e1688ce', likes: 12 }], followed: true },
  { id: 'e3', creator: 'Éléphants & Co', handle: '@elephantsandco', avatar: 'photo-1500648767791-00dcc994a43e', image: 'photo-1561731216-c3a4d99437d5', text: 'Un petit pas pour lui, un grand pas pour la sieste 😴🌿', tags: '#sieste #elephantlove #animaux', place: 'Sanctuaire de Chiang Mai', likes: 39500, comments: [{ name: 'Julie', text: 'Même énergie le lundi matin 😂', avatar: 'photo-1494790108377-be9c29b29330', likes: 73 }, { name: 'mila', text: 'Trop mignon son petit œil !', avatar: 'photo-1534528741775-53994a69daeb', likes: 19 }, { name: 'Leo', text: 'Le meilleur contenu de mon fil.', avatar: 'photo-1500648767791-00dcc994a43e', likes: 6 }], followed: false },
  { id: 'e4', creator: 'Planète Animale', handle: '@planeteanimale', avatar: 'photo-1534528741775-53994a69daeb', image: 'photo-1507146426996-ef05306b995a', text: 'Un petit rappel tout doux : gardons nos distances et laissons les animaux sauvages vivre à leur rythme. 🌍', tags: '#respect #wildlife #protection', place: 'Parc national Kruger', likes: 12100, comments: [{ name: 'Chloé', text: 'Merci de le rappeler 💚', avatar: 'photo-1544005313-94ddf0286df2', likes: 24 }], followed: true }
];

let activePanelPost = null;
let toastTimer;
let touchStartY = 0;
const feed = document.querySelector('#feed');
const panel = document.querySelector('#commentsPanel');
const panelList = document.querySelector('#commentList');
const toast = document.querySelector('#toast');

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}
function imageUrl(id, size = 120) {
  return String(id).startsWith('http') ? id : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${size}&h=${size}&q=85`;
}
function formatCount(count) {
  if (count >= 1000000) return `${(count / 1000000).toFixed(1).replace('.', ',')} M`;
  if (count >= 10000) return `${(count / 1000).toFixed(1).replace('.', ',')} k`;
  return Number(count).toLocaleString('fr-FR');
}
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2100);
}
function renderClips() {
  feed.innerHTML = elephantPosts.map((post, index) => `
    <article class="clip ${index === 0 ? 'active' : ''}" data-post-id="${post.id}" aria-label="Vidéo ${index + 1} sur ${elephantPosts.length}">
      <div class="clip-background" style="background-image:url('${imageUrl(post.image, 1200)}')" role="img" aria-label="Éléphant dans son habitat naturel"></div>
      <div class="clip-glow"></div>
      <div class="progress-row" aria-hidden="true"><span class="progress-segment"><span></span></span></div>
      <button class="sound-toggle" data-action="sound" aria-label="Activer le son">♫</button>
      <div class="clip-content">
        <div class="creator"><img class="creator-avatar" src="${imageUrl(post.avatar)}" alt=""><span class="creator-name">${escapeHtml(post.creator)} <span class="verified">✦</span></span><button class="follow ${post.followed ? 'following' : ''}" data-action="follow">${post.followed ? 'Abonné·e' : 'Suivre'}</button></div>
        <p class="caption">${escapeHtml(post.text)}</p>
        <div class="hashtags">${escapeHtml(post.tags)}</div>
        <div class="location"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>${escapeHtml(post.place)}</div>
        <div class="sound-row"><span class="sound-note">♫</span> Son original · ${escapeHtml(post.creator)}</div>
      </div>
      <div class="actions">
        <div class="action-wrap"><img class="avatar-disc" src="${imageUrl(post.avatar)}" alt="Profil de ${escapeHtml(post.creator)}"></div>
        <div class="action-wrap"><button class="round-action like-button ${post.liked ? 'liked' : ''}" data-action="like" aria-label="J’aime">${heartIcon}</button><span class="action-count like-count">${formatCount(post.likes)}</span></div>
        <div class="action-wrap"><button class="round-action" data-action="comments" aria-label="Commentaires">${commentIcon}</button><span class="action-count">${formatCount(post.comments.length)}</span></div>
        <div class="action-wrap"><button class="round-action save-button ${post.saved ? 'liked' : ''}" data-action="save" aria-label="Enregistrer">${shareIcon}</button><span class="action-count">Partager</span></div>
      </div>
    </article>`).join('');
}
function openComments(post) {
  activePanelPost = post;
  document.querySelector('#panelCreator').textContent = post.creator;
  document.querySelector('#panelCommentCount').textContent = `${post.comments.length} commentaires`;
  panelList.innerHTML = post.comments.map((comment, index) => `<div class="comment"><img src="${imageUrl(comment.avatar)}" alt=""><div class="comment-body"><strong>${escapeHtml(comment.name)}</strong><p>${escapeHtml(comment.text)}</p></div><button class="comment-like ${comment.liked ? 'liked' : ''}" data-comment-index="${index}" aria-label="Aimer le commentaire">♥<small>${comment.likes}</small></button></div>`).join('');
  panel.hidden = false;
  panel.classList.add('open');
  panel.setAttribute('aria-hidden', 'false');
  document.querySelector('#commentInput').focus({ preventScroll: true });
}
function closeComments() {
  panel.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');
  if (window.innerWidth <= 800) panel.hidden = true;
}
function getPostFrom(element) {
  return elephantPosts.find(post => post.id === element.closest('[data-post-id]')?.dataset.postId);
}

renderClips();
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    document.querySelectorAll('.clip.active').forEach(clip => clip.classList.remove('active'));
    entry.target.classList.add('active');
  });
}, { root: feed, threshold: 0.65 });
document.querySelectorAll('.clip').forEach(clip => observer.observe(clip));

document.addEventListener('click', async event => {
  const action = event.target.closest('[data-action]');
  if (action) {
    const post = getPostFrom(action);
    if (action.dataset.action === 'like') {
      post.liked = !post.liked;
      post.likes += post.liked ? 1 : -1;
      action.classList.toggle('liked', post.liked);
      action.closest('.action-wrap').querySelector('.like-count').textContent = formatCount(post.likes);
    } else if (action.dataset.action === 'follow') {
      post.followed = !post.followed;
      action.textContent = post.followed ? 'Abonné·e' : 'Suivre';
      action.classList.toggle('following', post.followed);
      showToast(post.followed ? `Tu suis ${post.creator} 🐘` : 'Abonnement retiré');
    } else if (action.dataset.action === 'comments') {
      openComments(post);
    } else if (action.dataset.action === 'save') {
      try {
        await navigator.clipboard.writeText(`${post.text} ${post.tags}`);
        showToast('Lien de la publication copié !');
      } catch {
        showToast('Publication prête à être partagée 🐘');
      }
    } else if (action.dataset.action === 'sound') {
      const soundOn = action.dataset.sound !== 'on';
      action.dataset.sound = soundOn ? 'on' : 'off';
      action.textContent = soundOn ? '🔊' : '♫';
      action.setAttribute('aria-label', soundOn ? 'Couper le son' : 'Activer le son');
      showToast('Ces extraits sont présentés sans audio');
    }
  }
  if (event.target.closest('#closePanel')) closeComments();
  if (event.target.closest('#searchButton')) showToast('La recherche arrive bientôt 🔎');
  if (event.target.closest('#challengeButton')) showToast('Défi rejoint ! Partage ton plus beau souvenir 🐘');
  const commentLike = event.target.closest('[data-comment-index]');
  if (commentLike && activePanelPost) {
    const comment = activePanelPost.comments[Number(commentLike.dataset.commentIndex)];
    comment.liked = !comment.liked;
    comment.likes += comment.liked ? 1 : -1;
    commentLike.classList.toggle('liked', comment.liked);
    commentLike.querySelector('small').textContent = comment.likes;
  }
});

document.querySelector('#commentForm').addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('#commentInput');
  const text = input.value.trim();
  if (!text || !activePanelPost) return;
  activePanelPost.comments.push({ name: 'Toi', text, avatar: 'photo-1534528741775-53994a69daeb', likes: 0 });
  input.value = '';
  openComments(activePanelPost);
  const commentCount = document.querySelector(`[data-post-id="${activePanelPost.id}"] [data-action="comments"]`).closest('.action-wrap').querySelector('.action-count');
  commentCount.textContent = formatCount(activePanelPost.comments.length);
  showToast('Commentaire publié 💬');
});

document.querySelectorAll('.top-tabs span').forEach(tab => tab.addEventListener('click', () => {
  document.querySelector('.top-tabs .active')?.classList.remove('active');
  tab.classList.add('active');
  showToast(tab.textContent === 'Suivis' ? 'Les comptes suivis arrivent bientôt' : 'Tu découvres les éléphants 🌿');
}));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeComments(); });
document.querySelector('#commentsPanel').addEventListener('click', event => { if (event.target.id === 'commentsPanel') closeComments(); });
let touchStartX = 0;
panel.addEventListener('touchstart', event => { touchStartX = event.changedTouches[0].screenX; }, { passive: true });
panel.addEventListener('touchend', event => { if (event.changedTouches[0].screenX - touchStartX > 90) closeComments(); }, { passive: true });
