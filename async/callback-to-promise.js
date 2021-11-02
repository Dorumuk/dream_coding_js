// ---------------------------------------------------------------------------------
// Callback ✨✨✨✨✨
class UserStorage {
    loginUser(id, pw) {
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                if (
                    (id === "ellie" && pw === "dream") ||
                    (id === "coder" && pw === "academy")
                ) {
                    resolve(id); // onSuccess(id);
                } else {
                    reject(new Error("not found")); // onError(new Error("not found"));
                }
            }, 2000);
            
        })
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === "ellie") {
                    resolve({ name: "ellie", role: "admin" });
                } else {
                    reject(new Error("no acess"));
                }
            }, 1000);
        })
    }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

userStorage.loginUser(id, password)
    .then(userStorage.getRoles)
    .then((user) => alert(`Hello ${user.name}, ${user.role}`))
    .catch(console.log)


// async - await는 promise를 단순하고 동기적으로 보이게 도와준다.