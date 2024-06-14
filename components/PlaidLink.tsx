"use client";

import React, { useCallback, useEffect, useState } from "react";
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from "react-plaid-link";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { createLinkToken } from "@/lib/actions/user.actions";

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const router = useRouter();
  const [token, setToken] = useState("");

  useEffect(() => {
    const getLinkToken = async () => {
      const data = await createLinkToken(user);
      setToken(data?.linkToken);
    };

    getLinkToken();
  }, []);

  const onSuccess = useCallback(
    async (public_token: string) => {
      // await exchangePublicToken({
      //   public_token,
      //   user,
      // });
      router.push("/");
    },
    [user]
  );

  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  };

  const { open, ready } = usePlaidLink(config);
  return (
    <>
      {variant === "primary" ? (
        <Button onClick={() => open()} disabled={!ready} className="plaidlink-primary">
          Connect bank
        </Button>
      ) : variant === "ghost" ? (
        <Button variant="ghost">Connect bank</Button>
      ) : (
        <Button variant="ghost" asChild>
          Connect bank
        </Button>
      )}
    </>
  );
};

export default PlaidLink;
