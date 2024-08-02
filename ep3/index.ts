function helloWorld() {
    console.log("สวัสดี")
}

้helloWorld() // ไม่มี input ไม่มี output

function helloName(name: string) {
    console.log(name)
}

helloName('wave') // มี input ไม่มี output

function getPie() {
    return 3.14
}

console.log(getPie()) // ไม่มี input มี output

function st(fname: string, sname: string) {
    if (fname === 'mix' || sname === 'zane') {
        console.log('เริ่มสอน')
    } else {
        console.log('ไม่สอน')
    }
}

st('mix', 'zane')

function st(fname: string, sname: string, tname: string) {
    if (!(fname === 'mix' || sname === 'zane') && tname === 'forth') {
        cosole.log('พร้อมเรียน') 
    } else {
        console,log('ยังไม่พร้อม')
    }
}

st('mix', 'zane', 'forth')

function st(gender: string, tall: number, weight: number) {
    if (gender === 'ชาย' && tall > 170 || (weight > 50  && weight <= 110)) {
        console.log('จำใบดำใบแดง')
    } else {
        console.log('ไม่เข้าเกณฑ์')
    }
}

st('ชาย', 180, 69)

function st(ayu: number, ngerndern: number, ngernfag: number) {
    if (ayu >= 16 && ngerndern < 70000 && ngernfag < 500000) {
        console.log('รับ10000บาท')
    } else {
        console.log('อด...')
    }
}

st(18, 65000, 450000)

function bmi(sung: number, namnag: number) {
    let score: number = namnag / (sung * sung)

    if(score < 18.50) { 
        return 'ผอม' 
    } else if (score < 22.90) { 
        return 'ปกติ' 
    } else if (score < 24.90) { 
        return 'ท้วม' 
    } else if (score < 29.90) { 
        return 'อ้วน' 
    } else { 
        return 'อ้วนมาก' 
    }
}
console.log(bmi(1.66, 55))