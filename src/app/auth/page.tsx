"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { phoneAuthSchema, type PhoneAuthSchema, verifyPhone, verifyCode } from "@/lib/auth";

export default function Auth() {
  const [step, setStep] = useState<"phone" | "code">("phone");
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<PhoneAuthSchema>({
    resolver: zodResolver(phoneAuthSchema),
    defaultValues: {
      phone: "",
      code: "",
    },
  });

  const onSubmit = async (values: PhoneAuthSchema) => {
    try {
      if (step === "phone") {
        const result = await verifyPhone(values.phone);
        if (result.success) {
          setStep("code");
          toast({
            title: "Verification code sent",
            description: "Please check your phone for the code.",
          });
        }
      } else {
        const result = await verifyCode(values.phone, values.code);
        if (result.success) {
          toast({
            title: "Successfully logged in",
            description: "Welcome to Coffee Shop!",
          });
          router.push("/");
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container max-w-md mx-auto p-4 min-h-screen flex items-center">
      <Card className="p-6 w-full">
        <h1 className="text-2xl font-bold mb-6">Login with Telegram</h1>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+1234567890"
                      {...field}
                      disabled={step === "code"}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {step === "code" && (
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Verification Code</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter 6-digit code"
                        maxLength={6}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <Button type="submit" className="w-full">
              {step === "phone" ? "Send Code" : "Verify"}
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
}