const evento = new Date('february 14, 2028 09:48:30');

evento.setDate(14);

console.log(evento.getDate());
// Expected output: 24

evento.setDate(28);
// Only 31 days in August!

console.log(evento.getDate());
// Expected output: 1
