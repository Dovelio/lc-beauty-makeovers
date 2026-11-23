import {
  Sparkles,
  ShieldCheck,
  UserCheck,
  Crown,
  Scissors,
  Heart,
  Smile,
} from 'lucide-react';
import '../styles/whyChooseUs.css';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <ShieldCheck size={26} />,
      title: 'Professional Beauty Care',
      desc: 'We uphold thorough hygiene protocols with sanitized instruments, clean single-use disposables, and trusted, skin-safe formulations.',
    },
    {
      icon: <UserCheck size={26} />,
      title: 'Personalized Attention',
      desc: 'No hurried routines. We take time to understand your face shape, skin undertone, hair texture, and individual style before every session.',
    },
    {
      icon: <Crown size={26} />,
      title: 'Bridal & Makeover Expertise',
      desc: 'Specialized in traditional, contemporary, and HD camera-ready bridal makeovers that remain fresh and radiant throughout your celebrations.',
    },
    {
      icon: <Sparkles size={26} />,
      title: 'Hair & Skincare Rituals',
      desc: 'Carefully tailored therapies ranging from deeply nourishing hair spas and keratin smoothening to revitalizing facials and de-tanning.',
    },
    {
      icon: <Scissors size={26} />,
      title: 'Integrated Tailoring Services',
      desc: 'Seamless wardrobe coordination with bespoke blouse stitching, custom dress designing, precision alterations, and saree pre-pleating.',
    },
    {
      icon: <Smile size={26} />,
      title: 'Customer-Focused Service',
      desc: 'Dedicated appointment scheduling, attentive consultations, and a calming, friendly atmosphere where you feel valued and pampered.',
    },
  ];

  return (
    <section id="why-us" className="why-us-section section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Heart size={14} />
            <span>The LC Standard</span>
          </div>
          <h2 className="section-title">Why Choose LC Beauty &amp; Makeovers</h2>
          <p className="section-subtitle">
            Thoughtful service, high standards of cleanliness, and skilled artistry in every makeover, haircut, and stitch.
          </p>
        </div>

        {/* 6 Reasons Cards Grid */}
        <div className="why-us-grid">
          {reasons.map((item, idx) => (
            <div key={idx} className="why-card">
              <div className="why-card-top">
                <div className="why-icon-box">{item.icon}</div>
                <span className="why-card-number">0{idx + 1}</span>
              </div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
