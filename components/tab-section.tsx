import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TabSection() {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg my-8">
      <Tabs defaultValue="reasons" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="reasons">Reasons</TabsTrigger>
          <TabsTrigger value="advantages">Advantages</TabsTrigger>
          <TabsTrigger value="disadvantages">Disadvantages</TabsTrigger>
        </TabsList>
        <TabsContent value="reasons">
          <ul className="list-disc pl-5 space-y-2">
            <li>You're incredibly kind and caring</li>
            <li>Your smile brightens up my day</li>
            <li>We share similar interests and values</li>
          </ul>
        </TabsContent>
        <TabsContent value="advantages">
          <ul className="list-disc pl-5 space-y-2">
            <li>We could create amazing memories together</li>
            <li>Support each other in our goals and dreams</li>
            <li>Enjoy life's adventures side by side</li>
          </ul>
        </TabsContent>
        <TabsContent value="disadvantages">
          <p className="italic text-gray-600">
            I couldn't think of any disadvantages. You're perfect just the way you are!
          </p>
        </TabsContent>
      </Tabs>
    </section>
  )
}

