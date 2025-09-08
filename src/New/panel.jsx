import { CommunityPanelist } from "@/New/animated-panel.jsx";

export default function CommunityPanelistDemo() {
  const communities = [
    {
      name: "Industry Panel",
      speakers: [
        {
          name: "Pankaj Judge ",
          designation: "Founder of Chai Thela",
          bio: "From a failed startup to scaling a 32-store QSR chain across 6 cities with 1.5 Cr funding and 6.5 Cr ARR—this journey proves that resilience and relentless execution can turn setbacks into success. Biggest takeaways: move fast, build unstoppable teams, never quit, and remember—sales cure all startup pains.",
          src: "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwmKPozycW8p1VwSr6YDJTLjBZXz3x49d205ya",
          instagram: "https://instagram.com/sarahchen",
          linkedin: "https://linkedin.com/in/sarahchen",
        },
        {
          name: "Ankush Sharma",
          designation: "ISB Mohali",
          bio: "Manager - Program Analytics specializing in Data Analytics & Salesforce, driving insights and strategic impact. Ex-ISB (Director’s Office) with expertise in analytics, strategy, execution, and process digitization.",
          src: "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1Uw6BRCuIKyn82DNUvCt1MQ5pXgJksoW3ObZPyi",
          instagram: "https://instagram.com/michaelrodriguez",
          linkedin: "https://www.linkedin.com/in/ankush-sharma-95545418/",
        },
        {
          name: "Dr. Harpreet ",
          designation: "Director Academics, IIT Ropar",
          bio: "Leading digital transformation initiatives and building high-performance engineering teams. Michael specializes in AI/ML integration and startup scaling strategies.",
          src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          instagram: "https://instagram.com/michaelrodriguez",
          linkedin: "https://linkedin.com/in/michaelrodriguez",
        },
        {
          name: "Dr. Vikas Chawla",
          designation: "Director Academics, PTU",
          bio: "Professor at I.K. Gujral Punjab Technical University, with expertise in academics, research, and mentoring future innovators. Dedicated to fostering knowledge, innovation, and excellence in higher education.",
          src: "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwxVLNIKL4Fz9vfNj7L5miX4SuQMexJhoPwrag",
          instagram: "https://instagram.com/michaelrodriguez",
          linkedin: "https://www.linkedin.com/in/prof-vikas-chawla-367639247/",
        },
      ],
    },
    {
      name: "Community Panel",
      speakers: [
        {
          name: "Gaurav Kumar",
          designation: "Lead GDG New Delhi",
          bio: "Creating intuitive user experiences that delight millions of users worldwide. Emily advocates for inclusive design and accessibility in digital products.",
          src: "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwH9FmSVNI50h6VMBPGnsak9oYCxpFQcEr4WLU",
          instagram: "https://instagram.com/emilywatson",
          linkedin: "https://linkedin.com/in/emilywatson",
        },
        {
          name: "Pranav Kumar",
          designation: "Lead Mongo DB",
          bio: "Innovative IT professional with 8+ years of expertise in Microsoft technologies, frontend frameworks, and automation tools, driving efficiency and business success.Passionate about technology, networking, and exploring opportunities to create impactful change in the IT world.",
          src: "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwYdUhtGHxvKkyR3IJgDf6AqeWiXo1sMrl0hH9",
          instagram: "https://www.instagram.com/kr.pranaw/",
          linkedin: "https://www.linkedin.com/in/pranav-kumar-verma/",
        },
        {
          name: "Loveleen Kaur",
          designation: "Lead AI Community Delhi, Women Tech Makers",
          bio: "Loveleen Kaur, a WTM Ambassador and Google Android Educator, is a Senior Engineer with 7+ years of experience, blending logic with creativity. Passionate about mentoring, she spreads positivity while empowering others to learn, grow, and thrive in tech.",
          src: "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwthY7HZK3G7qzESWhXbru6ZD5TOA3kaecL09J",
          instagram: "https://www.instagram.com/loveleen.nancy/",
          linkedin: "https://www.linkedin.com/in/loveleen-kaur/",
        },
        {
          name: "Chhavi Garg ",
          designation: "Founder & Lead Bharat XR Community ",
          bio: "Co-Founder of Arexa & Bharat XR, empowering 80,000+ learners and shaping India’s AR/VR/MR ecosystem through training, hackathons, and immersive experiences. From global podcasts to national judging panels, I thrive at the intersection of storytelling, innovation, and community-building in XR.",
          src: "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwCbWY4HsUg9tzRh0wxOVZnsoTYDG7lE8daWHp",
          instagram: "https://www.instagram.com/chhavigg/",
          linkedin: "https://www.linkedin.com/in/chhavigg/",
        },
        {
          name: "Ankur Gill ",
          designation: "Founder The Uniques Community",
          bio: "Ankur Gill, Director of Operations at SVGOI with 10+ years of leadership, is a visionary educator, researcher, and strategist driving academic excellence, innovation, and equal opportunities in education.Founder of initiatives like Super 60 and The Uniques, he has empowered thousands of students, published research, secured patents, and earned 10+ national & international awards for his impactful contributions.",
          src: "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1Uwm0r8B9cW8p1VwSr6YDJTLjBZXz3x49d205ya",
          instagram: "https://www.instagram.com/ankurgillofficial/",
          linkedin: "https://www.linkedin.com/in/ankurgillofficial/",
        },
      ],
    },
    {
      name: "Startup Panel",
      speakers: [
        {
          name: "Mitresh Sharma ",
          designation: "Founder First Bud Organics ",
          bio: "Serial entrepreneur with 3 successful exits. James mentors early-stage startups and invests in innovative technology companies across various industries.",
          src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          instagram: "https://instagram.com/jamesthompson",
          linkedin: "https://linkedin.com/in/jamesthompson",
        },
        {
          name: "Tathagat Kumar",
          designation: "Founder Foundr Flow",
          bio: "Startup mentor and ecosystem enabler, empowering young founders through FoundrFlow and FoundrX with mentorship, strategic guidance, and community-driven innovation. With 8+ years in digital strategy and experience mentoring at 50+ institutions, I bridge ideas to execution while fostering India’s next wave of entrepreneurs.",
          src: "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwgNMvxylvY0wJSo9cuVLWG2rpHtCOfq6IZi1T",
          instagram: "https://instagram.com/lisapark",
          linkedin: "https://www.linkedin.com/in/heytathagat/",
        },
        {
          name: "Ruchi Gour Mehta",
          designation: "CFO, Product Armour ",
          bio: "With leadership roles at ITC, Asian Paints, Amazon’s Cloudtail, Myntra, Swiggy, and Dream Sports, I bring deep expertise across finance, audits, business strategy, and investments.I aspire to continue an ethical, principle-driven journey, delivering value through strong leadership, governance, and analytical skills.",
          src: "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwlhwQr0aQ3YHk9hW74806ftIadsTljLwGBUog",
          instagram: "https://instagram.com/lisapark",
          linkedin: "https://www.linkedin.com/in/ruchi-gour-mehta-92109b30/",
        },
        {
          name: "Reyansh Juneja ",
          designation: "Founder, MemoTag ",
          bio: "Builder, hacker, and dreamer — Founder of MemoTag & Gigtern, and part of Founder's Office at AppOyster, with experience across tech, marketing, design, and operations. Currently pursuing UG’28 at Masters’ Union, bringing ideas to life with a creator’s mindset.",
          src: "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwMml52yjKT8yFRprHYOzIulXWf1a7xAmCbPhw",
          instagram: "https://instagram.com/lisapark",
          linkedin: "https://www.linkedin.com/in/reyansh-juneja/",
        },
        {
          name: "Rohan Kashyap ",
          designation: "Founder, Burger Bae ",
          bio: "Founder of Burger Bae, building a brand that blends flavor, creativity, and customer experience. Passionate about entrepreneurship, innovation, and scaling impactful food ventures.",
          src: "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwES4sH6RN98Yq5oMVpl3Pis7wxueh1Ofb0XF4",
          instagram: "https://instagram.com/lisapark",
          linkedin: "https://www.linkedin.com/in/rohan-kashyap-8b242582/",
        },
        {
          name: "Saurabh  Tyagi ",
          designation: "Founder, Nooky ",
          bio: "Building sustainable technology solutions for a better tomorrow. Lisa focuses on climate tech startups and has raised over $50M in funding for environmental initiatives.",
          src: "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwbswMbNzprnwEgut0SD28T56hsqQiABoZXFv3",
          instagram: "https://instagram.com/lisapark",
          linkedin: "https://linkedin.com/in/lisapark",
        },
      ],
    },
    {
      name: "Alumini Panel",
      speakers: [
        {
          name: "Anshika Tripathi",
          designation: "Founder and Director, Aruma, Lifeatwe and Dastaan",
          bio: "Growth marketing specialist with expertise in digital campaigns and brand strategy. David has helped scale multiple companies from startup to IPO.",
          src: "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwP25CcxrWw63hBJjmVUqPag7xkTLIYMQteGlN",
          instagram: "https://instagram.com/davidchen",
          linkedin: "https://linkedin.com/in/davidchen",
        },
        {
          name: "Yash Khandelwal ",
          designation: "Founder and CEO, Xpensease",
          bio: "Founder & CEO of Xpensease, building the future of effortless expense tracking with expertise in Flutter, Firebase, GCP, and fintech product development. Backed by Google Startup School, AWS Activate, and Startup India, I’m scaling Xpensease while seeking investors, collaborators, and ecosystem partners.",
          src: "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwCvHQyDUg9tzRh0wxOVZnsoTYDG7lE8daWHp3",
          instagram: "https://instagram.com/rachelmartinez",
          linkedin: "https://www.linkedin.com/in/yashkhandelwal10/",
        },
        {
          name: "Vikrant Rathour ",
          designation: "Co Founder & CTO, Code Cyper",
          bio: "I’m Vikrant Rathour, CTO & Co-founder at Code Cyper, with 6+ years of expertise in full-stack development, AR/VR, game design, and AI-powered solutions. I help startups and enterprises transform bold ideas into scalable, secure, and user-focused digital products that drive real business impact.",
          src: "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwrCPvmWg6JxupWUeMtP2CRFH4Lcwn5TfGvsz9",
          instagram: "https://instagram.com/rachelmartinez",
          linkedin: "https://www.linkedin.com/in/vikrant-rathour-227711178/",
        },
      ],
    },
    {
      name: "Workshop Panel",
      speakers: [
        {
          name: "Ripudaman Gaur",
          designation: "Dean, Lloyd Business School",
          bio: "Dr. Ripudaman Gaur, Professor & Dean at Lloyd Business School, is a renowned academician, administrator, motivational speaker, and personal branding coach with 21+ years of experience. Known as the Brand Guru and Selfie Guru, he has delivered 200+ talks globally, hosted 50+ quiz shows, and inspired thousands through his impactful sessions, research, and publications.",
          src: "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1Uw6eu66pyn82DNUvCt1MQ5pXgJksoW3ObZPyiI",
          instagram: "https://instagram.com/davidchen",
          linkedin: "https://www.linkedin.com/in/dr-ripudaman-gaur-4910761b/",
        },
      ],
    },
  ]

  return <CommunityPanelist communities={communities} autoplay={true} />
}
