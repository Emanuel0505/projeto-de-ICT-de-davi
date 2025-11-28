import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Users, Wind, Zap, Leaf, Globe, Target, Book } from "@/components/icons"
import type { ReactNode } from "react"
import { SlideLayout, SlideContainer } from "./SlideLayout"
import { teamMembers } from "@/data/slides-data"

export function TeamSlide() {
  return (
    <SlideLayout gradient="bg-gradient-to-br from-[#000a1a] via-[#001020] to-[#001a0d]">
      <SlideContainer>
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="p-4 bg-[#74C365]/30 rounded-2xl">
            <Users />
          </div>
          <div className="text-center">
            <Badge className="mb-2 bg-[#DBE64C] text-[#001F3F]">ICT - UFRN</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Nossa Equipe</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {teamMembers.map((member, index) => (
            <Card
              key={member.name}
              className={`bg-black/50 ${member.border} text-white backdrop-blur-sm ${
                index === teamMembers.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <CardHeader className="text-center">
                <div
                  className={`w-16 h-16 mx-auto ${member.bgColor} rounded-full flex items-center justify-center text-2xl mb-2`}
                >
                  {
                    (() => {
                      const iconMap: Record<string, ReactNode> = {
                        users: <Users />,
                        wind: <Wind />,
                        zap: <Zap />,
                        leaf: <Leaf />,
                        globe: <Globe />,
                        target: <Target />,
                        book: <Book />,
                      }
                      return iconMap[String(member.icon)] ?? (member as any).emoji
                    })()
                  }
                </div>
                <CardTitle className={`text-lg ${member.textColor}`}>
                  {member.name}
                </CardTitle>
                <CardDescription className="text-white/90">
                  {member.role}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="text-center p-6 bg-black/40 rounded-2xl border border-[#74C365]/30">
          <p className="text-xl text-white">
            <strong className="text-[#DBE64C]">Disciplina:</strong> ICT – Introdução à Ciência e Tecnologia
          </p>
          <p className="text-lg text-[#74C365] mt-2">
            Curso de Ciência e Tecnologia (ECT) • UFRN
          </p>
        </div>
      </SlideContainer>
    </SlideLayout>
  )
}
