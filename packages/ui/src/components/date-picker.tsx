import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "../utils"
import { Calendar } from "./calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover"
import { Button } from "./button"

interface DatePickerProps {
  value?: Date
  onChange?: (date?: Date) => void
  placeholder?: string
  disabled?: boolean
}

export function DatePicker({
  value,
  onChange,
  placeholder = "Chọn ngày",
  disabled,
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          disabled={disabled}
          className={cn(
            "w-full justify-start text-left font-normal",
            !value && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? format(value, "dd/MM/yyyy") : placeholder}
        </Button>
      </PopoverTrigger>

      <PopoverContent
        align="start"
        className="w-auto p-0 border border-border"
      >
        <Calendar
          mode="single"
          selected={value}
          onSelect={onChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
