import usePlaid from "@/hooks/usePlaid";
import Image from "next/image";
import { Button } from "./ui/button";

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const { open, ready } = usePlaid(user);

  return (
    <>
      {variant === "primary" ? (
        <Button onClick={() => open()} disabled={!ready} className="plaidlink-primary">
          Connect bank
        </Button>
      ) : variant === "ghost" ? (
        <Button onClick={() => open()} variant="ghost" className="plaidlink-ghost">
          <Image src="/icons/connect-bank.svg" alt="connect bank" width={24} height={24} />
          <p className="hidden text-[16px] font-semibold text-black-2 xl:block">Connect bank</p>
        </Button>
      ) : (
        <Button onClick={() => open()} className="plaidlink-default">
          <div className="relative size-6">
            <Image src="/icons/connect-bank.svg" alt="connect bank" fill />
          </div>
          <p className="hidden text-[16px] font-semibold text-black-2 xl:block">Connect bank</p>
        </Button>
      )}
    </>
  );
};

export default PlaidLink;
