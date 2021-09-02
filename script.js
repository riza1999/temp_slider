// inisialisasi element untuk slider
const celciusSlider = document.getElementById("celcius");;
const fahrenheitSlider = document.getElementById("fahrenheit");;
const kelvinSlider = document.getElementById("kelvin");;
 
//membuat slider
noUiSlider.create(celciusSlider, {
    range: { // menentukan range dari slider, terdapat 2 parameter yaitu min dan max.
        'min': 0, //min untuk menentukan batas bawah.
        'max': 100 //max untuk menentukan batas atas.
    },
    start: 0, //pada saat dibuat handle akan diletakan pada value 0 dalam kasus ini berarti paling bawah.
    step: 1, //pada saat melakukan pergeseran handle, value akan berubah setiap 1 angka, jika kita set 5 makan berubah setiap 5 angka contoh handle saat ini berada pada nilai 0 jika stepnya 5 maka 0->5>10->15->20 dan seterusnya.
    tooltips: wNumb({decimals: 0,suffix:' C'}), //tooltips digunakan untuk memperlihatkan nilai yang ada pada slider, digunakan tambahan library wNumbs untuk kustomisasi lebih lanjut seperti prefix, suffix, atau jumlah desimal dibelakang koma.
    orientation: 'vertical', //orientasi dari slider terdapat 2 pilihan yaitu horizontal dan vertical
    direction: 'rtl' //arah dari slider kiri ke kanan (left to right) atau sebaliknya.
});

noUiSlider.create(fahrenheitSlider, {
    range: {
        'min': 32,
        'max': 212
    },
    start: 0,
    step: 1,
    tooltips: wNumb({decimals: 0,suffix:' F'}),
    orientation: 'vertical',
    direction: 'rtl'
});

noUiSlider.create(kelvinSlider, {
    range: {
        'min': 273,
        'max': 373
    },
    start: 0,
    step: 1,
    tooltips: wNumb({decimals: 0,suffix:' K'}),

    orientation: 'vertical',
    direction: 'rtl'
});

//event ketika slider celcius digerakan
//terdapat banyak macam event
//urutannya sebagai berikut:
//start->slide->update->change->set->end
//event start berjalan ketika handle ditekan
//event slide berjalan ketika handle digerakkan
//event update berjalan ketika nilai dari slider berubah
//event change,set, dan end berjalan ketika handle dilepas
celciusSlider.noUiSlider.on('slide', function (values) {
    fahrenheitSlider.noUiSlider.set(celciusToFahrenheit(values[0])); //melakukan set nilai terhadap slider fahrenheit
    kelvinSlider.noUiSlider.set(celciusToKelvin(values[0])); //melakukan set nilai terhadap slider kelvin
})

fahrenheitSlider.noUiSlider.on('slide',function (values) {
    celciusSlider.noUiSlider.set(fahrenheitToCelcius(values[0])); //melakukan set nilai terhadap slider celcius
    kelvinSlider.noUiSlider.set(fahrenheitToKelvin(values[0])); //melakukan set nilai terhadap slider kelvin
})

kelvinSlider.noUiSlider.on('slide',function (values) {
    celciusSlider.noUiSlider.set(kelvinToCelcius(values[0])); //melakukan set nilai terhadap slider celcius
    fahrenheitSlider.noUiSlider.set(kelvinToFahrenheit(values[0])); //melakukan set nilai terhadap slider fahrenheit
})


//rumus temperature
function celciusToFahrenheit(temp){
    return (temp*9/5)+32;
}

function celciusToKelvin(temp){
    return (temp*1+273);
}

function fahrenheitToCelcius(temp){
    return 5/9*(temp-32);
}

function fahrenheitToKelvin(temp){
    return 5/9*(temp-32)+273;
}

function kelvinToCelcius(temp){
    return temp-273;
}

function kelvinToFahrenheit(temp){
    return 9/5*(temp-273)+32;
}