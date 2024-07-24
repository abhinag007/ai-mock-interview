import { Button } from "@/components/ui/button";
import { ClerkProvider } from "@clerk/nextjs";

export default function Home() {
  return (
      <div>
        <h2>Hello My Freind</h2>
        <Button>Click Me!</Button>
      </div>
  );
}
