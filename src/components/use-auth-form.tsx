
import * as React from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Label } from "@radix-ui/react-label"

// interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm() {

  return (
    <div >
      <form>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
          </div>
          <Button 
            >
    
            Sign In with Email
          </Button> 
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
      
      </div>
      
    </div>
  )
}