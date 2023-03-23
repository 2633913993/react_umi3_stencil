import JSEncrypt from 'jsencrypt';

const RSAEncrypt = (data) => {
  var encryptor = new JSEncrypt();
  var pubKey =
    'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+IUvK/Nzs77ihc5Fs9pIVckiwjeCR8RgWFHwURLMgkzH6LIMHXNP4ZluaNIA2XKBackB9gT7cD+rpTuVauit7JUkQ8AUD/FUAtWBe5sRH3lK1uOBiv1ipE8NTuUJMJhQjvKummNG6C1w8TkPqykTHbV2MfqhwjQ+n0kXTWOg1mwIDAQAB';
  encryptor.setPublicKey(pubKey); //设置公钥
  return encryptor.encrypt(data);
};

export { RSAEncrypt };
