import type MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

type MaterialIconName = React.ComponentProps<typeof MaterialCommunityIcons>['name'];

export const images = {
  resident:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDeOPWnRJ-nnYyv0Ez3b13jheCQv9-98dHLQfssv5siR5m6FiFnWRMQWFoFtmCShI-z8pG3AdkM9W1Q6KkGIqRgvXvkGaKq4wuwnifaXiiylUy2PfbQiND_HGPvuTTpRpjl-QYdFDeMdy6SPCkm8dyJJprUt4lWxLGrpEbp7gbVXGq_BESLXpSwrP018jHFeBpsufMvQTHjIL5ZGmhrWxaUsatR0hxHm9hytdlYeAnrqfl9M56bIyGBgIlMdwZKfSgz59NzByF5g2GR',
  marinaHero:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA8mNmTTxWY-mB2X8L23lENlNWTC2V7VinA9zoDSzvapL4x9cYyWabFd8U2aNQCl8k0RvzVUUfqqpHHTqQ1CGinyRcEhZ3IMSdJw0YcvKrgSh_cAkAEvbw2otDmlz3U5d9zb3-B4erOZ19p7L4BIqfxO8TAlGCZc4FH4tzLmhJZz4K0HfTuiwEuQdcY4e3NcJZfC2sMEUzd7BXeWczhcmY5TZFH2h9QEXTf2kl4wRe104KoZLzsnp65GYnNUu-8w0J5iG-fSuMNr9vp',
  event:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAHiqQiCJfXtYGYPzMzw0SYdDCnQ9_FHHAOTfAKXOYXuWeoNkNryeD6Sh_B_eepSmp2J6aC5K50Ttw_LqYNXSbCFQsD1D0c8SBwP9NF3e8XfcZxcNjVtB546yHCjclMP_F3t2PNgigVNSh7co3ajqyVY4rJZVMKFzpo-P_dYIQu7tRlKHwVKeRPGvbvXmS20n5aRK0A65_6foV47XMl3jhTvC_f91qJJKVc3XdAmcHv5fBTJQbHsMjFJO5Duhob_x9ET4odbM73tVdP',
  gate:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBvAdqHtFLFVL5DXMyjkxvBkF8sERpjMGTxaeEaZXnbtpe_BWkAVN7kdzPp7TnmvvNO3cJw1hszGJyLQGQhXQOeD3KDWUmN3us6XlJqsj64_D3FOy7zA0E2svr8oTOyyBXbUVknHmt5ocvyoSn13NTonKP-wupvSeZjR1-hkQiqWjlKznGhBl_Ip63fhCuaHn0BrkG5QTOd2Vc8OMIE4dtICPaexCtWaP1NxlwZQGsjXLu_TAVFGzPzcIgwvw_EQBJjUz3D8LNh_Y4c',
  qr:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA7dYu94z5qDMefBY7c3R5vRSEnXZpF7fnHP_jLbCTn3RmKcyr9y9HtYs6nAp0c9pDP9zoajIITjQhz9Aa09dEM8tT-5Y2IAZkwSd6gm4HAUvZYO2L7wOVv9UJW2sQoBVVmltjG4YppNdWg4hM2O8P96To7Fehn1-0eURgdXkCGPXYWeW2IGtXxAyeYp1nFeO7iGbvxC95r1e2bUH32Py-ebCTvbTKEaUvYO9Q4SArlprJ5QYNqMImrjFDd92fwc9luZfHRsNJpwlWS',
  padel:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDF_8FAIvHA0z0RpY2HbfC51n9smTbz3S7lP7Kn2DeHj_HZXk_FTmUY0IBv1BKra1dWpOFDeiZEND4qQgyxen_GBZq3AGNcKlEmWRx_fakudtWSob68-dn2F3SGmXr9JistVC_lxULgxvPL5rQs8dPRiZP8yTv0jOYknCcrrMkuv1_hUGDQkobhuPiPdl-l_LLeK403uRn7ii3hm7G0VxtTYlGbe43ltFkQTKYjYxrHYQdskZ2HdevPBincGmIJfLsHNPCjSlQ_qqVJ',
  pool:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAUeJgGJuoflnhrx-tlfJTmOFFnNEMqRDyyLWgn8lCad_QA_cMn9LD6Vod144--8oNVFBUyFPC_yyyYP96Mzi_0URtLOpzVYhVNoWb3CK-QecF9l6JKTDE_aHgISkCoKm8Ouvtffb6IOdwWqsAOMu8os-VJaE8hbKYMzTqJFpQq6jTq9s65KeW_EKMNDWB76xApuBP06zI4M3yRsN_3aOaLvsTWkbHnJz9RZvJhiGYlSY1u8EElFDJ1UYcScYcJrYrWhpXkuPg5IILQ',
  beach:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC2qaj3JOwVv4tkamiUuGejZeQsFNM5i46T3xjiG75b1aPl1krosNZZ4TRCa6okUfJVtaA7ygwqvlaUrCDBmHPrcu9Pk_aD-mMHK7hq329uCr5GYlMUFp3lojbofdT6WJoMjq8j505fE--dLAZiNcjMehjsuO_rgwyNW7LIyxk489y1DvsGZ7K-ftW3bqYNqExVT2n96bW4BBHva3TbNksRpWEeUpwgGLv3B-jJqkLVV_BRwrwsAzkFKRZ_cxbEces_tE6sRvYsbmyw',
  gym:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCXbu6R6RdOIOMrgXcqWXoO8jK9fLCe-eruWQZcVX1H3RVGHC58HJGA0HPj_QqSxOmK157Jg157-yAnfv5jHpgRASSMP2dmYUCDlrx1dd8HyyA5RGojndkugbHHHn_NOIxvi5Xw4OnrMz7aUjJocQNJjjrqqkJdxUt_PfUe7XpBtFx2hpUXEQQXNNHpod2rvA2odzdseXjNSEy3NZ-SsxwnuhykhcHWDUPYweRzHw2ZctKKWDWtT9wpmNmdQID_6agqJ1iS5eupIpBX',
};

export const dashboardStats: Array<{ icon: MaterialIconName; label: string; title: string; detail: string }> = [
  { icon: 'calendar-check', label: 'PRÓXIMO', title: 'Cancha de pádel', detail: 'Hoy a las 6:00 p. m.' },
  { icon: 'account-group', label: 'VISITAS', title: '1 programada', detail: 'Llegada estimada 2:30 p. m.' },
  { icon: 'wallet-outline', label: 'MANTENIMIENTO', title: '$0 de saldo', detail: 'Cuenta al corriente' },
];

export const services: Array<{ icon: MaterialIconName; label: string; route: 'Access' | 'Bookings' | 'Profile' }> = [
  { icon: 'car-outline', label: 'Acceso vehicular', route: 'Access' },
  { icon: 'account-plus-outline', label: 'Acceso de visitas', route: 'Access' },
  { icon: 'pool', label: 'Amenidades', route: 'Bookings' },
  { icon: 'credit-card-outline', label: 'Pagos', route: 'Profile' },
];

export const amenities = [
  { name: 'Cancha de pádel', image: images.padel, tags: ['Vista al mar', 'Equipo incluido'], badge: '9 horarios libres', price: '$45' },
  { name: 'Alberca infinita', image: images.pool, tags: ['Climatizada', 'Servicio de toallas'], badge: 'Limitado' },
  { name: 'Club de playa Marina', image: images.beach, tags: ['Acceso privado', 'Bar de cócteles'] },
  { name: 'Gimnasio wellness', image: images.gym, tags: ['Entrenadores', 'Abierto 24/7'] },
];

export const vehicles = [
  { plate: 'ABC-123-F', detail: 'SUV principal - Tesla Model Y' },
  { plate: 'XYZ-789-G', detail: 'Sedán - BMW Serie 5' },
];
