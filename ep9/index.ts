const me = {
    firstName : 'Test',
    lastName : 'Test',
    nickName : 'wave',
    fullName : function() {
        return this.firstName + " " + this.lastName
    }
}

console.log(me.fullName())