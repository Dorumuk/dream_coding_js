// ---------------------------------------------------------------------------------
// Callback ✨✨✨✨✨
class UserStorage {
    // setTimeout 재사용
    delay(ms) {
        return new Promise(resovle => setTimeout(resovle, ms));
    }

    async loginUser(id, pw) {
        await this.delay(2000);
        if (
            (id === "ellie" && pw === "dream") ||
            (id === "coder" && pw === "academy")
        ) {
            return id;
        } else {
            throw(new Error("not found"))
        }
    }

    async getRoles(user) {
        await this.delay(1000);
        if (user === "ellie") {
            return { name: "ellie", role: "admin" };
        } else {
            throw(new Error("no acess"));
        }
    }

    async getUserData(id, pw) {
        const name = await this.loginUser(id, pw);
        const user = await this.getRoles(name);
        return `Hello ${user.name}, ${user.role}`
    }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

userStorage.getUserData(id, password)
    .then((str) => alert(str))
    .catch(console.log)


// async - await는 promise를 단순하고 동기적으로 보이게 도와준다.
// 기존에 존재하는 것 위에 , 감싸서 간편하게 api를 제공받는 것 (syntatic sugar ex) class) ✨