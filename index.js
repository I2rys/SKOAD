//Functions
function obfuscate(text){
    var result = ""

    for( i = 0; i <= text.length-1; i++ ){
        result += `${text[i]}4278584747{${Math.floor(Math.random() * 99999999999999999999999999)}}4278584747`
    }

    return result
}

function deobfuscate(encrypted_text){
    var result = ""

    encrypted_text = encrypted_text.split(/4278584747{.*?}4278584747/g)

    for( i = 0; i <= encrypted_text.length-1; i++ ){
        result += encrypted_text[i]
    }

    return result
}

//Main
const result = obfuscate("Test, With idk Space.")
const result2 = deobfuscate(result)

console.log(`Encrypted text: ${result}`)
console.log(`Decrypted text: ${result2}`)
