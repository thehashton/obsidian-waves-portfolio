//= Scripts
import generateStylesheetObject from '@/common/generateStylesheetsObject';
//= Global Styles
import "@/styles/globals.css";

export const metadata = {
  title: 'Harry Ashton',
  description: 'Harry Ashton - Frontend Developer',
  keywords: ['HTML5', 'NextJs'],
  icons: {
    icon: "/assets/imgs/favicon.ico",
    shortcut: "/assets/imgs/favicon.ico",
    other: generateStylesheetObject([
      'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
      'https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap',
      'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap'
    ])
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {children}
    </html>
  )
}
