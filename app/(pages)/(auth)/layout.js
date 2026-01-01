import "../../../app/globals.css";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ThemeProvider } from "@/app/context/ThemeContext";

export default async function RootLayout({ children }) {
  const token = await cookies();
  const myToken = token.get("token")?.value;

  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="mt-28">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
