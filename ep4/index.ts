// function sayHi(dayOfWeek : number) {
//     if (dayOfWeek === 1) {
//         console.log('สวัสดีวันอาทิตย์')
//     } else if (dayOfWeek === 2) {
//         console.log('สวัสดีวันจันทร์')
//     } else if (dayOfWeek === 3) {
//         console.log('สวัสดีวันอังคาร')
//     } else if (dayOfWeek === 4) {
//         console.log('สวัสดีวันพุธ')
//     } else if (dayOfWeek === 5) {
//         console.log('สวัสดีวันพฤหัสบดี')
//     } else if (dayOfWeek === 6) {
//         console.log('สวัสดีวันศุกร์')
//     } else if (dayOfWeek === 7) {
//         console.log('สวัสดีวันเสาร์')
//     }
// }
// sayHi(2)

function sayHi(dayOfweek: number) {
    switch (dayOfweek) {
        case 1:
        console.log('สวัสดีวันอาทิตย์')
        break
        case 2:
        console.log('สวัสดีวันจันทร์')
        break
        case 3:
        console.log('สวัสดีวันอังคาร')
        break
        case 4:
        console.log('สวัสดีวันพุธ')
        break
        case 5:
        console.log('สวัสดีวันพฤหัต')
        break
        case 6:
        console.log('สวัสดีวันศุกร์')
        break
        case 7:
        console.log('สวัสดีวันเสาร์')
        break
    }
}
sayHi(7)

function kaya(size: string) {
    switch (size) {
        case ('s'):
        console.log('ผอม')
        break
        case ('m'):
        console.log('ผอม')
        break
        case ('l'):
        console.log('ท้วม')
        break
        case ('xl'):
        console.log('อ้วน')
        break
        case ('xxl'):
        console.log('อ้วน')
        break
    }
}
kaya('m')

function fixedDecimal(n: number, digit: number) {
    const x = n.toFixed(digit)
    return x
}

console.log(fixedDecimal(1000, 10))

function cal(h: number ) {
    const y = h.toLocaleString()
    return y
}

console.log(cal(1000))

const str: string = "Natanon"

console.log(str.toLowerCase())

function checkStringLength(n: string) {
    const c = n.length
    return c
}

console.log(checkStringLength('araara'))

function lol(argeement: string, index: number) {
    return argeement.charAt(index)
}

console.log(lol('sleep',3))

const str: string = 'อยากกลับบัาน'

console.log(str.includes('อยาก'))

function no(str: string, search: string) {
    if (str.includes(search)) {
    } else {
        console.log('ไม่พบคำที่ค้นหา')
    }
}

no('อยาก นอน', 'า') // เรียนฟังชั่นตำแหน่งของจุดทศนิยม,ตัวอักษร