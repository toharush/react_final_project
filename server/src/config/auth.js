const admin = require("firebase-admin");
require("dotenv").config();

console.log(process.env.FIREBASE_DOMAIN);
exports.app = admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "terminal-a408f",
    clientEmail:"firebase-adminsdk-vrgfu@terminal-a408f.iam.gserviceaccount.com", // I get no error here
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCzcOh3dhTerSQN\nNcEXdN6E3ogdqLcD1DveIhylz0DbRVbvpaLsf/oPRoZtn3wGZwUMmEnAemqBU/Zj\nZtzrnpORFWs6nZz6RzUmC2Yh4r0NnVH/HX5VHUawaJJi93b5kUxb1NHnJi5u8JFJ\nqyPcpamKiAQUBnBoBI4yDm0YqxLr2xgYwJ8SRq74jDMvra9bpFcYPZ/Gp/k+LWQh\nRqhwQkZxaAIxLINWeusuHB1yDZla6bAKzqkWG/YD4ZoL4oUQQSQDgjOtfqhRWKOR\ncOUpQdOPVFG76Ed1X/J3ZZD5ywJHI8irHjwtemnhLKuUPxzES8UT6/w+fRRR/H1r\nstFXJ7c5AgMBAAECggEABSe8bgOE9E7KHIe2UpuyHDlzyf0DtlxIagiAhTJP8odq\nniZGk3/Wac5EuhfdDXwJNO7tHiwGLPgCD0ywZ86IU8s8kj8JTawdC/OY4rwBDXKU\ncqgLbfDni9WSmxLxUUM04TswhUZfYCLmMap1NHdynanBtZI9HtKUA+kj25O9Tpb8\n4dMaCyUamzPFi4bd6v+miycDjRXw932JeAtofOJhbCNbLFd4l4dCRND0KiefggYP\nWwlEc5fZyUItV/iRXFxkocjEFe/KkFD1BDITdYakGDuSYXK4lX7Fz6lSEAh3tWvo\n0GCA0oT1EtZSNdN3c/6MVI8De3b7txieaqHN5fzr5wKBgQD0/A8MEsN+dI22YJ4K\n4vOj7H5ahRZhY80+sGSpKeOfp+B+PxeKSs8I6YAAm99Eh1C15xkzCP9L6vf/ss3+\nP4mE7eAEZnTA/n4o+fmqNNfoQqexM2ty6mMn4L7PUJ5ola8qAEOczWdeEUN+dU2k\nLkZQCqJgjGQx/2p8FeEBdTtPiwKBgQC7gmXcBfNlDBbcFHXw8pLlJGt8/QVFFQV8\nT8q+IWHlSI0SAKIdJPszrah3Je5K0CqikJPhHsTes3b4ZKY2sjQwc98RynF2utGY\njR6sVgAk90nD0D2luALvpeJela6HFL1OehcIM5NifsyYLGzSVBP2GSBE6E6FRCKg\nEDKu5NNsywKBgQDU7x0ZDloTWLUv9uyHY9oG+fCdNx5LyhZETcdAbaNmSuFKegY4\n8mrfQS072j+GbeLOKK7zd/eGghXKjxySx6D9BFD5IiCK+uinLxc9RK8BNqZQ0/Op\nr2Y97A+NXHJDTw8v/4jFCpe04GZ8zPKOKJZ+za9zIbOY7XsdnVq0DLRfnwKBgQCM\nLkE+S0iaO35/i+BcgMzm9+JP78zXx45xUCnPGJ/aTPICCm0oArS1/tbaNIZAcf3d\nyN51R46Au4Ru0LgeXf18V7Pl1gYbcDEvrhjHWAgFmsYP2Qetc7LmPIrOkXKH1C5u\nlAHSBNTjps4H2faFC4xcyI4CVfYV1UlZhqKNc87IHwKBgG+zATh3bxBfcaPEyf1r\nN5/tkz6TqLsTcYymqfrF54LreUz4QZg97SYpzc6AclaaKhUqEFnIoiJBlUF8jCvM\nMxkAPjNfGe74ysqG95xlh4GYA4EkKvpmSSxO+DXXgn965/sKxAlHDMAu5ZiDpjIy\nyAdk1mmNW2aX86qG5oH3pp6H\n-----END PRIVATE KEY-----\n".replace(/\\n/g, "\n"), // NOW THIS WORKS!!!
  }),
});

exports.admin = admin;
