window.onload = function () {
    // 获取元素
    // 手机号码
    var phone = document.querySelector('.input-phone');
    var phoneWarn = document.querySelector('.phone-warn');
    var phoneSuccess = document.querySelector('.phone-success');
    var phoneTip = document.querySelector('.phone-tip');
    // 验证码
    var code = document.querySelector('.inp-code');
    var getCode = document.querySelector('#code');
    var codeWarn = document.querySelector('.code-warn');
    var codeSuccess = document.querySelector('.code-success');
    var codeTip = document.querySelector('.code-tip');
    // 密码
    var pw = document.querySelector('.input-password');
    var pwWarn = document.querySelector('.pw-warn');
    var pwSuccess = document.querySelector('.pw-success');
    var pwTip = document.querySelector('.password-tip');
    var strengthBg = document.querySelector('.strength-item-bg');
    var strength = document.querySelector('.strength-item');
    var strengthWeak = document.querySelector('.text-weak');
    var strengthMedium = document.querySelector('.text-medium');
    var strengthStrong = document.querySelector('.text-strong');
    // 确认密码
    var repassword = document.querySelector('.repassword');
    var repwWarn = document.querySelector('.repw-warn');
    var repwSuccess = document.querySelector('.repw-success')
    var repwTip = document.querySelector('.repassword-tip');
    // 点击切换checkbox
    var checkboxBg = document.querySelector('.ui-checkbox-bg');
    var checkTip = document.querySelector('.check-tip');
    // 点击注册
    var btnLarge = document.querySelector('.btn-large');

    // 手机号
    var flagPhone = false;
    phone.onfocus = function () {
        phoneTip.innerHTML = '请输入您的手机号';
    }
    phone.onblur = function () {
        if (phone.value == '') {
            phoneWarn.style.visibility = 'visible';
            phoneTip.innerHTML = '手机号码不能为空';
            flagPhone = false;
        } else if (!/^1[3|4|5|7|8][0-9]{9}$/.test(phone.value)) {
            phoneTip.innerHTML = '请输入正确手机号码';
            phoneWarn.style.visibility = 'visible';
            flagPhone = false;
        } else {
            phoneTip.innerHTML = '';
            flagPhone = true;
            phoneWarn.style.visibility = 'hidden';
            phoneSuccess.style.visibility = 'visible';
            // 只有输入手机号正确，才可以点击获取验证码
            getCode.className = 'code secondary';
        }
    }

    // 验证码
    var flagCode = false;
    code.onfocus = function () {
        codeTip.innerHTML = '请输入6位数字手机验证码';
    }
    code.onblur = function () {
        if (code.value == '') {
            codeWarn.style.visibility = 'visible';
            flagCode = false;
            codeTip.innerHTML = '请输入6位数字手机验证码';
        } else if (!/^\d{6}$/.test(code.value)) {
            codeWarn.style.visibility = 'visible';
            flagCode = false;
            codeTip.innerHTML = '请输入6位数字手机验证码';
        } else {
            codeTip.innerHTML = '';
            flagCode = true;
            codeWarn.style.visibility = 'hidden';
            codeSuccess.style.visibility = 'visible';
        }
    }

    // 密码
    var flagPw = false;
    pw.onfocus = function () {
        pwTip.innerHTML = '密码含两种或以上字符组合，区分大小写';
    }
    pw.onblur = function () {
        if (pw.value == '') {
            pwWarn.style.visibility = 'visible';
            pwSuccess.style.visibility = 'hidden';
            flagPw = false;
            pwTip.innerHTML = '密码不能为空';
        } else if (!/^((?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20})|((?![0-9]+$)(?![!@#$%?^&*]+$)[0-9!@#$%?^&*]{8,20})|((?![a-zA-Z]+$)(?![!@#$%?^&*]+$)[a-zA-Z!@#$%?^&*]{8,20})|((?![0-9]+$)(?![a-zA-Z]+$)(?![0-9A-Za-z]+$)[0-9A-Za-z!@#$%?^&*]{8,20})$/g.test(pw.value)) {
            pwWarn.style.visibility = 'visible';
            pwTip.innerHTML = '请输入8-20位密码';
            flagPw = false;
        } else {
            pwTip.innerHTML = '';
            flagPw = true;
            pwWarn.style.visibility = 'hidden';
            pwSuccess.style.visibility = 'visible';
        }
    }
    pw.oninput = function () {
        var str = pw.value;
        var regpwd = /^.{8,20}$/;
        var _regNum = /\d+/; //字符串中包含至少一个数字
        var _regLetter = /[a-zA-Z]+/; //至少包含一个字母
        var _regChar = /[!@#$%^&]{2,}/; //至少包含两个其他字符		
        //纯
        var regNum = /^\d+$/;
        var regLetter = /^[a-zA-Z]+$/;
        var regChar = /^[!@#$%^&]+$/;

        if (pw.value.length < 8) {
            strength.style.width = '10px';
            strength.style.backgroundColor = '#f64a4a';
            strengthBg.style.display = 'inline-block';
            strengthWeak.style.display = 'inline-block';
            pwSuccess.style.visibility = 'hidden';
            strengthMedium.style.display = 'none';
            strengthStrong.style.display = 'none';
            pwTip.innerHTML = "请输入8-20位密码";
        } else if (regpwd.test(str)) {
            if (regNum.test(str) || regLetter.test(str) || regChar.test(str)) {
                strength.style.width = '10px';
                strength.style.backgroundColor = '#f64a4a';
                strengthBg.style.display = 'inline-block';
                strengthMedium.style.display = 'none';
                strengthStrong.style.display = 'none';
                pwWarn.style.visibility = 'visible';
                strengthWeak.style.display = 'inline-block';
                pwTip.innerHTML = "密码过于简单，有被盗风险，建议您更改为复杂密码";
            } else if (_regNum.test(str) && _regLetter.test(str) && _regChar.test(str)) {
                flagpwd = true;
                strength.style.width = '30px';
                strength.style.backgroundColor = '#49b05c';
                strengthWeak.style.display = 'none';
                strengthMedium.style.display = 'none';
                strengthStrong.style.display = 'inline-block';
                strengthStrong.style.color = '#49b05c';
                pwTip.innerHTML = "你的密码很安全";
            } else {
                flagpwd = true;
                strength.style.width = '20px';
                strength.style.backgroundColor = '#f9a123';
                strengthWeak.style.display = 'none';
                strengthStrong.style.display = 'none';
                strengthMedium.style.display = 'inline-block';
                pwTip.innerHTML = "密码安全强度适中";
            }
        }
    }

    // 确认密码
    var flagRepw = false;
    repassword.onblur = function () {
        if (repassword.value == '') {
            repwWarn.style.visibility = 'visible';
            repwTip.innerHTML = '请输入确认密码';
            flagRepw = false;
        } else if (repassword.value != pw.value) {
            repwTip.innerHTML = '两次输入的密码不一致，请重试';
            repwWarn.style.visibility = 'visible';
            flagRepw = false;
        } else {
            repwTip.innerHTML = '';
            flagRepw = true;
            repwWarn.style.visibility = 'hidden';
            repwSuccess.style.visibility = 'visible';
        }
    }

    // 点击切换checkbox
    var flag = 0;
    checkboxBg.onclick = function () {
        if (flag == 0) {
            checkboxBg.style.backgroundPosition = '-24px 0';
            flag = 1;
            checkTip.innerHTML = '';
        } else {
            checkboxBg.style.backgroundPosition = '-48px 0';
            flag = 0;
            checkTip.innerHTML = '接受服务条款才能注册';
        }
    }
    
    // 立即注册
    btnLarge.onclick = function () {
        if (flagPhone && flagCode && flagPw && flagRepw && flag == 1) {
            $.ajax({
                url: './api/reg.json',
                type: 'get',
                data: {
                    phone: $('.input-phone').val(),
                    password: $('.input-password').val()
                },
                dataType: 'json',
                success: function (data) {
                    if (data.code === 1) {
                        localStorage.setItem($('.input-phone').val(), $('.input-password').val());

                        location.href = "./login.html"
                        alert('注册成功');
                    }
                }
            })
            return true;
        } else {
            return false;
        }
    }
}