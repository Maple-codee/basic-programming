const score = [10, 23, 26, 30, 33] 
let total: number = 0

for (let i = 0; i < score.length; i++) {
    total = total + score[i]
}

let total2 = total / score.length

console.log(total)
console.log(total2)



const myStudents: string = "เซน, เวฟ, รุ้ง, แทค, สร"

const myStudentsArray: string[] = myStudents.split(',')

console.log(myStudents)
console.log(myStudentsArray)



const name1: string = 'สุดสวย สวยสุด' // Exam

console.log(name1.split(' ')[1])

console.log(name1.slice(0, name1.indexOf(' ')))



const animal: string = 'ม้า*มังกร*มด*นก'

const animalToArray: string[] = animal.split('*')

animalToArray.shift() // เอาตัวหน้าออก

animalToArray.unshift('หมี') // เอามาต่อหน้า

animalToArray.pop() // เอาตัวท้ายออก

animalToArray.push('แมว') // เอามาต่อท้าย

console.log(animalToArray)



const fruit = ["Banana", "Apple", "Mango", "Grape"]

fruit.sort() // เรียง a - z

fruit.reverse() // เรียง z - a

fruit.slice(0, 2)

console.log(fruit)



const fname:string = 'ko,do,mo,dragon'

const fnameArray: string[] = fname.split(',')

fnameArray.sort()
console.log(fnameArray)

fnameArray.reverse()
console.log(fnameArray)



const me = {
    firstName : 'Test',
    lastName : 'Test',
    nickName : 'Wave',
    age : 20,
    phone : 69,
}

// ประวัติส่วนตัว

// ชื่อ : Test 
// นามสกุล : Test
// ชื่อเล่น : Wave
// อายุ : 20
// เบอร์ : 69

const me = {
    firstName: 'maple',
    LastName : 'muichiro',
    age : 20 ,
    phoneNumber : 0888888888,
    sex : 'male',
    addres : 'japan',
    city : 'tokyo',
    numBerCity : 2344,
    street :  'tokyo',
    numberStreet : 8,
    mail : 'konodio4826@gmail.com'
}

// ประวัติส่วนตัว

// ชื่อ : maple
// นามสกุล : muichiro
// อายุ : 20
// เบอร์โทร : 0888888888
// เพศ : ชาย
// ที่อยู่ : japan
// เมือง : tokyo
// ถนน : tokyo
// ถนนหมายเลข : 8
// เมล : konodio4826@gmail.com