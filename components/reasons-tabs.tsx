import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, TrendingUp, Zap } from "lucide-react"

export default function ReasonsTabs() {
  return (
    <section className="mb-16">
      <Tabs className="w-full bg-violet-200 rounded-lg">
        <TabsList className="grid text-white bg-violet-800  w-full grid-cols-3 mb-8">
          <TabsTrigger value="motivos" className="text-sm">
            <CheckCircle className="w-4 h-4 mr-2" /> Motivos
          </TabsTrigger>
          <TabsTrigger value="vantagens" className="text-sm">
            <TrendingUp className="w-4 h-4 mr-2" /> Vantagens
          </TabsTrigger>
          <TabsTrigger value="potential" className="text-sm">
            <Zap className="w-4 h-4 mr-2" /> Possíveis Desvantagens
          </TabsTrigger>
        </TabsList>
        <div className="*:text-center font-bold text-lg  pb-10 ">
        <TabsContent value="motivos" className="">
          <ol className="space-y-2">
            <li>Estarei com você para qualquer coisa</li>
            <li>Vamos viajar para diversos lugares incríveis</li>
            <li>Teremos sempre alguém para fofocar</li>
            <li>Sempre tentarei tirar um sorriso seu</li>
            <li>Foguinho de tik tok foda 🔥</li>
            <li>Tortas de morango infinitas</li>
            <li>Não há concorrência (sou obcecado por você)</li>
          </ol>
        </TabsContent>
        <TabsContent value="vantagens" className=" text-center">
          <p className="text-3xl text-emerald-400">Você vai ser a mulher mais feliz do mundo</p>
        </TabsContent>
        <TabsContent value="potential" className="">
          <ul className="space-y-2">
            <li className="">Se você me beijar, provavelmente ficaremos no mesmo local por uns 2 minutos</li>
            <li className="">Lerdo</li>
            <li className="">Vou querer te ver a cada 2min</li>
          </ul>
        </TabsContent>
        </div>
      </Tabs>
    </section>
  )
}

