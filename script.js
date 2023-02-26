
/*start login-reg-check teg active class*/
let logonClick = document.querySelector('.login-reg-check');
let checkLoginAnim = document.querySelector('.check-left-top');
if(logonClick !== null){
    logonClick.addEventListener('click',function (){
        if(checkLoginAnim !== null){
            checkLoginAnim.classList.toggle('active');
        }
    })
}
//end
/*anim left block active list*/
let animLeftBlock = document.querySelectorAll('.color-active')
//start input user-login focus style
 let  userLogin = document.querySelector('#user-name');
 let animLogin = document.querySelector('.anime-login');
 let userName = document.querySelector('.user-name-login');
 let iconUserName = document.querySelector('.user-icon-name')
if(userLogin !== null){
    userLogin.addEventListener('focus',function (){
    if(animLogin !== null && userName !== null && iconUserName !== null){
             animLogin.style.transform = 'scaleX(1)';
             userName.style.cssText = `
              top: 0px;
               font-size: 0.4rem;
             `
             iconUserName.style.cssText = `
              top: 8px
             `
    }
    if(animLeftBlock !== null){
        animLeftBlock.forEach(e=>{
            e.classList.toggle('active-list')
        })
    }
    });
    userLogin.addEventListener('blur',function (){
        if(animLogin !== null && userName !== null && iconUserName !== null){
            animLogin.style.transform = 'scaleX(0)';
            userName.style.cssText = `
              top: 17px;
               font-size: 16px;
             `
            iconUserName.style.cssText = `
              top: 12px
             `
        }
        if(animLeftBlock !== null){
            animLeftBlock.forEach(e=>{
                e.classList.toggle('active-list')
            })
        }
        if(userLogin.value === ''){
            userName.style.cssText = `
              top: 17px;
               font-size: 16px;
             `
            iconUserName.style.cssText = `
              top: 12px
             `
        }else {
            userName.style.cssText = `
              top: 0px;
               font-size: 0.4rem;
             `
            iconUserName.style.cssText = `
              top: 8px
             `
        }
    });
}
//end

// start user password focus anime click
let userPass = document.querySelector('#user-pass');
let userPassName = document.querySelector('.user-name-pass');
let animPass = document.querySelector('.anime-pass');
let iconPass = document.querySelector('.icon-pass');
if(userPass !== null){
 userPass.addEventListener('focus',function (){
       if(userPassName !== null && animPass !== null && iconPass !== null){
           animPass.style.transform = 'scaleX(1)';
           userPassName.style.cssText = `
              top: 0px;
               font-size: 0.4rem;
             `
           iconPass.style.cssText = `
              top: 8px
             `
       }
       if(animLeftBlock !== null){
           animLeftBlock.forEach(e=>{
               e.classList.toggle('active')
           })
       }
 });
    /*start user-password blur event */
    userPass.addEventListener('blur',function (){
        if(userPassName !== null && animPass !== null && iconPass !== null){
            animPass.style.transform = 'scaleX(0)';
            userPassName.style.cssText = `
              top: 17px;
               font-size: 16px;
             `
            iconPass.style.cssText = `
              top: 12px
             `
        }
        if(animLeftBlock !== null){
            animLeftBlock.forEach(e=>{
                e.classList.remove('active')
            })
        }
        if(userPass.value === ''){
            userPassName.style.cssText = `
              top: 17px;
               font-size: 16px;
             `
            iconPass.style.cssText = `
              top: 12px
             `
        }else {
            userPassName.style.cssText = `
              top: 0px;
               font-size: 0.4rem;
             `
            iconPass.style.cssText = `
              top: 8px
             `

        }
    })
}
//end


/*start password typ text active check box*/
let boxCheck = document.querySelector('.box-check-pass');
let boxCheckIcon = document.querySelector('.check-box-icon')
if(boxCheck !== null){
    boxCheck.addEventListener('click',function (){
    if(boxCheckIcon !== null){
        boxCheckIcon.classList.toggle('active')
    }
    if(userPass.type === 'password'){
        userPass.type = 'text'
    }else {
        userPass.type = 'password'
    }
    })
}


/*start form valid */
let id =0;
const  form = document.querySelector('#regis-user');
form.addEventListener('submit',evt => {
    evt.preventDefault();
    validName();
    validPass();
      if(validPass() !== undefined && validName() !== undefined) {
          let res = new User(validName(), validPass(), id++)
          console.log(res)
          let userstr = JSON.stringify(res);
          window.localStorage.setItem(`${'key' + id}`,userstr);
      }
})

function  validName(){
    let result = '';
    let userNameValue =  userLogin.value.trim();
    let regx = /[a-zA-Z]{3,}/i;
    if(regx.test(userNameValue)){
        userLogin.style.borderBottom = '2px solid beige';
        return  userNameValue;
    }
        userLogin.style.borderBottom = '2px solid red';
}

function validPass(){
    let result = '';
    let userPassValue =   userPass.value.trim();
    let regx = /[a-zA-Z0-9]{6,}/i;
    if(regx.test(userPassValue)){
        userPass.style.borderBottom = '2px solid beige';
        return  userPassValue;
    }
        userPass.style.borderBottom = '2px solid red';
}

function  User(login,password,id){
    this.login = login;
    this.password = password;
    this.id =id;
}
