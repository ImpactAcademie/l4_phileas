const icons = {
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.8 8.8c0 4.2-8.8 10-8.8 10S3.2 13 3.2 8.8A4.7 4.7 0 0 1 12 6.3a4.7 4.7 0 0 1 8.8 2.5Z"/></svg>',
  comment: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.7 8.7 0 0 1-3.6-.8L4 20l1.4-3.5A7.2 7.2 0 0 1 4 12c0-4.2 3.6-7.5 8-7.5s8 2.8 8 7Z"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 16V3m0 0L7 8m5-5 5 5M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/></svg>'
};
const clips = [
  { video: 'https://videos.pexels.com/video-files/34803054/14756465_360_640_30fps.mp4', poster: 'https://images.pexels.com/videos/34803054/gray-wolf-scent-rolling-34803054.jpeg?auto=compress&cs=tinysrgb&w=1000', source: 'https://www.pexels.com/video/gray-wolf-engaging-in-scent-rolling-by-pond-34803054/', title: 'Un instant dans la forêt', creator: 'Wild North', handle: '@wild.north', avatar: 'photo-1494790108377-be9c29b29330', place: 'Forêt boréale', text: 'Un loup gris explore les odeurs de son territoire. Ici, chaque détail compte. 🌲', tags: '#loup #foret #nature', likes: 28600, comments: [{ name: 'Lina', text: 'On dirait une scène de documentaire !', avatar: 'photo-1534528741775-53994a69daeb', likes: 31 }, { name: 'Marc', text: 'Magnifique animal 🐺', avatar: 'photo-1500648767791-00dcc994a43e', likes: 14 }] },
  { video: 'https://videos.pexels.com/video-files/29211443/12610915_640_360_25fps.mp4', poster: 'https://images.pexels.com/videos/29211443/animals-white-wolf-wild-animal-wildlife-animal-29211443.jpeg?auto=compress&cs=tinysrgb&w=1000', source: 'https://www.pexels.com/video/serene-white-wolf-resting-in-sunlit-garden-29211443/', title: 'Le calme du grand blanc', creator: 'Terre Sauvage', handle: '@terre.sauvage', avatar: 'photo-1544005313-94ddf0286df2', place: 'Clairière ensoleillée', text: 'Un moment de repos, loin du bruit. Le loup blanc profite de la lumière. 🤍', tags: '#loupblanc #animal #wildlife', likes: 19400, comments: [{ name: 'Emma', text: 'Quelle belle lumière !', avatar: 'photo-1531123897727-8f129e1688ce', likes: 22 }] },
  { video: 'https://videos.pexels.com/video-files/15954020/15954020-sd_360_640_30fps.mp4', poster: 'https://images.pexels.com/videos/15954020/animal-animal-live-animal-photography-animal-portrait-15954020.jpeg?auto=compress&cs=tinysrgb&w=1000', source: 'https://www.pexels.com/video/lupo-15954020/', title: 'Le regard du loup', creator: 'Instinct sauvage', handle: '@instinct.sauvage', avatar: 'photo-1500648767791-00dcc994a43e', place: 'Au cœur des bois', text: 'Un regard puissant, une présence silencieuse. La nature à l’état pur. 🐺', tags: '#loup #regard #sauvage', likes: 41300, comments: [{ name: 'Noah', text: 'Il est impressionnant !', avatar: 'photo-1506794778202-cad84cf45f1d', likes: 42 }, { name: 'Mila', text: 'La beauté à l’état sauvage ✨', avatar: 'photo-1494790108377-be9c29b29330', likes: 17 }] },
  { video: 'https://videos.pexels.com/video-files/8138139/8138139-sd_640_360_24fps.mp4', poster: 'https://images.pexels.com/videos/8138139/animal-carnivore-dangerous-furry-8138139.jpeg?auto=compress&cs=tinysrgb&w=1000', source: 'https://www.pexels.com/video/video-of-a-wolf-in-jungle-8138139/', title: 'Dans son élément', creator: 'L’appel du Nord', handle: '@appel.du.nord', avatar: 'photo-1534528741775-53994a69daeb', place: 'Forêt profonde', text: 'Il avance sans bruit entre les arbres. Le territoire est vaste, la liberté aussi. 🌿', tags: '#foret #loupgris #liberte', likes: 15800, comments: [{ name: 'Jade', text: 'La forêt semble magique 🌲', avatar: 'photo-1531123897727-8f129e1688ce', likes: 13 }] },
  { video: 'https://videos.pexels.com/video-files/8462000/8462000-sd_640_360_25fps.mp4', poster: 'https://images.pexels.com/videos/8462000/animal-carnivore-dangerous-furry-8462000.jpeg?auto=compress&cs=tinysrgb&w=1000', source: 'https://www.pexels.com/video/a-wolf-in-its-natural-habitat-8462000/', title: 'Libre par nature', creator: 'Planète Faune', handle: '@planete.faune', avatar: 'photo-1506794778202-cad84cf45f1d', place: 'Habitat naturel', text: 'Le loup suit son chemin, libre et vigilant. Préservons les espaces sauvages. 🌍', tags: '#protection #faune #loup', likes: 34700, comments: [{ name: 'Tom', text: 'Protégeons-les 💚', avatar: 'photo-1500648767791-00dcc994a43e', likes: 28 }] },
  { video: 'https://videos.pexels.com/video-files/10727436/10727436-sd_640_360_24fps.mp4', poster: 'https://images.pexels.com/videos/10727436/dangerous-european-furry-predator-10727436.jpeg?auto=compress&cs=tinysrgb&w=1000', source: 'https://www.pexels.com/video/wolf-looking-around-10727436/', title: 'À l’écoute de la meute', creator: 'Légendes de forêt', handle: '@legendes.foret', avatar: 'photo-1531123897727-8f129e1688ce', place: 'Territoire du loup', text: 'Une oreille tournée vers le vent, l’autre vers les siens. Toujours connectés. 🐾', tags: '#meute #loup #instinct', likes: 22900, comments: [{ name: 'Sacha', text: 'Ils sont tellement intelligents.', avatar: 'photo-1544005313-94ddf0286df2', likes: 20 }] },
  { video: 'https://videos.pexels.com/video-files/27271989/12107380_640_360_30fps.mp4', poster: 'https://images.pexels.com/videos/27271989/pexels-photo-27271989.jpeg?auto=compress&cs=tinysrgb&w=1000', source: 'https://www.pexels.com/video/a-group-of-white-wolves-are-standing-in-the-dirt-27271989/', title: 'Ensemble, la meute', creator: 'Wildlife Moments', handle: '@wildlife.moments', avatar: 'photo-1494790108377-be9c29b29330', place: 'Plaine sauvage', text: 'Dans la meute, chaque loup a sa place. La force du groupe, c’est le lien. 🤎', tags: '#meute #loups #famille', likes: 52100, comments: [{ name: 'Nina', text: 'Une vraie famille 🐺', avatar: 'photo-1534528741775-53994a69daeb', likes: 48 }, { name: 'Leo', text: 'J’adore les voir ensemble.', avatar: 'photo-1500648767791-00dcc994a43e', likes: 19 }] },
  { video: 'https://videos.pexels.com/video-files/16871503/16871503-sd_640_360_30fps.mp4', poster: 'https://images.pexels.com/videos/16871503/carnivore-dangerous-furry-lying-16871503.jpeg?auto=compress&cs=tinysrgb&w=1000', source: 'https://www.pexels.com/video/europaischer-grauwolf-16871503/', title: 'Veilleur des bois', creator: 'Carnets du sauvage', handle: '@carnets.sauvages', avatar: 'photo-1544005313-94ddf0286df2', place: 'Forêt européenne', text: 'Le gardien silencieux des forêts. À observer avec respect et à distance. 🌙', tags: '#loupgris #foret #respect', likes: 17900, comments: [{ name: 'Léa', text: 'La nature nous surprendra toujours.', avatar: 'photo-1531123897727-8f129e1688ce', likes: 16 }] }
];

const feed = document.querySelector('#videoFeed');
const panel = document.querySelector('#commentsPanel');
const toast = document.querySelector('#toast');
let activeClip = null;
let activeVideo = null;
let renderedCount = 0;
let soundEnabled = false;
let toastTimer;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}
function imageUrl(id) { return String(id).startsWith('http') ? id : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=100&h=100&q=80`; }
function count(value) { return value >= 10000 ? `${(value / 1000).toFixed(1).replace('.', ',')} k` : Number(value).toLocaleString('fr-FR'); }
function notify(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2100);
}
function clipMarkup(data, index) {
  const current = { ...data, comments: data.comments.map(comment => ({ ...comment })) };
  return `<article class="clip" data-index="${index}" aria-label="Vidéo ${index + 1} de loups">
    <video class="clip-video" playsinline muted loop preload="metadata" poster="${escapeHtml(data.poster)}" aria-label="${escapeHtml(data.title)}"><source src="${escapeHtml(data.video)}" type="video/mp4">Ton navigateur ne prend pas en charge la vidéo.</video>
    <div class="progress-track"><span></span></div><div class="play-hint" aria-hidden="true">▶</div>
    <button class="sound-button" data-action="sound" aria-label="Activer le son">♫</button>
    <div class="clip-content"><div class="creator-row"><img class="creator-avatar" src="${imageUrl(data.avatar)}" alt=""><div class="creator-meta"><span class="creator-name">${escapeHtml(data.creator)} <span class="verified">✦</span></span><span class="creator-handle">${escapeHtml(data.handle)}</span></div><button class="follow-button" data-action="follow">Suivre</button></div>
      <p class="caption">${escapeHtml(data.text)}</p><div class="hashtags">${escapeHtml(data.tags)}</div>
      <div class="location"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>${escapeHtml(data.place)}</div>
      <div class="credit"><span class="music-disc">♫</span><a href="${escapeHtml(data.source)}" target="_blank" rel="noopener noreferrer">Vidéo Pexels · ${escapeHtml(data.title)}</a></div>
    </div>
    <div class="actions"><div class="action-group"><img class="disc-avatar" src="${imageUrl(data.avatar)}" alt=""></div>
      <div class="action-group"><button class="round-action" data-action="like" aria-label="J’aime">${icons.heart}</button><span class="action-count like-count">${count(data.likes)}</span></div>
      <div class="action-group"><button class="round-action" data-action="comments" aria-label="Commentaires">${icons.comment}</button><span class="action-count comment-count">${current.comments.length}</span></div>
      <div class="action-group"><button class="round-action" data-action="share" aria-label="Partager">${icons.share}</button><span class="action-count">Partager</span></div>
    </div>
    <script type="application/json" class="clip-data">${JSON.stringify(current).replace(/</g, '\\u003c')}</script>
  </article>`;
}
function appendClips(amount = 5) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    const index = renderedCount++;
    const template = document.createElement('template');
    template.innerHTML = clipMarkup(clips[index % clips.length], index).trim();
    fragment.append(template.content.firstElementChild);
  }
  feed.append(fragment);
  feed.querySelectorAll('.clip:not([data-watched])').forEach(clip => {
    clip.dataset.watched = 'true';
    clipObserver.observe(clip);
    const video = clip.querySelector('video');
    video.addEventListener('timeupdate', () => {
      if (video.duration) clip.querySelector('.progress-track span').style.width = `${video.currentTime / video.duration * 100}%`;
    });
    video.addEventListener('playing', () => clip.classList.remove('paused'));
    video.addEventListener('pause', () => clip.classList.add('paused'));
    video.addEventListener('click', () => video.paused ? video.play().catch(() => {}) : video.pause());
    video.addEventListener('error', () => {
      if (!video.dataset.error) {
        video.dataset.error = 'true';
        const error = document.createElement('div');
        error.className = 'error-message';
        error.textContent = 'Cette vidéo ne peut pas être lue. Fais défiler pour découvrir la suivante.';
        clip.append(error);
      }
    });
  });
}
function dataFor(clip) { return JSON.parse(clip.querySelector('.clip-data').textContent); }
function storeData(clip, data) { clip.querySelector('.clip-data').textContent = JSON.stringify(data).replace(/</g, '\\u003c'); }
function openComments(clip) {
  activeClip = clip;
  const data = dataFor(clip);
  document.querySelector('#panelCreator').textContent = data.creator;
  document.querySelector('#commentList').innerHTML = data.comments.map((comment, index) => `<div class="comment"><img src="${imageUrl(comment.avatar)}" alt=""><div class="comment-body"><strong>${escapeHtml(comment.name)}</strong><p>${escapeHtml(comment.text)}</p></div><button class="comment-like ${comment.liked ? 'liked' : ''}" data-comment-index="${index}" aria-label="Aimer le commentaire">♥<small>${comment.likes || 0}</small></button></div>`).join('');
  panel.hidden = false;
  requestAnimationFrame(() => panel.classList.add('open'));
  panel.setAttribute('aria-hidden', 'false');
  document.querySelector('#commentInput').focus({ preventScroll: true });
}
function closeComments() {
  panel.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');
  setTimeout(() => { if (!panel.classList.contains('open')) panel.hidden = true; }, 260);
}

const clipObserver = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (!entry.isIntersecting || entry.intersectionRatio < 0.7) continue;
    const clip = entry.target;
    const video = clip.querySelector('video');
    if (activeVideo && activeVideo !== video) activeVideo.pause();
    document.querySelector('.clip.active')?.classList.remove('active');
    clip.classList.add('active');
    activeClip = clip;
    activeVideo = video;
    video.muted = !soundEnabled;
    video.play().catch(() => clip.classList.add('paused'));
    if (Number(clip.dataset.index) >= renderedCount - 3) appendClips(5);
  }
}, { root: feed, threshold: [0.7, 0.92] });

appendClips(6);
document.addEventListener('click', async event => {
  const action = event.target.closest('[data-action]');
  if (action) {
    const clip = action.closest('.clip');
    const data = dataFor(clip);
    if (action.dataset.action === 'like') {
      data.liked = !data.liked;
      data.likes += data.liked ? 1 : -1;
      action.classList.toggle('liked', data.liked);
      action.closest('.action-group').querySelector('.like-count').textContent = count(data.likes);
      storeData(clip, data);
    } else if (action.dataset.action === 'follow') {
      data.followed = !data.followed;
      action.classList.toggle('following', data.followed);
      action.textContent = data.followed ? 'Abonné·e' : 'Suivre';
      storeData(clip, data);
      notify(data.followed ? `Tu suis ${data.creator} 🐺` : 'Abonnement retiré');
    } else if (action.dataset.action === 'comments') openComments(clip);
    else if (action.dataset.action === 'sound') {
      soundEnabled = !soundEnabled;
      document.querySelectorAll('.clip-video').forEach(video => { video.muted = !soundEnabled; });
      document.querySelectorAll('.sound-button').forEach(button => { button.textContent = soundEnabled ? '🔊' : '♫'; button.setAttribute('aria-label', soundEnabled ? 'Couper le son' : 'Activer le son'); });
      notify(soundEnabled ? 'Son activé' : 'Son coupé');
    } else if (action.dataset.action === 'share') {
      try {
        if (navigator.share) await navigator.share({ title: 'LOUP — vidéo sauvage', text: data.text, url: data.source });
        else { await navigator.clipboard.writeText(data.source); notify('Lien de la vidéo copié !'); }
      } catch (error) { if (error.name !== 'AbortError') notify('Ouvre le crédit Pexels pour partager la vidéo.'); }
    }
  }
  if (event.target.closest('#closeComments') || event.target.id === 'commentsPanel') closeComments();
  if (event.target.closest('#searchButton')) notify('Fais défiler pour découvrir la meute 🐺');
  const commentLike = event.target.closest('[data-comment-index]');
  if (commentLike && activeClip) {
    const data = dataFor(activeClip);
    const comment = data.comments[Number(commentLike.dataset.commentIndex)];
    comment.liked = !comment.liked;
    comment.likes = (comment.likes || 0) + (comment.liked ? 1 : -1);
    commentLike.classList.toggle('liked', comment.liked);
    commentLike.querySelector('small').textContent = comment.likes;
    storeData(activeClip, data);
  }
});
document.querySelector('#commentForm').addEventListener('submit', event => {
  event.preventDefault();
  if (!activeClip) return;
  const input = document.querySelector('#commentInput');
  const text = input.value.trim();
  if (!text) return;
  const data = dataFor(activeClip);
  data.comments.push({ name: 'Toi', text, avatar: 'photo-1534528741775-53994a69daeb', likes: 0 });
  storeData(activeClip, data);
  activeClip.querySelector('.comment-count').textContent = data.comments.length;
  input.value = '';
  openComments(activeClip);
  notify('Commentaire publié 💬');
});
document.querySelectorAll('.tab').forEach(tab => tab.addEventListener('click', () => {
  document.querySelector('.tab.active')?.classList.remove('active');
  tab.classList.add('active');
  notify(tab.textContent.includes('SUIVIS') ? 'Le fil des comptes suivis arrive bientôt.' : 'Tu es dans le fil découverte 🐺');
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeComments();
  if (event.key === 'ArrowDown') { event.preventDefault(); activeClip?.nextElementSibling?.scrollIntoView({ behavior: 'smooth' }); }
  if (event.key === 'ArrowUp') { event.preventDefault(); activeClip?.previousElementSibling?.scrollIntoView({ behavior: 'smooth' }); }
});
