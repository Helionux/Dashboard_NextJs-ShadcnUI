import { Button } from "@/components/ui/button"

const Homepage = () => {
  return(
    <div className="h-screen flex items-center justify-center ">
      <Button variant="destructive" size="xl" className="rounded-full">
        <CirclePlus />
        Click me
        </Button>
    </div>
  )   
}

export default Homepage