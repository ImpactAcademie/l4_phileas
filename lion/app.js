const icons = {
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.8 8.8c0 4.2-8.8 10-8.8 10S3.2 13 3.2 8.8A4.7 4.7 0 0 1 12 6.3a4.7 4.7 0 0 1 8.8 2.5Z"/></svg>',
  comment: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.7 8.7 0 0 1-3.6-.8L4 20l1.4-3.5A7.2 7.2 0 0 1 4 12c0-4.2 3.6-7.5 8-7.5s8 2.8 8 7Z"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 16V3m0 0L7 8m5-5 5 5M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/></svg>'
};
const videos = [
  { video: 'https://videos.pexels.com/video-files/35966359/15248491_640_360_60fps.mp4', poster: 'https://images.pexels.com/videos/35966359/pexels-photo-35966359.jpeg?auto=compress&cs=tinysrgb&w=1000', source: 'https://www.pexels.com/video/majestic-lion-resting-in-sunlit-rocky-habitat-35966359/', name: 'Majestic lion resting in sunlit rocky habitat', creator: 'Wild Earth', handle: '@wildearth', avatar: 'photo-1534528741775-53994a69daeb', location: 'Réserve du Masai Mara', text: 'Le roi de la savane profite tranquillement des derniers rayons du soleil. 🦁🌅', tags: '#lion #savane #wildlife', likes: 24800, comments: [{ name: 'Lina', text: 'Quelle majesté 😍', avatar: 'photo-1494790108377-be9c29b29330', likes: 42 }, { name: 'Marc', text: 'On dirait qu’il pose pour la caméra !', avatar: 'photo-1500648767791-00dcc994a43e', likes: 17 }] },
  { video: 'https://videos.pexels.com/video-files/8153196/8153196-sd_640_360_25fps.mp4', poster: 'https://images.pexels.com/videos/8153196/animal-animal-portrait-big-carnivore-8153196.jpeg?auto=compress&cs=tinysrgb&w=1000', source: 'https://www.pexels.com/video/a-lion-lying-on-the-ground-8153196/', name: 'A lion lying on the ground', creator: 'Safari Stories', handle: '@safari.stories', avatar: 'photo-1500648767791-00dcc994a43e', location: 'Parc national Kruger', text: 'La sieste après le déjeuner, c’est sacré. Chut, le roi se repose. 😴', tags: '#lion #sieste #afrique', likes: 17300, comments: [{ name: 'Noah', text: 'Mood du dimanche 💤', avatar: 'photo-1506794778202-cad84cf45f1d', likes: 32 }] },
  { video: 'https://videos.pexels.com/video-files/37619869/15945545_640_360_30fps.mp4', poster: 'https://images.pexels.com/videos/37619869/pexels-photo-37619869.jpeg?auto=compress&cs=tinysrgb&w=1000', source: 'https://www.pexels.com/video/majestic-lioness-resting-in-natural-habitat-37619869/', name: 'Majestic lioness resting in natural habitat', creator: 'Wildlife Lens', handle: '@wildlife.lens', avatar: 'photo-1544005313-94ddf0286df2', location: 'Serengeti, Tanzanie', text: 'La lionne garde un œil sur son territoire. Une vraie reine. 👑', tags: '#lionne #nature #animaux', likes: 36200, comments: [{ name: 'Émilie', text: 'Elle est magnifique !', avatar: 'photo-1531123897727-8f129e1688ce', likes: 51 }, { name: 'Tom', text: 'La reine des lieux 🦁', avatar: 'photo-1506794778202-cad84cf45f1d', likes: 11 }] },
  { video: 'https://videos.pexels.com/video-files/37251748/15780980_640_360_30fps.mp4', poster: 'https://images.pexels.com/videos/37251748/pexels-photo-37251748.jpeg?auto=compress&cs=tinysrgb&w=1000', source: 'https://www.pexels.com/video/serene-lions-resting-in-natural-habitat-37251748/', name: 'Serene lions resting in natural habitat', creator: 'Nature en partage', handle: '@nature.partage', avatar: 'photo-1494790108377-be9c29b29330', location: 'Réserve de Samburu', text: 'Un moment calme au milieu de la vie sauvage. La nature n’a pas besoin de filtre. 🌾', tags: '#sauvage #lion #nature', likes: 19600, comments: [{ name: 'Sarah', text: 'Merci pour cette belle vidéo 💛', avatar: 'photo-1534528741775-53994a69daeb', likes: 26 }] },
  { video: 'https://videos.pexels.com/video-files/37294461/15797686_640_360_25fps.mp4', poster: 'https://images.pexels.com/videos/37294461/pexels-photo-37294461.jpeg?auto=compress&cs=tinysrgb&w=1000', source: 'https://www.pexels.com/video/majestic-white-lion-resting-in-nature-37294461/', name: 'Majestic white lion resting in nature', creator: 'Les grands félins', handle: '@grands.felins', avatar: 'photo-1531123897727-8f129e1688ce', location: 'Réserve naturelle, Afrique du Sud', text: 'Rare et impressionnant : le lion blanc dans son habitat naturel. 🤍🦁', tags: '#lionblanc #felins #wildlife', likes: 52100, comments: [{ name: 'Maya', text: 'Je ne savais pas qu’ils existaient !', avatar: 'photo-1494790108377-be9c29b29330', likes: 33 }] },
  { video: 'https://videos.pexels.com/video-files/37619934/15945627_360_640_30fps.mp4', poster: 'https://images.pexels.com/videos/37619934/pexels-photo-37619934.jpeg?auto=compress&cs=tinysrgb&w=1000', source: 'https://www.pexels.com/video/serene-african-lions-resting-in-natural-habitat-37619934/', name: 'Serene African lions resting in natural habitat', creator: 'Savane au quotidien', handle: '@savane.quotidien', avatar: 'photo-1506794778202-cad84cf45f1d', location: 'Parc national de Hwange', text: 'La famille reste toujours proche. Les petits apprennent en observant les grands. 🤎', tags: '#famille #lionceaux #safari', likes: 28700, comments: [{ name: 'Camille', text: 'Les liens familiaux sont incroyables 🥹', avatar: 'photo-1544005313-94ddf0286df2', likes: 28 }] },
  { video: 'https://videos.pexels.com/video-files/35023193/14837213_640_360_25fps.mp4', poster: 'https://images.pexels.com/videos/35023193/animals-lion-white-lion-wild-animals-35023193.jpeg?auto=compress&cs=tinysrgb&w=1000', source: 'https://www.pexels.com/video/white-lions-resting-in-the-wild-outdoors-35023193/', name: 'White lions resting in the wild outdoors', creator: 'Planète félins', handle: '@planete.felins', avatar: 'photo-1500648767791-00dcc994a43e', location: 'Afrique australe', text: 'Un pelage clair, une présence inoubliable. Protégeons les espaces sauvages. 🌍', tags: '#lion #protection #animaux', likes: 31400, comments: [{ name: 'Léo', text: 'Impressionnant ✨', avatar: 'photo-1506794778202-cad84cf45f1d', likes: 14 }] },
  { video: 'https://videos.pexels.com/video-files/7952682/7952682-sd_640_360_25fps.mp4', poster: 'https://images.pexels.com/videos/7952682/big-cat-carnivore-dangerous-flower-meadow-7952682.jpeg?auto=compress&cs=tinysrgb&w=1000', source: 'https://www.pexels.com/video/video-of-a-lion-7952682/', name: 'Video of a lion', creator: 'Au cœur du vivant', handle: '@coeur.vivant', avatar: 'photo-1534528741775-53994a69daeb', location: 'Réserve du Serengeti', text: 'Un instant suspendu au cœur de la savane. Chaque rencontre avec la faune est précieuse. 🌿', tags: '#lion #afrique #biodiversite', likes: 21400, comments: [{ name: 'Jade', text: 'Ça donne envie de protéger encore plus la nature.', avatar: 'photo-1531123897727-8f129e1688ce', likes: 18 }] },
  { video: 'https://videos.pexels.com/video-files/37284357/15794739_360_640_30fps.mp4', poster: 'https://images.pexels.com/videos/37284357/pexels-photo-37284357.jpeg?auto=compress&cs=tinysrgb&w=1000', source: 'https://www.pexels.com/video/playful-lion-cubs-in-natural-habitat-37284357/', name: 'Playful lion cubs in natural habitat', creator: 'Petits rois', handle: '@petits.rois', avatar: 'photo-1544005313-94ddf0286df2', location: 'Réserve de Naboisho', text: 'Quand les lionceaux ont encore toute l’énergie du monde. 😸🦁', tags: '#lionceaux #cute #sauvage', likes: 68400, comments: [{ name: 'Lina', text: 'Les petites pattes 🥰', avatar: 'photo-1494790108377-be9c29b29330', likes: 98 }, { name: 'Max', text: 'Je pourrais regarder ça des heures.', avatar: 'photo-1500648767791-00dcc994a43e', likes: 41 }] },
  { video: 'https://videos.pexels.com/video-files/37515895/15894467_640_360_30fps.mp4', poster: 'https://images.pexels.com/videos/37515895/pexels-photo-37515895.jpeg?auto=compress&cs=tinysrgb&w=1000', source: 'https://www.pexels.com/video/serengeti-lion-family-relaxing-in-the-wild-37515895/', name: 'Serengeti lion family relaxing in the wild', creator: 'Terre & Vie', handle: '@terre.et.vie', avatar: 'photo-1494790108377-be9c29b29330', location: 'Serengeti, Tanzanie', text: 'Un rare moment de tendresse dans la savane. La famille avant tout. 🧡', tags: '#famille #lion #safari', likes: 45200, comments: [{ name: 'Nina', text: 'J’adore ce genre de contenu 😍', avatar: 'photo-1534528741775-53994a69daeb', likes: 58 }] }
];

const feed = document.querySelector('#feed');
const panel = document.querySelector('#commentsPanel');
const toast = document.querySelector('#toast');
let activePost = null;
let activeVideo = null;
let nextIndex = 0;
let toastTimer;
let soundEnabled = false;

function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}
function imageUrl(id) {
  return String(id).startsWith('http') ? id : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=100&h=100&q=80`;
}
function formatCount(value) {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1).replace('.', ',')} M`;
  if (value >= 10000) return `${(value / 1000).toFixed(1).replace('.', ',')} k`;
  return Number(value).toLocaleString('fr-FR');
}
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}
function buildClip(data, index) {
  const postId = `lion-${index}`;
  const comments = structuredClone(data.comments);
  return `<article class="clip" data-post-id="${postId}" data-index="${index}" aria-label="Vidéo ${index + 1}">
    <video class="video-bg" playsinline muted loop preload="metadata" poster="${escapeHtml(data.poster)}" aria-label="${escapeHtml(data.name)}"><source src="${escapeHtml(data.video)}" type="video/mp4">La lecture vidéo n’est pas prise en charge.</video>
    <div class="clip-shade"></div><div class="progress"><span></span></div><div class="play-hint" aria-hidden="true">▶</div>
    <button class="sound-toggle" data-action="sound" aria-label="Activer le son">♫</button>
    <div class="clip-content">
      <div class="creator"><img class="creator-avatar" src="${imageUrl(data.avatar)}" alt=""><span class="creator-label"><span>${escapeHtml(data.creator)} <span class="verified">✦</span></span><span class="creator-handle">${escapeHtml(data.handle)}</span></span><button class="follow ${data.followed ? 'following' : ''}" data-action="follow">${data.followed ? 'Abonné·e' : 'Suivre'}</button></div>
      <p class="caption">${escapeHtml(data.text)}</p><div class="tags">${escapeHtml(data.tags)}</div>
      <div class="location"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>${escapeHtml(data.location)}</div>
      <div class="audio-credit"><span class="note-disc">♫</span><a href="${escapeHtml(data.source)}" target="_blank" rel="noopener noreferrer" aria-label="Source vidéo Pexels : ${escapeHtml(data.name)}">Vidéo Pexels · ${escapeHtml(data.name)}</a></div>
    </div>
    <div class="actions"><div class="action-wrap"><img class="creator-disc" src="${imageUrl(data.avatar)}" alt="Profil ${escapeHtml(data.creator)}"></div>
      <div class="action-wrap"><button class="round-action like-button" data-action="like" aria-label="J’aime">${icons.heart}</button><span class="action-count like-count">${formatCount(data.likes)}</span></div>
      <div class="action-wrap"><button class="round-action" data-action="comments" aria-label="Commentaires">${icons.comment}</button><span class="action-count comment-count">${comments.length}</span></div>
      <div class="action-wrap"><button class="round-action" data-action="share" aria-label="Partager">${icons.share}</button><span class="action-count">Partager</span></div>
    </div>
    <script type="application/json" class="clip-data">${JSON.stringify({ ...data, comments }).replace(/</g, '\\u003c')}</script>
  </article>`;
}
function appendClips(amount = 5) {
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < amount; index += 1) {
    const itemIndex = nextIndex++;
    const template = document.createElement('template');
    template.innerHTML = buildClip(videos[itemIndex % videos.length], itemIndex).trim();
    fragment.append(template.content.firstElementChild);
  }
  feed.append(fragment);
  feed.querySelectorAll('.clip:not([data-observed])').forEach(clip => {
    clip.dataset.observed = 'true';
    clipObserver.observe(clip);
    const video = clip.querySelector('video');
    video.addEventListener('timeupdate', () => {
      if (!video.duration) return;
      clip.querySelector('.progress span').style.width = `${video.currentTime / video.duration * 100}%`;
    });
    video.addEventListener('pause', () => clip.classList.add('paused'));
    video.addEventListener('playing', () => clip.classList.remove('paused'));
    video.addEventListener('click', () => {
      if (video.paused) video.play().catch(() => {});
      else video.pause();
    });
  });
}
function clipData(clip) {
  return JSON.parse(clip.querySelector('.clip-data').textContent);
}
function openComments(clip) {
  activePost = clip;
  document.querySelector('.app').classList.add('comments-open');
  const data = clipData(clip);
  document.querySelector('#panelCreator').textContent = data.creator;
  document.querySelector('#commentCount').textContent = `${data.comments.length} commentaire${data.comments.length === 1 ? '' : 's'}`;
  document.querySelector('#commentList').innerHTML = data.comments.map((comment, index) => `<article class="comment"><img src="${imageUrl(comment.avatar)}" alt=""><div class="comment-body"><strong>${escapeHtml(comment.name)}</strong><p>${escapeHtml(comment.text)}</p></div><button class="comment-like ${comment.liked ? 'liked' : ''}" data-comment-index="${index}" aria-label="Aimer ce commentaire">♥<small>${comment.likes || 0}</small></button></article>`).join('');
  panel.hidden = false;
  panel.classList.add('open');
  panel.setAttribute('aria-hidden', 'false');
  document.querySelector('#commentInput').focus({ preventScroll: true });
}
function closeComments() {
  panel.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');
  document.querySelector('.app').classList.remove('comments-open');
  panel.hidden = true;
}

const clipObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting || entry.intersectionRatio < 0.68) return;
    const clip = entry.target;
    if (activeVideo && activeVideo !== clip.querySelector('video')) activeVideo.pause();
    document.querySelector('.clip.active')?.classList.remove('active');
    clip.classList.add('active');
    activeVideo = clip.querySelector('video');
    activeVideo.muted = !soundEnabled;
    activeVideo.play().then(() => clip.classList.remove('paused')).catch(() => clip.classList.add('paused'));
    if (Number(clip.dataset.index) >= nextIndex - 3) appendClips(5);
  });
}, { root: feed, threshold: [0.68, 0.9] });

appendClips(5);

document.addEventListener('click', async event => {
  const action = event.target.closest('[data-action]');
  if (action) {
    const clip = action.closest('.clip');
    const data = clipData(clip);
    if (action.dataset.action === 'like') {
      data.liked = !data.liked;
      data.likes += data.liked ? 1 : -1;
      action.classList.toggle('liked', data.liked);
      action.closest('.action-wrap').querySelector('.like-count').textContent = formatCount(data.likes);
      clip.querySelector('.clip-data').textContent = JSON.stringify(data).replace(/</g, '\\u003c');
    } else if (action.dataset.action === 'follow') {
      data.followed = !data.followed;
      action.classList.toggle('following', data.followed);
      action.textContent = data.followed ? 'Abonné·e' : 'Suivre';
      clip.querySelector('.clip-data').textContent = JSON.stringify(data).replace(/</g, '\\u003c');
      showToast(data.followed ? `Tu suis ${data.creator} 🦁` : 'Abonnement retiré');
    } else if (action.dataset.action === 'comments') {
      openComments(clip);
    } else if (action.dataset.action === 'share') {
      const shareText = `${data.text} ${data.source}`;
      try {
        if (navigator.share) await navigator.share({ title: 'Lion — instant sauvage', text: data.text, url: data.source });
        else { await navigator.clipboard.writeText(shareText); showToast('Lien de la vidéo copié !'); }
      } catch (error) {
        if (error.name !== 'AbortError') showToast('Ouvre le crédit Pexels pour partager cette vidéo.');
      }
    } else if (action.dataset.action === 'sound') {
      soundEnabled = !soundEnabled;
      document.querySelectorAll('.video-bg').forEach(video => { video.muted = !soundEnabled; });
      document.querySelectorAll('.sound-toggle').forEach(button => { button.textContent = soundEnabled ? '🔊' : '♫'; button.setAttribute('aria-label', soundEnabled ? 'Couper le son' : 'Activer le son'); });
      showToast(soundEnabled ? 'Son activé 🔊' : 'Son coupé');
    }
  }
  if (event.target.closest('#closePanel')) closeComments();
  if (event.target.id === 'commentsPanel') closeComments();
  if (event.target.closest('#searchButton')) showToast('Fais défiler pour découvrir d’autres lions 🦁');
  const commentLike = event.target.closest('[data-comment-index]');
  if (commentLike && activePost) {
    const data = clipData(activePost);
    const comment = data.comments[Number(commentLike.dataset.commentIndex)];
    comment.liked = !comment.liked;
    comment.likes = (comment.likes || 0) + (comment.liked ? 1 : -1);
    commentLike.classList.toggle('liked', comment.liked);
    commentLike.querySelector('small').textContent = comment.likes;
    activePost.querySelector('.clip-data').textContent = JSON.stringify(data).replace(/</g, '\\u003c');
  }
});

document.querySelector('#commentForm').addEventListener('submit', event => {
  event.preventDefault();
  if (!activePost) return;
  const input = document.querySelector('#commentInput');
  const text = input.value.trim();
  if (!text) return;
  const data = clipData(activePost);
  data.comments.push({ name: 'Toi', text, avatar: 'photo-1534528741775-53994a69daeb', likes: 0 });
  activePost.querySelector('.clip-data').textContent = JSON.stringify(data).replace(/</g, '\\u003c');
  activePost.querySelector('.comment-count').textContent = data.comments.length;
  input.value = '';
  openComments(activePost);
  showToast('Commentaire publié 💬');
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeComments();
  if (event.key === 'ArrowDown') { event.preventDefault(); activeVideo?.closest('.clip').nextElementSibling?.scrollIntoView({ behavior: 'smooth' }); }
  if (event.key === 'ArrowUp') { event.preventDefault(); activeVideo?.closest('.clip').previousElementSibling?.scrollIntoView({ behavior: 'smooth' }); }
});
document.querySelector('#commentsPanel').addEventListener('touchstart', event => { window.panelTouchX = event.changedTouches[0].screenX; }, { passive: true });
document.querySelector('#commentsPanel').addEventListener('touchend', event => { if (event.changedTouches[0].screenX - (window.panelTouchX || 0) > 90) closeComments(); }, { passive: true });
document.querySelectorAll('.top-tabs button').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.top-tabs button.active')?.classList.remove('active');
  button.classList.add('active');
  showToast(button.dataset.tab === 'following' ? 'Les vidéos des comptes suivis arrivent bientôt' : 'Fil découverte activé 🦁');
}));
document.querySelector('#challengeButton').addEventListener('click', () => showToast('Défi rejoint ! À toi de jouer 🦁'));
