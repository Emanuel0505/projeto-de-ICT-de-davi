import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { SlideLayout, SlideContainer, SlideHeader } from "./SlideLayout"
import { brazilGoals, brazilEnergySources } from "@/data/slides-data"
import { Leaf, Wind, Zap } from "@/components/icons"

export function BrazilSlide() {
  return (
    <SlideLayout gradient="bg-gradient-to-br from-[#001a0d] via-[#002010] to-[#000a1a]">
      <SlideContainer>
        <SlideHeader
          badge="🇧🇷 Brasil"
          badgeClass="bg-[#DBE64C] text-[#001F3F]"
          title="O Brasil e a ODS 7"
          subtitle="Metas adaptadas à realidade nacional"
        />

        <div className="space-y-4 mb-8">
          {brazilGoals.map((goal) => (
            <Card
              key={goal.id}
              className="bg-black/50 border-[#74C365]/30 text-white backdrop-blur-sm"
            >
              <CardContent className="py-6">
                <div className="flex items-center gap-4">
                  <Badge className={`${goal.badgeColor} shrink-0`}>{goal.id}</Badge>
                  <p className="text-white">
                    <strong className="text-[#DBE64C]">
                      {goal.description.split(" ").slice(0, 3).join(" ")}
                    </strong>{" "}
                    {goal.description.split(" ").slice(3).join(" ")}
                  </p>
                </div>
                {goal.hasProgress && (
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[#74C365]">Matriz Renovável</span>
                      <span className="text-[#74C365]">~{goal.progressValue}%</span>
                    </div>
                    <Progress value={goal.progressValue} className="h-3" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {brazilEnergySources.map((source) => (
            <div key={source.title} className="text-center p-4 bg-black/40 rounded-xl border border-[#74C365]/20">
              <div className="text-3xl mb-2">
                {source.icon === "leaf" && <Leaf size={36} />}
                {source.icon === "wind" && <Wind size={36} />}
                {source.icon === "zap" && <Zap size={36} />}
              </div>
              <p className="text-[#DBE64C] font-semibold">{source.title}</p>
              <p className="text-sm text-white/90">{source.subtitle}</p>
            </div>
          ))}
        </div>
      </SlideContainer>
    </SlideLayout>
  )
}
