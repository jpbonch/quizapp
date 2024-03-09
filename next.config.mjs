/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
      domains: ["quizappbucket32.s3.us-east-2.amazonaws.com"]
  }
};

export default nextConfig;
