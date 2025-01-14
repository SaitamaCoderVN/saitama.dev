/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Tạm thời bỏ qua lỗi ESLint trong quá trình build
  },
}

export default nextConfig;
