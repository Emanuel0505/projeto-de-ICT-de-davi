import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SlideLayout, SlideContainer, SlideHeader } from "./SlideLayout"
import { aerogeneratorParts } from "@/data/slides-data"
import { Wind, Zap, Users } from "@/components/icons"

export function AerogeneratorSlide() {
  return (
    <SlideLayout gradient="bg-gradient-to-br from-[#001a0d] via-[#000a1a] to-[#001020]">
      <SlideContainer>
        <SlideHeader
          badge="Nosso Projeto"
          badgeClass="bg-[#DBE64C] text-[#001F3F]"
          title="Aerogeradores"
          subtitle="A tecnologia por trás da energia eólica"
        />

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {aerogeneratorParts.map((part) => (
            <Card
              key={part.title}
              className="bg-black/50 border-[#74C365]/30 text-white backdrop-blur-sm"
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">
                  {part.icon === "wind" && <Wind size={48} />}
                  {part.icon === "zap" && <Zap size={48} />}
                  {part.icon === "users" && <Users size={48} />}
                </div>
                <CardTitle className="text-lg text-[#74C365]">{part.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-white text-sm">
                {part.description}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-black/60 border-[#DBE64C]/40 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-[#DBE64C] text-center">
              🎯 Nossa Maquete
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-white text-lg">
            Nosso grupo desenvolveu uma{" "}
            <strong className="text-[#DBE64C]">maquete funcional de um aerogerador</strong> para demonstrar o
            funcionamento desta tecnologia limpa e sustentável, destacando a
            importância das energias renováveis para o desenvolvimento sustentável.
          </CardContent>
        </Card>
      </SlideContainer>
    </SlideLayout>
  )
}
