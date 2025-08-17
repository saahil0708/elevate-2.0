import { CommunityPanelist } from "@/New/animated-panel.jsx";

export default function CommunityPanelistDemo() {
  const communities = [
    {
      name: "Tech Leaders",
      speakers: [
        {
          name: "Sarah Chen",
          designation: "Senior Software Engineer at Google",
          bio: "Passionate about building scalable systems and mentoring the next generation of developers. Sarah has over 8 years of experience in full-stack development and cloud architecture.",
          src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          instagram: "https://instagram.com/sarahchen",
          linkedin: "https://linkedin.com/in/sarahchen",
        },
        {
          name: "Michael Rodriguez",
          designation: "CTO at InnovateSphere",
          bio: "Leading digital transformation initiatives and building high-performance engineering teams. Michael specializes in AI/ML integration and startup scaling strategies.",
          src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          instagram: "https://instagram.com/michaelrodriguez",
          linkedin: "https://linkedin.com/in/michaelrodriguez",
        },
      ],
    },
    {
      name: "Design Community",
      speakers: [
        {
          name: "Emily Watson",
          designation: "Lead UX Designer at Figma",
          bio: "Creating intuitive user experiences that delight millions of users worldwide. Emily advocates for inclusive design and accessibility in digital products.",
          src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          instagram: "https://instagram.com/emilywatson",
          linkedin: "https://linkedin.com/in/emilywatson",
        },
        {
          name: "Alex Kim",
          designation: "Creative Director at Adobe",
          bio: "Bridging the gap between creativity and technology through innovative design solutions. Alex has worked with Fortune 500 companies to reimagine their digital presence.",
          src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          instagram: "https://instagram.com/alexkim",
          linkedin: "https://linkedin.com/in/alexkim",
        },
      ],
    },
    {
      name: "Entrepreneurs",
      speakers: [
        {
          name: "James Thompson",
          designation: "Founder & CEO at StartupLab",
          bio: "Serial entrepreneur with 3 successful exits. James mentors early-stage startups and invests in innovative technology companies across various industries.",
          src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          instagram: "https://instagram.com/jamesthompson",
          linkedin: "https://linkedin.com/in/jamesthompson",
        },
        {
          name: "Lisa Park",
          designation: "Co-founder at GreenTech Ventures",
          bio: "Building sustainable technology solutions for a better tomorrow. Lisa focuses on climate tech startups and has raised over $50M in funding for environmental initiatives.",
          src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          instagram: "https://instagram.com/lisapark",
          linkedin: "https://linkedin.com/in/lisapark",
        },
      ],
    },
    {
      name: "Marketing Experts",
      speakers: [
        {
          name: "David Chen",
          designation: "VP of Marketing at Shopify",
          bio: "Growth marketing specialist with expertise in digital campaigns and brand strategy. David has helped scale multiple companies from startup to IPO.",
          src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          instagram: "https://instagram.com/davidchen",
          linkedin: "https://linkedin.com/in/davidchen",
        },
        {
          name: "Rachel Martinez",
          designation: "Content Strategy Lead at HubSpot",
          bio: "Expert in content marketing and community building. Rachel has built engaged communities of over 100K members and specializes in B2B content strategy.",
          src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          instagram: "https://instagram.com/rachelmartinez",
          linkedin: "https://linkedin.com/in/rachelmartinez",
        },
      ],
    },
  ]

  return <CommunityPanelist communities={communities} autoplay={true} />
}
