const crypto = require("crypto");

module.exports = new class PasswordCrypto {

    cryptoInfo = {
        algorithm: "aes-256-cbc",
        encode: "utf8",
        type: "hex",
        iv: process.env.CRYPTO_IV, //32
        key: process.env.CRYPTO_KEY // 16
    };
    
    static keyNumber = 32;
    static ivNumber = 16;

    /*
    * CREATE ONE KEY LENGHT 32
    * EX: zj&c]AX$h*Jy)$Do9HB2|f&Km8wLJvTN
    */
    generateKey() {
        return Buffer.from(crypto.randomBytes(PasswordCrypto.keyNumber)).toString('hex');
    }

    /*
    * CREATE ONE IV LENGHT 16
    * EX: zj&c]AX$h*Jy)$Do9HB2|f&Km8wLJvTN
    */
    generateIV() {
        return Buffer.from(crypto.randomBytes(PasswordCrypto.ivNumber)).toString('hex');
    }

    /*
    * ENCRYPT PASSWORD
    * FORMAT : 75ca801ecfc271c745509d7f6997793a
    * LENGHT : 33
    */
    encrypt(password) {

        try {

            const cipher = crypto.createCipheriv( 
                this.cryptoInfo.algorithm,
                this.cryptoInfo.key,
                this.cryptoInfo.iv
            );
            
            let encrypted = cipher.update(
                password,
                this.cryptoInfo.encode,
                this.cryptoInfo.type
            );

            encrypted += cipher.final(this.cryptoInfo.type);

            return encrypted;

        } catch (err) {
            console.log(err);
            throw err
        }

    }

    decrypt(password) {
        
        try {

            const decrypt = crypto.createDecipheriv( 
                this.cryptoInfo.algorithm,
                this.cryptoInfo.key,
                this.cryptoInfo.iv
            );
            
            let decrypted = decrypt.update(
                password, 
                this.cryptoInfo.type, 
                this.cryptoInfo.encode
            );

            decrypted += decrypt.final('utf8');

            return decrypted;

        } catch (err) {
            console.log(err);
            throw err
        }
    }

}