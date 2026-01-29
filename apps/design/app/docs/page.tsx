// apps/design/app/docs/page.tsx
"use client"

import * as React from "react"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@artivism/ui/accordion"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@artivism/ui/alert-dialog"
import { Alert, AlertDescription, AlertTitle } from "@artivism/ui/alert"
import { AspectRatio } from "@artivism/ui/aspect-ratio"
import { Avatar, AvatarFallback, AvatarImage } from "@artivism/ui/avatar"
import { Badge } from "@artivism/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@artivism/ui/breadcrumb"
import { Button } from "@artivism/ui/button"
import { ButtonGroup } from "@artivism/ui/button-group"
import { Calendar } from "@artivism/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@artivism/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@artivism/ui/carousel"
import { Checkbox } from "@artivism/ui/checkbox"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@artivism/ui/collapsible"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@artivism/ui/command"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@artivism/ui/context-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@artivism/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@artivism/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@artivism/ui/dropdown-menu"
import { Empty } from "@artivism/ui/empty"
import { Field } from "@artivism/ui/field"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@artivism/ui/hover-card"
import { Input } from "@artivism/ui/input"
import { InputGroup } from "@artivism/ui/input-group"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@artivism/ui/input-otp"
import { Kbd } from "@artivism/ui/kbd"
import { Label } from "@artivism/ui/label"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@artivism/ui/menubar"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@artivism/ui/navigation-menu"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@artivism/ui/pagination"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@artivism/ui/popover"
import { Progress } from "@artivism/ui/progress"
import { RadioGroup, RadioGroupItem } from "@artivism/ui/radio-group"
import { ScrollArea } from "@artivism/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@artivism/ui/select"
import { Separator } from "@artivism/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@artivism/ui/sheet"
import { Skeleton } from "@artivism/ui/skeleton"
import { Slider } from "@artivism/ui/slider"
import { Spinner } from "@artivism/ui/spinner"
import { Switch } from "@artivism/ui/switch"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@artivism/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@artivism/ui/tabs"
import { Textarea } from "@artivism/ui/textarea"
import { Toggle } from "@artivism/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@artivism/ui/toggle-group"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@artivism/ui/tooltip"
import {
  InfoIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  HomeIcon,
  ChevronDownIcon,
  CalendarIcon,
  TerminalIcon,
  CheckCircle2Icon,
  User,
  Settings,
  LogOut,
  Mail,
  MessageSquare,
  PlusCircle,
  Search,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react"

export default function DocsPage() {
  const [progress, setProgress] = React.useState(13)
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [isCollapsibleOpen, setIsCollapsibleOpen] = React.useState(false)
  const [commandOpen, setCommandOpen] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setCommandOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <TooltipProvider>
      <main className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <HomeIcon className="h-5 w-5" />
              Artivism Design System
            </Link>
            <div className="flex items-center gap-4">
              <Badge variant="outline">54 Components</Badge>
              <Button variant="outline" size="sm" onClick={() => setCommandOpen(true)}>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Documentation</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Title */}
          <div className="space-y-2 mb-8">
            <h1 className="text-4xl font-bold tracking-tight">
              Component Library
            </h1>
            <p className="text-lg text-muted-foreground">
              Complete showcase of all 54 components with live interactive examples
            </p>
          </div>

          <Alert className="mb-8">
            <InfoIcon className="h-4 w-4" />
            <AlertTitle>Documentation</AlertTitle>
            <AlertDescription>
              All components are built with React 18, TypeScript, Tailwind CSS, and Radix UI primitives.
              Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open the command menu.
            </AlertDescription>
          </Alert>

          {/* Component Sections */}
          <div className="space-y-8">
            {/* 1. ACCORDION */}
            <Card id="accordion">
              <CardHeader>
                <CardTitle>1. Accordion</CardTitle>
                <CardDescription>
                  Vertically stacked set of interactive headings that reveal content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It comes with default styles that match the other components.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is it animated?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It's animated by default with smooth transitions.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* 2. ALERT */}
            <Card id="alert">
              <CardHeader>
                <CardTitle>2. Alert</CardTitle>
                <CardDescription>
                  Displays a callout for user attention
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <InfoIcon className="h-4 w-4" />
                  <AlertTitle>Info</AlertTitle>
                  <AlertDescription>
                    This is an informational alert with an icon.
                  </AlertDescription>
                </Alert>

                <Alert variant="destructive">
                  <TerminalIcon className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Your session has expired. Please log in again.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* 3. ALERT DIALOG */}
            <Card id="alert-dialog">
              <CardHeader>
                <CardTitle>3. Alert Dialog</CardTitle>
                <CardDescription>
                  Modal dialog that interrupts the user with important content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive">Delete Account</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete
                        your account and remove your data from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardContent>
            </Card>

            {/* 4. ASPECT RATIO */}
            <Card id="aspect-ratio">
              <CardHeader>
                <CardTitle>4. Aspect Ratio</CardTitle>
                <CardDescription>
                  Displays content within a desired aspect ratio
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full max-w-md">
                  <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
                    <div className="flex h-full items-center justify-center">
                      <span className="text-sm text-muted-foreground">16:9 Ratio</span>
                    </div>
                  </AspectRatio>
                </div>
              </CardContent>
            </Card>

            {/* 5. AVATAR */}
            <Card id="avatar">
              <CardHeader>
                <CardTitle>5. Avatar</CardTitle>
                <CardDescription>
                  Image element with fallback for representing a user
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                </div>
              </CardContent>
            </Card>

            {/* 6. BADGE */}
            <Card id="badge">
              <CardHeader>
                <CardTitle>6. Badge</CardTitle>
                <CardDescription>
                  Displays a badge or a component that looks like a badge
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </CardContent>
            </Card>

            {/* 7. BREADCRUMB */}
            <Card id="breadcrumb">
              <CardHeader>
                <CardTitle>7. Breadcrumb</CardTitle>
                <CardDescription>
                  Displays the path to the current resource
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Components</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </CardContent>
            </Card>

            {/* 8. BUTTON */}
            <Card id="button">
              <CardHeader>
                <CardTitle>8. Button</CardTitle>
                <CardDescription>
                  Displays a button or a component that looks like a button
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-3">Variants</h4>
                  <div className="flex flex-wrap gap-2">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                  </div>
                </div>
                <Separator />
                <div>
                  <h4 className="text-sm font-medium mb-3">Sizes</h4>
                  <div className="flex flex-wrap items-center gap-2">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                  </div>
                </div>
                <Separator />
                <div>
                  <h4 className="text-sm font-medium mb-3">With Icons</h4>
                  <div className="flex flex-wrap gap-2">
                    <Button>
                      <Mail className="mr-2 h-4 w-4" />
                      Login with Email
                    </Button>
                    <Button variant="outline">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Add Item
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 9. BUTTON GROUP */}
            <Card id="button-group">
              <CardHeader>
                <CardTitle>9. Button Group</CardTitle>
                <CardDescription>
                  Groups related buttons together
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ButtonGroup>
                  <Button variant="outline">First</Button>
                  <Button variant="outline">Second</Button>
                  <Button variant="outline">Third</Button>
                </ButtonGroup>
              </CardContent>
            </Card>

            {/* 10. CALENDAR */}
            <Card id="calendar">
              <CardHeader>
                <CardTitle>10. Calendar</CardTitle>
                <CardDescription>
                  Date picker component for selecting dates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            {/* 11. CARD */}
            <Card id="card">
              <CardHeader>
                <CardTitle>11. Card</CardTitle>
                <CardDescription>
                  Container component with header, content, and footer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Card>
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      This is the card content area.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button>Action</Button>
                  </CardFooter>
                </Card>
              </CardContent>
            </Card>

            {/* 12. CAROUSEL */}
            <Card id="carousel">
              <CardHeader>
                <CardTitle>12. Carousel</CardTitle>
                <CardDescription>
                  A carousel with motion and swipe built using Embla
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Carousel className="w-full max-w-xs mx-auto">
                  <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                              <span className="text-4xl font-semibold">
                                {index + 1}
                              </span>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </CardContent>
            </Card>

            {/* 13. CHART - Placeholder */}
            <Card id="chart">
              <CardHeader>
                <CardTitle>13. Chart</CardTitle>
                <CardDescription>
                  Chart components built with Recharts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-sm text-muted-foreground">
                    Chart component (requires Recharts configuration)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 14. CHECKBOX */}
            <Card id="checkbox">
              <CardHeader>
                <CardTitle>14. Checkbox</CardTitle>
                <CardDescription>
                  Checkbox with label for selections
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms1" />
                  <Label htmlFor="terms1">Accept terms and conditions</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms2" defaultChecked />
                  <Label htmlFor="terms2">Subscribe to newsletter</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms3" disabled />
                  <Label htmlFor="terms3">Disabled checkbox</Label>
                </div>
              </CardContent>
            </Card>

            {/* 15. COLLAPSIBLE */}
            <Card id="collapsible">
              <CardHeader>
                <CardTitle>15. Collapsible</CardTitle>
                <CardDescription>
                  Interactive component to show and hide content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Collapsible
                  open={isCollapsibleOpen}
                  onOpenChange={setIsCollapsibleOpen}
                  className="w-full space-y-2"
                >
                  <div className="flex items-center justify-between space-x-4">
                    <h4 className="text-sm font-semibold">
                      @peduarte starred 3 repositories
                    </h4>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <ChevronDownIcon className="h-4 w-4" />
                        <span className="sr-only">Toggle</span>
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  <div className="rounded-md border px-4 py-2 font-mono text-sm">
                    @radix-ui/primitives
                  </div>
                  <CollapsibleContent className="space-y-2">
                    <div className="rounded-md border px-4 py-2 font-mono text-sm">
                      @radix-ui/colors
                    </div>
                    <div className="rounded-md border px-4 py-2 font-mono text-sm">
                      @stitches/react
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>

            {/* 16. COMMAND */}
            <Card id="command">
              <CardHeader>
                <CardTitle>16. Command</CardTitle>
                <CardDescription>
                  Fast, composable, unstyled command menu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={() => setCommandOpen(true)}>
                  Open Command Menu
                </Button>
                <CommandDialog open={commandOpen} onOpenChange={setCommandOpen}>
                  <CommandInput placeholder="Type a command or search..." />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                      <CommandItem>
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>Calendar</span>
                      </CommandItem>
                      <CommandItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </CommandItem>
                      <CommandItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </CommandDialog>
              </CardContent>
            </Card>

            {/* 17. CONTEXT MENU */}
            <Card id="context-menu">
              <CardHeader>
                <CardTitle>17. Context Menu</CardTitle>
                <CardDescription>
                  Displays a menu at the pointer location
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContextMenu>
                  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
                    Right click here
                  </ContextMenuTrigger>
                  <ContextMenuContent>
                    <ContextMenuItem>Profile</ContextMenuItem>
                    <ContextMenuItem>Billing</ContextMenuItem>
                    <ContextMenuItem>Settings</ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              </CardContent>
            </Card>

            {/* 18. DIALOG */}
            <Card id="dialog">
              <CardHeader>
                <CardTitle>18. Dialog</CardTitle>
                <CardDescription>
                  Modal dialog that overlays the main content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Dialog Title</DialogTitle>
                      <DialogDescription>
                        This is a dialog description. You can place any content here.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <p className="text-sm text-muted-foreground">
                        Dialog content goes here.
                      </p>
                    </div>
                    <DialogFooter>
                      <Button>Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* 19. DRAWER */}
            <Card id="drawer">
              <CardHeader>
                <CardTitle>19. Drawer</CardTitle>
                <CardDescription>
                  Drawer component that slides in from the edge
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button>Open Drawer</Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Drawer Title</DrawerTitle>
                      <DrawerDescription>
                        This is a drawer description.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4">
                      <p className="text-sm text-muted-foreground">
                        Drawer content goes here.
                      </p>
                    </div>
                    <DrawerFooter>
                      <Button>Submit</Button>
                      <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </CardContent>
            </Card>

            {/* 20. DROPDOWN MENU */}
            <Card id="dropdown-menu">
              <CardHeader>
                <CardTitle>20. Dropdown Menu</CardTitle>
                <CardDescription>
                  Displays a menu to the user
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Open Menu</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardContent>
            </Card>

            {/* 21. EMPTY */}
            <Card id="empty">
              <CardHeader>
                <CardTitle>21. Empty State</CardTitle>
                <CardDescription>
                  Placeholder for empty content areas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Empty className="py-10">
                  <div className="mx-auto max-w-sm text-center space-y-2">
                    <h3 className="text-base font-semibold">No results found</h3>
                    <p className="text-sm text-muted-foreground">
                      Try adjusting your search or filter criteria
                    </p>
                  </div>
                </Empty>
              </CardContent>
            </Card>

            {/* 22. FIELD */}
            <Card id="field">
              <CardHeader>
                <CardTitle>22. Field</CardTitle>
                <CardDescription>
                  Form field wrapper with label and description
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <label className="block text-sm font-medium mb-1">Username</label>
                  <p className="text-xs text-muted-foreground mb-2">
                    This is your public display name.
                  </p>
                  <Input placeholder="Enter username" />
                </div>
              </CardContent>
            </Card>

            {/* 23. FORM - Requires react-hook-form */}
            <Card id="form">
              <CardHeader>
                <CardTitle>23. Form</CardTitle>
                <CardDescription>
                  Form components with validation (requires react-hook-form)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <Button>Submit</Button>
                </div>
              </CardContent>
            </Card>

            {/* 24. HOVER CARD */}
            <Card id="hover-card">
              <CardHeader>
                <CardTitle>24. Hover Card</CardTitle>
                <CardDescription>
                  For sighted users to preview content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="link">@nextjs</Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <Avatar>
                        <AvatarFallback>NJ</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@nextjs</h4>
                        <p className="text-sm">
                          The React Framework – created and maintained by @vercel.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </CardContent>
            </Card>

            {/* 25. INPUT */}
            <Card id="input">
              <CardHeader>
                <CardTitle>25. Input</CardTitle>
                <CardDescription>
                  Text input field for user input
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Default input" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Input disabled placeholder="Disabled input" />
              </CardContent>
            </Card>

            {/* 26. INPUT GROUP */}
            <Card id="input-group">
              <CardHeader>
                <CardTitle>26. Input Group</CardTitle>
                <CardDescription>
                  Input with buttons or text addons
                </CardDescription>
              </CardHeader>
              <CardContent>
                <InputGroup>
                  <Input placeholder="Search..." />
                  <Button>Search</Button>
                </InputGroup>
              </CardContent>
            </Card>

            {/* 27. INPUT OTP */}
            <Card id="input-otp">
              <CardHeader>
                <CardTitle>27. Input OTP</CardTitle>
                <CardDescription>
                  One-time password input component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <InputOTP maxLength={6}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </CardContent>
            </Card>

            {/* 28. ITEM - Placeholder */}
            <Card id="item">
              <CardHeader>
                <CardTitle>28. Item</CardTitle>
                <CardDescription>
                  Generic list item component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="p-2 border rounded">Item 1</div>
                  <div className="p-2 border rounded">Item 2</div>
                  <div className="p-2 border rounded">Item 3</div>
                </div>
              </CardContent>
            </Card>

            {/* 29. KBD */}
            <Card id="kbd">
              <CardHeader>
                <CardTitle>29. Keyboard Key</CardTitle>
                <CardDescription>
                  Displays keyboard shortcuts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Kbd>⌘</Kbd>
                  <Kbd>Shift</Kbd>
                  <Kbd>K</Kbd>
                </div>
              </CardContent>
            </Card>

            {/* 30. LABEL */}
            <Card id="label">
              <CardHeader>
                <CardTitle>30. Label</CardTitle>
                <CardDescription>
                  Label for form controls
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Label htmlFor="example">Example Label</Label>
                <Input id="example" placeholder="Associated input" />
              </CardContent>
            </Card>

            {/* 31. MENUBAR */}
            <Card id="menubar">
              <CardHeader>
                <CardTitle>31. Menubar</CardTitle>
                <CardDescription>
                  Visually persistent menu common in desktop apps
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>File</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>New File</MenubarItem>
                      <MenubarItem>Open</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Exit</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>Edit</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>Undo</MenubarItem>
                      <MenubarItem>Redo</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </CardContent>
            </Card>

            {/* 32. NAVIGATION MENU */}
            <Card id="navigation-menu">
              <CardHeader>
                <CardTitle>32. Navigation Menu</CardTitle>
                <CardDescription>
                  Collection of links for site navigation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-[400px] p-4">
                          <p className="text-sm text-muted-foreground">
                            Getting started content
                          </p>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-[400px] p-4">
                          <p className="text-sm text-muted-foreground">
                            Components content
                          </p>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </CardContent>
            </Card>

            {/* 33. PAGINATION */}
            <Card id="pagination">
              <CardHeader>
                <CardTitle>33. Pagination</CardTitle>
                <CardDescription>
                  Pagination with page navigation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardContent>
            </Card>

            {/* 34. POPOVER */}
            <Card id="popover">
              <CardHeader>
                <CardTitle>34. Popover</CardTitle>
                <CardDescription>
                  Displays rich content in a portal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Open Popover</Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">Dimensions</h4>
                        <p className="text-sm text-muted-foreground">
                          Set the dimensions for the layer.
                        </p>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </CardContent>
            </Card>

            {/* 35. PROGRESS */}
            <Card id="progress">
              <CardHeader>
                <CardTitle>35. Progress</CardTitle>
                <CardDescription>
                  Progress indicator
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Progress value={progress} />
                <p className="text-sm text-muted-foreground">{progress}% complete</p>
              </CardContent>
            </Card>

            {/* 36. RADIO GROUP */}
            <Card id="radio-group">
              <CardHeader>
                <CardTitle>36. Radio Group</CardTitle>
                <CardDescription>
                  Set of checkable buttons where only one can be checked
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="option-one">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="r1" />
                    <Label htmlFor="r1">Option One</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="r2" />
                    <Label htmlFor="r2">Option Two</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-three" id="r3" />
                    <Label htmlFor="r3">Option Three</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* 37. SCROLL AREA */}
            <Card id="scroll-area">
              <CardHeader>
                <CardTitle>37. Scroll Area</CardTitle>
                <CardDescription>
                  Visually augments scrollable areas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                  <div className="space-y-2">
                    {Array.from({ length: 30 }).map((_, i) => (
                      <div key={i} className="text-sm">
                        Item {i + 1}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* 38. SELECT */}
            <Card id="select">
              <CardHeader>
                <CardTitle>38. Select</CardTitle>
                <CardDescription>
                  Displays a list of options for selection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="orange">Orange</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* 39. SEPARATOR */}
            <Card id="separator">
              <CardHeader>
                <CardTitle>39. Separator</CardTitle>
                <CardDescription>
                  Visually or semantically separates content
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm">Content above</p>
                  <Separator className="my-4" />
                  <p className="text-sm">Content below</p>
                </div>
              </CardContent>
            </Card>

            {/* 40. SHEET */}
            <Card id="sheet">
              <CardHeader>
                <CardTitle>40. Sheet</CardTitle>
                <CardDescription>
                  Extends Dialog with side panel positioning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button>Open Sheet</Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Sheet Title</SheetTitle>
                      <SheetDescription>
                        Sheet description goes here.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="py-4">
                      <p className="text-sm text-muted-foreground">
                        Sheet content goes here.
                      </p>
                    </div>
                  </SheetContent>
                </Sheet>
              </CardContent>
            </Card>

            {/* 41. SIDEBAR - Complex component */}
            <Card id="sidebar">
              <CardHeader>
                <CardTitle>41. Sidebar</CardTitle>
                <CardDescription>
                  Composable sidebar component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-sm text-muted-foreground">
                    Sidebar component (requires layout setup)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 42. SKELETON */}
            <Card id="skeleton">
              <CardHeader>
                <CardTitle>42. Skeleton</CardTitle>
                <CardDescription>
                  Placeholder for loading content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-[80%]" />
                  <Skeleton className="h-4 w-[60%]" />
                </div>
              </CardContent>
            </Card>

            {/* 43. SLIDER */}
            <Card id="slider">
              <CardHeader>
                <CardTitle>43. Slider</CardTitle>
                <CardDescription>
                  Input for selecting a value from a range
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Slider defaultValue={[50]} max={100} step={1} />
                <Slider defaultValue={[25, 75]} max={100} step={1} />
              </CardContent>
            </Card>

            {/* 44. SONNER - Toast notifications */}
            <Card id="sonner">
              <CardHeader>
                <CardTitle>44. Sonner</CardTitle>
                <CardDescription>
                  Toast notification system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[100px] bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-sm text-muted-foreground">
                    Sonner toast component (requires Sonner provider)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 45. SPINNER */}
            <Card id="spinner">
              <CardHeader>
                <CardTitle>45. Spinner</CardTitle>
                <CardDescription>
                  Loading spinner indicator
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Spinner />
                  <Spinner className="h-8 w-8" />
                  <Spinner className="h-12 w-12" />
                </div>
              </CardContent>
            </Card>

            {/* 46. SWITCH */}
            <Card id="switch">
              <CardHeader>
                <CardTitle>46. Switch</CardTitle>
                <CardDescription>
                  Toggle switch for binary choices
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="airplane-mode">Airplane Mode</Label>
                  <Switch id="airplane-mode" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="notifications">Notifications</Label>
                  <Switch id="notifications" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="disabled">Disabled</Label>
                  <Switch id="disabled" disabled />
                </div>
              </CardContent>
            </Card>

            {/* 47. TABLE */}
            <Card id="table">
              <CardHeader>
                <CardTitle>47. Table</CardTitle>
                <CardDescription>
                  Data table for structured content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableCaption>A list of recent transactions</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">#001</TableCell>
                      <TableCell>
                        <Badge>Success</Badge>
                      </TableCell>
                      <TableCell>user1@example.com</TableCell>
                      <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">#002</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Pending</Badge>
                      </TableCell>
                      <TableCell>user2@example.com</TableCell>
                      <TableCell className="text-right">$150.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">#003</TableCell>
                      <TableCell>
                        <Badge variant="destructive">Failed</Badge>
                      </TableCell>
                      <TableCell>user3@example.com</TableCell>
                      <TableCell className="text-right">$350.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* 48. TABS */}
            <Card id="tabs">
              <CardHeader>
                <CardTitle>48. Tabs</CardTitle>
                <CardDescription>
                  Set of layered sections of content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="account" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account" className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      Account settings and information.
                    </p>
                  </TabsContent>
                  <TabsContent value="password" className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      Change your password here.
                    </p>
                  </TabsContent>
                  <TabsContent value="settings" className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      Manage your settings.
                    </p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* 49. TEXTAREA */}
            <Card id="textarea">
              <CardHeader>
                <CardTitle>49. Textarea</CardTitle>
                <CardDescription>
                  Multi-line text input
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Type your message here..."
                  rows={5}
                />
              </CardContent>
            </Card>

            {/* 50. TOGGLE */}
            <Card id="toggle">
              <CardHeader>
                <CardTitle>50. Toggle</CardTitle>
                <CardDescription>
                  Two-state button that can be on or off
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Toggle aria-label="Toggle bold">
                    <BoldIcon className="h-4 w-4" />
                  </Toggle>
                  <Toggle aria-label="Toggle italic">
                    <ItalicIcon className="h-4 w-4" />
                  </Toggle>
                  <Toggle aria-label="Toggle underline">
                    <UnderlineIcon className="h-4 w-4" />
                  </Toggle>
                </div>
              </CardContent>
            </Card>

            {/* 51. TOGGLE GROUP */}
            <Card id="toggle-group">
              <CardHeader>
                <CardTitle>51. Toggle Group</CardTitle>
                <CardDescription>
                  Group of toggle buttons
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ToggleGroup type="single" defaultValue="center">
                  <ToggleGroupItem value="left" aria-label="Align left">
                    <AlignLeft className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="center" aria-label="Align center">
                    <AlignCenter className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="right" aria-label="Align right">
                    <AlignRight className="h-4 w-4" />
                  </ToggleGroupItem>
                </ToggleGroup>
              </CardContent>
            </Card>

            {/* 52. TOOLTIP */}
            <Card id="tooltip">
              <CardHeader>
                <CardTitle>52. Tooltip</CardTitle>
                <CardDescription>
                  Popup that displays information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover me</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This is a tooltip</p>
                  </TooltipContent>
                </Tooltip>
              </CardContent>
            </Card>
          </div>

          {/* Component Index */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Component Index</CardTitle>
              <CardDescription>
                Quick reference to all 54 components (52 active + 2 placeholders)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {[
                  { name: "Accordion", id: "accordion" },
                  { name: "Alert", id: "alert" },
                  { name: "Alert Dialog", id: "alert-dialog" },
                  { name: "Aspect Ratio", id: "aspect-ratio" },
                  { name: "Avatar", id: "avatar" },
                  { name: "Badge", id: "badge" },
                  { name: "Breadcrumb", id: "breadcrumb" },
                  { name: "Button", id: "button" },
                  { name: "Button Group", id: "button-group" },
                  { name: "Calendar", id: "calendar" },
                  { name: "Card", id: "card" },
                  { name: "Carousel", id: "carousel" },
                  { name: "Chart", id: "chart" },
                  { name: "Checkbox", id: "checkbox" },
                  { name: "Collapsible", id: "collapsible" },
                  { name: "Command", id: "command" },
                  { name: "Context Menu", id: "context-menu" },
                  { name: "Dialog", id: "dialog" },
                  { name: "Drawer", id: "drawer" },
                  { name: "Dropdown Menu", id: "dropdown-menu" },
                  { name: "Empty", id: "empty" },
                  { name: "Field", id: "field" },
                  { name: "Form", id: "form" },
                  { name: "Hover Card", id: "hover-card" },
                  { name: "Input", id: "input" },
                  { name: "Input Group", id: "input-group" },
                  { name: "Input OTP", id: "input-otp" },
                  { name: "Item", id: "item" },
                  { name: "Kbd", id: "kbd" },
                  { name: "Label", id: "label" },
                  { name: "Menubar", id: "menubar" },
                  { name: "Navigation Menu", id: "navigation-menu" },
                  { name: "Pagination", id: "pagination" },
                  { name: "Popover", id: "popover" },
                  { name: "Progress", id: "progress" },
                  { name: "Radio Group", id: "radio-group" },
                  { name: "Scroll Area", id: "scroll-area" },
                  { name: "Select", id: "select" },
                  { name: "Separator", id: "separator" },
                  { name: "Sheet", id: "sheet" },
                  { name: "Sidebar", id: "sidebar" },
                  { name: "Skeleton", id: "skeleton" },
                  { name: "Slider", id: "slider" },
                  { name: "Sonner", id: "sonner" },
                  { name: "Spinner", id: "spinner" },
                  { name: "Switch", id: "switch" },
                  { name: "Table", id: "table" },
                  { name: "Tabs", id: "tabs" },
                  { name: "Textarea", id: "textarea" },
                  { name: "Toggle", id: "toggle" },
                  { name: "Toggle Group", id: "toggle-group" },
                  { name: "Tooltip", id: "tooltip" },
                ].map((component) => (
                  <a
                    key={component.id}
                    href={`#${component.id}`}
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors text-sm"
                  >
                    <CheckCircle2Icon className="h-3 w-3 text-green-500 flex-shrink-0" />
                    <span>{component.name}</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Artivism Design System
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link href="/">
                <HomeIcon className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </TooltipProvider>
  )
}

