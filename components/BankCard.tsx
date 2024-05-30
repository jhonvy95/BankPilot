import { formatAmount } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BankCard = ({ account, userName, showBalance = true }: CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <Link href="/" className="bank-card">
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 font-semibold text-white">{account.name || userName}</h1>
            <p className="font-ibm-plex-serif font-black text-white">
              {formatAmount(account.currentBalance)}
            </p>
          </div>
          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold text-white">{userName}</h1>
              <h2 className="text-12 font-semibold text-white">** / **</h2>
              <p className="text-14 font-semibold tracking-[1.1px] text-white">
                **** **** **** **** <span className="text-16">${account.mask}</span>
              </p>
            </div>
          </article>
        </div>
        <div className="bank-card_icon">
          <Image src="/icons/Paypass.svg" alt="pay" width={20} height={24} />
          <Image
            src="/icons/mastercard.svg"
            alt="mastercard"
            width={45}
            height={32}
            className="ml-5"
          />
        </div>
        <Image
          src="/icons/lines.png"
          alt="lines"
          width={316}
          height={190}
          className="absolute top-0 left-0"
        />
      </Link>
    </div>
  );
};

export default BankCard;
