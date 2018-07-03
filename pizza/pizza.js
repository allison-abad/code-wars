function michaelPays(c) {
 let p = c < 5 ? c : c * 2 / 3;
 return Math.round(Math.max(p, c - 10) * 100) / 100;
}
