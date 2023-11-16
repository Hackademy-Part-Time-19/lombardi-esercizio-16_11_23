

let listaNomi = ["Franco_", "Gennaro_", "Valerio_", "Giulia_", "Eugenio_", "Carlo_"]

for (let i = 0; i < listaNomi.length; i++) {
    console.log(listaNomi);
}

for (let i = 0; i < listaNomi.length; i++) {
    for (let j = 0; j < listaNomi.length; j++) {
        console.log(listaNomi[i][j]);
    }
}