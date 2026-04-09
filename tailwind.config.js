/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./connected_course/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        'fill-progress': 'fillProgress 0.9s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'pulse-slow': 'pulse 6s ease-in-out infinite',
        'logo-hover': 'logoHover 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
        'card-lift': 'cardLift 0.28s cubic-bezier(0.22, 1, 0.36, 1)',
        'card-icon-rotate': 'iconRotate 0.2s ease 0.08s',
        'project-hover': 'projectHover 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
        'skill-tags-slide': 'skillTagsSlide 0.24s ease 0.12s',
        'icon-pulse': 'iconPulse 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'node-hover': 'nodeHover 0.26s',
        'flow-arrow': 'flowArrow 0.5s linear infinite',
        'schedule-highlight': 'scheduleHighlight 0.22s cubic-bezier(0.22, 1, 0.36, 1)',
        'cta-hover': 'ctaHover 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
        'cta-click': 'ctaClick 0.18s',
        'final-btn-enter': 'finalBtnEnter 0.6s ease forwards 0.3s',
        'background-breathing': 'backgroundBreathing 12s linear infinite',
      },
      keyframes: {
        fillProgress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.6' },
        },
        logoHover: {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.05) rotate(6deg)' },
          '100%': { transform: 'scale(1.05) rotate(0deg)' },
        },
        cardLift: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '100%': { transform: 'translateY(-6px) scale(1.03)' },
        },
        iconRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(12deg)' },
        },
        projectHover: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.04)' },
        },
        skillTagsSlide: {
          '0%': { transform: 'translateY(8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        iconPulse: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)' },
        },
        nodeHover: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
        flowArrow: {
          '0%': { transform: 'translateX(0) opacity: 0.6' },
          '100%': { transform: 'translateX(12px) opacity: 1' },
        },
        scheduleHighlight: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-5px)' },
        },
        ctaHover: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.06)' },
        },
        ctaClick: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.96)' },
          '100%': { transform: 'scale(1)' },
        },
        finalBtnEnter: {
          '0%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        backgroundBreathing: {
          '0%': { opacity: '0.96' },
          '100%': { opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}