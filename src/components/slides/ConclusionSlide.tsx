import { Badge } from "@/components/ui/badge"
import { Book, Leaf, Wind, Zap } from "@/components/icons"
import { SlideLayout, SlideContainer } from "./SlideLayout"
import { renewableTypes } from "@/data/slides-data"

export function ConclusionSlide() {
  return (
    <SlideLayout gradient="bg-gradient-to-br from-[#001a0d] via-[#000a1a] to-[#001020]">
      <SlideContainer maxWidth="4xl" centered>
        <div className="mb-8 flex justify-center">
          <div className="p-6 bg-[#DBE64C]/20 rounded-full">
            <Book />
          </div>
        </div>

        <Badge className="mb-6 bg-[#DBE64C] text-[#001F3F] text-lg px-4 py-2">
          Conclusão
        </Badge>

        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          Um Futuro Mais <span className="text-[#DBE64C]">Sustentável</span>
        </h2>

        <div className="space-y-6 mb-10">
          <p className="text-xl text-white leading-relaxed">
            A <strong className="text-[#DBE64C]">ODS 7</strong> é essencial para preparar um futuro mais
            sustentável, eficiente e acessível energeticamente.
          </p>

          <p className="text-xl text-white leading-relaxed">
            Ela incentiva a <strong className="text-[#DBE64C]">transição global para energias limpas</strong>, ao
            mesmo tempo em que busca garantir que{" "}
            <strong className="text-[#DBE64C]">ninguém fique sem acesso</strong> aos benefícios que a energia
            moderna proporciona.
          </p>

          <div className="p-6 bg-black/60 rounded-2xl border border-[#DBE64C]/40">
            <p className="text-2xl font-semibold text-[#DBE64C]">
              🌱 A energia renovável é o caminho para um mundo melhor!
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {renewableTypes.map((type) => (
            <Badge
              key={type.name}
              variant="outline"
              className={`text-lg px-4 py-2 ${type.borderColor} ${type.textColor}`}
            >
              <span className="inline-flex items-center gap-2">
                {type.icon === "leaf" && <Leaf size={18} />}
                {type.icon === "wind" && <Wind size={18} />}
                {type.icon === "zap" && <Zap size={18} />}
                <span>{type.name}</span>
              </span>
            </Badge>
          ))}
        </div>

        <div className="mt-12 text-[#74C365]">
          <p className="text-lg">Obrigado pela atenção!</p>
          <p className="text-sm mt-2">ICT • UFRN • 2025</p>
        </div>
      </SlideContainer>
    </SlideLayout>
  )
}
