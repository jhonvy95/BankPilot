"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { authFormSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CustomInput from "./CustomInput";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { signIn, signUp } from "@/lib/actions/user.actions";

const AuthForm = ({ type }: { type: "sign-in" | "sign-up" }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      // Sign up with Appwrite & create plaid token

      if (type === "sign-up") {
        // const newUser = await signUp(data);
        // setUser(newUser);
      }

      if (type === "sign-in") {
        // const respose = await signIn({
        //   email: data.email,
        //   password: data.password,
        // });
        // if (respose) router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="flex cursor-pointer items-center gap-1">
          <Image src="/icons/logo.svg" width={34} height={34} alt="bank pilot" />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">BankPilot</h1>
        </Link>
        <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
          {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign-Up"}
        </h1>
        <p className="text-16 font-normal text-gray-600">
          {user ? "Link your account to get started" : "Please enter your details"}
        </p>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* PlaidLink */}</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "sign-up" && (
                <>
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="firstName"
                      label="First Name"
                      placeholder="Enter your first name"
                    />
                    <CustomInput
                      control={form.control}
                      name="lastName"
                      label="Last Name"
                      placeholder="Enter your last name"
                    />
                  </div>
                  <CustomInput
                    control={form.control}
                    name="address1"
                    label="Address"
                    placeholder="Enter your specific address"
                  />
                  <CustomInput
                    control={form.control}
                    name="city"
                    label="City"
                    placeholder="Enter your city"
                  />
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="state"
                      label="State"
                      placeholder="Example: NY"
                    />
                    <CustomInput
                      control={form.control}
                      name="postalCode"
                      label="Postal Code"
                      placeholder="Example: 11101"
                    />
                  </div>
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="dateOfBirth"
                      label="Date Of Birth"
                      placeholder="yyyy-mm-dd"
                    />
                    <CustomInput
                      control={form.control}
                      name="ssn"
                      label="SSN"
                      placeholder="Example:"
                    />
                  </div>
                </>
              )}
              <CustomInput
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter your email"
              />
              <CustomInput
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
              />
              <Button className="form-btn w-full" disabled={isLoading} type="submit">
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> &nbsp;Loading...
                  </>
                ) : type === "sign-in" ? (
                  "Sign In"
                ) : (
                  "Sign Up"
                )}
              </Button>
            </form>
            <footer className="flex justify-center gap-1">
              <p className="text-14 font-normal text-gray-600">
                {type === "sign-in" ? "Don't have an account?" : "Already have an account?"}
              </p>
              <Link className="form-link" href={type === "sign-in" ? "/sign-up" : "/sign-in"}>
                {type === "sign-in" ? "Sign up" : "Sign in"}
              </Link>
            </footer>
          </Form>
        </>
      )}
    </section>
  );
};

export default AuthForm;
