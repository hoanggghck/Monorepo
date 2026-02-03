import * as React from "react"
import { cva } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        outline: "border border-input bg-background",
        ghost: "bg-transparent hover:bg-accent"
      },
      size: {
        sm: "h-8 px-3",
        md: "h-9 px-4",
        lg: "h-10 px-6"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}
