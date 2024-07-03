import Image from "next/image";
import React from "react";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div>
          <Image src="/icons/auth-image.png" alt="Auth image" width={500} height={500} />
        </div>
      </div>
    </main>
  );
};

export default RootLayout;
