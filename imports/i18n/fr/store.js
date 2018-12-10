const store = {
  title: 'Stock des publications',
  short: 'Raccourci',
  language: 'Langue',
  languages: 'Langues',
  total: 'Total',
  count: 'Somme',
  showAll: 'Affiche toutes les publications',
  hideAll: 'Masque toutes les publications qui n\'ont pas été ajoutées',
  reset: 'Remets le stock des publications à zéro',
  noPublication: 'Tu n\'as pas ajouté de publications pour le moment.<br>Pour ajouter une publication, clique sur "Afficher toutes les publications" qui sont disponibles.<br>Ensuite, sélectionne toutes les publications que tu soustraits du stock.<br>Clic sur la publication pour indiquer les langues dans lesquelles elle est stockée.',
  startAddLanguage: 'Ajoute une langue',
  cancelAddLanguage: 'Annuler',
  close: 'Fermer',
  addLanguage: 'Ajouter',
  removeLanguage: 'Supprimer cette langue',
  setup: {
    title: 'Merci de choisir un type de gestion du stock',
    support: 'Désolé ceci n\'est pas supporté',
    description: 'Merci de choisir un type de gestion du stock pour initialiser ton stock des publications.<br>Tu pourras modifier cela par la suite, si nécessaire.',
    simple: {
      name: 'Simple',
      description: 'Avec le stock "Simple", le système configurera automatiquement quelques articles par défaut, tels que "Livres & Bibles", "Périodiques", etc., et disponibles dans le rapport.'
    },
    advanced: {
      name: 'Avancé',
      description: 'Avec le stock "Avancé" tu peux choisir quelles publications seront disponibles et en quelles langues. Tu pourras définir combien de publications seront dans le stock des publications. Le système maintiendra à jour avec les informations reçues par les rapports. Avec cela il te sera possible de déterminer quelles publications et langues seront les plus utilisées et désirées dans ton projet.'
    }
  },
  type: {
    books: 'Livres',
    brochures: 'Brochures',
    magazines: 'Périodiques',
    tracts: 'Tracts',
    misc: 'Divers'
  },
  publication: {
    'CO-inv17': 'Invitation à l\'Assemblée régionale 2017 (CO-inv17)',
    'CO-inv18': 'Invitation à l\'Assemblée régionale 2018 (CO-inv18)',
    'CO-inv19': 'Invitation à l\'Assemblée régionale 2019 (CO-inv19)',
    'CO-inv20': 'Invitation à l\'Assemblée régionale 2020 (CO-inv20)',
    bh: 'Qu’enseigne réellement la Bible ? (bh)',
    bhs: 'Que nous enseigne la Bible ? (bhs)',
    bi12: 'Les Saintes Écritures. Traduction du monde nouveau (édition révisée de 1995) (bi12)',
    bm: 'TLa Bible : quel est son message ? (bm)',
    cf: '« Viens, suis-​moi » (cf)',
    ct: 'Y a-​t-​il un Créateur qui se soucie de vous ? (ct)',
    dv: 'DVD',
    fg: 'De bonnes nouvelles de la part de Dieu ! (fg)',
    fy: 'Le secret du bonheur familial (fy)',
    gt: 'Le plus grand homme de tous les temps (gt)',
    gu: 'La direction venant de Dieu : le chemin qui mène au Paradis (gu)',
    hf: 'Le secret des familles heureuses (hf)',
    inv: 'Invitation aux réunions de la congrégation (inv)',
    jr: 'Dieu nous parle par Jérémie (jr)',
    jy: 'Jésus : le chemin, la vérité, la vie (jy)',
    jwcd: 'Carte de visite JW.org',
    kt: 'Aimeriez-vous connaître la vérité ? (kt)',
    la: 'Une vie pleinement satisfaisante : comment ? (la)',
    lc: 'La vie a-​t-​elle été créée ? (lc)',
    ld: 'LÉcoutez Dieu (ld)',
    lf: 'Cinq questions à se poser sur l’origine de la vie (lf)',
    lfb: 'J’apprends en lisant la Bible (lfb)',
    ll: 'Écoutez Dieu : Vous vivrez pour toujours (ll)',
    igw: 'Introduction à la Parole de Dieu (igw)',
    lmn: '« Voici, je fais toutes choses nouvelles » (lmn)',
    lr: 'Écoute le grand Enseignant (lr)',
    mb: 'Mes comptines bibliques (mb)',
    mi16: 'Invitation au Mémorial 2016 (mi16)',
    mi17: 'Invitation au Mémorial 2017 (mi17)',
    mi18: 'Invitation au Mémorial 2018 (mi18)',
    mi19: 'Invitation au Mémorial 2019 (mi19)',
    mi20: 'Invitation au Mémorial 2020 (mi20)',
    my: 'Recueil d’histoires bibliques (my)',
    nwt: 'La Bible. Traduction du monde nouveau (édition révisée de 2018) (nwt)',
    ol: 'La route qui mène à la vie éternelle : l’avez-​vous trouvée ? (ol)',
    pc: 'La paix et le bonheur durables : comment les trouver (pc)',
    ph: 'La voie qui mène à la paix et au bonheur (ph)',
    rj: 'Reviens à Jéhovah (rj)',
    rk: 'La vraie foi : le chemin qui mène au bonheur (rk)',
    rp: 'Le chemin du Paradis : comment le trouver ? (rp)',
    sgd: 'Guide d’étude de la Parole de Dieu (sgd)',
    't-30': 'Qu’est-ce que la Bible ? (T-30)',
    't-31': 'Comment voyez-vous l’avenir ? (T-31)',
    't-32': 'Quelle est la clé du bonheur familial ? (T-32)',
    't-33': 'Qui domine le monde ? (T-33)',
    't-34': 'Les souffrances cesseront-elles un jour ? (T-34)',
    't-35': 'Les morts revivront-ils un jour ? (T-35)',
    't-36': 'Qu’est-ce que le royaume de Dieu ? (T-36)',
    't-37': 'Où trouver les réponses aux grandes questions de la vie ? (T-37)',
    we: 'Quand la mort frappe un être aimé... (we)',
    'wp/g': 'Tour de Garde / Réveillez-vous',
    yc: 'Nos petites leçons bibliques (yc)',
    yp1: 'Les jeunes s’interrogent. Réponses pratiques (volume 1) (yp1)',
    yp2: 'Les jeunes s’interrogent. Réponses pratiques (volume 2) (yp2)',
    ypq: 'Réponses à 10 questions que se posent les jeunes (ypq)'
  }
}

export default store
