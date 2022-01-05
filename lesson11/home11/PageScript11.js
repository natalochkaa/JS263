// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//----------------------------------------------------------------------------------------------------------------------
// let form = document.forms.formInput;
// form.onsubmit = function (e){
//     e.preventDefault();
//     let name = this.name.value;
//     let age = this.age.value;
//     console.log(name,age);
//     localStorage.setItem(`inform`,JSON.stringify({name:name, age:age}));
// }
//======================================================================================================================
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
//----------------------------------------------------------------------------------------------------------------------
let form1 = document.forms.formInput1;
form1.onsubmit = function (e){
    e.preventDefault();
    let model = this.model.value;
    let type = this.type.value;
    let volume = this.volume.value;
    let car = {model: model,type: type,volume: volume};
    let mercedes = JSON.parse(localStorage.getItem(`marcedes`))
 if (!mercedes){
     mercedes = [];
     mercedes.push(car);
     localStorage.setItem(`mercedes`,JSON.stringify(mercedes));
 }
 else {
     mersedes.push(car);
     localStorage.setItem(`mercedes`,JSON.stringify(mercedes));
 }
}