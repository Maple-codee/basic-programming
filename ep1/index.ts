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



function boug(a: number, b: number) { // กำหนดค่าfunctionเป็นa b
    return a + b // กำหนดให้a+b
}

console.log(boug(2, 3)) // กำหนดตัวเลขแทนaกับb



function lob(a: number, b: number) { // กำหนดค่าfunctionเป็นa b
    return a - b // กำหนดให้a-b
}

console.log(lob(5, 2)) // กำหนดตัวเลขแทนaกับb



function kun(a: number, b: number, c: number, d: number) { // กำหนดค่าfunctionเป็นa b
    return a * b * c * d // กำหนดให้a*b*c*d
}

console.log(kun(2, 2, 2, 2)) // กำหนดตัวเลขแทนa b c d



function grade(homework: number, midterm: number, final: number) { // กำหนดค่าfunctionเป็น homework midterm final
    let score: number = homework + midterm + final // กำหนดให้omework+midterm+final

    if (score < 50) { // ถ้าscore<50
        return 'F' // ถ้าscore<50จะได้F
    } else if (score < 60) { // ถ้าscore<60
        return 'D' // ถ้าscore<60จะได้D
    } else if (score < 70) { // ถ้าscore<70
        return 'C' // ถ้าscore<70จะได้C
    } else if (score < 80) { // ถ้าscore<80
        return 'B' // ถ้าscore<80จะไดฺ้
    } else { // ถ้ามากกว่านั้น
        return 'A' // ถ้ามากกว่านั้นจะได้A
    }
}

console.log(grade(40, 29, 29)) // กำหนดค่าhomework midterm finalเป็นตัวเลข



