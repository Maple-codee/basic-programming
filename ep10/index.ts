const  database = [
    {
       email: 'user@gmail.com',
       password: 'LoveYou3000'
    }
]
function register(email: string, password: string) {
    if (email.includes('@') && email.lastIndexOf('@') !== email.length - 1) {
        if (password.length > 8 && password.length < 16) {
            const userObject = {
                email: email,
                password: password
            }
            database.push(userObject)
            alert('สมัครสมาชิคแล้ว ยินดีต้อนรับ คุณ' + email)
        } else {
            alert('รหัสผ่านต้องมากกว่า 8 และไม่เกิน 16')
        }    
    } else {
        alert('Email ไม่ถูกต้อง')
    }
}

register('max@mail.com', '123456789')

const  database = [
    {
       email: 'user@gmail.com',
       password: 'LoveYo+u3^^^'
    },
    {
        email: 'max@gmail.com',
       password: '123456*7แปด'
    }
]

function decryptPassword(password: string) {
    return password.replaceAll('+', 'u').replaceAll('*', '6').replaceAll('^', '0')
}

function login(email: string, password: string) {
    const user = database.filter(function(element, index) {
        return element.email === email
    })
    if(user.length > 0) {
        if (user[0].password === password){
            alert('เข้าสุ่ระบบสำเร็๋จ ยินดีต้อนรับ')
        } else {
            alert('รหัสผ่านไม่ถูกต้อง โปรดตรวจสอบ')
        }
    }else {
        alert('ไม่พบผู้ใช้งานในระบบ')
    }
}

login('max@gmail.com', '1234567แปด')