const misc = {
  input: {
    username: 'Felhasználónév',
    firstname: 'Keresztnév',
    lastname: 'Vezetéknév',
    email: 'Email cím',
    telefon: 'Telefon',
    congregation: 'Gyülekezet',
    languages: 'Nyelv',
    gender: 'Nem',
    privilegeOfService: 'Szolgálati kiváltság',
    privilegeOfMinistry: 'Gyülekezeti feladat',
    password: 'Jelszó',
    passwordRepeat: 'Ismételd meg a jelszót',
    newPassword: 'Új jelszó',
    newPasswordRepeat: 'Ismételd meg az új jelszót'
  },
  role: {
    role: 'Szerep',
    admin: 'Adminisztátor',
    shiftScheduler: 'Szolgálat ütemező',
    shiftAdmin: 'Szolgálati tervező',
    storeAdmin: 'Készletezési irányító',
    member: 'Tag',
    teamleader: 'Csoport felelős',
    substituteTeamleader: 'Csoportmunka felelős helyettese',
    participant: 'Résztvevő',
    nothing: 'Nincs',
    noPermission: 'Nincs engedély'
  },
  permissions: {
    notAdmin: 'Ez a felhasználó nem a adminisztrátor',
    notShiftScheduler: 'Ez a felhasználó nem egy szolgálat ütemező',
    notShiftAdmin: 'Ez a felhasználó nem egy szolgálat tervező',
    notStoreAdmin: 'Ez a felhasználó nem készletezési irányító',
    notProjectParticipant: 'Ez a felhasználó nem vesz részt az adott feladatban',
    notTeamleader: 'Ez a felhasználó nem egy csoport felelős',
    notTagParticipant: 'Ez a felhasználó nem vesz részt az adott cimkében',
    notTeamParticipant: 'Ez a felhasználó nem vesz részt az adott csoportmunkában'
  },
  time: {
    start: 'kezdés',
    end: 'vége',
    suffix: 'órák',
    years: 'évek',
    to: 'a'
  },
  scheduling: {
    name: 'Ütemezés',
    direct: 'Jóváhagyás autómatikusan',
    manual: 'Jóváhagyás manuálisan'
  },
  password: {
    tooShort: 'A jelszó legalább 8 karakter hosszú',
    notMatching: 'A jelszavak nem egyeznek!'
  },
  weekdays: {
    mo: 'Hétfő',
    tu: 'kedd',
    we: 'szerda',
    th: 'csütörtök',
    fr: 'Péntek',
    sa: 'szombat',
    su: 'vasárnap'
  },
  intervals: {
    m: 'Manuális',
    every: 'Minden héten',
    even: 'Minden második héten (páros)',
    odd: 'Minden második héten (páratlan)'
  },
  privileges: {
    auxiliary: 'KÚ',
    regular: 'ÁÚ',
    special: 'KÚ',
    circuit: 'KÖF',
    bethelite: 'BT',
    ldc: 'LDC',
    elder: 'V',
    servant: 'KSZ',
    publisher: 'H'
  },
  period: {
    d: 'N',
    w: 'H',
    '4w': '4H'
  }
}

export default misc
