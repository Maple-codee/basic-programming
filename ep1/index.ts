const firstname: string = 'ณฐนนท นิโลตบล' // กำหนดค่าคงที่ให้ตัวแปรstringคือชื่อจริง

let y: number = 10 // แทนค่าy=10
y = 20 // เปลี่ยนค่าตัวแปรyเป็น20

let ต้องการกลับบ้าน: boolean = true // กำหนดตัวแปร
console.log(firstname) // บอกชื่อจริง
console.log(y) // บอกตัวแปรy
console.log(ต้องการกลับบ้าน) // บอกตัวแปร 



const a: number = 8 // กำหนดค่าคงที่aคือ8
const b: number = 69 // กำหนดค่าคงที่bคือ69

console.log(a === b) // แสดงผลว่าaเท่ากับbหรือไม่

console.log(a > b) // แสดงผลว่าaมากกว่าbหรือไม่

console.log(a <= b) // แสดงผลว่าaน้อยกว่าหรือเท่ากับbหรือไม่



function boug(a: number, b: number) {
    return a + b
}

console.log(boug(2, 3))



function lob(a: number, b: number) {
    return a - b
}

console.log(lob(5, 2))



function kun(a: number, b: number, c: number, d: number) {
    return a * b * c * d
}

console.log(kun(2, 2, 2, 2))



function grade(homework: number, midterm: number, final: number) {
    let score: number = homework + midterm + final

    if (score < 50) {
        return 'F'
    } else if (score < 60) {
        return 'D'
    } else if (score < 70) {
        return 'C'
    } else if (score < 80) {
        return 'B'
    } else {
        return 'A'
    }
}

console.log(grade(40, 29, 29))



