const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3002' : 'https://next-js-dynamic-resume.vercel.app';