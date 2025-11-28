import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SlideLayout, SlideContainer, SlideHeader } from "./SlideLayout"
import { importanceItems } from "@/data/slides-data"
import { Zap, Target, Globe } from "@/components/icons"

export function ImportanceSlide() {
  return (
    <SlideLayout gradient="bg-gradient-to-br from-[#000a1a] via-[#001020] to-[#001a0d]">
      <SlideContainer>
        <SlideHeader
          badge="Reflexão"
          badgeClass="bg-[#DBE64C] text-[#001F3F]"
          title="Por que a ODS 7 é importante?"
        />

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {importanceItems.map((item) => (
            <Card
              key={item.title}
              className="bg-black/50 border-[#74C365]/30 text-white backdrop-blur-sm"
            >
              <CardHeader>
                <div className="text-3xl mb-2">
                  {item.icon === "zap" && <Zap size={36} />}
                  {item.icon === "target" && <Target size={36} />}
                  {item.icon === "globe" && <Globe size={36} />}
                </div>
                <CardTitle className="text-xl text-[#74C365]">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-white">
                <span dangerouslySetInnerHTML={{ 
                  __html: item.description.replace(
                    /(desenvolvimento econômico, saúde, educação|reduzir emissões de gases de efeito estufa|milhões de pessoas no mundo|transição global para energias limpas)/g,
                    '<strong class="text-[#DBE64C]">$1</strong>'
                  )
                }} />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block p-6 bg-black/60 rounded-2xl border border-[#DBE64C]/40">
            <p className="text-2xl font-semibold text-[#DBE64C]">
              &ldquo;A energia é a base de toda atividade humana e econômica&rdquo;
            </p>
          </div>
        </div>
      </SlideContainer>
    </SlideLayout>
  )
}
