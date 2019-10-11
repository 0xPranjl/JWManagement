const store = {
  title: 'Επισκόπηση αποθήκης',
  short: 'Συντομεύσεις',
  language: 'Γλώσσα',
  languages: 'Γλώσσες',
  total: 'Συνολικά',
  count: 'Ποσότητα',
  showAll: 'Προβολή όλων τον εκδόσεων',
  hideAll: 'Απόκρυψη όλων τον μη προσετέθημενων εκδόσεων',
  reset: 'Επαναφορά της αποθήκης',
  noPublication: 'Δεν έχεις προσθέσει καμία έκδοση.<br>Για να προσθέσεις μια έκδοση, χρησιμοποίησε το κουμπί για να εμφανιστούν όλες η διαθέσιμες έκδοσης.<br>Στη συνέχεια, επιλέξτε όλες τις εκδόσεις που διατηρείτε στην αποθήκη.<br>Κάνε κλικ στην έκδοση για να διαμορφώσεις τις γλώσσες στις οποίες είναι αποθηκευμένη.',
  startAddLanguage: 'Προσθήκη νέας γλώσσας',
  cancelAddLanguage: 'Ακύρωση',
  close: 'Κλείσιμο',
  addLanguage: 'Προσθήκη',
  removeLanguage: 'Διαγραφή γλώσσας',
  setup: {
    title: 'Επέλεξε τον τρόπο διαχείρισης της αποθήκης',
    support: 'Δυστυχώς, αυτό δεν υποστηρίζεται ακόμα',
    description: 'Διάλεξε έναν τρόπο διαχείρισης για να ξεκινήσεις την αποθήκη.<br>Μπορείς να αλλάξεις τον τρόπο διαχείρισης αργότερα αν χρειαστεί.',
    simple: {
      name: 'Απλή λειτουργία',
      description: 'Με την απλή λειτουργία, το σύστημα θα ρυθμίσει αυτόματα ορισμένες βασικές κατηγορίες αντικειμένων όπως "Βιβλία & Γραφές", "Περιοδικά" κ.λπ. για εσάς. Αυτά θα είναι διαθέσιμα στην έκθεση βάρδιας.'
    },
    advanced: {
      name: 'Προηγμένη λειτουργία',
      description: 'Με την προηγμένη λειτουργία μπορείς να ορίσεις πιες έκδοσης μπορούν να υποβληθούν στην έκθεση βάρδιας και πια ποσότητα είναι σε απόθεμα. Αυτό θα σου επιτρέψει να προσδιορίσεις με ακρίβεια ποιες εκδόσεις και πιες γλώσσες έχουν ζήτηση και θα έχεις περισσότερες ευκαιρίες για την βελτίωση του αποθέματος σου.'
    }
  },
  type: {
    meta: 'Γενική κάλυψη',
    books: 'Βιβλία',
    brochures: 'Βιβλιάρια',
    magazines: 'Περιοδικά',
    tracts: 'Φυλλάδια',
    misc: 'Διάφορα'
  },
  publication: {
    any: 'Τοποθετήσεις',
    'CO-inv17': 'Πρόσκληση Περιφερειακής Συνέλευσης 2017',
    'CO-inv18': 'Πρόσκληση Περιφερειακής Συνέλευσης 2018',
    'CO-inv19': 'Πρόσκληση Περιφερειακής Συνέλευσης 2019',
    'CO-inv20': 'Πρόσκληση Περιφερειακής Συνέλευσης 2020',
    bh: 'Τι Διδάσκει Πράγματι η Αγία Γραφή;',
    bhs: 'Τι Μπορεί να μας Διδάξει η Αγία Γραφή;',
    bi12: 'Η Αγία Γραφή—Μετάφραση Νέου Κόσμου',
    bm: 'Η Αγία Γραφή—Ποιο Είναι το Άγγελμά Της;',
    cf: '«Έλα να Γίνεις Ακόλουθός Μου»',
    ct: 'Υπάρχει Δημιουργός που Ενδιαφέρεται για Εσάς;',
    dv: 'DVD',
    fg: 'Καλά Νέα από τον Θεό!',
    fy: 'Το Μυστικό της Οικογενειακής Ευτυχίας',
    gt: 'Ο Μεγαλύτερος Άνθρωπος που Έζησε Ποτέ',
    hf: 'Μπορείτε να Έχετε Ευτυχισμένη Οικογένεια',
    inv: 'Πρόσκληση για τις συναθροίσεις',
    jr: 'Ο Λόγος του Θεού για Εμάς Μέσω του Ιερεμία',
    jy: 'Ιησούς—Η Οδός, Η Αλήθεια, η Ζωή',
    jwcd: 'Διαφημιστικές κάρτες του ιστότοπου jw.org',
    kt: 'Θα Θέλατε να Γνωρίσετε την Αλήθεια;',
    la: 'Μια Ικανοποιητική Ζωή—Πώς Μπορείτε να την Εξασφαλίσετε',
    lc: 'Δημιουργήθηκε η Ζωή;',
    ld: 'Να Ακούτε τον Θεό',
    lf: 'Η Προέλευση της Ζωής—Πέντε Ερωτήματα που Αξίζει να Τεθούν',
    lfb: 'Μαθήματα από την Αγία Γραφή',
    ll: 'Να Ακούτε τον Θεό και θα Ζήσετε για Πάντα',
    lr: 'Μάθε από τον Μεγάλο Δάσκαλο',
    mb: 'Τα Βιβλικά μου Μαθήματα',
    mi16: 'Πρόσκληση για την Ανάμνηση 2016',
    mi17: 'Πρόσκληση για την Ανάμνηση 2017',
    mi18: 'Πρόσκληση για την Ανάμνηση 2018',
    mi19: 'Πρόσκληση για την Ανάμνηση 2019',
    mi20: 'Πρόσκληση για την Ανάμνηση 2020',
    pc: 'Διαρκής Ειρήνη και Ευτυχία—Πώς να τις Βρείτε',
    rj: 'Επιστρέψτε στον Ιεχωβά',
    rk: 'Πραγματική Πίστη—Το Κλειδί σας για Ευτυχισμένη Ζωή',
    rp: 'Πώς να Βρείτε το Δρόμο για τον Παράδεισο',
    sgd: 'Οδηγός Μελέτης για το Λόγο του Θεού',
    't-30': 'Ποια Άποψη Έχετε για την Αγία Γραφή;',
    't-31': 'Πώς Βλέπετε το Μέλλον;',
    't-32': 'Ποιο Είναι το Κλειδί για Ευτυχισμένη Οικογενειακή Ζωή;',
    't-33': 'Ποιος Ελέγχει Πράγματι τον Κόσμο;',
    't-34': 'Θα Τελειώσουν Ποτέ τα Βάσανα;',
    't-35': 'Μπορούν να Ξαναζήσουν οι Νεκροί;',
    't-36': 'Τι Είναι η Βασιλεία του Θεού;',
    't-37': 'Πού θα Βρούμε Απαντήσεις στα Σημαντικά Ερωτήματα της Ζωής;',
    we: 'Όταν Πεθαίνει Κάποιος που Αγαπάτε',
    'wp/g': 'Σκοπιά / Ξύπνα!',
    yc: 'Διδάξτε τα Παιδιά Σας',
    yp1: 'Οι Νεαροί Ρωτούν—Αποτελεσματικές Απαντήσεις, Τόμος 1',
    yp2: 'Οι Νεαροί Ρωτούν—Αποτελεσματικές Απαντήσεις, Τόμος 2',
    ypq: 'Απαντήσεις σε 10 Ερωτήσεις που Κάνουν οι Νεαροί'
  }
}

export default store
