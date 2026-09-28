import Container from "@/components/layout/Container";
import TeamMemberCard from "@/components/shared/common/TeamMemberCard";
import { team } from "@/lib/data/team";

export default function MeetTheTeam() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-overline text-accent">The Arvello team</p>
          <h2 className="mt-3 text-h2">Meet the People Behind Arvello</h2>
          <p className="mt-4 text-body-md text-text-secondary">Designers, makers, and problem-solvers who care about what comes into your home.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => <div key={member.id}><TeamMemberCard member={member} /></div>)}
        </div>
      </Container>
    </section>
  );
}
