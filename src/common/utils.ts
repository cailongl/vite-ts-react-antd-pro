/**
 * base64 加解密
 */
 export const decode = (input: string) => Buffer.from(input, 'base64').toString()
 export const encode = (input: string) => Buffer.from(input).toString('base64')
 