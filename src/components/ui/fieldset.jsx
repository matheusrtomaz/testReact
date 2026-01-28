import * as React from "react"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

const FieldSet = React.forwardRef(({ className, ...props }, ref) => (
    <fieldset
        ref={ref}
        className={cn("flex flex-col gap-4", className)}
        {...props}
    />
))
FieldSet.displayName = "FieldSet"

const FieldLegend = React.forwardRef(({ className, ...props }, ref) => (
    <legend
        ref={ref}
        className={cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)}
        {...props}
    />
))
FieldLegend.displayName = "FieldLegend"

const FieldDescription = React.forwardRef(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-[0.8rem] text-muted-foreground", className)}
        {...props}
    />
))
FieldDescription.displayName = "FieldDescription"

const FieldSeparator = React.forwardRef(({ className, ...props }, ref) => (
    <Separator
        ref={ref}
        className={cn("my-4", className)}
        {...props}
    />
))
FieldSeparator.displayName = "FieldSeparator"

export { FieldSet, FieldLegend, FieldDescription, FieldSeparator }
