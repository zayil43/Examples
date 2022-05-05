import React, { useEffect, useState } from 'react'
import './Registration.css'


const useValidation = (value, validations) => {
    const [isEmpty,setEmpty] = useState(true)
    const [minLengthError,setMinLengthError] = useState(true)
    const [maxLengthError,setMaxLengthError] = useState(true)
    const [emailError,setEmailError] = useState(true)
    const [inputValid, setInputValid] = useState(false)

    
    
    useEffect(() => {
        for (const validation in validations) {
            switch(validation){
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                    case 'isEmpty':
                        value ? setEmpty(false) : setEmpty(true)
                        break;
                        case 'maxLength' :
                            value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
                            break
                            case 'isEmail' :
                                const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
                                re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
                            break
            }
        }
    }, [value])

    useEffect(() => {
        if( isEmpty || maxLengthError || minLengthError || emailError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, maxLengthError, minLengthError, emailError]) 
    return{
        isEmpty,
        minLengthError,
        emailError,
        maxLengthError,
        inputValid
    }
}

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)
    const onChange = (e) => {
        setValue(e.target.value)
    }
    const onBlur = (e) => {
        setDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid,
    }
}


const Registration = () => {
    const email = useInput('', {isEmpty: true, minLength: 3, isEmail: true,})
    const password = useInput('',{isEmpty: true, minLength:5, maxLength: 8} )
  return (
    <form className='registration'>
        <h1>Регистрация</h1>
        {(email.isDirty && email.isEmpty) && <div style={{color:'red'}}>Поле не может быть пустым</div>   }
        {(email.isDirty && email.minLengthError) && <div style={{color:'red'}}>Недопустимая длина </div>   }
        {(email.isDirty && email.emailError) && <div style={{color:'red'}}>Некорректный email </div>   }
        <input onChange={ e => email.onChange(e)} onBlur={ e => email.onBlur(e)} value={email.value} name='email' type='text' placeholder='Enter your email...'></input>
        {(password.isDirty && password.isEmpty) && <div style={{color:'red'}}>Поле не может быть пустым</div>   }
        {(password.isDirty && password.minLengthError) && <div style={{color:'red'}}>Пароль слишком короткий </div>   }
        {(password.isDirty && password.maxLengthError) && <div style={{color:'red'}}>Пароль слишком длинный </div>   }
        <input  onChange={ e => password.onChange(e)} onBlur={ e=> password.onBlur(e)} value={password.value} name='password' type='password' placeholder='Enter your password ...'></input>
        <button disabled={!email.inputValid || !password.inputValid} type='submit'>Registration</button>
    </form>
  )
}

export default Registration