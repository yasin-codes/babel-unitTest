function cekTahunKabisat(tahun) {
  if (tahun % 4 === 0) {
    if (tahun % 100 === 0) {
      if (tahun % 400 === 0) {
        return tahun + " adalah tahun kabisat.";
      } else {
        return tahun + " bukan tahun kabisat.";
      }
    } else {
      return tahun + " adalah tahun kabisat.";
    }
  } else {
    return tahun + " bukan tahun kabisat.";
  }
}

let tahun = 2024;
console.log(cekTahunKabisat(tahun));
