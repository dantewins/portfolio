import * as React from "react"

import { cn } from "@/lib/utils"

interface ContainerProps extends React.ComponentPropsWithoutRef<"div"> {}

function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      data-slot="container"
      className={cn(
        "mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 py-12",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Container }
