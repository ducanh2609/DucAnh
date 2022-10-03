// Bài 1:
// let str = prompt("Mời nhập vào một chuỗi:");
// let arr = str.split("");
// let l = arr.length;
// for (let i = 0; i <= (l / 2); i++) {
//     for (let j = l - 1; j >= (l / 2); j--) {
//         for (let j = (l - 1); j >= (l - 1) / 2; j--) {
//             if ((i + j) == (l - 1)) {
//                 arr[i] = [arr[j], arr[j] = arr[i]][0];
//             }
//         }
//     }
// }
// let newStr = arr.toString();
// console.log(newStr);

// Bài 2:
// let str = prompt("Mời bạn nhập 1 chuỗi");
// str = str.toLowerCase();
// let arr = str.split(" ");
// for (let i = 0; i < arr.length; i++) {
//     miniArr = arr[i].split("");
//     console.log(miniArr);
//     let text = miniArr[0].toLocaleUpperCase();
//     // text = text.toLocaleUpperCase();
//     console.log(text);
//     miniArr.splice(0, 1,text);
//     arr[i] = miniArr.join("");
//     console.log(arr[i])
// }
// let newStr = arr.join(" ");
// console.log(newStr);

// Bài 3:
// let str = prompt("Nhập 1 mảng bất kì (cách nhau bởi dấu phẩy):");
// let arr = str.split(",");
// let l = arr.length;
// let i = 0;
// while (i < l) {
//     for (let j = i + 1; j < l; j++) {
//         if (arr[i] == arr[j]) {
//             arr.splice(j, 1);
//             l--;
//             j--;
//         }
//     }
//     i++;
// }
// console.log(arr);

// Bài 4:
// let str = prompt("Nhập 1 mảng bất kì (cách nhau bởi dấu phẩy):");
// let arr = str.split(",");
// let l = arr.length;
// for (let key in arr) {
//     for (let i = 0; i < l; i++) {
//         if (Number(arr[key]) < Number(arr[i])) {
//             arr[key] = [arr[i], arr[i] = arr[key]][0];
//         }
//     }
// }
// console.log(arr);

// Bài 5:
// let str = prompt("Nhập tên 3 nhân viên cách nhau bởi dấy phẩy");
// let arr = str.split(",");
// let ques3 = true;
// while (ques3 == true) {
//     idea = prompt("Mời bạn nhập vào tác vụ mình muốn\nC: Creat\nR: Read\nU: Update\nD: Delete");
//     while (idea != "C" && idea != "R" && idea != "U" && idea != "D") {
//         idea = prompt("Cú pháp không đúng. Xin mời nhập lại\nC: Creat\nR: Read\nU: Update\nD: Delete");
//     }
//     switch (idea) {
//         case "C": {
//             let ques = true;
//             while (ques == true) {
//                 let newC = prompt("Mời bạn nhập tên nhân viên muốn thêm:");
//                 arr.push(newC);
//                 console.log(arr);
//                 ques = confirm("Bạn có muốn thêm nhân viên khác không?(Y/N)");
//             }
//             break;
//         }
//         case "R": {
//             console.log(arr);
//             break;
//         }
//         case "U": {
//             let ques1 = true;
//             while (ques1 == true) {
//                 let position = +prompt("Mời bạn nhập phần tử muốn update:");
//                 let newU = prompt("Mời bạn nhập giá trị update:");
//                 arr[position] = newU;
//                 console.log(arr);
//                 ques1 = confirm("Bạn có muốn update phần tử khác không?(Y/N)");
//             }
//             break;
//         }
//         case "D": {
//             let ques2 = true;
//             while (ques2 == true) {
//                 let position1 = +prompt("Mời bạn nhập phần tử muốn xóa:");
//                 arr.splice(position1, 1);
//                 console.log(arr);
//                 ques2 = confirm("Bạn có muốn xóa phần tử khác không? (Y/N)");
//             }
//             break;
//         }
//     }
//     ques3 = confirm("Bạn có muốn làm tác vụ khác không? (Y/N):");
//     if (ques3 == false) {
//         alert("Goodbye and see you again!");
//     }
// }

// Bài 6:
// let str = prompt("Mời nhập vào ngày tháng năm (cách nhau bởi dấu /);");
// let arr = str.split("/");
// let date1 = [];
// let month1 = [1, 3, 5, 7, 8, 10, 12];
// let date2 = [];
// let month2 = [4, 6, 9, 11];
// let date3 = []
// for (let i = 1; i <= 31; i++) {
//     date1.push(i);
// }
// for (let i = 1; i <= 30; i++) {
//     date2.push(i);
// }
// for (let i = 1; i <= 28; i++) {
//     date3.push(i);
// }
// let ktr;
// if (arr[2] % 400 === 0 || (arr[2] % 4 === 0 && arr[2] % 100 !== 0)) {
//     ktr = true;
// }
// let t;
// let ok;

// if (ktr == true) {
//     if (arr[1] == 2) {
//         if (arr[0] == 29) {
//             console.log(`${str} là ngày hợp lệ`);
//             t = 0;
//             ok = 1;
//         } else { t = 1; }
//     } else { t = 1; }
// } else { t = 1; }
// if (t == 1) {
//     if ((date1.indexOf(Number(arr[0])) != -1 && month1.indexOf(Number(arr[1])) != -1) || (date2.indexOf(Number(arr[0])) != -1 && month2.indexOf(Number(arr[1])) != -1) || (date3.indexOf(Number(arr[0])) != -1 && Number(arr[1]) == 2)) {
//         console.log(`${str} là ngày hợp lệ`);
//         ok = 1;
//     } else {
//         console.log(`${str} là ngày không hợp lệ`);
//     }
// }
// if (ok == 1) {
//     x = month1.indexOf(Number(arr[1]));
//     y = month2.indexOf(Number(arr[1]));
//     if (x != -1) {
//         if (arr[0] == 31) {
//             console.log(`Ngày tiếp theo là: 1/${Number(arr[1])+1}/${arr[2]}.`);
//         } else {
//             console.log(`Ngày tiếp theo là: ${Number(arr[0])+1}/${arr[1]}/${arr[2]}.`);
//         }
//     } else if (y != -1) {
//         if (arr[0] == 30) {
//             console.log(`Ngày tiếp theo là: 1/${Number(arr[1])+1}/${arr[2]}.`);
//         } else {
//             console.log(`Ngày tiếp theo là: ${Number(arr[0])+1}/${arr[1]}/${arr[2]}.`);
//         }
//     } else {
//         if (arr[0] == 30) {
//             console.log(`Ngày tiếp theo là: 1/${Number(arr[1])++}/${arr[2]}.`);
//         } else {
//             if (arr[2] % 400 === 0 || (arr[2] % 4 === 0 && arr[2] % 100 !== 0)) {
//                 if (arr[0] == 29) {
//                     console.log(`Ngày tiếp theo là: 1/${Number(arr[1]) + 1}/${arr[2]}.`);
//                 } else {
//                     console.log(`Ngày tiếp theo là: ${Number(arr[0])+1}/${arr[1]}/${arr[2]}.`);
//                 }
//             } else {
//                 if (arr[0] == 28) {
//                     console.log(`Ngày tiếp theo là: 1/${Number(arr[1])+1}/${arr[2]}.`);
//                 } else {
//                     console.log(`Ngày tiếp theo là: ${Number(arr[0])+1}/${arr[1]}/${arr[2]}.`);
//                 }
//             }
//         }
//     }
// }

// Bài 7:
let bookStore = ["Tôi thấy hoa vàng trên cỏ xanh", "Đắc nhân tâm"];
let cart = [];
let ques3 = true;
while (ques3 == true) {
    idea = prompt("Mời bạn nhập vào tác vụ mình muốn\nC: Creat\nR: Read\nU: Update\nD: Delete");
    while (idea != "C" && idea != "R" && idea != "U" && idea != "D") {
        idea = prompt("Cú pháp không đúng. Xin mời nhập lại\nC: Creat\nR: Read\nU: Update\nD: Delete");
    }
    let mangRong = ["Đắc nhân tâm", 0];
    cart.push(mangRong);
    let len = bookStore.length;
    for (let i = 0; i < len; i++) {
        console.log(`${i + 1}.${bookStore[i]}`);
    }
    switch (idea) {
        case "C": {
            let ykien = "Y";
            while (ykien === "Y") {
                let mua = prompt("Mời bạn nhập sản phẩm muốn mua:");
                let y = bookStore.indexOf(mua);
                while (y === -1) {
                    mua = prompt("We don't have that item.\n Please choice again:");
                    y = bookStore.indexOf(mua);
                }
                let z;
                let t;
                for (let i = 0; i < cart.length; i++) {
                    z = cart[i][0].indexOf(mua);
                    if (z == -1) {
                        t = 0;
                    } else {
                        t = 1;
                        break;
                    }
                }
                if (t == 0) {
                    let a = [];
                    a.push(mua, 0);
                    a[1]++;
                    cart.push(a);
                } else {
                    for (let i = 0; i < cart.length; i++) {
                        if (cart[i][0] === mua) {
                            cart[i][1]++;
                        }
                    }
                }
                console.log(cart);
                ykien = prompt("Bạn có muốn mua hàng tiếp không (Y/N):");
                while (ykien == null || ((ykien != "Y") == true && (ykien != "N") == true)) {
                    ykien = prompt("Cú pháp bạn nhập không đúng. \n Mời bạn Y hoặc N:");
                }
            }
            break;
        }
        case "R": {
            console.log(cart);
            break;
        }
        case "U": {
            let ykien = true;
            while (ykien == true) {
                let que = prompt("Nhập mặt hàng bạn muốn update:");
                let sl = +prompt("Nhập số lượng bạn muốn update:");
                for (let index in cart) {
                        if (cart[index][0] == que) {
                            cart[index][1] = sl;
                        }
                }
                ykien = confirm("Bạn có muốn update tiếp không?");
            }
            console.log(cart);
            break;
        }
        case "D": {
            let ykien = true;
            while (ykien == true) {
                let que = prompt("Nhập mặt hàng bạn muốn xóa:");
                for (let index in cart) {
                        if (cart[index][0] == que) {
                            cart.splice(index,1);
                        }
                }
                ykien = confirm("Bạn có muốn xóa tiếp không?");
            }
            console.log(cart);
            break;
        }
    }
    ques3 = confirm("Bạn có muốn làm tác vụ khác không? (Y/N):");
    if (ques3 == false) {
        alert("Goodbye and see you again!");
    }
}