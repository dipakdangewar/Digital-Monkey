export interface DailyPlanItem {
  dayNumber: number;
  dayName: string;
  title: string;
  learn: string[];
  task: string;
  tool?: string;
  template?: string;
}

export interface WeekendAssignment {
  projectTitle: string;
  steps: string[];
  submission: string;
}

export interface CourseWeek {
  weekNumber: number;
  title: string;
  subtitle: string;
  goal: string;
  tools: string[];
  estimatedDuration: string;
  dailyPlan: DailyPlanItem[];
  weekendAssignment: WeekendAssignment;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Curriculum' | 'Placements' | 'AI & Tools' | 'Fees';
}

export interface StatItem {
  number: string;
  label: string;
  sublabel: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  review: string;
  rating: number;
  image: string;
  tag: string;
}

export interface ToolItem {
  name: string;
  category: 'AI content' | 'Design' | 'Ads & SEO' | 'Automation' | 'E-commerce' | 'Analytics';
  description: string;
  iconType: string;
}

export interface LeadFormValues {
  name: string;
  email: string;
  phone: string;
  city: string;
  currentProfession: string;
  message: string;
}
